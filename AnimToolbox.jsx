// AnimToolbox 0.8
// by Nick Fox-Gieg
//
// based on KinectToPin Motion Capture Tools panel
// by Victoria Nece and Nick Fox-Gieg
// www.kinecttopin.com
// 
// Thanks to Jeff Almasol, Dan Ebberts, Christopher Green, Peter Kahrel and Chris Wright
// 

{

// AnimToolbox Panel Setup

function buildUI(this_obj_) {
var win = (this_obj_ instanceof Panel)
? this_obj_
: new Window('palette', 'Script Window',[760,345,1120,597]);

//Jeff Almasol's solution to fix text color
var winGfx = win.graphics;
var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);

//-----------------------------------------------------
//1. Draw buttons
//buttons coordinates are X start, Y start, X end, Y end
var butXstart = 8;
var butXend = 152;
var butYstart = 15;
var butYend = 43;
var butYinc = 30;
//--
var colXstart = 4;
var colXend = 165;
var colYstart = 4;
var colYendBase = 33;
var colXinc = 170;

//Basic button group
var col1butCount = 7;
win.basicGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col1butCount*butYinc)], 'Basic', {borderStyle: "etched"});
win.basicGroup0 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Nulls for Pins');
win.basicGroup1 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Locator Null');
win.basicGroup2 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Move to Position');
win.basicGroup3 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Bake Keyframes');
win.basicGroup4 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Make Loop');
win.basicGroup5 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Onion Skin');
win.basicGroup6 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], '3D MoSketch');
//--
//Character button group
var col2butCount = 3;
win.charGroup = win.add('panel', [colXstart+(colXinc * 1),colYstart,colXend+(colXinc*1),colYendBase+(col2butCount*butYinc)], 'Character', {borderStyle: "etched"});
win.charGroup0 = win.charGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Blink Control');
win.charGroup1 = win.charGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Jaw Rig Side');
win.charGroup2 = win.charGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Jaw Rig Front');
//--
//Advanced button group
var col3butCount = 4;
win.advGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
win.advGroup0 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Lock Y Rotation');
win.advGroup1 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Parentable K2P Null');
win.advGroup2 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Handheld Camera');
win.advGroup3 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Sine Generator');
//-----------------------------------------------------
//2. Link buttons to functions
win.basicGroup0.onClick = nullsForPins;
win.basicGroup1.onClick = locatorNull;
win.basicGroup2.onClick = moveToPos;
win.basicGroup3.onClick = bakePinKeyframes;
win.basicGroup4.onClick = makeLoop;
win.basicGroup5.onClick = onionSkin;
win.basicGroup6.onClick = threeDmoSketch;
//--
win.charGroup0.onClick = charBlink;
win.charGroup1.onClick = charJawSide;
win.charGroup2.onClick = charJawFront;
//--
win.advGroup0.onClick = lockRotation;
win.advGroup1.onClick = parentableNull;
win.advGroup2.onClick = handheldCamera;
win.advGroup3.onClick = sineWave;
//-----------------------------------------------------

return win
}
var w = buildUI(this);
if (w.toString() == "[object Panel]") {
w;
} else {
w.show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14.  Type: process for any number of layers or properties
function moveToPos(){  //start script
    app.beginUndoGroup("Move to Last Selected Layer's Position");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length<=1){
            alert("Please select at least two layers and run the script again.");
        }else{
            // otherwise, loop through each selected layer in the selected comp
            for (var i = 0; i < theLayers.length-1; i++){
                var lastLayer = theLayers[theLayers.length-1];
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var mama; //holds parent if we need to temporary disable it
                var papa;
                if(curLayer.parent){
                    mama = curLayer.parent;
                    curLayer.parent = null;
                }
                if(lastLayer.parent){
                    papa = lastLayer.parent;
                    lastLayer.parent = null;
                }
                //~~~~
                var p = lastLayer.property("position").value;
                curLayer.property("position").setValue(p);
                //~~~~
                try{
                    curLayer.parent = mama;
                }catch(err){ }
                try{
                    lastLayer.parent = papa;
                }catch(err){ }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script


// 13.  Type: process for any number of layers or properties
function locatorNull(){  //start script
    app.beginUndoGroup("Create Locator Nulls for Selected Layers");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            //alert("Please select some layers and run the script again.");
            theComp.layers.addNull();
        }else{
            // otherwise, loop through each selected layer in the selected comp
            for (var i = 0; i < theLayers.length; i++){
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var mama;
                if(curLayer.parent){
                    mama = curLayer.parent;
                    curLayer.parent = null;
                }
                var p = curLayer.property("position").value;
                var solid = theComp.layers.addNull();
                solid.name = curLayer.name + "_loc";

                if(curLayer.threeDLayer) solid.threeDLayer = true;

                solid.property("position").setValue(p);
                try{
                    curLayer.parent = mama;
                }catch(err){ }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12.  process for any number of layers--creates a Z slider for 2D Motion Sketch
function threeDmoSketch(){  //start script
    app.beginUndoGroup("Prep for 3D Motion Sketch");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var moNull = theComp.layers.addNull();
        moNull.name="mosketch_ctl";

        var zSlider = moNull.property("Effects").addProperty("Slider Control");
        zSlider.name = "z axis";
        
        var offset = moNull.property("Effects").addProperty("3D Point Control");
        offset.property("3D Point").setValue([0,0,0]);
        offset.name = "offset";

        var expr = "var p = transform.position;" + "\r" +
                   "var z = effect(\"z axis\")(\"Slider\");" + "\r" +
                   "var o = effect(\"offset\")(\"3D Point\");" + "\r" +
                   "[p[0]+o[0],p[1]+o[1],z+o[2]];";
        moNull.property("Position").expression = expr;
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11.  process for any number of layers--applies sine wave controllers
function sineWave(){  //start script
    app.beginUndoGroup("Apply Sine Wave Controls");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            //if (curLayer.matchName == "ADBE AV Layer"){
                var angleSlider = curLayer.property("Effects").addProperty("Angle Control");
                angleSlider.name = "angle";
                var velSlider = curLayer.property("Effects").addProperty("Slider Control");
                velSlider.name = "velocity";

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                var expr = "var a = degreesToRadians((effect(\"angle\")(\"Angle\"))-90);" + "\r" +
                           "var x1 = Math.cos(a);" + "\r" +
                           "var y1 = Math.sin(a);" + "\r" +
                           "var v = effect(\"velocity\")(\"Slider\")*(1/thisComp.frameDuration);" + "\r" +
                           "var x2 = transform.position[0] + (time - inPoint) * v * x1;" + "\r" +
                           "var y2 = transform.position[1] + (time - inPoint) * v * y1;" + "\r";
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                var ampSlider = curLayer.property("Effects").addProperty("Slider Control");
                ampSlider.name = "amp";
                var freqSlider = curLayer.property("Effects").addProperty("Slider Control");
                freqSlider.name = "freq";
                //~~
                var xAxis = curLayer.property("Effects").addProperty("Checkbox Control");
                xAxis.name = "x axis";
                xAxis.property("Checkbox").setValue(0);
                var yAxis = curLayer.property("Effects").addProperty("Checkbox Control");
                yAxis.name = "y axis";
                yAxis.property("Checkbox").setValue(1);
                var zAxis = curLayer.property("Effects").addProperty("Checkbox Control");
                zAxis.name = "z axis";
                zAxis.property("Checkbox").setValue(0);
                //~~
                var xOffset = curLayer.property("Effects").addProperty("Slider Control");
                xOffset.name = "x offset";
                var yOffset = curLayer.property("Effects").addProperty("Slider Control");
                yOffset.name = "y offset";
                var zOffset = curLayer.property("Effects").addProperty("Slider Control");
                zOffset.name = "z offset";
                //~~
                //var expr = "";
                //if(curLayer.threeDLayer){
                //expr += "var x = x2 + transform.position[0];" + "\r" +
                //        "var y = y2 + transform.position[1];" + "\r" + 
                expr += "var x = x2;" + "\r" +
                        "var y = y2;" + "\r"; 

                if(curLayer.threeDLayer){
                        expr += "var z = transform.position[2];" + "\r";
                    }else{
                        expr += "var z = 0;" + "\r";
                    }

                expr += "var amp = effect(\"amp\")(\"Slider\");" + "\r" +
                        "var freq = effect(\"freq\")(\"Slider\");" + "\r" +
                        "var ox = effect(\"x offset\")(\"Slider\");" + "\r" +
                        "var oy = effect(\"y offset\")(\"Slider\");" + "\r" + 
                        "var oz = effect(\"z offset\")(\"Slider\");" + "\r" + 
                        "var sx = amp * Math.sin(freq*(time+ox));" + "\r" +
                        "var sy = amp * Math.sin(freq*(time+oy));" + "\r" +
                        "var sz = amp * Math.sin(freq*(time+oz));" + "\r" +
                        "if(effect(\"x axis\")(\"Checkbox\")==1) x += sx;" + "\r" +
                        "if(effect(\"y axis\")(\"Checkbox\")==1) y += sy;" + "\r" +
                        "if(effect(\"z axis\")(\"Checkbox\")==1) z += sz;" + "\r" +
                        "[x,y,z];";
                /*
                }else{
                expr = "var x = transform.position[0];" + "\r" +
                       "var y = transform.position[1];" + "\r" + 
                       "var amp = effect(\"amp\")(\"Slider\");" + "\r" +
                       "var freq = effect(\"freq\")(\"Slider\");" + "\r" +
                       "var s = amp * Math.sin(freq*time);" + "\r" +
                       "if(effect(\"x axis\")(\"Checkbox\")==1) x += s;" + "\r" +
                       "if(effect(\"y axis\")(\"Checkbox\")==1) y += s;" + "\r" +
                       "[x,y];";
                }
                */

                curLayer.property("Position").expression = expr;

            //}else{
            //    alert("This only works on footage layers.");
            //}
            }
        }
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Type: create controllers inside existing comp
function charJawSide(){  //start script
    app.beginUndoGroup("Create Character Jaw Rig Side");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select a precomp and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            if (curLayer.matchName == "ADBE AV Layer"){
                //first check if this is a footage layer
                //next check if this is a comp.
                var myLayer = theComp.selectedLayers[0];
                if(myLayer.source.numLayers==null){
                    //not a comp; send alert.
                    alert("This only works on precomp layers.");
                }else{
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //myLayer is indeed a precomp. OK to do stuff.
                    var slider = myLayer.property("Effects").addProperty("Slider Control");
                    slider.name = "jaw side control"
                    var headNull = myLayer.source.layers.addNull();
                    var upperJawNull = myLayer.source.layers.addNull();
                    var lowerJawNull = myLayer.source.layers.addNull();
                    headNull.name = "head placeholder";
                    upperJawNull.name = "upper jaw placeholder";
                    lowerJawNull.name = "lower jaw placeholder";
                    //when asset replaces null, anchor point will be centered.
                    headNull.transform.anchorPoint.setValue([50,50]);
                    upperJawNull.transform.anchorPoint.setValue([50,50]);
                    lowerJawNull.transform.anchorPoint.setValue([50,50]);
                    headNull.property("Opacity").setValue(100);
                    upperJawNull.property("Opacity").setValue(100);
                    lowerJawNull.property("Opacity").setValue(100);
                    //parenting jaws to head
                    upperJawNull.parent = headNull;
                    lowerJawNull.parent = headNull;
                    //expressions
                    //headNullExprPos;
                    //headNullExprRot;
                    headNullExprScale = "var x = transform.scale[0];" + "\r" +
                                        "var y = transform.scale[1];" + "\r" +
                                        "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                        "[x,y+(s/-4)];";
                    //headNull.property("Position").expression = headNullExprPos;
                    //headNull.property("Rotation").expression = headNullExprRot;
                    headNull.property("Scale").expression = headNullExprScale;
                    //--
                    upperJawNullExprPos = "var x = transform.position[0];" + "\r" +
                                          "var y = transform.position[1];" + "\r" +
                                          "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                          "var scaler = -0.2;" + "\r" +
                                          "[x, y+(s*scaler)];";
                    upperJawNullExprRot = "var r = transform.rotation;" + "\r" +
                                          "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                          "var scaler = 0.2;" + "\r" +
                                          "r+(s*scaler);";
                    //upperJawNullExprScale;
                    upperJawNull.property("Position").expression = upperJawNullExprPos;
                    upperJawNull.property("Rotation").expression = upperJawNullExprRot;
                    //upperJawNull.property("Scale").expression = upperJawNullExprScale;
                    //--
                    lowerJawNullExprPos = "var x = transform.position[0];" + "\r" +
                                          "var y = transform.position[1];" + "\r" +
                                          "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                          "var scaler = 2;" + "\r" +
                                          "[x, y+(s*scaler)];";
                    lowerJawNullExprRot = "var r = transform.rotation;" + "\r" +
                                          "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                          "var scaler = -1.0;" + "\r" +
                                          "r+(s*scaler);";
                    //lowerJawNullExprScale;                                        
                    lowerJawNull.property("Position").expression = lowerJawNullExprPos;
                    lowerJawNull.property("Rotation").expression = lowerJawNullExprRot;
                    //lowerJawNull.property("Scale").expression = lowerJawNullExprScale;
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }else{
                //not a footage layer; send alert.
                alert("This only works on precomp layers.");
            }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Type: create controllers inside existing precomp
function charJawFront(){  //start script
    app.beginUndoGroup("Create Character Jaw Rig Front");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select a precomp and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            if (curLayer.matchName == "ADBE AV Layer"){
                //first check if this is a footage layer
                //next check if this is a comp.
                var myLayer = theComp.selectedLayers[0];
                if(myLayer.source.numLayers==null){
                    //not a comp; send alert.
                    alert("This only works on precomp layers.");
                }else{
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //myLayer is indeed a precomp. OK to do stuff.
                    var slider = myLayer.property("Effects").addProperty("Slider Control");
                    slider.name = "jaw front control"
                    var headNull = myLayer.source.layers.addNull();
                    //var upperJawNull = myLayer.source.layers.addNull();
                    var lowerJawNull = myLayer.source.layers.addNull();
                    headNull.name = "head placeholder";
                    //upperJawNull.name = "upper jaw placeholder";
                    lowerJawNull.name = "lower jaw placeholder";
                    //when asset replaces null, anchor point will be centered.
                    headNull.transform.anchorPoint.setValue([50,50]);
                    //upperJawNull.transform.anchorPoint.setValue([50,50]);
                    lowerJawNull.transform.anchorPoint.setValue([50,50]);
                    headNull.property("Opacity").setValue(100);
                    //upperJawNull.property("Opacity").setValue(100);
                    lowerJawNull.property("Opacity").setValue(100);
                    //parenting jaws to head
                    //upperJawNull.parent = headNull;
                    lowerJawNull.parent = headNull;
                    //expressions
                    //headNullExprPos;
                    //headNullExprRot;
                    //headNullExprScale;
                    //headNull.property("Position").expression = headNullExprPos;
                    //headNull.property("Rotation").expression = headNullExprRot;
                    //headNull.property("Scale").expression = headNullExprScale;
                    //--
                    //upperJawNullExprPos;
                    //upperJawNullExprRot;
                    //upperJawNullExprScale;
                    //upperJawNull.property("Position").expression = upperJawNullExprPos;
                    //upperJawNull.property("Rotation").expression = upperJawNullExprRot;
                    //upperJawNull.property("Scale").expression = upperJawNullExprScale;
                    //--
                    lowerJawNullExprPos = "var scaler = 1.0;" + "\r" +
                                          "var x = transform.position[0];" + "\r" +
                                          "var y = transform.position[1];" + "\r" +
                                          "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                          "[x, y+(s*scaler)];";
                    //lowerJawNullExprRot;
                    lowerJawNullExprScale = "var scaler = 1.0;" + "\r" +
                                            "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                            "var x = transform.scale[0];" + "\r" +
                                            "var y = transform.scale[1];" + "\r" +
                                            "[x,y+(s*scaler)];";                                        
                    lowerJawNull.property("Position").expression = lowerJawNullExprPos;
                    //lowerJawNull.property("Rotation").expression = lowerJawNullExprRot;
                    lowerJawNull.property("Scale").expression = lowerJawNullExprScale;
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }else{
                //not a footage layer; send alert.
                alert("This only works on precomp layers.");
            }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Type: Create layers inside an existing precomp.
function charBlink(){  //start script
    app.beginUndoGroup("Create Character Blink Control");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select a precomp and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            if (curLayer.matchName == "ADBE AV Layer"){
                //first check if this is a footage layer
                //next check if this is a comp.
                var myLayer = theComp.selectedLayers[0];
                if(myLayer.source.numLayers==null){
                    //not a comp; send alert.
                    alert("This only works on precomp layers.");
                }else{
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //myLayer is indeed a precomp. OK to do stuff.
                    var checkbox = myLayer.property("Effects").addProperty("Checkbox Control");
                    checkbox.name = "blink control"
                    var blinker = myLayer.source.layers.addNull();
                    blinker.name = "blink placeholder";
                    //when blink asset replaces null, anchor point will be centered.
                    blinker.transform.anchorPoint.setValue([50,50]);
                    expr = "comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + checkbox.name + "\")(\"Checkbox\") * 100;";
                    blinker.property("Opacity").expression = expr;
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }else{
                //not a footage layer; send alert.
                alert("This only works on precomp layers.");
            }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. One-shot--create a complex bunch of objects and scripts.
function handheldCamera(){  //start script
    app.beginUndoGroup("Create a \"Handheld\" Camera");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var sW = theComp.width/2;
        var sH = theComp.height/2; 

        var compcam = theComp.layers.addCamera("Handheld Camera", [sW,sH]);
        compcam.property("position").setValue([sW,sH,-1866.6667]);        

        var ctlPos = theComp.layers.addNull();
        ctlPos.name = "cam_pos";
        ctlPos.threeDLayer = true;
        //--
        var ctlPoi = theComp.layers.addNull();
        ctlPoi.name = "cam_poi";
        ctlPoi.property("Scale").setValue([75,75]);
        //--
        var ctlFoc = theComp.layers.addNull();
        ctlFoc.name = "cam_foc";
        ctlFoc.threeDLayer = true;
        ctlFoc.property("Scale").setValue([50,50]);

        compcam.parent = ctlPos;
        
        var expr1 = "var x = thisComp.layer(\"cam_poi\").transform.position[0] - (thisComp.width/2);" + "\r" +
                   "var y = thisComp.layer(\"cam_poi\").transform.position[1] - (thisComp.height/2);" + "\r" +
                   "var z = 0;" + "\r" +
                   "[x,y,z];";
        compcam.property("Point of Interest").expression = expr1;

        var expr2 = "var target = thisComp.layer(\"" + ctlFoc.name + "\");" + "\r" +
                    "var v1 = target.toWorld(target.anchorPoint) - toWorld([0,0,0]);" + "\r" +
                    "var v2 = toWorldVec([0,0,1]);" + "\r" +
                    "dot(v1,v2);";
        compcam.property("Focus Distance").expression = expr2;
        compcam.property("Camera Options").property("Depth of Field").setValue(1);
        compcam.property("Camera Options").property("Aperture").setValue(50);
        compcam.property("Camera Options").property("Blur Level").setValue(200);
        compcam.locked = true;
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Type: One-shot--create an adjustment layer with controllable onion skinning
function onionSkin(){  //start script
    app.beginUndoGroup("Create Onion Skin Layer");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Onion Skinning", theComp.width, theComp.height, 1);
        solid.adjustmentLayer = true;
        var echo = solid.property("Effects").addProperty("Echo");
        var slider = solid.property("Effects").addProperty("Slider Control");
        slider.name = "Number of Frames";
        slider.property("Slider").setValue(1);
        
        var prop1 = solid.effect("Echo")("Echo Time (seconds)");
        var prop2 = solid.effect("Echo")("Number Of Echoes");
        var prop3 = solid.effect("Echo")("Starting Intensity");
        var prop4 = solid.effect("Echo")("Decay");
        var prop5 = solid.effect("Echo")("Echo Operator");

        prop1.expression = "var s = effect(\"Number of Frames\")(\"Slider\");" + "\r" + 
                           "var d = thisComp.frameDuration;" + "\r" + 
                           "var rd;" + "\r" + 
                           "if(s>=0){" + "\r" + 
                           "rd = -d;" + "\r" + 
                           "}else if (s<0){" + "\r" + 
                           "rd = d;" + "\r" + 
                           "}";

        prop2.expression = "var s = effect(\"Number of Frames\")(\"Slider\");" + "\r" +
                           "var rs;" + "\r" +
                           "if (s>0){" + "\r" +
                           "rs = s;" + "\r" +
                           "}else if (s==0){" + "\r" +
                           "rs = 0;" + "\r" +
                           "}else if (s<0){" + "\r" +
                           "rs = -s;" + "\r" +
                           "}" + "\r" +
                           "rs;";
        prop3.expression = "var val = 0.5;" + "\r" +
                           "var offset = 0.175;" + "\r" +
                           "var s = effect(\"Number of Frames\")(\"Slider\");" + "\r" +
                           "var rtn;" + "\r" +
                           "if(s<0) s = -s;" + "\r" +
                           "if(s!=0){" + "\r" +
                           "rtn = val + (offset/s);" + "\r" +
                           "}else{" + "\r" +
                           "rtn=1;" + "\r" +
                           "}" + "\r" +
                           "rtn;";
        prop4.setValue(0.5);
        prop5.setValue(7);

        solid.locked = true;
    }
 
    app.endUndoGroup();
}  //end script


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.  process for any number of layers--enables time remap and applies a loop script
function makeLoop(){  //start script
    app.beginUndoGroup("Apply Loop Expression");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
                var curProperties = curLayer.selectedProperties;
                if(curProperties.length==0){
                    //alert("Please select some properties and run the script again.");
                    //*** Running this on a selected layer does a time remap... ***
                    if (curLayer.matchName == "ADBE AV Layer"){
                        curLayer.timeRemapEnabled = true;
                        var expr = "loop_out(\"cycle\");";
                        curLayer.timeRemap.expression = expr;
                        //~~~~
                        //now we have to move the end keyframe one frame sooner--by default you get a glitch.
                        var tr = curLayer.property("Time Remap");
                        var trEndTime = tr.keyTime(2); 
                        var trEndVal = tr.keyValue(2);
                        //alert("key time: " + trEndTime + "   key value: " + trEndVal);
                        tr.removeKey(2);                
                        tr.setValueAtTime(trEndTime-theComp.frameDuration,trEndVal-theComp.frameDuration); //minus one frame
                        tr.setValueAtTime(trEndTime,0); //force loop at end.
                        //~~~~
                    }else{
                        alert("This only works on footage layers.");
                    }                    
                }else{
                    //*** Running this on selected properties cycles keyframes ***
                    for(var j = 0; j<curProperties.length; j++){
                        var doIt = false;
                        try{
                            if(curProperties[j].numKeys>0) doIt=true;
                        }catch(err){ }
                        if(doIt){
                            var expr = "loop_out(\"cycle\");";
                            curProperties[j].expression = expr;
                        }else{
                            alert("Can't apply this expression to a property with no keyframes.")
                        }
                    }
                    //alert(curProperties);
                }                            
            }
        }
    }
 
    app.endUndoGroup();
}  //end script



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.  Type: process for any number of layers or properties
function nullsForPins(){  //start script
    app.beginUndoGroup("Create Nulls for Pins");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // condition 1: must be a footage layer
            if (curLayer.matchName == "ADBE AV Layer"){
                //condition 2: must be a 2D layer
                if(!curLayer.threeDLayer){
                    //condition 3: must have puppet pins applied
                    if(curLayer.effect.puppet != null){
                        var wherePins = curLayer.property("Effects").property("Puppet").property("arap").property("Mesh").property("Mesh 1").property("Deform");
                        var pinCount = wherePins.numProperties;
                        for (var n = 1; n <= pinCount; n++){
                            // Get position of puppet pin
                            try{ 
                                var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(n);
                                //var solid = theComp.layers.addSolid([1.0, 1.0, 0], nullName, 50, 50, 1);
                                var solid = theComp.layers.addNull();
                                solid.name = pin.name + "_ctl";
                                //~~~~~
                                //scaled from layer coords to world coords
                                var p = pin.position.value;
                                solid.property("position").setValue(harvestPoint(p, curLayer, solid, "toComp"));
                                //~~~~~~
                                var pinExpr = "fromComp(thisComp.layer(\""+solid.name+"\").toComp(thisComp.layer(\""+solid.name+"\").anchorPoint));";
                                pin.position.expression = pinExpr;
                            }catch(e){}
                        }
                        curLayer.property("Effects").property("Puppet").property("On Transparent").setValue(1);                          
                        curLayer.locked = true;
                    }else{
                        alert("This only works on layers with puppet pins.");
                    }
                }else{
                    alert("This only works properly on 2D layers.");
                }
            }else{
                alert("This only works on footage layers.");
            }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.  Type: special for K2P--generate null for things with weird coordinate spaces
function parentableNull(){  //start script
    app.beginUndoGroup("Create K2P Parentable Null");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            if (curLayer.matchName == "ADBE AV Layer"){
                var solid = theComp.layers.addNull();
                solid.name = curLayer.name + "_ctl";
                var expr = "var L = thisComp.layer(\"" + curLayer.name + "\");" + "\r" +
                           "L.toComp(L.transform.anchorPoint);";
                solid.property("position").expression = expr;
            }else{
                alert("This only works on footage layers.");
            }
            }
        }
    }

    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.  Type: apply process to any number of layers
function lockRotation(){
    app.beginUndoGroup("Apply Y Rotation Lock");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var theLayers = theComp.selectedLayers;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            for (var i = 0; i < theLayers.length; i++){  // otherwise, loop through each selected layer in the selected comp
                var curLayer = theLayers[i];  // define the layer in the loop we're currently looking at

                curLayer.threeDLayer = true;
                
                //if (curLayer.matchName == "ADBE AV Layer"){
                    var expr = "delta = toWorld(anchorPoint) - thisComp.activeCamera.toWorld([0,0,0]);" + "\r" + 
                    "radiansToDegrees(Math.atan2(delta[0],delta[2]));"

                    curLayer.transform.yRotation.expression = expr;
                //}
            }
        }
    }	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.  Type: apply process to any number of layers or properties
function bakePinKeyframes(){  //start script
    app.beginUndoGroup("Bake Pin Keyframes");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
        // otherwise, loop through each selected layer in the selected comp
        for (var i = 0; i < theLayers.length; i++){
            // define the layer in the loop we're currently looking at
            var curLayer = theLayers[i];
            // Select layer to add expression to
            if (curLayer.matchName == "ADBE AV Layer"){
                if(curLayer.effect.puppet != null){
                    var wherePins = curLayer.property("Effects").property("Puppet").property("arap").property("Mesh").property("Mesh 1").property("Deform");
                    var pinCount = wherePins.numProperties;
                    for (var n = 1; n <= pinCount; n++){
                        // Get position of puppet pin
                        var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(n).position;
                        try{
                            convertToKeyframes(pin);
                        }catch(e){}
                    }  
                }
                //else{
                    var curProperty;
                    try{
                        curProperty = curLayer.property("position");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                    try{
                        curProperty = curLayer.property("anchorPoint");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                    try{
                        curProperty = curLayer.property("rotation");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                    try{
                        curProperty = curLayer.property("scale");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                    try{
                        curProperty = curLayer.property("opacity");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                //}
            }else{
                alert("This currently only works on footage layers.")
            }
            }
        }
    }

    /*
    } else {
             alert("Sorry, this feature only works with CS5.5 and higher.");
     }
     */
 
    app.endUndoGroup();
}  //end script


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMMON FUNCTIONS

function harvestPoint(inputVal, sourceLayer, destLayer, spaceTransform){
    var outputVal;
    if(inputVal.length==2){
        try{
            var posCalc = destLayer.property("Effects").addProperty("Point Control")("Point");
            var posCalcExpr = "var p = ["+inputVal[0]+","+inputVal[1]+"];" + "\r" +
                              "var target = thisComp.layer(\"" + sourceLayer.name + "\");" + "\r";
            if(spaceTransform=="toComp") posCalcExpr += "target.toComp(p);";
            if(spaceTransform=="fromComp") posCalcExpr += "target.fromComp(p);";
            if(spaceTransform=="toWorld") posCalcExpr += "target.toWorld(p);";
            if(spaceTransform=="fromWorld") posCalcExpr += "target.fromWorld(p);";
            posCalc.expression= posCalcExpr;
            outputVal = posCalc.value;
            //destLayer.property("position").setValue(posCalc.value);
            destLayer.property("Effects")("Point Control").remove();
            return outputVal;
        }catch(err){ 
            alert("Error harvesting 2D point data.")
        }
    }else if(inputVal.length==3){
        try{
            var posCalc = destLayer.property("Effects").addProperty("3D Point Control")("3D Point");
            var posCalcExpr = "var p = ["+inputVal[0]+","+inputVal[1]+","+inputVal[2]+"];" + "\r" +
                              "var target = thisComp.layer(\"" + sourceLayer.name + "\");" + "\r";
            if(spaceTransform=="toComp") posCalcExpr += "target.toComp(p);";
            if(spaceTransform=="fromComp") posCalcExpr += "target.fromComp(p);";
            if(spaceTransform=="toWorld") posCalcExpr += "target.toWorld(p);";
            if(spaceTransform=="fromWorld") posCalcExpr += "target.fromWorld(p);";
            posCalc.expression= posCalcExpr;
            outputVal = posCalc.value;
            //destLayer.property("position").setValue(posCalc.value);
            destLayer.property("Effects")("3D Point Control").remove();
            return outputVal;
        }catch(err){ 
            alert("Error harvesting 3D point data.")
        }
    }else{
        alert("harvestPoint() requires a 2D or 3D point as input.");
    }
}

function convertToKeyframes(theProperty){
    if (theProperty.canSetExpression && theProperty.expressionEnabled){
        theProperty.selected = true;
        app.executeCommand(app.findMenuCommandId("Convert Expression to Keyframes")); 
        theProperty.selected = false;
    }
}

}

