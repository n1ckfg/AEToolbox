@echo off

cd %~dp0

set BUILD_TARGET=..\AEToolbox.jsx

del %BUILD_TARGET%

copy /b aetoolbox_main.js+aetoolbox_basic.js+aetoolbox_advanced.js+aetoolbox_rigging.js+aetoolbox_stereo.js+aetoolbox_pip.js+aetoolbox_guide.js+aetoolbox_export.js+aetoolbox_import.js+aetoolbox_plugins.js+aetoolbox_util.js %BUILD_TARGET%

copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CS6\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2014\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2015\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2015.3\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2017\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2018\Support Files\Scripts\ScriptUI Panels\"
copy %BUILD_TARGET% "C:\Program Files\Adobe\Adobe After Effects CC 2019\Support Files\Scripts\ScriptUI Panels\"

@pause