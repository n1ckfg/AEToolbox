@echo off

cd /d %~dp0

set BUILD_TARGET=%~dp0..\AEToolbox.jsx

del %BUILD_TARGET%

copy /b aetoolbox_main.js+aetoolbox_basic.js+aetoolbox_advanced.js+aetoolbox_rigging.js+aetoolbox_stereo.js+aetoolbox_pip.js+aetoolbox_image.js+aetoolbox_guide.js+aetoolbox_export.js+aetoolbox_import.js+aetoolbox_plugins.js+aetoolbox_util.js %BUILD_TARGET%

set VERSION=Adobe After Effects 2024

set DEST="C:\Program Files\Adobe\%VERSION%\Support Files\Scripts\ScriptUI Panels\"

copy %BUILD_TARGET% %DEST%

@pause

rem set VERSION="Adobe After Effects CS6"
rem set VERSION="Adobe After Effects CC"
rem set VERSION="Adobe After Effects CC 2014"
rem set VERSION="Adobe After Effects CC 2015"
rem set VERSION="Adobe After Effects CC 2015.3"
rem set VERSION="Adobe After Effects CC 2017"
rem set VERSION="Adobe After Effects CC 2018"
rem set VERSION="Adobe After Effects CC 2019"
rem set VERSION="Adobe After Effects CC 2020"
rem set VERSION="Adobe After Effects 2021"
rem set VERSION="Adobe After Effects 2022"
