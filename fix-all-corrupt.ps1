# Corrupt files list banao
node -e "const fs=require('fs'),path=require('path');let bad=[];function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory()){walk(p);continue}if(f.endsWith('.json')){try{JSON.parse(fs.readFileSync(p,'utf-8'))}catch(e){bad.push(p)}}}}walk('src/content');bad.forEach(b=>console.log(b))" | Out-File -FilePath "corrupt-files.txt" -Encoding UTF8

$corruptFiles = Get-Content "corrupt-files.txt" | Where-Object { $_.Trim() -ne "" }

Write-Host "Found $($corruptFiles.Count) corrupt files" -ForegroundColor Cyan

foreach ($file in $corruptFiles) {
    $filePath = $file.Trim()
    $fileName = Split-Path $filePath -Leaf
    $folder = Split-Path $filePath -Parent
    
    if ($fileName -match '\.(de|fr|es|tr)\.json$') {
        $lang = $Matches[1]
        $baseName = $fileName -replace "\.$lang\.json$", ""
        $englishPath = Join-Path $folder "$baseName.json"
        
        if (Test-Path $englishPath) {
            Write-Host "Fixing: $fileName" -ForegroundColor Yellow
            
            Remove-Item $filePath -Force
            
            tr_file $englishPath $lang -s en
            
            $tempFile = Join-Path $folder "$lang.json"
            if (Test-Path $tempFile) {
                Rename-Item -Path $tempFile -NewName "$baseName.$lang.json"
                Write-Host "  OK: $baseName.$lang.json" -ForegroundColor Green
            } else {
                Write-Host "  FAIL: $baseName.$lang.json" -ForegroundColor Red
            }
            
            Start-Sleep -Seconds 3
        }
    }
}

Write-Host "Done!" -ForegroundColor Green