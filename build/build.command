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

cat "aetoolbox_main.js" "aetoolbox_basic.js" "aetoolbox_advanced.js" "aetoolbox_rigging.js" "aetoolbox_stereo.js" "aetoolbox_pip.js" "aetoolbox_image.js" "aetoolbox_guide.js" "aetoolbox_export.js" "aetoolbox_import.js" "aetoolbox_plugins.js" "aetoolbox_util.js" > $BUILD_TARGET

VERSION="Adobe After Effects 2024"

DEST="/Applications/$VERSION/Scripts/ScriptUI Panels/"

cp $BUILD_TARGET $DEST

#VERSION="Adobe After Effects CS6"
#VERSION="Adobe After Effects CC"
#VERSION="Adobe After Effects CC 2014"
#VERSION="Adobe After Effects CC 2015"
#VERSION="Adobe After Effects CC 2015.3"
#VERSION="Adobe After Effects CC 2017"
#VERSION="Adobe After Effects CC 2018"
#VERSION="Adobe After Effects CC 2019"
#VERSION="Adobe After Effects CC 2020"
#VERSION="Adobe After Effects 2021"
#VERSION="Adobe After Effects 2022"