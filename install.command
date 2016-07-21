#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd $DIR

FILE_NAMES=( "AEToolbox.jsx" )

for i in "${FILE_NAMES[@]}"
do
	:
	cp $i /Applications/Adobe\ After\ Effects\ CS6/Scripts/ScriptUI\ Panels/
	cp $i /Applications/Adobe\ After\ Effects\ CC/Scripts/ScriptUI\ Panels/
	cp $i /Applications/Adobe\ After\ Effects\ CC\ 2014/Scripts/ScriptUI\ Panels/
	cp $i /Applications/Adobe\ After\ Effects\ CC\ 2015/Scripts/ScriptUI\ Panels/
	cp $i /Applications/Adobe\ After\ Effects\ CC\ 2015.3/Scripts/ScriptUI\ Panels/
done
