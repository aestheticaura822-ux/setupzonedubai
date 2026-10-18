# UTF-8 BOM ke saath save karo
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$fixes = @{
    # French / Spanish / German
    [char]0x00C3 + [char]0x00A9 = [char]0x00E9  # Ã© → é
    [char]0x00C3 + [char]0x00A8 = [char]0x00E8  # Ã¨ → è
    [char]0x00C3 + [char]0x00AA = [char]0x00EA  # Ãª → ê
    [char]0x00C3 + [char]0x00AB = [char]0x00EB  # Ã« → ë
    [char]0x00C3 + [char]0x00A0 = [char]0x00E0  # Ã  → à
    [char]0x00C3 + [char]0x00A2 = [char]0x00E2  # Ã¢ → â
    [char]0x00C3 + [char]0x00AE = [char]0x00EE  # Ã® → î
    [char]0x00C3 + [char]0x00AF = [char]0x00EF  # Ã¯ → ï
    [char]0x00C3 + [char]0x00B4 = [char]0x00F4  # Ã´ → ô
    [char]0x00C3 + [char]0x00B9 = [char]0x00F9  # Ã¹ → ù
    [char]0x00C3 + [char]0x00BB = [char]0x00FB  # Ã» → û
    [char]0x00C3 + [char]0x00BC = [char]0x00FC  # Ã¼ → ü
    [char]0x00C3 + [char]0x00B1 = [char]0x00F1  # Ã± → ñ
    [char]0x00C3 + [char]0x00A1 = [char]0x00E1  # Ã¡ → á
    [char]0x00C3 + [char]0x00AD = [char]0x00ED  # Ã → í
    [char]0x00C3 + [char]0x00B3 = [char]0x00F3  # Ã³ → ó
    [char]0x00C3 + [char]0x00BA = [char]0x00FA  # Ãº → ú
    [char]0x00C3 + [char]0x009F = [char]0x00DF  # ÃŸ → ß
}

# Simple string replacements (jo reliably kaam karte hain)
$simpleFixes = @(
    @('Ã©', 'é'), @('Ã¨', 'è'), @('Ãª', 'ê'), @('Ã«', 'ë'),
    @('Ã ', 'à'), @('Ã¢', 'â'), @('Ã®', 'î'), @('Ã¯', 'ï'),
    @('Ã´', 'ô'), @('Ã¹', 'ù'), @('Ã»', 'û'), @('Ã¼', 'ü'),
    @('Ã±', 'ñ'), @('Ã¡', 'á'), @('Ã', 'í'), @('Ã³', 'ó'), @('Ãº', 'ú'),
    @('Ãœ', 'Ü'), @('Ã–', 'Ö'), @('Ã‡', 'Ç'),
    @('Ã§', 'ç'), @('Ã¶', 'ö'), @('Ã¤', 'ä'), @('Ã„', 'Ä'),
    @('ÃŸ', 'ß'),
    @('â€œ', '"'), @('â€', '"'), @('â€™', "'"), @('â€˜', "'"),
    @('â€"', '"'), @('â€"', '—'), @('â€"', '–'),
    @('Â·', '·'), @('Â ', ' '), @('Â', '')
)

$languages = @("fr", "de", "es", "ru")

foreach ($lang in $languages) {
    Write-Host "`n=== Fixing $lang ===" -ForegroundColor Cyan
    $count = 0
    
    Get-ChildItem -Path "src/content" -Recurse -Filter "*.$lang.json" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw -Encoding UTF8
        $original = $content
        
        foreach ($pair in $simpleFixes) {
            $content = $content.Replace($pair[0], $pair[1])
        }
        
        if ($content -ne $original) {
            [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.UTF8Encoding]::new($false))
            $count++
        }
    }
    
    Write-Host "✅ Fixed $count files for $lang" -ForegroundColor Green
}

Write-Host "`n🎉 All done!" -ForegroundColor Cyan