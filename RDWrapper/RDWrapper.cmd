@echo off
title RDWrapper 0.1
echo Welcome to RDWrapper!
echo Please press any key to download the Preloader from the official Disco-RD repo.
pause>log
powershell Invoke-WebRequest https://raw.githubusercontent.com/FiskDk/discord-security-exploiting/master/windows_preload.js -OutFile preloader.js
echo The Preload script has been downloaded,
echo please specify the url to where you host your main JS file
set /p jsURL=
echo Please specify the url where you host your default CSS file
set /p cssURL=
echo building...
powershell Set-Content -Path "custom.js" -Value ((Get-Content -path "preloader.js" -Raw) -replace '"https://raw.githubusercontent.com/FiskDk/discord-security-exploiting/master/css.txt"','%jsURL%')
powershell Set-Content -Path "custom.js" -Value ((Get-Content -path "custom.js" -Raw) -replace '"https://raw.githubusercontent.com/FiskDk/discord-security-exploiting/master/defaultDark.css"','%cssURL%')
powershell Set-Content -Path "custom.js" -Value ((Get-Content -path "custom.js" -Raw) -replace '"https://raw.githubusercontent.com/FiskDk/discord-security-exploiting/master/defaultOverlay.css"','%cssURL%')
echo Success!
echo Now host the file "custom.js" somewhere (example : GitHub) - make sure its public
echo Press any key when you've hosted your file
pause>log
echo Paste in the direct url to your file
set /p preloadURL=
powershell Set-Content -Path "PowerShellInstallerCode.txt" -Value ((Get-Content -path "PowerShellInstallerCode.default" -Raw) -replace '"https://raw.githubusercontent.com/FiskDk/discord-security-exploiting/master/windows_preload.js"','%preloadURL%')
echo Done! your PowerShell installer code is : 
echo # Copy from here
type PowerShellInstallerCode.txt
echo # To here
echo To install your client, simply copy and paste the powershell code in a powershell terminal
echo press any key to exit
pause>log
del log
del preloader.js
del custom.js
del PowerShellInstallerCode.txt