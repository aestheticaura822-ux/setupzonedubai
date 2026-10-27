# fix-all.ps1 - Run from project root
# Fixes: bidi in JSONs + TSX logical props + arrow rotation

$ErrorActionPreference = 'Stop'

$LRI = [char]0x2066
$PDI = [char]0x2069

$tsxDirs = @("src\pages\freezones", "src\pages\free-zones")
$tsxFiles = @()
foreach ($dir in $tsxDirs) {
    if (Test-Path $dir) {
        $tsxFiles += Get-ChildItem -Path $dir -Filter "*.tsx" -Recurse
    }
}
$jsonFiles = @()
if (Test-Path "src\content\freezones") {
    $jsonFiles = Get-ChildItem -Path "src\content\freezones" -Filter "*.json" -Recurse
}

Write-Host ""
Write-Host "Found $($tsxFiles.Count) TSX and $($jsonFiles.Count) JSON files"
Write-Host ""

# === STEP 1: Fix bidi in JSONs ===
Write-Host "[1/3] Fixing bidi in JSON files..."
$bidiFixed = 0
foreach ($file in $jsonFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # Phone numbers
    $content = [regex]::Replace($content, '(?<!\d)(\+?\d[\d\s\-]{7,}\d)(?!\d)', "$LRI`$1$PDI")
    # 24/7
    $content = [regex]::Replace($content, '(?<!' + $LRI + ')24/7(?!' + $PDI + ')', "${LRI}24/7${PDI}")
    # Office/floor codes
    $content = [regex]::Replace($content, '(?<!\w)([A-Z]\d{1,3}-\d{1,3})(?!\w)', "$LRI`$1$PDI")
    # Time ranges
    $content = [regex]::Replace($content, '(\d{1,2}(?::\d{2})?\s*(?:AM|PM|ص|م)\s*[\-\u2013]\s*\d{1,2}(?::\d{2})?\s*(?:AM|PM|ص|م))', "$LRI`$1$PDI")
    # Percentages
    $content = [regex]::Replace($content, '(\d+\s*%)', "$LRI`$1$PDI")
    # PO Box
    $content = [regex]::Replace($content, '(PO Box:?\s*)(\d+)', "`$1$LRI`$2$PDI")
    # Acronyms in parens
    $content = [regex]::Replace($content, '\(([A-Z]{2,6}(?:\s*[A-Z]{2,6})*)\)', "($LRI`$1$PDI)")

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "  OK: $($file.Name)"
        $bidiFixed++
    }
}
Write-Host "  Fixed $bidiFixed of $($jsonFiles.Count) JSON files"

# === STEP 2: Fix TSX files ===
Write-Host ""
Write-Host "[2/3] Fixing TSX files (arrows + logical props)..."
$tsxFixed = 0
foreach ($file in $tsxFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # ArrowRight - add rtl:rotate-180 if not present
    $pattern = '(<ArrowRight\s+size=\{\d+\}\s+className=")(?!rtl:rotate-180)'
    $content = [regex]::Replace($content, $pattern, '$1rtl:rotate-180 ')

    # Logical props
    $content = $content -replace '\btext-left\b', 'text-start'
    $content = $content -replace '\btext-right\b', 'text-end'

    # Padding/margin logical (handle both pl-N and pl-[N])
    $content = [regex]::Replace($content, '(className="[^"]*?)pl-(\[?\d)', '$1ps-$2')
    $content = [regex]::Replace($content, '(className="[^"]*?)pr-(\[?\d)', '$1pe-$2')
    $content = [regex]::Replace($content, '(className="[^"]*?)ml-(\[?\d)', '$1ms-$2')
    $content = [regex]::Replace($content, '(className="[^"]*?)mr-(\[?\d)', '$1me-$2')

    # Positioning logical
    $content = [regex]::Replace($content, '(className="[^"]*?)left-(\[?\d)', '$1start-$2')
    $content = [regex]::Replace($content, '(className="[^"]*?)right-(\[?\d)', '$1end-$2')

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "  OK: $($file.Name)"
        $tsxFixed++
    }
}
Write-Host "  Fixed $tsxFixed of $($tsxFiles.Count) TSX files"

# === STEP 3: Scan hardcoded English ===
Write-Host ""
Write-Host "[3/3] Scanning for hardcoded English strings..."
$report = @()
foreach ($file in $tsxFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # JSX text nodes
    $matches = [regex]::Matches($content, '>([A-Za-z][A-Za-z0-9\s''\.\,\-/\&\(\)\:\!\?]{3,})<')
    foreach ($m in $matches) {
        $text = $m.Groups[1].Value.Trim()
        if ($text.Length -gt 3) {
            $lineNum = ($content.Substring(0, $m.Index) -split "`n").Count
            $report += [PSCustomObject]@{
                File = $file.Name
                Line = $lineNum
                Text = $text
            }
        }
    }

    # title/alt/placeholder attributes
    $attrPattern = '(title|alt|placeholder)="([A-Za-z][^"{}][^"]{2,})"'
    $attrMatches = [regex]::Matches($content, $attrPattern)
    foreach ($m in $attrMatches) {
        $lineNum = ($content.Substring(0, $m.Index) -split "`n").Count
        $report += [PSCustomObject]@{
            File = $file.Name
            Line = $lineNum
            Text = "$($m.Groups[1].Value)=$($m.Groups[2].Value)"
        }
    }
}

if ($report.Count -gt 0) {
    $report | Export-Csv -Path "hardcoded-strings.csv" -NoTypeInformation -Encoding UTF8
    Write-Host ""
    Write-Host "Report saved: hardcoded-strings.csv ($($report.Count) strings)"
    Write-Host ""
    $report | Group-Object File | ForEach-Object {
        Write-Host "  $($_.Name): $($_.Count) strings"
    }
} else {
    Write-Host "  No hardcoded English found (or files already use data.ui)"
}

Write-Host ""
Write-Host "DONE"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open hardcoded-strings.csv"
Write-Host "  2. Translate English column to Arabic"
Write-Host "  3. Run npm run build to test"