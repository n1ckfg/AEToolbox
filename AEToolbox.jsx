// AEToolbox 1.17
// by Nick Fox-Gieg
//
// based on KinectToPin Motion Capture Tools panel
// by Victoria Nece and Nick Fox-Gieg
// www.kinecttopin.com
// 
// Thanks to Jeff Almasol, Dan Ebberts, Christopher Green, Peter Kahrel and Chris Wright
// 

{

// AEToolbox Panel Setup

function buildUI(this_obj_) {
    var win = (this_obj_ instanceof Panel) ? this_obj_ : new Window('palette', 'Script Window',[760,345,1120,597]);

    //Jeff Almasol's solution to fix text color
    var winGfx = win.graphics;
    var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);

    //-----------------------------------------------------
    // 1. Draw buttons
    // buttons coordinates are X start, Y start, X end, Y end
    var butYoffset = 10; //8;
    var butYoffsetCap = 4;
    //--
    var butXstart = 8;
    var butXend = 149;//152;
    var butYstart = 15 + butYoffset;
    var butYend = 43 + butYoffset;
    var butYinc = 30;
    //--
    var colXstart = 4;
    var colXend = 165;
    var colYstart = 4 + butYoffset; //4;
    var colYendBase = 33;
    var colXinc = 170;

    //-----------------------------------------------------

    // Basic group
    var col1butCount = 7;
    win.basicGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col1butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.basicGroup0 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Nulls for Pins');
    win.basicGroup1 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Parent Chain');
    win.basicGroup2 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Locator Null');
    win.basicGroup3 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Move to Position');
    win.basicGroup4 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Make Loop');
    win.basicGroup5 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Random Position');
    win.basicGroup6 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], 'Graph Audio');
    //--
    // Advanced group
    var col3butCount = 7;
    //win.advGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
    win.advGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.advGroup0 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Bake Keyframes');
    win.advGroup1 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Lock Y Rotation');
    win.advGroup2 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Auto Z Rotation');
    win.advGroup3 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Parentable Null');
    win.advGroup4 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Sine Generator');
    win.advGroup5 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Crossfade');
    win.advGroup6 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], '3D MoSketch');
    //--
    // Rigging group
    var col2butCount = 6;
    //win.rigGroup = win.add('panel', [colXstart+(colXinc * 1),colYstart,colXend+(colXinc*1),colYendBase+(col2butCount*butYinc)], 'Rigging', {borderStyle: "etched"});
    win.rigGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col2butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.rigGroup0 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Blink Rig');
    win.rigGroup1 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Jaw Rig');
    win.rigGroup2 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Snake Rig');
    win.rigGroup3 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Beam Rig');
    win.rigGroup4 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Particle Rig');
    win.rigGroup5 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Camera Rig');
    //--
    // Stereo group
    var col3butCount = 4;
    //win.stereoGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
    win.stereoGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.stereoGroup0 = win.stereoGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Split s3D Pair');
    win.stereoGroup1 = win.stereoGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Merge s3D Pair');
    win.stereoGroup2 = win.stereoGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 's3D Dispmap');
    win.stereoGroup3 = win.stereoGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Depth Fill');
    //--
    // Guide group
    var col3butCount = 2;
    //win.guideGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
    win.guideGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.guideGroup0 = win.guideGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Onion Skin');
    win.guideGroup1 = win.guideGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Skeleton View');
    //--
    // IO group
    var col3butCount = 1;
    //win.guideGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
    win.ioGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.ioGroup0 = win.ioGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Camera to Maya');

    //-----------------------------------------------------

    //2. Link buttons to functions
    win.basicGroup0.onClick = nullsForPins;
    win.basicGroup1.onClick = parentChain;
    win.basicGroup2.onClick = locatorNull;
    win.basicGroup3.onClick = moveToPos;
    win.basicGroup4.onClick = makeLoop;
    win.basicGroup5.onClick = randomPos;
    win.basicGroup6.onClick = graphAudio;
    //--
    win.advGroup0.onClick = bakePinKeyframes;
    win.advGroup1.onClick = lockRotation;
    win.advGroup2.onClick = autoOrientZ;
    win.advGroup3.onClick = parentableNull;
    win.advGroup4.onClick = sineWave;
    win.advGroup5.onClick = crossfader;
    win.advGroup6.onClick = threeDmoSketch;
    //--
    win.rigGroup0.onClick = charBlink;
    win.rigGroup1.onClick = charJaw;
    win.rigGroup2.onClick = charSnake;
    win.rigGroup3.onClick = charBeam;
    win.rigGroup4.onClick = charParticle;
    win.rigGroup5.onClick = handheldCamera;
    //--
    win.stereoGroup0.onClick = splitStereoPair;
    win.stereoGroup1.onClick = mergeStereoPair;
    win.stereoGroup2.onClick = stereoDispMap;
    win.stereoGroup3.onClick = depthFill;
    //--
    win.guideGroup0.onClick = onionSkin;
    win.guideGroup1.onClick = skeleView;
    //--
    win.ioGroup0.onClick = cameraToMaya;

    //-----------------------------------------------------

    //Tooltips
    win.basicGroup0.helpTip = "Creates a controller null for each puppet pin on a layer."; //nullsForPins;
    win.basicGroup1.helpTip = "Parent a chain of layers one to another."; //parentChain;
    win.basicGroup2.helpTip = "Creates a new null at the location of each selected layer."; //locatorNull;
    win.basicGroup3.helpTip = "Moves all layers to the location of the last selected layer."; //moveToPos;
    win.basicGroup4.helpTip = "Puts a cycle expression on Time Remap."; //makeLoop;
    win.basicGroup5.helpTip = "Randomizes a layer's position."; //randomPos;
    win.basicGroup6.helpTip = "Converts audio to keyframes and enables the graph view."; //graphAudio;
    //--
    win.advGroup0.helpTip = "Bakes expressions and puppet pins to keyframes."; //bakePinKeyframes;
    win.advGroup1.helpTip = "Forces a layer to always face the camera."; //lockRotation;
    win.advGroup2.helpTip = "Smart 2D auto-rotation."; //autoOrientZ;
    win.advGroup3.helpTip = "Creates a null with expressions that solve certain parenting problems."; //parentableNull;
    win.advGroup4.helpTip = "Applies sine-wave motion controls to a layer."; //sineWave;
    win.advGroup5.helpTip = "Fades a layer into a duplicate of itself for a seamless loop."; //crossfader;
    win.advGroup6.helpTip = "Creates a null with 3D controls for use with Motion Sketch."; //threeDmoSketch;
    //--    
    win.rigGroup0.helpTip = "Turns a blink layer inside the comp on and off."; //charBlink;
    win.rigGroup1.helpTip = "Rigs a jaw layer inside the comp for audio control."; //charJaw;
    win.rigGroup2.helpTip = "Rigs a puppet-pin layer for automated snake-like movement."; //charSnake;
    win.rigGroup3.helpTip = "Creates a 3D laser effect with start and end nulls."; //charBeam;
    win.rigGroup4.helpTip = "Creates a null controller for Particular particles."; //charParticle;
    win.rigGroup5.helpTip = "Creates a camera rigged for point-of-interest and DoF control."; //handheldCamera;
    //--
    win.stereoGroup0.helpTip = "Splits a stereo 3D pair video into two left and right comps."; //splitStereoPair;
    win.stereoGroup1.helpTip = "Merges two left and right comps into a stereo 3D pair comp."; //mergeStereoPair;
    win.stereoGroup2.helpTip = "Creates an s3D pair from the first layer, using the second layer for displacement."; //stereoDispMap;
    win.stereoGroup3.helpTip = "Creates a grayscale depth fill based on distance to camera."; //stereoDispMap;
    //--
    win.guideGroup0.helpTip = "Creates an adjustment layer that applies an onion skin effect."; //onionSkin;
    win.guideGroup1.helpTip = "View connections between parent and child layers."; //skeleView;
    //--
    win.ioGroup0.helpTip = "Export camera to Maya."; //cameraToMaya;
    
    //-----------------------------------------------------

    var selector = win.add("dropdownlist",[colXstart, colYstart, colXend, colYendBase],[ "Basic", "Advanced", "Rigging", "Stereo", "Guide", "IO" ]);
    selector.onChange = function() {
        if (selector.selection == 0){ // Basic
            win.basicGroup.visible = true;
            win.advGroup.visible = false;
            win.rigGroup.visible = false;
            win.stereoGroup.visible = false;
            win.guideGroup.visible = false;
            win.ioGroup.visible = false;
        }else if (selector.selection == 1){ // Advanced
            win.basicGroup.visible = false;
            win.advGroup.visible = true;
            win.rigGroup.visible = false;
            win.stereoGroup.visible = false;
            win.guideGroup.visible = false;
            win.ioGroup.visible = false;
        }else if (selector.selection == 2){ // Rigging
            win.basicGroup.visible = false;
            win.advGroup.visible = false;
            win.rigGroup.visible = true;
            win.stereoGroup.visible = false;
            win.guideGroup.visible = false;
            win.ioGroup.visible = false;
        }else if (selector.selection == 3){ // Stereo
            win.basicGroup.visible = false;
            win.advGroup.visible = false;
            win.rigGroup.visible = false;
            win.stereoGroup.visible = true;
            win.guideGroup.visible = false;
            win.ioGroup.visible = false;
        }else if (selector.selection == 4){ // Guide
            win.basicGroup.visible = false;
            win.advGroup.visible = false;
            win.rigGroup.visible = false;
            win.stereoGroup.visible = false;
            win.guideGroup.visible = true;
            win.ioGroup.visible = false;
        }else if (selector.selection == 5){ // IO
            win.basicGroup.visible = false;
            win.advGroup.visible = false;
            win.rigGroup.visible = false;
            win.stereoGroup.visible = false;
            win.guideGroup.visible = false;
            win.ioGroup.visible = true;
        }             
    }
    selector.selection = 0;

    return win
}

var w = buildUI(this);

if (w.toString() == "[object Panel]") {
    w;
} else {
    w.show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 26.  Type: apply process to any number of layers
function randomPos(){  //start script
    app.beginUndoGroup("Randomize Position");

    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if(theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    }else{ 
        var theLayers = theComp.selectedLayers;
        
        var allLayers = theComp.layers;

        var compDepth = 2000;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{

            //var zOnly = confirm("Randomize Z axis only?");

            for(var i = 0; i < theLayers.length; i++){
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var p = curLayer.property("Position");
                var x = Math.random() * theComp.width;
                var y = Math.random() * theComp.height;
                var z = Math.random() * compDepth;

                if(p.numKeys > 0){
                    p.setValueAtTime(theComp.time, [x,y,z]);
                } else {
                    p.setValue([x,y,z]);
                }
            }
        }
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 25.  Type: apply process to any number of layers
function skeleView(){  //start script
    app.beginUndoGroup("Skeleton View");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if(theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    }else{ 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Skeleton View", theComp.width, theComp.height, 1);
            solid.guideLayer = true;
            var slider = solid.property("Effects").addProperty("Slider Control");
            slider.name = "Thickness";
            slider.property("Slider").setValue(8);

            var color = solid.property("Effects").addProperty("Color Control");
            color.property("Color").setValue([0,1,0]);

            var firstRun = true;

            for(var i = 0; i < theLayers.length; i++){
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                if (curLayer.parent != null) {
                    var beam = solid.property("Effects").addProperty("Beam");
                    if (firstRun) {
                        beam.property("Composite On Original").setValue(0);
                        firstRun = false;
                    } else {
                        beam.property("Composite On Original").setValue(1);
                    }
                    beam.property("Length").setValue(1.0);
                    beam.property("Softness").setValue(0.0);
                    beam.property("Starting Thickness").expression = "effect(\"Thickness\")(\"Slider\");";
                    beam.property("Ending Thickness").expression = "effect(\"Thickness\")(\"Slider\");";
                    beam.property("Inside Color").expression = "effect(\"Color Control\")(\"Color\");";
                    beam.property("Outside Color").expression = "effect(\"Color Control\")(\"Color\");";

                    var expr1 = "fromComp(thisComp.layer(\"" + curLayer.name + "\").toComp(thisComp.layer(\"" + curLayer.name + "\").anchorPoint));";
                    beam.property("Starting Point").expression = expr1;
                    
                    var expr2 = "fromComp(thisComp.layer(\"" + curLayer.parent.name + "\").toComp(thisComp.layer(\"" + curLayer.parent.name + "\").anchorPoint));";
                    beam.property("Ending Point").expression = expr2;
                }
            }
            
            //if (!firstRun) alert("No parent layers were found.")
                
        }
    }
    solid.locked = true;

    /*
    } else {
             alert("Sorry, this feature only works with CS5.5 and higher.");
     }
     */
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 24.  Type: apply process to any number of layers
function depthFill(){  //start script
    app.beginUndoGroup("Depth Fill");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if(theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    }else{ 
        var theLayers = theComp.selectedLayers;
        
        
        var allLayers = theComp.layers;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            //var depth_ctl = theComp.layers.addNull();
            //depth_ctl.name = "depth_ctl";
            //var effect = depth_ctl.property("Effects").addProperty("Slider Control");
            //var effect = depth_ctl.property("Effects").addProperty("Slider Control");
            //effect.property("Slider").setValue(2000);
            //effect.name = "Depth Offset";

            /*
            // otherwise, loop through each selected layer in the selected comp
            var hasCamera = false;
            var compcam;

            for(var j = 1; j < allLayers.length; j++){
                // define the layer in the loop we're currently looking at
                var curLayer = allLayers[i];
                // Select layer to add expression to
                if (curLayer.matchName == "ADBE Camera Layer") hasCamera = true;
            }

            if (!hasCamera) {
                // otherwise, add control camera
                compcam = theComp.layers.addCamera("Camera 1", [theComp.width/2,theComp.height/2]);    
                //compcam.property("position").setValue([960,540,-1500]);                
            }
            */
            //~~

            for(var i = 0; i < theLayers.length; i++){
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];

                if(curLayer.matchName != "ADBE Camera Layer"){
                    var effect1 = curLayer.property("Effects").addProperty("Slider Control");
                    effect1.name = "Depth Offset";
                    effect1.property("Slider").setValue(2000);

                    var effect2 = curLayer.property("Effects").addProperty("Fill");

                    // Select layer to add expression to
                    //var scaleexpression = "var s = thisComp.layer(\"depth_ctl\").effect(\"Slider Control\")(\"Slider\");\r" +
                    var scaleexpression = "var s = effect(\"Depth Offset\")(\"Slider\");\r" +
                                          "try {\r" +
                                          "  var g1 = (toWorld(anchorPoint) - thisComp.activeCamera.toWorld([0,0,0]));\r" +
                                          "  var g2 = thisComp.activeCamera.toWorldVec([0,0,1]);\r" +
                                          "  var find = dot(g1,g2);\r" + 
                                          "  value/(find/s);\r" +
                                          "} catch(err) {\r" +
                                          "  value;\r" +
                                          "}";
                    effect2.property("Color").expression = scaleexpression;
                    effect2.property("Color").setValue([1,1,1]);
                         
                } else {
                    alert("This doesn't work on camera layers.");
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

// 23.  Type: apply process to any number of layers
function graphAudio(){  //start script
    app.beginUndoGroup("Graph Audio");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if(theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    }else{ 
        var theLayers = theComp.selectedLayers;
        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            // otherwise, loop through each selected layer in the selected comp
            for(var i = 0; i < theLayers.length; i++){
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                // Select layer to add expression to
                //if (curLayer.matchName == "ADBE AV Layer" || curLayer.matchName == "ADBE Camera Layer"){
                if(curLayer.matchName == "ADBE AV Layer" && curLayer.hasAudio){
                    //try{
                        convertAudioToKeyframes(curLayer);
                        var allLayers = theComp.layers;
                        var aud = allLayers[1];
                        aud.name = curLayer.name + " Audio Amplitude";
                        var theProperty = aud.effect("Both Channels")("Slider");
                        theProperty.selected = true;
                        //app.executeCommand(app.findMenuCommandId("Show Graph Editor Set"));
                        //theProperty.selected = false;
                    //}catch(e){ }
                //}
                }else{
                    //alert("This currently only works on footage or camera layers.");
                    alert("This only works on layers with audio.");
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

// 22.  Type: apply process to two layers
function mergeStereoPair(){
    app.beginUndoGroup("Merge Stereo pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var theLayers = theComp.selectedLayers;

        if(theLayers.length != 2){
            alert("Please select exactly two layers and run the script again.");
        }else{

            var sideBySide = confirm("Use side-by-side stereo?");

            var leftLayer = theLayers[0];
            var rightLayer = theLayers[1];

            leftLayer.name += " L";
            rightLayer.name += " R";
            //theComp.name += " s3D Pair"
            
            rightLayer.audioEnabled = false;

            var sL = leftLayer.transform.scale.value;
            var sR = rightLayer.transform.scale.value;

            if(sideBySide){
                sL[0] = ((theComp.width/2) / leftLayer.width) * 100;
                sL[1] = (theComp.height / leftLayer.height) * 100;
                sR[0] = ((theComp.width/2) / rightLayer.width) * 100;
                sR[1] = (theComp.height / rightLayer.height) * 100;
            }else{
                sL[0] = (theComp.width / leftLayer.width) * 100;
                sL[1] = ((theComp.height/2) / leftLayer.height) * 100;
                sR[0] = (theComp.width / rightLayer.width) * 100;
                sR[1] = ((theComp.height/2) / rightLayer.height) * 100;                
            }         

            leftLayer.transform.scale.setValue([sL[0],sL[1]]);
            rightLayer.transform.scale.setValue([sR[0],sR[1]]);
            //leftLayer.transform.scale.setValue([50,100]);
            //rightLayer.transform.scale.setValue([50,100]);            

            var pL = leftLayer.transform.position.value;
            var pR = rightLayer.transform.position.value;

            if(sideBySide){
                pL[0] = theComp.width*0.25;
                pL[1] = theComp.height*0.5;
                pR[0] = theComp.width*0.75;
                pR[1] = theComp.height*0.5;
            }else{
                pL[0] = theComp.width*0.5;
                pL[1] = theComp.height*0.25;
                pR[0] = theComp.width*0.5;
                pR[1] = theComp.height*0.75;
            }

            leftLayer.transform.position.setValue([pL[0],pL[1]]);
            rightLayer.transform.position.setValue([pR[0],pR[1]]);
            
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21.  Type: apply process to a whole comp
function stereoDispMap(){
    var ioDistance = 6.0;

    app.beginUndoGroup("s3D Displacement Map");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var theLayers = theComp.selectedLayers;

        if(theLayers.length==0 || theLayers.length > 2){
            alert("Please select one or two layers and run the script again.");
        }else{

            var sideBySide = confirm("Use side-by-side stereo?");

            var oldLayer = theLayers[0];

            //if one layer selected, duplicated that layer and make it a precomp.
            //if two layers selected, put the second layer in the precomp.
            var newLayer;
            if(theLayers.length==1){
                newLayer = oldLayer.duplicate();
            }else if(theLayers.length==2){
                newLayer = theLayers[1];
            }
            var newPrecomp = theComp.layers.precompose([newLayer.index], "Precomp DispMap", true);
            newPrecomp.layers[1].property("Effects").addProperty("Levels");
            theComp.layer("Precomp DispMap").enabled = false;
            theComp.layer("Precomp DispMap").audioEnabled = false;
            oldLayer = oldLayer.duplicate(); //make an extra copy to fill in gaps caused by displacement
            oldLayer.audioEnabled = false; //turn off audio on copy
            var effect = oldLayer.property("Effects").addProperty("Displacement Map");
            effect.property("Displacement Map Layer").setValue(effect.property("Displacement Map Layer").value-1); //target
            effect.property("Use For Horizontal Displacement").setValue(5); //luma
            effect.property("Max Horizontal Displacement").setValue(-ioDistance); //io distance
            effect.property("Use For Vertical Displacement").setValue(11); //off
            effect.property("Max Vertical Displacement").setValue(0); //off
            //effect.property("Edge Behavior").setValue(1); //on
            effect.property("Edge Behavior").setValue(0); //off

            var newComp = theComp.duplicate();
            var stereoComp = theComp.duplicate();
            stereoComp.name = theComp.name + " s3D Pair"
            newComp.name = theComp.name + " R";
            theComp.name = theComp.name + " L";

            var targetNum = 0;
            for(var i=0;i<newComp.layers.length;i++){
                if(newComp.layers[i+1].name=="Precomp DispMap"){
                    targetNum = i+2;
                }
            }
            var newLayer2;
            try{
                newLayer2 = newComp.layers[targetNum];
                var effect2 = newLayer2.property("Effects").property("Displacement Map");
                effect2.property("Max Horizontal Displacement").setValue(ioDistance);
            }catch(err){
                alert("Displacement map must be selected last and be immediately above target layer." + "\r" + "You'll need to change displacement settings manually.")
            }
            
            //~~~~~~~~~~~~~
            //delete everything in stereoComp
            var theLayers1 = stereoComp.layers;
        
            while(theLayers1.length > 0){  // otherwise, loop through each selected layer in the selected comp
                var curLayer = theLayers1[1];  // define the layer in the loop we're currently looking at        
                curLayer.remove();
            }

            var stereoL = theLayers1.add(theComp);
            var stereoR = theLayers1.add(newComp);
            stereoR.audioEnabled = false;

            if(sideBySide){
                stereoL.transform.scale.setValue([50,100]);
                stereoR.transform.scale.setValue([50,100]);
            }else{
                stereoL.transform.scale.setValue([100,50]);
                stereoR.transform.scale.setValue([100,50]);                
            }
            
            //var pL = stereoL.transform.position.value;
            //var pR = stereoR.transform.position.value;

            if(sideBySide){
                stereoL.transform.position.setValue([(stereoComp.width*0.25),(stereoComp.height*0.5)]);
                stereoR.transform.position.setValue([(stereoComp.width*0.75),(stereoComp.height*0.5)]);
            }else{
                stereoL.transform.position.setValue([(stereoComp.width*0.5),(stereoComp.height*0.25)]);
                stereoR.transform.position.setValue([(stereoComp.width*0.5),(stereoComp.height*0.75)]);
            }   
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20.  Type: apply process to a whole comp
function splitStereoPair(){
    app.beginUndoGroup("Split s3D Pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 

        var sideBySide = confirm("Use side-by-side stereo?");

        var newComp1 = theComp.duplicate();
        newComp1.name = theComp.name + " L";
        var theLayers1 = newComp1.layers;
        
        while(theLayers1.length > 0){  // otherwise, loop through each selected layer in the selected comp
            var curLayer = theLayers1[1];  // define the layer in the loop we're currently looking at        
            curLayer.remove();
        }

        var newComp1target = theLayers1.add(theComp);
        if(sideBySide){
            newComp1.width = newComp1.width/2;
        }else{
            newComp1.height = newComp1.height/2;
        }
        //var p1 = newComp1target.transform.position.value;
        //newComp1target.transform.position.setValue([0,p1[1]]);

        //~~~~~~~~~~~~~~~~~

        var newComp2 = theComp.duplicate();
        newComp2.name = theComp.name + " R";
        var theLayers2 = newComp2.layers;
        
        while(theLayers2.length > 0){  // otherwise, loop through each selected layer in the selected comp
            var curLayer = theLayers2[1];  // define the layer in the loop we're currently looking at        
            curLayer.remove();
        }

        var newComp2target = theLayers2.add(theComp);
        
        if(sideBySide){
            newComp2.width = newComp2.width/2;
        }else{
            newComp2.height = newComp2.height/2;
        }
        
        var p2 = newComp2target.transform.position.value;
        
        if(sideBySide){
            newComp2target.transform.position.setValue([0,p2[1]]);
        }else{
            newComp2target.transform.position.setValue([p2[0],0]);
        }

        theComp.name = "Precomp s3D Pair";
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 19.  Type: apply process to any number of layers
function crossfader(){
    //Based on script by Jered Cuenco, http://mindfury.com/
    app.beginUndoGroup("Crossfade Layers");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var theLayers = theComp.selectedLayers;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            for (var i = 0; i < theLayers.length; i++){  // otherwise, loop through each selected layer in the selected comp
                app.executeCommand(app.findMenuCommandId("Duplicate"));
                var curLayer1 = theComp.selectedLayers[0];
                app.executeCommand(app.findMenuCommandId("Split Layer"));
                var curLayer2 = theComp.selectedLayers[0];

                curLayer1.property("Opacity").setValueAtTime(curLayer1.inPoint,0);
                curLayer1.property("Opacity").setValueAtTime(curLayer1.outPoint,100);
                curLayer2.property("Opacity").setValueAtTime(curLayer2.inPoint,100);
                curLayer2.property("Opacity").setValueAtTime(curLayer2.outPoint,0);

                curLayer2.startTime = -1 * (curLayer1.outPoint-curLayer1.inPoint);
                curLayer1.startTime = curLayer2.outPoint-curLayer2.inPoint;

                curLayer1.selected=true;
                curLayer2.selected=true;
                theLayers[i].selected=true;

                //why doesn't this work?
                //theComp.layers.precompose(theComp.selectedLayers[0], "Precomp Fade", true);
            }
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18.  Type: apply process to any number of layers
function parentChain(){
    //Based on script by Jered Cuenco, http://mindfury.com/
    app.beginUndoGroup("Parent Chain of Layers");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var theLayers = theComp.selectedLayers;

        if(theLayers.length==0){
            alert("Please select some layers and run the script again.");
        }else{
            for (var i = 0; i < theLayers.length; i++){  // otherwise, loop through each selected layer in the selected comp
                //var curLayer = theLayers[i];  // define the layer in the loop we're currently looking at
                if(i==0){
                    for (var j = 0; j < theLayers.length; j++){
                        if(theLayers[i].parent==theLayers[j]) theLayers[i].parent=null;
                    }
                }else{
                    theLayers[i].parent = null;
                    theLayers[i].parent = theLayers[i-1];
                }
            }
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17. One-shot--create a complex bunch of objects and scripts.
function charParticle(){  //start script
    app.beginUndoGroup("Create a Particle Rig");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Particle Solid", theComp.width, theComp.height, 1);
        solid.locked = true;

        var particle_ctl = theComp.layers.addNull();
        particle_ctl.name = "particle_ctl";
        particle_ctl.threeDLayer = true;

        try{
            var particle = solid.property("Effects").addProperty("Particular");

            var expr1 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint);"

            particle.property("Position XY").expression = expr1;

            var expr2 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint)[2];"

            particle.property("Position Z").expression = expr2;
        }catch(err){
            alert("This requires Trapcode Particular.");
            /*
            var particle = solid.property("Effects").addProperty("CC Particle World");

            var expr1 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint)[0] - (thisComp.width/2);"

            particle.property("Position X").expression = expr1;

            var expr2 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint)[1] - (thisComp.height/2);"

            particle.property("Position Y").expression = expr2;

            var expr3 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint)[2];"

            particle.property("Position Z").expression = expr3;
            */            
        }
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16. One-shot--create a complex bunch of objects and scripts.
function charBeam(){  //start script
    app.beginUndoGroup("Create a Beam Rig");

    //if(parseFloat(app.version) >= 10.5){
    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)){
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else {
        var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Beam Solid", theComp.width, theComp.height, 1);
        solid.locked = true;
        var beam_baseSize = solid.property("Effects").addProperty("Slider Control");
        beam_baseSize.name = "Base Size";
        beam_baseSize.property("Slider").setValue(8);
        var beam_maxSize = solid.property("Effects").addProperty("Slider Control");
        beam_maxSize.name = "Max Size";
        beam_maxSize.property("Slider").setValue(1000);
        var beam_minSize = solid.property("Effects").addProperty("Slider Control");
        beam_minSize.name = "Min Size";
        beam_minSize.property("Slider").setValue(1);

        var beam = solid.property("Effects").addProperty("Beam");
        beam.property("3D Perspective").setValue(0);
        beam.property("Length").setValue(1);

        var beamStart = theComp.layers.addNull();
        beamStart.name = "beam_start";
        beamStart.threeDLayer = true;
        beamStart.transform.position.setValue([(theComp.width/2)-200,theComp.height/2,0]);

        var beamEnd = theComp.layers.addNull();
        beamEnd.name = "beam_end";
        beamEnd.threeDLayer = true;
        beamEnd.transform.position.setValue([(theComp.width/2)+200,theComp.height/2,0]);


        var expr1 = "fromComp(thisComp.layer(\"beam_start\").toComp(thisComp.layer(\"beam_start\").anchorPoint));";
        beam.property("Starting Point").expression = expr1;
        
        var expr2 = "fromComp(thisComp.layer(\"beam_end\").toComp(thisComp.layer(\"beam_end\").anchorPoint));";
        beam.property("Ending Point").expression = expr2;

        var expr3 = "var L = \"beam_start\";" + "\r" + 
                    "var s = thisComp.layer(\"Beam Solid\").effect(\"Base Size\")(\"Slider\");" + "\r" + 
                    "var sMax = thisComp.layer(\"Beam Solid\").effect(\"Max Size\")(\"Slider\");" + "\r" + 
                    "var sMin = thisComp.layer(\"Beam Solid\").effect(\"Min Size\")(\"Slider\");" + "\r" + 
                    "var p = thisComp.layer(L).transform.position;" + "\r" + 
                    "var ss = s + (-p[2]);" + "\r" + 
                    "if(ss<sMin) ss = sMin;" + "\r" + 
                    "if(ss>sMax) ss = sMax;" + "\r" + 
                    "ss;";
        beam.property("Starting Thickness").expression = expr3;

        var expr4 = "var L = \"beam_end\";" + "\r" + 
                    "var s = thisComp.layer(\"Beam Solid\").effect(\"Base Size\")(\"Slider\");" + "\r" + 
                    "var sMax = thisComp.layer(\"Beam Solid\").effect(\"Max Size\")(\"Slider\");" + "\r" + 
                    "var sMin = thisComp.layer(\"Beam Solid\").effect(\"Min Size\")(\"Slider\");" + "\r" + 
                    "var p = thisComp.layer(L).transform.position;" + "\r" + 
                    "var ss = s + (-p[2]);" + "\r" + 
                    "if(ss<sMin) ss = sMin;" + "\r" + 
                    "if(ss>sMax) ss = sMax;" + "\r" + 
                    "ss;";
        beam.property("Ending Thickness").expression = expr4;
    }
 
    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15.  Type: apply process to any number of layers
function autoOrientZ(){
    //Based on script by Jered Cuenco, http://mindfury.com/
    app.beginUndoGroup("Apply Auto-Orient Z");

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

                var easeSlider = curLayer.property("Effects").addProperty("Slider Control");
                easeSlider.name = "corner ease";
                easeSlider.property("Slider").setValue(3);

                //if (curLayer.matchName == "ADBE AV Layer"){
                var expr = "var cornerEase = effect(\"corner ease\")(\"Slider\");" + "\r" + 
                           "var pre = position.valueAtTime(time-thisComp.frameDuration*cornerEase);" + "\r" + 
                           "var post = position.valueAtTime(time+thisComp.frameDuration*cornerEase);" + "\r" + 
                           "var delta = post - pre;" + "\r" + 
                           "if(delta[0]==0 && delta[1]==0){" + "\r" + 
                           "  // if no change in vector, maintain current heading" + "\r" + 
                           "  rotation;" + "\r" + 
                           "}else{" + "\r" + 
                           "  // use the vector direction to orient. Flip Y to account for cartesian Y being up and AE Y being down" + "\r" + 
                           "  radiansToDegrees(Math.atan2(delta[0],-delta[1]));" + "\r" + 
                           "}";
                if(curLayer.threeDLayer){
                    curLayer.transform.zRotation.expression = expr;
                }else{
                    curLayer.transform.rotation.expression = expr;
                }
                //}
            }
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14.  Type: process for any number of layers or properties
function charSnake(){  //start script
    app.beginUndoGroup("Snake Rig");

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

                        var solid = theComp.layers.addNull();
                        solid.name = "head_ctl";
                        var speedSlider = solid.property("Effects").addProperty("Slider Control");
                        speedSlider.name = "speed";
                        speedSlider.property("Slider").setValue(10);

                        for (var n = 1; n <= pinCount; n++){
                            var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(n);

                            if(pin.name=="head" || pin.name=="Puppet Pin 1"){
                                if(pin.name=="Puppet Pin 1") pin.name="head";
                                //~~~~~
                                //scaled from layer coords to world coords
                                var p = pin.position.value;
                                solid.property("position").setValue(harvestPoint(p, curLayer, solid, "toComp"));
                                //~~~~~~
                                var pinExpr = "fromComp(thisComp.layer(\""+solid.name+"\").toComp(thisComp.layer(\""+solid.name+"\").anchorPoint));";
                                pin.position.expression = pinExpr;
                            }
                        }
                        
                        for (var o = 1; o <= pinCount; o++){
                            // Get position of puppet pin
                            var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(o);
                            //var solid = theComp.layers.addSolid([1.0, 1.0, 0], nullName, 50, 50, 1);
                            if(pin.name=="head" || pin.name=="Puppet Pin 1"){
                                //
                            }else{
                                var pinExpr = "var delayFrames = thisComp.layer(\"head_ctl\").effect(\"speed\")(\"Slider\");" + "\r" +
                                               "var p = effect(\"Puppet\").arap.mesh(\"Mesh 1\").deform(\"head\").position;" + "\r" +
                                               "var idx = parseInt(thisProperty.propertyGroup(1).name.split(\" \")[2],10)-1;" + "\r" +
                                               "var delay = idx*framesToTime(delayFrames);" + "\r" +
                                               "p.valueAtTime(time-delay)";

                                pin.position.expression = pinExpr;
                            }
                        }
                        

                        try{
                            curLayer.property("Effects").property("Puppet").property("On Transparent").setValue(1);                          
                            curLayer.locked = true;
                        }catch(e){}
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

// 13.  Type: process for any number of layers or properties
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
                var lp = lastLayer.property("Position");
                var cp = curLayer.property("Position");
                if (lp.numKeys <= 0 && cp.numKeys <= 0) { // neither source nor dest has keys
                    cp.setValue(lp.value);               
                } else if (lp.numKeys > 0 && cp.numKeys <= 0) { // source has keys but dest doesn't
                    cp.setValue(lp.value);               
                } else { // either source or dest has keys    
                    cp.setValueAtTime(theComp.time, lp.value);
                }

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12.  Type: process for any number of layers or properties
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

// 11.  process for any number of layers--creates a Z slider for 2D Motion Sketch
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

// 10.  process for any number of layers--applies sine wave controllers
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

// 9. Type: create controllers inside existing comp
function charJaw(){  //start script

    var sideView = confirm("Is this a side view?");

    if(sideView){
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

    } else {

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
    }
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
        solid.guideLayer = true;

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
                                //solid.name = pin.name + "_ctl";
                                solid.name = curLayer.name + "_" + pin.name;
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
            //if (curLayer.matchName == "ADBE AV Layer" || curLayer.matchName == "ADBE Camera Layer"){
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
                    //~~
                    try{
                        curProperty = curLayer.property("pointOfInterest");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                    try{
                        curProperty = curLayer.property("focusDistance");
                        convertToKeyframes(curProperty);
                    }catch(e){}
                //}
                }else{
                    //alert("This currently only works on footage or camera layers.");
                    alert("This currently only works on footage layers.");
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
// 0.  Type: apply process to any number of layers or properties
function cameraToMaya(){  //start script
    app.beginUndoGroup("Export Camera to Maya");

    //****************************** MAIN

    //AE_CameraToMaya v1.1n
    //by Ryan Gilmore, 2008
    //www.urbanspaceman.net
    //contact@urbanspaceman.net

    //Select the camera in After Effects you want to send to Maya, and this script will create an .ma file with a copy of the camera in it, with
    //correct position, rotation, and focal length.  Should work for any AE camera, no matter how it is animated, without any restrictions.

    //fixed for CS6 by Nick Fox-Gieg, 2012
    //null export by Nick Fox-Gieg, 2014

    //****************************** GLOBALS

    var f = 0;

    var theComp = app.project.activeItem;
    var theLayers = theComp.layers;
    var allLayers = theComp.layers;

    var compWidth = theComp.width;
    var compHeight = theComp.height;
    var selectedLayers = theComp.selectedLayers;
    var numLayers = selectedLayers.length;
    var theComplength = theComp.duration; //in seconds
    var totalFrames=Math.round(theComp.duration*theComp.frameRate)+1;
    var aeCompRate = theComp.frameRate;
    var compRate = Math.round(aeCompRate);
    var frameDuration = theComp.frameDuration;

    var worldScale=100;
    var worldCenter=[compWidth/2, compHeight/2];

    var aspect = theComp.pixelAspect;
    // these are more accurate video PARs, that AE rounds off 
    // [00]  D2 NTSC            0.8592
    // [01]  D1 NTSC        0.9 
    // [02]  D4 Stan            0.9481481
    // [03]  SQUARE         1
    // [04]  D2 PAL         1.0186      
    // [05]  D1 PAL         1.0667
    // [06]  D1 NTSC wide   1.2
    // [07]  HDV                1.333
    // [08]  D1 PAL wide    1.4222
    // [09]  DVCPROHD       1.5
    // [10]  D4 Ana         1.8962962
    // [11]  Ana2:1         2
    var ratio= [0.8592, 0.9, 0.9481481, 1.0, 1.0186, 1.0667, 1.2, 1.333, 1.4222, 1.5, 1.8962962, 2];
    if (aspect == 0.86){aspect =ratio[0]}
    else if (aspect == 0.95){aspect =ratio[2]}
    else if (aspect == 1.02){aspect =ratio[4]}
    else if (aspect == 1.07){aspect =ratio[5]}
    else if (aspect == 1.33){aspect =ratio[7]}
    else if (aspect == 1.42){aspect =ratio[8]}
    else if (aspect == 1.9){aspect =ratio[10]};

    var frameAspect = (compWidth*aspect)/compHeight;

    mayaFBHeight = 1; //in inches
    mayaFilmBack = frameAspect*mayaFBHeight; //in inches

    //fps presets for Maya
    /*
    if (compRate == 30) {fps = "ntsc"} 
    else {}
    if (compRate == 25) {fps = "pal"}
    else {}
    if (compRate == 24) {fps = "film"}
    else {}
    if (compRate == 15) {fps = "game"}
    else {}
    if (compRate == 48) {fps = "show"} 
    else {}
    if (compRate == 60) {fps = "ntscf"}
    else {}
    if (compRate == 50) {fps = "palf"}
    else {}
    */
    if (compRate == 60) fps = "ntscf";
    if (compRate == 50) fps = "palf";
    if (compRate == 48) fps = "show";
    if (compRate == 30) fps = "ntsc";
    if (compRate == 25) fps = "pal";
    if (compRate <= 24 && compRate % 2 == 0) fps = "film";
    if (compRate == 15) fps = "game";

    //****************************** STEP 1: create free ZYX camera in After Effects

    DeselectProjectWindowItems();

    //error check: is the comp the active timeline window?
    if (app.project.activeItem!=null) {
    theComp = app.project.activeItem;

    //error check: is camera selected?
    if (theComp.selectedLayers!="") {
    theCamera = theComp.selectedLayers;

    //error check: is more than one layer selected?
    if (theCamera.length<2) {
    CameraName = theCamera[0].name;

    //error check: is it a camera selected?
    if (theCamera[0].zoom!=null) {

    CamIn=theCamera[0].inPoint;
    CamOut=theCamera[0].outPoint;

    //if camera has a parent that uses a scale value other than 100, this will affect rotation and zoom calculations.
    //NB: if the scale does not have equal XYZ values, this script won't work.  That's because this will stretch, 
    //distort, and skew the camera, and since the first step of this script is to output a free camera, it can't be done since
    //a skewed free camera is impossible in After Effects.
    //if their is a parent, the unit value in the rotation matrix is scale/100
    //otherwise the unit value is 1.
    if (theCamera[0].parent!=null) {
        CamMaster=theCamera[0].parent;
        CamMasterExpression="this_comp.layer("+"\'"+CamMaster.name+"\'"+").scale/100"
    }else{
        CamMasterExpression="[1,1,1]"
    };

    //make new camera.  This will inherit the Y and X rotations.
    theComp.layers.addCamera("CamCopy_yRot_xRot",[0,0]).startTime=0;
    CamCopy01=theComp.layer(1);
    CamCopy01.inPoint=CamIn;
    CamCopy01.outPoint=CamOut;
    CamCopy01.pointOfInterest.expression="position";
    CamCopy01.position.setValue([theComp.width/2, theComp.height/2, 0]);
    //make camera parent.  This is needed to reverse the rotation order.  This null will inherit the position and Z rotation.
    theComp.layers.addNull(theComp.duration).name="CamCopy_zRot_pos";
    CamParent01=theComp.layer(1);
    setNull(CamParent01,CamIn,CamOut,theComp);
    //attach child camera to parent
    CamCopy01.parent=CamParent01;

    //translate the data from the original camera with expressions
    CamParent01.position.expression="L=thisComp.layer("+"\'"+CameraName+"\'"+");L.toWorld([0,0,0])";
    CamParent01.rotation.expression="L=this_comp.layer("+"\'"+CameraName+"\'"+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);}else{b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[0]"
    CamCopy01.orientation.expression="L=this_comp.layer("+"\'"+CameraName+"\'"+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);}else{b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];[ 0, BHP[1], 0 ]"
    CamCopy01.rotationX.expression="L=this_comp.layer("+"\'"+CameraName+"\'"+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);}else{b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[2]"
    CamCopy01.zoom.expression="unit="+CamMasterExpression+";this_comp.layer("+"\'"+CameraName+"\'"+").zoom*1/unit[0]";

    //Make a second copy of the camera, this time it will be baked
    ShortCamName=removeForbiddenCharacters(CameraName);
    theComp.layers.addCamera("<"+ShortCamName+">",[0,0]).startTime=0;
    CamCopy02=theComp.layer(1);
    CamCopy02.inPoint=CamIn;
    CamCopy02.outPoint=CamOut;
    CamCopy02.pointOfInterest.expression="position";
    CamCopy02.position.setValue([theComp.width/2, theComp.height/2, 0]);
    //make seconcd camera parent.
    theComp.layers.addNull(theComp.duration).name="<"+ShortCamName+"Parent"+">";
    CamParent02=theComp.layer(1);
    setNull(CamParent02,CamIn,CamOut,theComp)
    //attach child camera to parent
    CamCopy02.parent=CamParent02;

    Bake(theComp, theComp.layer(3).position, CamParent02.position);
    Bake(theComp, theComp.layer(3).rotation, CamParent02.rotation);
    Bake(theComp, theComp.layer(4).orientation, CamCopy02.orientation);
    Bake(theComp, theComp.layer(4).rotationX, CamCopy02.rotationX);
    Bake(theComp, theComp.layer(4).zoom, CamCopy02.zoom);

    //remove the expression camera and its parent
    theComp.layer(4).remove();
    theComp.layer(3).remove();

    }else{alert("ERROR!!\r"+
    "Please select a camera. ")};
    }else{alert("ERROR!!\r"+
    "Please select only one layer at a time. ")};
    }else{alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};
    }else{alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};

    //****************************** STEP 2: create Maya scene file

    var CamName = removeForbiddenCharacters(CameraName);

    //create text file
    var myFile = File.saveDialog("Save your file", CamName + ".ma", "");
    var fileOK = myFile.open("w","TEXT","????");

    //Maya scene file header
    myFile.writeln("//Maya ASCII 6.0 scene");
    myFile.writeln("//Name: " + CamName + "_export.ma");
    myFile.writeln("//Last modified:");
    myFile.writeln("requires maya \"6.0\";");
    myFile.writeln("currentUnit -l centimeter -a degree -t " + fps + ";");
    myFile.writeln("");

    //make camera nodes

    //transform node
    myFile.writeln("createNode transform -n \"" + CamName + "\";");

    // shape node, that will have film back
    myFile.writeln("createNode camera -n \"" + CamName + "Shape\" -p \"" + CamName + "\";"); //is parented to the transform node
    myFile.writeln("    setAttr -k off \".v\";");
    myFile.writeln("    setAttr \".rnd\" yes;");// renderable
    myFile.writeln("    setAttr \".ow\" 10.0;");
    myFile.writeln("    setAttr \".dof\" no;");// depth of field
    myFile.writeln("    setAttr \".s\" no;");
    myFile.writeln("    setAttr \".eo\" 1.0;");
    myFile.writeln("    setAttr \".ff\" 1;"); // film fit.  1 = horizontal (FOV measured on the horizontal)
    myFile.writeln("    setAttr \".cap\" -type \"double2\" " + mayaFilmBack + " " + mayaFBHeight + ";"); // Camera Aperature
    myFile.writeln("    setAttr \".col\" -type \"float3\" 0.0 0.0 0.0 ;");
    myFile.writeln("    setAttr \".imn\" -type \"string\" \"" + CamName + "\";");
    myFile.writeln("    setAttr \".den\" -type \"string\" \"" + CamName + "_Depth\";");
    myFile.writeln("    setAttr \".man\" -type \"string\" \"" + CamName + "_Mask\";");
    myFile.writeln("");

    // X position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateX\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Xpos=(pos[0]-worldCenter[0])/worldScale;
        myFile.write(" " + i + " " + Xpos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Y position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateY\";")
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Ypos=-((pos[1]-worldCenter[1])/worldScale);
        myFile.write(" " + i + " " + Ypos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Z position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateZ\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Zpos=-(pos[2]/worldScale);
        myFile.write(" " + i + " " + Zpos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Pitch (X rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateX\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotX=theComp.layer(2).rotationX.valueAtTime(f, false);
        Xrot=rotX;
        myFile.write(" " + i + " " + Xrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Heading (Y rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateY\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotY=theComp.layer(2).orientation.valueAtTime(f, false);
        Yrot=-(rotY[1]);
        myFile.write(" " + i + " " + Yrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Bank (Z rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateZ\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotZ=theComp.layer(1).rotation.valueAtTime(f, false);
        Zrot=-(rotZ);
        myFile.write(" " + i + " " + Zrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Focal length
    myFile.writeln("createNode animCurveTU -n \"" + CamName + "Shape_FocalLength\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");
            
    for (i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        aeZoom = theComp.layer(2).zoom.valueAtTime(f, false);
        HFOV=Math.atan( (compWidth*aspect*0.5) /aeZoom);//half the FOV, in radians
        fLength=( (mayaFilmBack*0.5) / Math.tan(HFOV) ) * 25.4; //in inches, converted to mm
        myFile.write(" " + i + " " + fLength);
    }
            
    myFile.write(";");
    myFile.writeln(""); 
    myFile.writeln(""); 

    //Render size settings
    myFile.writeln("select -ne :time1;");
    myFile.writeln("    setAttr \".o\" 1;");
    myFile.writeln("select -ne :defaultResolution;");
    myFile.writeln("    setAttr \".w\" " + compWidth + ";");
    myFile.writeln("    setAttr \".h\" " + compHeight + ";");
    myFile.writeln("    setAttr \".dar\" " + frameAspect + ";");
    myFile.writeln("");

    //connect the nodes together
    myFile.writeln("connectAttr \"" + CamName + "_TranslateX.o\" \"" + CamName + ".tx\";");
    myFile.writeln("connectAttr \"" + CamName + "_TranslateY.o\" \"" + CamName + ".ty\";");
    myFile.writeln("connectAttr \"" + CamName + "_TranslateZ.o\" \"" + CamName + ".tz\";");
    myFile.writeln("");
    myFile.writeln("connectAttr \"" + CamName + "_RotateX.o\" \"" + CamName + ".rx\";");
    myFile.writeln("connectAttr \"" + CamName + "_RotateY.o\" \"" + CamName + ".ry\";");
    myFile.writeln("connectAttr \"" + CamName + "_RotateZ.o\" \"" + CamName + ".rz\";");
    myFile.writeln("");
    myFile.writeln("connectAttr \"" + CamName + "Shape_FocalLength.o\"\"" + CamName + "Shape.fl\";");
    myFile.writeln("");


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // modifications by Nick Fox-Gieg

    for (var i=1; i < allLayers.length; i++){
        var curLayer = allLayers[i];
        //if (curLayer.numKeys > 0) Bake(theComp,curLayer.property("Position"),curLayer.property("Position"));

        var curLayerName = curLayer.name.replace(/[^a-zA-Z0-9]+/g,"");

        if (curLayer.matchName != "ADBE Camera Layer" && curLayerName != CamName + "Parent"){
            pos = curLayer.property("Position").valueAtTime(0,false);
            Xpos=(pos[0]-worldCenter[0])/worldScale;
            Ypos=-((pos[1]-worldCenter[1])/worldScale);
            Zpos=-(pos[2]/worldScale);

            myFile.writeln("createNode transform -n \"" + curLayerName +"\";");
            
            myFile.writeln("setAttr \".t\" -type \"double3\" " + Xpos + " " + Ypos + " " + Zpos + " ;");
            myFile.writeln("setAttr -av \".tx\";");
            myFile.writeln("setAttr -av \".ty\";");
            myFile.writeln("setAttr -av \".tz\";");
            
            myFile.writeln("createNode locator -n \"locatorShape"+ i +"\" -p \"" + curLayerName +"\";");
            myFile.writeln("setAttr -k off \".v\";");
            
            /*
            if (curLayer.numKeys > 0) {

                // X position
                myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateX\";");
                myFile.writeln("    setAttr \".tan\" 9;");
                myFile.writeln("    setAttr \".wgt\" no;");
                myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

                for (i=1;i<=totalFrames;i++) {
                    f=(i-1)*frameDuration;
                    pos=curLayer.position.valueAtTime(f, false);
                    Xpos=(pos[0]-worldCenter[0])/worldScale;
                    myFile.write(" " + i + " " + Xpos);
                }

                myFile.write(";");
                myFile.writeln("");
                myFile.writeln("");

                 // Y position
                myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateY\";")
                myFile.writeln("    setAttr \".tan\" 9;");
                myFile.writeln("    setAttr \".wgt\" no;");
                myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

                for (i=1;i<=totalFrames;i++) {
                    f=(i-1)*frameDuration;
                    pos=curLayer.position.valueAtTime(f, false);
                    Ypos=-((pos[1]-worldCenter[1])/worldScale);
                    myFile.write(" " + i + " " + Ypos);
                }

                myFile.write(";");
                myFile.writeln("");
                myFile.writeln("");

                // Z position
                myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateZ\";");
                myFile.writeln("    setAttr \".tan\" 9;");
                myFile.writeln("    setAttr \".wgt\" no;");
                myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

                for (i=1;i<=totalFrames;i++) {
                    f=(i-1)*frameDuration;
                    pos=curLayer.position.valueAtTime(f, false);
                    Zpos=-(pos[2]/worldScale);
                    myFile.write(" " + i + " " + Zpos);
                }

                myFile.write(";");
                myFile.writeln("");
                myFile.writeln("");

                myFile.writeln("connectAttr \"" + curLayerName + "_translateX.o\" \"" + curLayerName + ".tx\";");
                myFile.writeln("connectAttr \"" + curLayerName + "_translateY.o\" \"" + curLayerName + ".ty\";");
                myFile.writeln("connectAttr \"" + curLayerName + "_translateZ.o\" \"" + curLayerName + ".tz\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_visibility.o\" \"" + curLayerName + ".v\";");
        
                myFile.writeln("");
                
                //myFile.writeln("connectAttr \"" + curLayerName + "_rotateX.o\" \"" + curLayerName + ".rx\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_rotateY.o\" \"" + curLayerName + ".ry\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_rotateZ.o\" \"" + curLayerName + ".rz\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_scaleX.o\" \"" + curLayerName + ".sx\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_scaleY.o\" \"" + curLayerName + ".sy\";");
                //myFile.writeln("connectAttr \"" + curLayerName + "_scaleZ.o\" \"" + curLayerName + ".sz\";");
            }
            */
            
        }
    }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //finish it all up...

    //set work area 
    myFile.writeln("createNode script -n \"sceneConfigurationScriptNode\";");
    myFile.writeln("    setAttr \".b\" -type \"string\"\"playbackOptions -min 1.0 -max " + totalFrames + " -ast 1.0 -aet " + totalFrames + "\";");
    myFile.writeln("    setAttr \".st\" 6;");
    myFile.writeln("");
    myFile.writeln("//End of " + CamName + ".ma");

    myFile.close();

    //erase baked camera and its parent

    theComp.layer(2).remove();
    theComp.layer(1).remove();

    app.endUndoGroup();
}  //end script

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//COMMON FUNCTIONS

//~~~~~~~~~~~~~~~~~~~
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

//allow only names that contain letters and numbers, and do not start with a number
function removeForbiddenCharacters(theName) {
    FirstChar=theName.charAt(0);
    if (FirstChar>"0" && FirstChar<"9") {theName="Cam" + theName};
    theName=theName.replace(/[^a-zA-Z0-9]+/g,"");//remove special characters and spaces
    return(theName);
}

//  Convert Expression to Keyframes (in the work area)
function Bake(theComp, propBeingCopied, propBeingWritten) {
    StartBake=theComp.workAreaStart;
    EndBake=StartBake+theComp.workAreaDuration;
    NextFrame=1/theComp.frameRate;
    for (var i=StartBake; i<EndBake; i=i+NextFrame) {
        propBeingWritten.setValueAtTime(i,propBeingCopied.valueAtTime(i, false));
    }
}

//make null layer 3D, set in and out points, center it, turn off light calculations
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

//find the index number of a layer in the comp by name
function findNumberOfLayerByName(LayerName,theComp){
    for (i=theComp.numLayers;i>=1;i--){
        theLayer=theComp.layer(i);
        if (theLayer.name==LayerName) {return(i)};
    }
}

//Deselect everything in the project window
function DeselectProjectWindowItems(){
    for (i=app.project.items.length;i>=1;i--) {
        item=app.project.items[i];
        if (item.selected){item.selected=false};
    }
}

//Deselect all the layers in the active Comp
function DeselectLayers(theComp){
    for (i=theComp.numLayers;i>=1;i--){
        item=theComp.layer(i);
        if (item.selected){item.selected=false};
    }
}
//~~~~~~~~~~~~~~~~~~~

function kill(target){
    var items = app.project.items;

    for (var i = items.length; i >= 1; i--){
        if (items[i]==target || items[i].name==target.name || items[i].name==target || items[i]==target.name){
            items[i].remove();
        }
    }
}

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
    } else {
        Bake(app.project.activeItem,theProperty,theProperty);        
    }
}

function convertAudioToKeyframes(target){
    target.selected = true;
    app.executeCommand(app.findMenuCommandId("Convert Audio to Keyframes"));
    target.selected = false; 
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EXAMPLES

// 26.  Type: apply process to any number of layers
function writeExample() {  //start script
    app.beginUndoGroup("Export Example File");

    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)) {
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert("Please select some layers and run the script again.");
        } else {

            //~~~~~~~~~~~~~~~~~~

            var fileMainHeader = "Sample Main Header" + "\r";
            var fileMainFooter = "Sample Main Footer" + "\r";
            var scaleFactor = 1.0;

            var myFile = File.saveDialog("Save your file", ".txt", "");
            var fileOK = myFile.open("w","TEXT","????");

            myFile.writeln(fileMainHeader);
            //~~~~~~~~~~~~~~~~~~
            for(var i = 0; i < theLayers.length; i++){
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var fileName = theComp.name + "_" + curLayer.name;
                var fileLayerHeader = "Sample Layer Header" + "\r";
                var fileLayerFooter = "Sample Layer Footer" + "\r";

                myFile.writeln(fileLayerHeader);

                var p = curLayer.property("Position");
                for(var j = 0; j < p.numKeys; j++) {
                    var pp = p.keyValue(j+1);

                    pp[0] = ( (pp[0]-(theComp.width/2)) / theComp.width ) * scaleFactor;
                    pp[1] = ( -1 * (pp[1]-(theComp.height/2)) / theComp.height) * scaleFactor;
                    pp[2] = ( pp[2] / ((theComp.width+theComp.height)/2) ) * scaleFactor;
                
                    var fileKeyPos = "time: " + p.keyTime(j+1) + ", x: " + pp[0] + ", y: " + pp[1] + ", z: " + pp[2] + "\r";
                                      
                    myFile.writeln(fileKeyPos);
                
               }              
                myFile.writeln(fileLayerFooter);
            }
            myFile.writeln(fileMainFooter);
            myFile.close;    
        }
    }

    app.endUndoGroup();
}  //end script

// Import XML or JSON file of tracking data for 3D characters
function importMocap3D(){  //start script
    app.beginUndoGroup("Import 3D Points From XML or JSON");

    if(parseFloat(app.version) >= 10.5){


    var myComp = app.project.activeItem;
    var fileType="xml";
    var myRoot;
    //load xml or json file
    var myFile = File.openDialog();
    var fileOK = myFile.open("r");
    if (fileOK){
        var myFileString = myFile.read();
        if(myFile.name.split('.').pop()=="xml"){
            fileType="xml";
            myRoot = new XML(myFileString);
        }else if(myFile.name.split('.').pop()=="json"){
            fileType="json";
            myRoot = eval("(" + myFileString + ")");
        }
        myFile.close();
    }
    
    if(fileType=="xml"){
        //~~~~~~~~~~~~~~~~~begin 3D XML version
        var compRate = parseFloat(myRoot.@fps); // comp frame rate

        var sW = parseFloat(myRoot.@width);
        var sH = parseFloat(myRoot.@height);
        var sD = parseFloat(myRoot.@depth);

        var mocap = myComp.layer("mocap");

        var trackPoint = jointNamesMaster;

        // add joint information
        for(var j=0;j<trackPoint.length;j++){
            var myEffect = mocap.property("Effects").property(trackPoint[j]);
            myEffect.name = trackPoint[j];
            var p = mocap.property("Effects")(trackPoint[j])("3D Point");

            for(var i=0;i<myRoot.MocapFrame.length();i++){
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                //keyframes go here
                //var pTfps = myRoot.@fps;
                var pT = i/compRate;
                var pXs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@x;
                var pYs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@y;
                var pZs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@z;

                if(pXs != "NaN" && pYs != "NaN" && pZs != "NaN"){
                    var pX = parseFloat(pXs);
                    var pY = parseFloat(pYs);
                    var pZ = parseFloat(pZs);
                    p.setValueAtTime(pT, [pX * sW, pY * sH, pZ * sD]);
                }
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            }


        }
        //~~~~~~~~~~~~~~~~~end 3D XML version
    } else if(fileType=="json"){
        //~~~~~~~~~~~~~begin 3D JSON version
            var compRate = myRoot.MotionCapture.fps; // comp frame rate
            var sW = myRoot.MotionCapture.width;
            var sH = myRoot.MotionCapture.height;
            var sD = myRoot.MotionCapture.depth;
            
            var mocap = myComp.layer("mocap");

            var trackPoint = jointNamesMaster;

            // add joint information
        for(var name in myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints){
            var myEffect = mocap.property("Effects").property(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name);
            myEffect.name = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name;
            var p = mocap.property("Effects")(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name)("3D Point");
            
            for(var i=0;i<myRoot.MotionCapture.numFrames;i++){
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //keyframes go here
                    var pT = i/compRate;
                    var pX = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].x;
                    var pY = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].y;
                    var pZ = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].z;
                    p.setValueAtTime(pT, [pX,pY,pZ]);
                    
                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            }
            
        }
        //~~~~~~~~~~~~~end 3D JSON version
    }       
} else {
             alert("Sorry, this feature only works with CS5.5 and higher.");
     }
 
    app.endUndoGroup();
}  //end script

}