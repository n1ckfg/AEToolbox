// COMMON FUNCTIONS

function grayToRgbDepth(comp) {
    var dLayerR = comp.layers[1];
    dLayerR.blendingMode = BlendingMode.ADD;
    var rEffect1 = dLayerR.property("Effects").addProperty("Tint");
    rEffect1.property("Map White To").setValue([1,0,0,1]);
    var rEffect2 = dLayerR.property("Effects").addProperty("Channel Combiner");
    rEffect2.property("Invert").setValue(1);
    rEffect2.property("From").setValue(7); // Red
    rEffect2.property("To").setValue(6); // Hue

    var dLayerG = dLayerR.duplicate();
    var gEffect1 = dLayerG.property("Effects").property("Tint");
    gEffect1.property("Map White To").setValue([0,1,0,1]);
    var gEffect2 = dLayerG.property("Effects").property("Channel Combiner");
    gEffect2.property("From").setValue(8); // Green

    var dLayerB = dLayerR.duplicate();
    var bEffect1 = dLayerB.property("Effects").property("Tint");
    bEffect1.property("Map White To").setValue([0,0,1,1]);
    var bEffect2 = dLayerB.property("Effects").property("Channel Combiner");
    bEffect2.property("From").setValue(9); // Blue
}

function rgbToGrayDepth(comp) {
    var dLayerR = comp.layers[1];
    dLayerR.blendingMode = BlendingMode.ADD;
    var rEffect = dLayerR.property("Effects").addProperty("Channel Combiner");
    rEffect.property("Invert").setValue(1);
    rEffect.property("From").setValue(12); // Hue
    rEffect.property("To").setValue(10); // Red only

    var dLayerG = dLayerR.duplicate();
    var gEffect = dLayerG.property("Effects").property("Channel Combiner");
    gEffect.property("To").setValue(11);

    var dLayerB = dLayerR.duplicate();
    var bEffect = dLayerB.property("Effects").property("Channel Combiner");
    bEffect.property("To").setValue(12);

    var solid = comp.layers.addSolid([0, 1.0, 1.0], "Adjustment Layer", comp.width, comp.height, 1);
    solid.adjustmentLayer = true;
    var sEffect1 = solid.property("Effects").addProperty("Extract");
    sEffect1.property("White Point").setValue(254);
    var sEffect2 = solid.property("Effects").addProperty("Simple Choker");
    sEffect2.property("Choke Matte").setValue(1.0);
}

function degreesToRadians(degree) {
    var pi = Math.PI;
    var radians = (degree)*(pi/180);
    return(radians);
}

function radiansToDegrees(radian) {
    var pi = Math.PI;
    var degrees = (radian)*(180/pi);
    return(degrees);
}

function nameExists(name) {
    var returns = false;
    var theComp = app.project.activeItem;
    var allLayers = theComp.layers;
    for (var i=1; i < allLayers.length; i++) {
        if (allLayers[i].name == name) returns = true;
    }
    return returns;
}

function getUniqueName(name) {
    // if the name is already unique, return it
    if (!nameExists(name)) {
        return "" + name;
    } else {
        // create default variables for newDigit and shortname in case there"s no trailing digit
        var newDigit = 1;
        var shortname = name;

         // find the trailing digit in the name
        var trailingDigit = name.match(/\d+$/);

        if (trailingDigit) {
            // increment the last digit
            newDigit = parseInt(trailingDigit) + 1;
            // use the length of the trailing digit as a reference for how much to trim
            shortname = name.replace(/\d+$/,"");
        }
        
        // create the new name
        var newName = shortname + newDigit;

        // recursively run through the function until a unique name is reached and returned
        return "" + getUniqueName(newName);
        //return "" + newName;
    }
}

// allow only names that contain letters and numbers, and do not start with a number
function removeForbiddenCharacters(theName) {
    FirstChar=theName.charAt(0);
    if (FirstChar>"0" && FirstChar<"9") { theName="Cam" + theName };
    theName=theName.replace(/[^a-zA-Z0-9]+/g,""); // remove special characters and spaces
    return(theName);
}

// Convert Expression to Keyframes (in the work area)
function Bake(theComp, propBeingCopied, propBeingWritten) {
    StartBake=theComp.workAreaStart;
    EndBake=StartBake+theComp.workAreaDuration;
    NextFrame=1/theComp.frameRate;
    for (var i=StartBake; i<EndBake; i=i+NextFrame) {
        propBeingWritten.setValueAtTime(i,propBeingCopied.valueAtTime(i, false));
    }
}

// make null layer 3D, set in and out points, center it, turn off light calculations
function setNull(theNull,In,Out,theComp) {
    theNull.threeDLayer=true;
    theNull.startTime=0;
    theNull.inPoint=In;
    theNull.outPoint=Out;
    theNull.anchorPoint.setValue([25,25,0]);
    theNull.position.setValue([theComp.width/2, theComp.height/2, 0]);
    theNull.acceptsLights.setValue(false);
    theNull.acceptsShadows.setValue(false);
}

// find the index number of a layer in the comp by name
function findNumberOfLayerByName(LayerName,theComp) {
    for (var i = theComp.numLayers; i >= 1; i--) {
        theLayer = theComp.layer(i);
        if (theLayer.name == LayerName) { return(i) };
    }
}

// Deselect everything in the project window
function DeselectProjectWindowItems() {
    for (var i = app.project.items.length; i >= 1; i--) {
        item = app.project.items[i];
        if (item.selected) { item.selected = false };
    }
}

function getSelectedItems() {
    var returns = [];
    for (var i=1; i<app.project.items.length+1; i++) {
        var item = app.project.items[i];
        if (item.selected==true) {
            returns.push(item);
        }
    }
    return returns;
}

function getSelectedComps() {
    var returns = [];
    for (var i=1; i<app.project.items.length+1; i++) {
        var item = app.project.items[i];
        if (item.selected==true && item instanceof CompItem) {
            returns.push(item);
        }
    }
    return returns;
}

// *** Layer variables can't be copied between comps--you have to get the layer's source ***
function getLayerSource(layer) {
    for (var i = 1; i < app.project.items.length+1; i++){
        var item = app.project.items[i];
        if (item.name === layer.name) {
            return item;
        }
    }
    return null;
}

function getPreset(filePath, local) {
    var presetPath = filePath;
    if (local==true) presetPath = new Folder((new File($.fileName)).path + "/" + presetPath);
    return File(presetPath);
}

// Deselect all the layers in the active Comp
function DeselectLayers(theComp) {
    for (var i = theComp.numLayers; i >= 1; i--) {
        item = theComp.layer(i);
        if (item.selected) { item.selected = false };
    }
}

function kill(target) {
    var items = app.project.items;

    for (var i = items.length; i >= 1; i--) {
        if (items[i]==target || items[i].name==target.name || items[i].name==target || items[i]==target.name) {
            items[i].remove();
        }
    }
}

function compare(a,b) {
    return a > b ? 1 : a < b ? -1 : 0;
}

function bubbleSort(a,b) {  
    var swapped;  
    do {  
        swapped = false;  
        for (var i=0; i < a.length-1; i++) {  
            if (a[i] > a[i+1]) {  
                var temp = a[i];  
                a[i] = a[i+1];  
                a[i+1] = temp;  

                var temp = b[i];  
                b[i] = b[i+1];  
                b[i+1] = temp;  
                swapped = true;  
            }  
        }  
    } while (swapped);  
}  

function harvestPoint(inputVal, sourceLayer, destLayer, spaceTransform) {
    var outputVal;
    if (inputVal.length==2) {
        try {
            var posCalc = destLayer.property("Effects").addProperty("Point Control")("Point");
            var posCalcExpr = "var p = ["+inputVal[0]+","+inputVal[1]+"];" + "\r" +
                              "var target = thisComp.layer(\"" + sourceLayer.name + "\");" + "\r";
            if (spaceTransform=="toComp") posCalcExpr += "target.toComp(p);";
            if (spaceTransform=="fromComp") posCalcExpr += "target.fromComp(p);";
            if (spaceTransform=="toWorld") posCalcExpr += "target.toWorld(p);";
            if (spaceTransform=="fromWorld") posCalcExpr += "target.fromWorld(p);";
            posCalc.expression= posCalcExpr;
            outputVal = posCalc.value;
            destLayer.property("Effects")("Point Control").remove();
            return outputVal;
        } catch(err) { 
            alert("Error harvesting 2D point data.")
        }
    }else if (inputVal.length==3) {
        try {
            var posCalc = destLayer.property("Effects").addProperty("3D Point Control")("3D Point");
            var posCalcExpr = "var p = ["+inputVal[0]+","+inputVal[1]+","+inputVal[2]+"];" + "\r" +
                              "var target = thisComp.layer(\"" + sourceLayer.name + "\");" + "\r";
            if (spaceTransform=="toComp") posCalcExpr += "target.toComp(p);";
            if (spaceTransform=="fromComp") posCalcExpr += "target.fromComp(p);";
            if (spaceTransform=="toWorld") posCalcExpr += "target.toWorld(p);";
            if (spaceTransform=="fromWorld") posCalcExpr += "target.fromWorld(p);";
            posCalc.expression= posCalcExpr;
            outputVal = posCalc.value;
            destLayer.property("Effects")("3D Point Control").remove();
            return outputVal;
        } catch(err) { 
            alert("Error harvesting 3D point data.")
        }
    } else { 
        alert("Requires a 2D or 3D point as input.");
    }
}

function convertToKeyframes(theProperty) {
    if (theProperty.canSetExpression && theProperty.expressionEnabled) {
        theProperty.selected = true;
        app.executeCommand(app.findMenuCommandId("Convert Expression to Keyframes")); 
        theProperty.selected = false;
    } else {
        Bake(app.project.activeItem,theProperty,theProperty);        
    }
}

function convertAudioToKeyframes(target) {
    target.selected = true;
    app.executeCommand(app.findMenuCommandId("Convert Audio to Keyframes"));
    target.selected = false; 
}

function getDim(layer) {
    var time = app.project.activeItem.time;
    var x = layer.sourceRectAtTime(t=time, includeExtents=false).width;
    var y = layer.sourceRectAtTime(t=time, includeExtents=false).height;
    return [ x, y ];
}

function sortByZmax(a,b) {
    if (a.position.value[2] < b.position.value[2]) {
        return -1;
    } else if (a.position.value[2] > b.position.value[2]) {
        return 1;
    } else {
        return 0;
    }
}

function sortByZmin(b,a) {
    if (a.position.value[2] < b.position.value[2]) {
        return -1;
    } else if (a.position.value[2] > b.position.value[2]) {
        return 1;
    } else {
        return 0;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
})(this);