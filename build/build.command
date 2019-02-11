#!/bin/bash

BUILD_TARGET="../AEToolbox.jsx"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd $DIR

rm $BUILD_TARGET
touch $BUILD_TARGET

cat "aetoolbox_main.js" "aetoolbox_basic.js" "aetoolbox_advanced.js" "aetoolbox_rigging.js" "aetoolbox_stereo.js" "aetoolbox_pip.js" "aetoolbox_guide.js" "aetoolbox_export.js" "aetoolbox_import.js" "aetoolbox_plugins.js" "aetoolbox_util.js" > $BUILD_TARGET

cp $BUILD_TARGET "/Applications/Adobe After Effects CS6/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2014/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2015/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2015.3/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2017/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2018/Scripts/ScriptUI Panels/"
cp $BUILD_TARGET "/Applications/Adobe After Effects CC 2019/Scripts/ScriptUI Panels/"