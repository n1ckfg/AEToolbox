// AEToolbox 1.3.1
// by Nick Fox-Gieg
// fox-gieg.com
//
// ExtendScript/Script UI documentation by Victoria Nece
// victorianece.com
// 
// Thanks to: songZ, Jeff Almasol, Jered Cuenco, Dan Ebberts, Ryan Gilmore, 
// Christopher Green, Peter Kahrel, Chris Wright.
//

(function AEToolbox(_panel) {
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// UI Panel Setup
function init(_panel) {
    // * * * * * *
    var panel = (_panel instanceof Panel) ? _panel : new Window("palette", "AEToolbox 1.3.1",[0,0,170,300]);
    // * * * * * *
    if (panel !== null) {
        // 1-5. Draw buttons
        //-----------------------------------------------------
        // buttons coordinates are X start, Y start, X end, Y end
        var butYoffset = 10;
        var butYoffsetCap = 4;
        //--
        var butXstart = 8;
        var butXend = 149;
        var butYstart = 15 + butYoffset;
        var butYend = 43 + butYoffset;
        var butYinc = 30;
        //--
        var colXstart = 4;
        var colXend = 165;
        var colYstart = 4 + butYoffset;
        var colYendBase = 33;
        var colXinc = 170;

        // Basic group
        var col1butCount = 8;
        panel.basicGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col1butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.basicGroup0 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Nulls for Pins");
        panel.basicGroup1 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Parent Chain");
        panel.basicGroup2 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "Locator Null");
        panel.basicGroup3 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "Move to Position");
        panel.basicGroup4 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], "Make Loop");
        panel.basicGroup5 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], "Random Position");
        panel.basicGroup6 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], "Graph Audio");
        panel.basicGroup7 = panel.basicGroup.add("button", [butXstart,butYstart+(butYinc*7),butXend,butYend+(butYinc*7)], "Isolate Color");
       
        // Advanced group
        var col2butCount = 6;
        panel.advGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col2butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.advGroup0 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Bake Keyframes");
        panel.advGroup1 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Lock Y Rotation");
        panel.advGroup2 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "Auto Z Rotation");
        panel.advGroup3 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "Parentable Null");
        panel.advGroup4 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], "Sine Generator");
        panel.advGroup5 = panel.advGroup.add("button", [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], "Crossfade");
        
        // Rigging group
        var col3butCount = 7;
        panel.rigGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.rigGroup0 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Blink Rig");
        panel.rigGroup1 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Jaw Rig");
        panel.rigGroup2 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "Snake Rig");
        panel.rigGroup3 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "Beam Rig");
        panel.rigGroup4 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], "Camera Rig");
        panel.rigGroup5 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], "MoSketch Rig");
        panel.rigGroup6 = panel.rigGroup.add("button", [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], "Photo Rig");
      
        // Depth group
        var col4butCount = 7;
        panel.depthGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col4butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.depthGroup0 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Split s3D Pair");
        panel.depthGroup1 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Merge s3D Pair");
        panel.depthGroup2 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "s3D Dispmap");
        panel.depthGroup3 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "Depth Fill");
        panel.depthGroup4 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], "Depth Sort");
        panel.depthGroup5 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], "Stereo Controller");
        panel.depthGroup6 = panel.depthGroup.add("button", [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], "Gray to RGB");
      
        // Picture-in-picture / Reformatting group
        var col5butCount = 5;
        panel.pipGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col5butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.pipGroup0 = panel.pipGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Vive Recording");
        panel.pipGroup1 = panel.pipGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Holoflix");
        panel.pipGroup2 = panel.pipGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "RGBD Toolkit");
        panel.pipGroup3 = panel.pipGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "InstaGrid");
        panel.pipGroup4 = panel.pipGroup.add("button", [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], "4K Stereo 360");

        // Guide group
        var col6butCount = 2;
        panel.guideGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col6butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.guideGroup0 = panel.guideGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Onion Skin");
        panel.guideGroup1 = panel.guideGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Skeleton View");
       
        // Export group
        var col7butCount = 4;
        panel.exportGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col7butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.exportGroup0 = panel.exportGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "Camera to Maya");
        panel.exportGroup1 = panel.exportGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Unity Anim");
        panel.exportGroup2 = panel.exportGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "JSON Export Test");
        panel.exportGroup3 = panel.exportGroup.add("button", [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], "XML Export Test");

        // Import group
        var col8butCount = 1;
        panel.importGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col8butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.importGroup0 = panel.importGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "GML to Position");

        // Plugin group
        var col9butCount = 3;
        panel.pluginGroup = panel.add("panel", [colXstart, colYstart, colXend, colYendBase+(col9butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
        panel.pluginGroup0 = panel.pluginGroup.add("button", [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], "RSMB Twos");
        panel.pluginGroup1 = panel.pluginGroup.add("button", [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], "Particular Rig");
        panel.pluginGroup2 = panel.pluginGroup.add("button", [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], "Freeform Pro Rig");

        // 2-5. Link buttons to functions
        //-----------------------------------------------------
        panel.basicGroup0.onClick = nullsForPins;
        panel.basicGroup1.onClick = parentChain;
        panel.basicGroup2.onClick = locatorNull;
        panel.basicGroup3.onClick = moveToPos;
        panel.basicGroup4.onClick = makeLoop;
        panel.basicGroup5.onClick = randomPos;
        panel.basicGroup6.onClick = graphAudio;
        panel.basicGroup7.onClick = isolateColor;
        //--
        panel.advGroup0.onClick = bakePinKeyframes;
        panel.advGroup1.onClick = lockRotation;
        panel.advGroup2.onClick = autoOrientZ;
        panel.advGroup3.onClick = parentableNull;
        panel.advGroup4.onClick = sineWave;
        panel.advGroup5.onClick = crossfader;
        //--
        panel.rigGroup0.onClick = charBlink;
        panel.rigGroup1.onClick = charJaw;
        panel.rigGroup2.onClick = charSnake;
        panel.rigGroup3.onClick = charBeam;
        panel.rigGroup4.onClick = handheldCamera;
        panel.rigGroup5.onClick = threeDmoSketch;
        panel.rigGroup6.onClick = photoRig;
        //--
        panel.depthGroup0.onClick = splitStereoPair;
        panel.depthGroup1.onClick = mergeStereoPair;
        panel.depthGroup2.onClick = stereoDispMap;
        panel.depthGroup3.onClick = depthFill;
        panel.depthGroup4.onClick = depthSort;
        panel.depthGroup5.onClick = stereoController;
        panel.depthGroup6.onClick = doRgbToGray;
        //--
        panel.pipGroup0.onClick = viveRecording;
        panel.pipGroup1.onClick = holoflix720p;
        panel.pipGroup2.onClick = rgbdtk;
        panel.pipGroup3.onClick = instaGrid;
        panel.pipGroup4.onClick = stereo360;
        //--
        panel.guideGroup0.onClick = onionSkin;
        panel.guideGroup1.onClick = skeleView;
        //--
        panel.exportGroup0.onClick = cameraToMaya;
        panel.exportGroup1.onClick = unityAnim;
        panel.exportGroup2.onClick = jsonExport;
        panel.exportGroup3.onClick = xmlExport;
        //--
        panel.importGroup0.onClick =  gmlToPos;
        //--
        panel.pluginGroup0.onClick = rsmbTwos;
        panel.pluginGroup1.onClick = charParticle;
        panel.pluginGroup2.onClick = freeformRig;
        // 3-5. Tooltips
        //-----------------------------------------------------
        panel.basicGroup0.helpTip = "Creates a controller null for each puppet pin on a layer."; //nullsForPins;
        panel.basicGroup1.helpTip = "Parent a chain of layers one to another."; //parentChain;
        panel.basicGroup2.helpTip = "Creates a new null at the location of each selected layer."; //locatorNull;
        panel.basicGroup3.helpTip = "Moves all layers to the location of the last selected layer."; //moveToPos;
        panel.basicGroup4.helpTip = "Puts a cycle expression on Time Remap."; //makeLoop;
        panel.basicGroup5.helpTip = "Randomizes a layer's position."; //randomPos;
        panel.basicGroup6.helpTip = "Converts audio to keyframes and enables the graph view."; //graphAudio;
        panel.basicGroup7.helpTip = "Keys out everything but selected color."; //isolateColor;
        //--
        panel.advGroup0.helpTip = "Bakes expressions and puppet pins to keyframes."; //bakePinKeyframes;
        panel.advGroup1.helpTip = "Forces a layer to always face the camera."; //lockRotation;
        panel.advGroup2.helpTip = "Smart 2D auto-rotation."; //autoOrientZ;
        panel.advGroup3.helpTip = "Creates a null with expressions that solve certain parenting problems."; //parentableNull;
        panel.advGroup4.helpTip = "Applies sine-wave motion controls to a layer."; //sineWave;
        panel.advGroup5.helpTip = "Fades a layer into a duplicate of itself for a seamless loop."; //crossfader;
        //--    
        panel.rigGroup0.helpTip = "Turns a blink layer inside the comp on and off."; //charBlink;
        panel.rigGroup1.helpTip = "Rigs a jaw layer inside the comp for audio control."; //charJaw;
        panel.rigGroup2.helpTip = "Rigs a puppet-pin layer for automated snake-like movement."; //charSnake;
        panel.rigGroup3.helpTip = "Creates a 3D laser effect with start and end nulls."; //charBeam;
        panel.rigGroup4.helpTip = "Creates a camera rigged for point-of-interest and DoF control."; //handheldCamera;
        panel.rigGroup5.helpTip = "Creates a null with 3D controls for use with Motion Sketch."; //threeDmoSketch;
        panel.rigGroup6.helpTip = "Creates precomps that each display one frame from a sequence."; //photoRig;
        //--
        panel.depthGroup0.helpTip = "Splits a stereo 3D pair video into two left and right comps."; //splitStereoPair;
        panel.depthGroup1.helpTip = "Merges two left and right comps into a stereo 3D pair comp."; //mergeStereoPair;
        panel.depthGroup2.helpTip = "Creates an s3D pair from the first layer, using the second layer for displacement."; //stereoDispMap;
        panel.depthGroup3.helpTip = "Creates a grayscale depth fill based on distance to camera."; //stereoDispMap;
        panel.depthGroup4.helpTip = "Sorts layer order by depth."; //depthSort;
        panel.depthGroup5.helpTip = "Creates a stereo controller null for a single camera."; //stereoController;
        panel.depthGroup6.helpTip = "Converts between rgb and grayscale depth maps."; //doRgbToGray;
        //--
        panel.pipGroup0.helpTip = "Splits a quad Vive recording into separate layers." //viveRecording;
        panel.pipGroup1.helpTip = "Splits a Holoflix clip into RGB and depth comps." //holoflix720p;
        panel.pipGroup2.helpTip = "Splits an RGBD Toolkit clip into RGB and depth comps." //rgbdtk;
        panel.pipGroup3.helpTip = "Turns six Instagram clips into a 3 x 2 HD grid." //instaGrid;
        panel.pipGroup4.helpTip = "Creates a 4K OU 360 stereo comp." //stereo360;
        //--
        panel.guideGroup0.helpTip = "Creates an adjustment layer that applies an onion skin effect."; //onionSkin;
        panel.guideGroup1.helpTip = "View connections between parent and child layers."; //skeleView;
        //--
        panel.exportGroup0.helpTip = "Export camera to Maya."; //cameraToMaya;
        panel.exportGroup1.helpTip = "Export keyframes to Unity anim."; //unityAnim;
        panel.exportGroup2.helpTip = "Export keyframes to JSON."; //jsonExport;
        panel.exportGroup3.helpTip = "Export keyframes to XML."; //xmlExport;
        //--
        panel.importGroup0.helpTip = "Import position keyframes from GML."; //gmlToPos;
        //--
        panel.pluginGroup0.helpTip = "Reelsmart Motion Blur for animation on twos."; //rsmbTwos;
        panel.pluginGroup1.helpTip = "Particular null controller for particles."; //charParticle;
        panel.pluginGroup2.helpTip = "Freeform Pro rig for volumetric video."; //charParticle;

        // 4-5. Selector
        //-----------------------------------------------------
        var selector = panel.add("dropdownlist",[colXstart, colYstart, colXend, colYendBase],[ "Basic", "Advanced", "Rigging", "Depth", "Reformat", "Guide", "Export", "Import", "Plugins" ]);

        selector.onChange = function() {
            panel.basicGroup.visible = false;
            panel.advGroup.visible = false;
            panel.rigGroup.visible = false;
            panel.depthGroup.visible = false;
            panel.pipGroup.visible = false;
            panel.guideGroup.visible = false;
            panel.exportGroup.visible = false;    
            panel.importGroup.visible = false;    
            panel.pluginGroup.visible = false;    

            if (selector.selection == 0) { // Basic
                panel.basicGroup.visible = true;
            } else if (selector.selection == 1) { // Advanced
                panel.advGroup.visible = true;
            } else if (selector.selection == 2) { // Rigging
                panel.rigGroup.visible = true;
            } else if (selector.selection == 3) { // Depth
                panel.depthGroup.visible = true;
            } else if (selector.selection == 4) { // PiP
                panel.pipGroup.visible = true;
            } else if (selector.selection == 5) { // Guide
                panel.guideGroup.visible = true;
            } else if (selector.selection == 6) { // Export
                panel.exportGroup.visible = true;
            } else if (selector.selection == 7) { // Import
                panel.importGroup.visible = true;
            } else if (selector.selection == 8) { // Plugins
                panel.pluginGroup.visible = true;
            }      
        }

        selector.selection = 0;

    }
    return panel
}

// 5-5. standard error messages;
//-----------------------------------------------------
var errorNoCompSelected = "Select a comp.";
var errorNoPrecompSelected = "Select a precomp.";
var errorNoLayerSelected = "Select a layer.";
var errorPrecompOnly = "This only works on precomps.";
var errorFootageOnly = "This only works on footage layers.";
var errorCameraOnly = "This only works on cameras.";
var errorOneCameraOnly = "This only works on one camera.";
var cs55warning = "Requires CS5.5 and higher."

// * * * * * *
var aetbUI = init(_panel);

if (aetbUI !== null) {
    if (aetbUI instanceof Window) {
        aetbUI.center();
        aetbUI.show();
    } else {
        // aetbUI.layout.layout(true);
    }
}
// * * * * * *

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: process for any number of layers or properties
function nullsForPins() {  
    app.beginUndoGroup("Create Nulls for Pins");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {   
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName == "ADBE AV Layer") {
                    //condition 2: must be a 2D layer
                    if (!curLayer.threeDLayer) {
                        //condition 3: must have puppet pins applied
                        if (curLayer.effect.puppet != null) {
                            var wherePins = curLayer.property("Effects").property("Puppet").property("arap").property("Mesh").property("Mesh 1").property("Deform");
                            var pinCount = wherePins.numProperties;
                            for (var n = 1; n <= pinCount; n++) {
                                // Get position of puppet pin
                                try { 
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
                                } catch(err) {}
                            }
                            curLayer.property("Effects").property("Puppet").property("On Transparent").setValue(1);                          
                            curLayer.locked = true;
                        } else { 
                            alert("Layer must have puppet pins.");
                        }
                    } else { 
                        alert("Layer must be 2D.");
                    }
                } else { 
                    alert(errorFootageOnly);
                }
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function parentChain() {
    app.beginUndoGroup("Parent Chain of Layers");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {  
                if (i == 0) {
                    for (var j = 0; j < theLayers.length; j++) {
                        if(theLayers[i].parent==theLayers[j]) theLayers[i].parent=null;
                    }
                } else { 
                    theLayers[i].parent = null;
                    theLayers[i].parent = theLayers[i-1];
                }
            }

            var doSkeleview = confirm("Create skeleton guide layer?");
            if (doSkeleview) {
                skeleView(false);
            }
        }
    }

    app.endUndoGroup();        
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: process for any number of layers or properties
function locatorNull() {  
    app.beginUndoGroup("Create Locator Nulls for Selected Layers");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            theComp.layers.addNull();
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                var mama;
                if(curLayer.parent) {
                    mama = curLayer.parent;
                    curLayer.parent = null;
                }
                var p = curLayer.property("position").value;
                var solid = theComp.layers.addNull();
                solid.name = curLayer.name + "_loc";

                if(curLayer.threeDLayer) solid.threeDLayer = true;

                solid.property("position").setValue(p);
                try {
                    curLayer.parent = mama;
                } catch(err) {}
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: process for any number of layers or properties
function moveToPos() {  
    app.beginUndoGroup("Move to Last Selected Layer's Position");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length <= 1) {
            alert("Select at least two Layers.");
        } else { 
            for (var i = 0; i < theLayers.length-1; i++) {
                var lastLayer = theLayers[theLayers.length-1];
                
                var curLayer = theLayers[i];
                var mama; //holds parent if we need to temporary disable it
                var papa;
                if(curLayer.parent) {
                    mama = curLayer.parent;
                    curLayer.parent = null;
                }
                if(lastLayer.parent) {
                    papa = lastLayer.parent;
                    lastLayer.parent = null;
                }
                //~~~~
                var lp = lastLayer.property("Position");
                var cp = curLayer.property("Position");
                if (lp.numKeys <= 0 && cp.numKeys <= 0) { // neither source nor dest has keys
                    cp.setValue(lp.value);               
                } else if (lp.numKeys > 0 && cp.numKeys <= 0) { // source has keys but dest doesn"t
                    cp.setValue(lp.value);               
                } else { // either source or dest has keys    
                    cp.setValueAtTime(theComp.time, lp.value);
                }

                //~~~~
                try {
                    curLayer.parent = mama;
                } catch(err) {}
                try {
                    lastLayer.parent = papa;
                } catch(err) {}
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: process for any number of layers--enables time remap and applies a loop script
function makeLoop() {  
    app.beginUndoGroup("Apply Loop Expression");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
            
                var curProperties = curLayer.selectedProperties;
                if (curProperties.length == 0) {
                    //alert("Please select some properties and run the script again.");
                    //*** Running this on a selected layer does a time remap... ***
                    if (curLayer.matchName == "ADBE AV Layer") {
                        curLayer.timeRemapEnabled = true;
                        var expr = "loopOut(\"cycle\");";
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
                    } else { 
                        alert(errorFootageOnly);
                    }                    
                } else { 
                    //*** Running this on selected properties cycles keyframes ***
                    for (var j = 0; j<curProperties.length; j++) {
                        var doIt = false;
                        try {
                            if (curProperties[j].numKeys > 0) doIt=true;
                        } catch(err) {}
                        if (doIt) {
                            var expr = "loopOut(\"cycle\");";
                            curProperties[j].expression = expr;
                        } else { 
                            alert("Can't apply this expression to a property with no keyframes.")
                        }
                    }
                }                            
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function randomPos() {
    app.beginUndoGroup("Randomize Position");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;
        var compDepth = 2000;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                var p = curLayer.property("Position");
                var x = Math.random() * theComp.width;
                var y = Math.random() * theComp.height;
                var z = Math.random() * compDepth;

                if (p.numKeys > 0) {
                    p.setValueAtTime(theComp.time, [x, y, z]);
                } else {
                    p.setValue([x, y, z]);
                }
            }
        }
    }
 
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function graphAudio() {  
    app.beginUndoGroup("Graph Audio");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                if (curLayer.matchName == "ADBE AV Layer" && curLayer.hasAudio) {
                    convertAudioToKeyframes(curLayer);
                    var allLayers = theComp.layers;
                    var aud = allLayers[1];
                    aud.name = curLayer.name + " Audio Amplitude";
                    var theProperty = aud.effect("Both Channels")("Slider");
                    theProperty.selected = true;
                } else { 
                    alert("Only works on layers with audio.");
                }
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers.
function isolateColor() {  
    app.beginUndoGroup("Isolate Color");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var setMatte = curLayer.property("Effects").addProperty("Set Matte");
                    setMatte.property("Take Matte From Layer").setValue(0);
                    setMatte.enabled = false;
                    var colorKey = curLayer.property("Effects").addProperty("Linear Color Key");
                    colorKey.property("Key Operation").setValue(2);
                    var simpleChoker = curLayer.property("Effects").addProperty("Simple Choker");
                } else { 
                    alert(errorFootageOnly);
                }
            }
        }
    }

    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to any number of layers or properties
function bakePinKeyframes() {  
    app.beginUndoGroup("Bake Pin Keyframes");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
                    if (curLayer.effect.puppet != null) {
                        var wherePins = curLayer.property("Effects").property("Puppet").property("arap").property("Mesh").property("Mesh 1").property("Deform");
                        var pinCount = wherePins.numProperties;
                        for (var n = 1; n <= pinCount; n++) {
                            // Get position of puppet pin
                            var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(n).position;
                            try {
                                convertToKeyframes(pin);
                            } catch(err) {}
                        }  
                    }
                    
                    var curProperty;
                    try {
                        curProperty = curLayer.property("position");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("anchorPoint");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("rotation");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("scale");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("opacity");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    //~~
                    try {
                        curProperty = curLayer.property("pointOfInterest");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("focusDistance");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                } else { 
                    alert("Only works on footage layers.");
                }
            }
        }
    }

    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function lockRotation() {
    app.beginUndoGroup("Apply Y Rotation Lock");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {  
                var curLayer = theLayers[i];  

                curLayer.threeDLayer = true;
                
                var expr = "var delta = toWorld(anchorPoint) - thisComp.activeCamera.toWorld([0,0,0]);" + "\r" + 
                           "radiansToDegrees(Math.atan2(delta[0],delta[2]));"

                curLayer.transform.yRotation.expression = expr;
            }
        }
    }   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function autoOrientZ() {
    app.beginUndoGroup("Apply Auto-Orient Z");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {  
                var curLayer = theLayers[i];  

                var easeSlider = curLayer.property("Effects").addProperty("Slider Control");
                easeSlider.name = "corner ease";
                easeSlider.property("Slider").setValue(3);

                var expr = "var cornerEase = effect(\"corner ease\")(\"Slider\");" + "\r" + 
                           "var pre = position.valueAtTime(time-thisComp.frameDuration*cornerEase);" + "\r" + 
                           "var post = position.valueAtTime(time+thisComp.frameDuration*cornerEase);" + "\r" + 
                           "var delta = post - pre;" + "\r" + 
                           "if (delta[0]==0 && delta[1]==0) {" + "\r" + // if no change in vector, maintain current heading
                           "  rotation;" + "\r" + 
                           "} else { " + "\r" + // use the vector direction to orient. Flip Y to account for cartesian Y being up and AE Y being down
                           "  radiansToDegrees(Math.atan2(delta[0],-delta[1]));" + "\r" + 
                           "}";
                if (curLayer.threeDLayer) {
                    curLayer.transform.zRotation.expression = expr;
                } else { 
                    curLayer.transform.rotation.expression = expr;
                }
            }
        }
    }   

    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: Generate null for things with weird coordinate spaces
function parentableNull() {  
    app.beginUndoGroup("Create Parentable Null");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var solid = theComp.layers.addNull();
                    solid.name = curLayer.name + "_ctl";
                    var expr = "var L = thisComp.layer(\"" + curLayer.name + "\");" + "\r" +
                               "L.toComp(L.transform.anchorPoint);";
                    solid.property("position").expression = expr;
                } else { 
                    alert(errorFootageOnly);
                }
            }
        }
    }

    app.endUndoGroup();
} 

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: process for any number of layers--applies sine wave controllers
function sineWave() {  
    app.beginUndoGroup("Apply Sine Wave Controls");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                
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
                expr += "var x = x2;" + "\r" +
                        "var y = y2;" + "\r"; 

                if(curLayer.threeDLayer) {
                        expr += "var z = transform.position[2];" + "\r";
                    } else { 
                        expr += "var z = 0;" + "\r";
                    }

                expr += "var amp = effect(\"amp\")(\"Slider\");" + "\r" +
                        "var freq = effect(\"freq\")(\"Slider\");" + "\r" +
                        "var ox = effect(\"x offset\")(\"Slider\");" + "\r" +
                        "var oy = effect(\"y offset\")(\"Slider\");" + "\r" + 
                        "var oz = effect(\"z offset\")(\"Slider\");" + "\r" + 
                        "var sx = amp * Math.sin(freq * (time + ox));" + "\r" +
                        "var sy = amp * Math.sin(freq * (time + oy));" + "\r" +
                        "var sz = amp * Math.sin(freq * (time + oz));" + "\r" +
                        "if (effect(\"x axis\")(\"Checkbox\") == 1) x += sx;" + "\r" +
                        "if (effect(\"y axis\")(\"Checkbox\") == 1) y += sy;" + "\r" +
                        "if (effect(\"z axis\")(\"Checkbox\") == 1) z += sz;" + "\r" +
                        "[x, y, z];";

                curLayer.property("Position").expression = expr;
            }
        }
    }
 
    app.endUndoGroup();
}  

/////////////////////////////////////////////////////////////////////////////////////////// 

// Notes: apply process to any number of layers
function crossfader() {
    app.beginUndoGroup("Crossfade Layers");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {  
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
            }
        }
    } 

    app.endUndoGroup();        
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: process for any number of layers--creates a Z slider for 2D Motion Sketch
function threeDmoSketch() {  
    app.beginUndoGroup("Prep for 3D Motion Sketch Rig");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
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
                   "[p[0] + o[0], p[1] + o[1], z + o[2]];";
        moNull.property("Position").expression = expr;
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: create controllers inside existing comp
function charJaw() {  
    var sideView = confirm("Is this a side view?");

    if(sideView) {
        app.beginUndoGroup("Create Character Jaw Rig Side");

        var theComp = app.project.activeItem; 
        
        if (theComp == null || !(theComp instanceof CompItem)) { 
            alert(errorNoCompSelected);
        } else {
            var theLayers = theComp.selectedLayers;
            if (theLayers.length==0) {
                alert(errorNoPrecompSelected);
            } else { 
                for (var i = 0; i < theLayers.length; i++) {
                    var curLayer = theLayers[i];
                    
                    if (curLayer.matchName == "ADBE AV Layer") {
                        var myLayer = theComp.selectedLayers[0];
                        if(myLayer.source.numLayers==null) {
                            alert(errorPrecompOnly);
                        } else { 
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

                            he
                            adNullExprScale = "var x = transform.scale[0];" + "\r" +
                                              "var y = transform.scale[1];" + "\r" +
                                              "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                              "[x, y + (s / -4)];";
                            headNull.property("Scale").expression = headNullExprScale;
                            //--
                            upperJawNullExprPos = "var x = transform.position[0];" + "\r" +
                                                  "var y = transform.position[1];" + "\r" +
                                                  "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                  "var scaler = -0.2;" + "\r" +
                                                  "[x, y + (s * scaler)];";
                            upperJawNullExprRot = "var r = transform.rotation;" + "\r" +
                                                  "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                  "var scaler = 0.2;" + "\r" +
                                                  "r + (s * scaler);";
                            upperJawNull.property("Position").expression = upperJawNullExprPos;
                            upperJawNull.property("Rotation").expression = upperJawNullExprRot;
                            //--
                            lowerJawNullExprPos = "var x = transform.position[0];" + "\r" +
                                                  "var y = transform.position[1];" + "\r" +
                                                  "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                  "var scaler = 2;" + "\r" +
                                                  "[x, y + (s * scaler)];";
                            lowerJawNullExprRot = "var r = transform.rotation;" + "\r" +
                                                  "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                  "var scaler = -1.0;" + "\r" +
                                                  "r + (s * scaler);";
                            lowerJawNull.property("Position").expression = lowerJawNullExprPos;
                            lowerJawNull.property("Rotation").expression = lowerJawNullExprRot;
                            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        }
                    } else { 
                        alert(errorPrecompOnly);
                    }
                }
            }
        }
        app.endUndoGroup();
    } else {
        app.beginUndoGroup("Create Character Jaw Rig Front");

        var theComp = app.project.activeItem; 

        if (theComp == null || !(theComp instanceof CompItem)) {
            alert(errorNoCompSelected);
        } else {
            var theLayers = theComp.selectedLayers;
            if (theLayers.length==0) {
                alert(errorNoPrecompSelected);
            } else { 
                for (var i = 0; i < theLayers.length; i++) {
                    var curLayer = theLayers[i];
                    
                    if (curLayer.matchName == "ADBE AV Layer") {
                        var myLayer = theComp.selectedLayers[0];
                        if(myLayer.source.numLayers==null) {
                            alert(errorPrecompOnly);
                        } else { 
                            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            //myLayer is indeed a precomp. OK to do stuff.
                            var slider = myLayer.property("Effects").addProperty("Slider Control");
                            slider.name = "jaw front control"
                            var headNull = myLayer.source.layers.addNull();
                            var lowerJawNull = myLayer.source.layers.addNull();
                            headNull.name = "head placeholder";
                            lowerJawNull.name = "lower jaw placeholder";

                            //when asset replaces null, anchor point will be centered.
                            headNull.transform.anchorPoint.setValue([50,50]);
                            lowerJawNull.transform.anchorPoint.setValue([50,50]);
                            headNull.property("Opacity").setValue(100);
                            lowerJawNull.property("Opacity").setValue(100);

                            //parenting jaws to head
                            lowerJawNull.parent = headNull;

                            lowerJawNullExprPos = "var scaler = 1.0;" + "\r" +
                                                  "var x = transform.position[0];" + "\r" +
                                                  "var y = transform.position[1];" + "\r" +
                                                  "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                  "[x, y + (s * scaler)];";
                            lowerJawNullExprScale = "var scaler = 1.0;" + "\r" +
                                                    "var s = comp(\"" + theComp.name + "\").layer(\"" + myLayer.name + "\").effect(\"" + slider.name + "\")(\"Slider\");" + "\r" +
                                                    "var x = transform.scale[0];" + "\r" +
                                                    "var y = transform.scale[1];" + "\r" +
                                                    "[x, y + (s * scaler)];";                                        
                            lowerJawNull.property("Position").expression = lowerJawNullExprPos;
                            lowerJawNull.property("Scale").expression = lowerJawNullExprScale;
                            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        }
                    } else { 
                        alert(errorPrecompOnly);
                    }
                }
            }
        }
     
        app.endUndoGroup();
    }
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: Create layers inside an existing precomp.
function charBlink() {  
    app.beginUndoGroup("Create Character Blink Control");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else {
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoPrecompSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var myLayer = theComp.selectedLayers[0];
                    if(myLayer.source.numLayers==null) {
                        alert(errorPrecompOnly);
                    } else { 
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
                } else { 
                    alert(errorPrecompOnly);
                }
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// One-shot--create a bunch of objects and scripts.
function handheldCamera() {  
    app.beginUndoGroup("Create a \"Handheld\" Camera");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
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
                    "[x, y, z];";
        compcam.property("Point of Interest").expression = expr1;

        var expr2 = "var target = thisComp.layer(\"" + ctlFoc.name + "\");" + "\r" +
                    "var v1 = target.toWorld(target.anchorPoint) - toWorld([0,0,0]);" + "\r" +
                    "var v2 = toWorldVec([0,0,1]);" + "\r" +
                    "dot(v1, v2);";
        compcam.property("Focus Distance").expression = expr2;
        compcam.property("Camera Options").property("Depth of Field").setValue(1);
        compcam.property("Camera Options").property("Aperture").setValue(50);
        compcam.property("Camera Options").property("Blur Level").setValue(200);
        compcam.locked = true;
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: Duplicates layers with time remap expression.
function photoRig() {  
    app.beginUndoGroup("Create Photo Rig");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
            
                //*** Running this on a selected layer does a time remap... ***
                if (curLayer.matchName == "ADBE AV Layer" && curLayer.source.numLayers != null) {
                    var solid = theComp.layers.addNull();
                    solid.name = getUniqueName("photos_ctl");

                    var offsetSlider = solid.property("Effects").addProperty("Slider Control");
                    offsetSlider.name = "offset";
                    offsetSlider.property("Slider").setValue(-1);

                    // pre-calculate original duration and store it in a slider. Use that instead of current duration.      
                    var durationSlider = solid.property("Effects").addProperty("Slider Control");
                    durationSlider.name = "duration";
                    var duration = curLayer.outPoint - curLayer.inPoint;
                    durationSlider.property("Slider").setValue(duration);

                    curLayer.moveToBeginning();
                    curLayer.timeRemapEnabled = true;

                    /*
                    var expr = "var offset = thisComp.layer(\"" + solid.name + "\").effect(\"offset\")(\"Slider\");\n" +
                               "var dur = (comp(thisLayer.name).layer(1).outPoint - comp(thisLayer.name).layer(1).inPoint);\n" +
                               "dur - (((index + offset) / thisComp.numLayers) * dur);";
                    */

                    var expr = "var offset = thisComp.layer(\"" + solid.name + "\").effect(\"offset\")(\"Slider\");\n" +
                               "var dur = thisComp.layer(\"" + solid.name + "\").effect(\"duration\")(\"Slider\");\n" +
                               "dur - (((index + offset) / thisComp.numLayers) * dur);";

                    curLayer.timeRemap.expression = expr;
                    for (var j=0; j < ((curLayer.outPoint - curLayer.inPoint) * curLayer.source.frameRate) - 1; j++) {
                        var newLayer = curLayer.duplicate();
                        //newLayer.inPoint += (j + 1) / theComp.frameRate;
                        //newLayer.inPoint += (j + 1) * (curLayer.outPoint - curLayer.inPoint);
                        newLayer.moveToBeginning();
                    }

                    solid.moveToBeginning();
                    solid.locked = true;
                    solid.enabled = false;
                } else { 
                    alert(errorPrecompOnly);
                }                    
                                           
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: One-shot--create a complex bunch of objects and scripts.
function charBeam() {  
    app.beginUndoGroup("Create a Beam Rig");

    var doLightning = confirm("Render lightning?");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else {
        var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Beam Solid", theComp.width, theComp.height, 1);
        solid.locked = true;
        
        if (!doLightning) {
            var beam_baseSize = solid.property("Effects").addProperty("Slider Control");
            beam_baseSize.name = "Base Size";
            beam_baseSize.property("Slider").setValue(8);
            var beam_maxSize = solid.property("Effects").addProperty("Slider Control");
            beam_maxSize.name = "Max Size";
            beam_maxSize.property("Slider").setValue(1000);
            var beam_minSize = solid.property("Effects").addProperty("Slider Control");
            beam_minSize.name = "Min Size";
            beam_minSize.property("Slider").setValue(1);
        } else {
            var beam_baseSize = solid.property("Effects").addProperty("Slider Control");
            beam_baseSize.name = "Randomize";
            beam_baseSize.property("Slider").setValue(0);            
        }

        var beam;
        if (doLightning) {
            beam = solid.property("Effects").addProperty("Advanced Lightning");
            beam.property("Lightning Type").setValue(2); //type strike
        } else {
            beam = solid.property("Effects").addProperty("Beam");
            beam.property("3D Perspective").setValue(0);
            beam.property("Length").setValue(1);
        }

        var beamStart = theComp.layers.addNull();
        beamStart.name = getUniqueName("beam_start"); //needs unique name
        beamStart.threeDLayer = true;
        beamStart.transform.position.setValue([(theComp.width/2)-200,theComp.height/2,0]);

        var beamEnd = theComp.layers.addNull();
        beamEnd.name = getUniqueName("beam_end"); //needs unique name
        beamEnd.threeDLayer = true;
        beamEnd.transform.position.setValue([(theComp.width/2)+200,theComp.height/2,0]);

        var expr1 = "fromComp(thisComp.layer(\"" + beamStart.name + "\").toComp(thisComp.layer(\"" + beamStart.name + "\").anchorPoint));";
        var expr2 = "fromComp(thisComp.layer(\"" + beamEnd.name + "\").toComp(thisComp.layer(\"" + beamEnd.name + "\").anchorPoint));";

        if (doLightning) {
            beam.property("Origin").expression = expr1;
            beam.property("Direction").expression = expr2;
        } else {
            beam.property("Starting Point").expression = expr1;
            beam.property("Ending Point").expression = expr2;
        }
        
        if (!doLightning) {
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
        } else {
            var expr3 = "random(effect(\"Randomize\")(\"Slider\"));";
            beam.property("Conductivity State").expression = expr3;
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: process for any number of layers or properties
function charSnake() {  
    app.beginUndoGroup("Snake Rig");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {  
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName == "ADBE AV Layer") {
                    //condition 2: must be a 2D layer
                    if (!curLayer.threeDLayer) {
                        //condition 3: must have puppet pins applied
                        if(curLayer.effect.puppet != null) {
                            var wherePins = curLayer.property("Effects").property("Puppet").property("arap").property("Mesh").property("Mesh 1").property("Deform");
                            var pinCount = wherePins.numProperties;

                            var solid = theComp.layers.addNull();
                            solid.name = "head_ctl";
                            var speedSlider = solid.property("Effects").addProperty("Slider Control");
                            speedSlider.name = "speed";
                            speedSlider.property("Slider").setValue(10);

                            for (var n = 1; n <= pinCount; n++) {
                                var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(n);

                                if(pin.name=="head" || pin.name=="Puppet Pin 1") {
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
                            
                            for (var o = 1; o <= pinCount; o++) {
                                // Get position of puppet pin
                                var pin = curLayer.effect("Puppet").arap.mesh("Mesh 1").deform(o);
                                //var solid = theComp.layers.addSolid([1.0, 1.0, 0], nullName, 50, 50, 1);
                                if(pin.name=="head" || pin.name=="Puppet Pin 1") {
                                    //
                                } else { 
                                    var pinExpr = "var delayFrames = thisComp.layer(\"head_ctl\").effect(\"speed\")(\"Slider\");" + "\r" +
                                                   "var p = effect(\"Puppet\").arap.mesh(\"Mesh 1\").deform(\"head\").position;" + "\r" +
                                                   "var idx = parseInt(thisProperty.propertyGroup(1).name.split(\" \")[2],10)-1;" + "\r" +
                                                   "var delay = idx * framesToTime(delayFrames);" + "\r" +
                                                   "p.valueAtTime(time-delay)";

                                    pin.position.expression = pinExpr;
                                }
                            }
                            
                            try {
                                curLayer.property("Effects").property("Puppet").property("On Transparent").setValue(1);                          
                                curLayer.locked = true;
                            } catch (e) {}
                        } else { 
                            alert("Only works on layers with puppet pins.");
                        }
                    } else { 
                        alert("Only works properly on 2D layers.");
                    }
                } else { 
                    alert(errorFootageOnly);
                }
            }
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to any number of layers
function doRgbToGray() {
    app.beginUndoGroup("Convert between rgb depth maps and grayscale");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;
        var doReverse = confirm("Reverse (RGB to Gray)?");
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            for (var i=0; i<theLayers.length; i++) {
                var precomp = theComp.layers.precompose([theLayers[i].index], theLayers[i].name, true);
                if (!doReverse) {
                    grayToRgbDepth(precomp);
                } else {
                    rgbToGrayDepth(precomp);
                }
            }
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: One-shot--create a bunch of objects and scripts.
function stereoController() { 
    app.beginUndoGroup("Create a Stereo Controller for a Camera");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else{
        if (theComp.selectedLayers.length == 0) {
            alert(errorNoLayerSelected);
        } else {
            theCamera = theComp.selectedLayers;

            if (theCamera.length > 1 || theCamera[0].zoom == null) {
                alert(errorOneCameraOnly);
            } else {
                var solid = theComp.layers.addNull();
                solid.name = getUniqueName("stereo_controller");
                solid.moveToBeginning();
                solid.enabled = false;

                var offsetSlider = solid.property("Effects").addProperty("Slider Control");
                offsetSlider.name = "offset";

                var expr1 = "var x = transform.pointOfInterest[0];" + "\r" +
                            "var y = transform.pointOfInterest[1];" + "\r" +
                            "var z = transform.pointOfInterest[2];" + "\r" +
                            "x += thisComp.layer(\"" + solid.name + "\").effect(\"" + offsetSlider.name + "\")(\"Slider\");" + "\r" +
                            "[x, y, z];";
                theCamera[0].property("Point of Interest").expression = expr1;

                var expr2 = "var x = transform.position[0];" + "\r" +
                            "var y = transform.position[1];" + "\r" +
                            "var z = transform.position[2];" + "\r" +
                            "x += thisComp.layer(\"" + solid.name + "\").effect(\"" + offsetSlider.name + "\")(\"Slider\");" + "\r" +
                            "[x, y, z];";
                theCamera[0].property("Position").expression = expr2;

                theCamera[0].locked = true; 

                //theComp.name += "_L";
                //var newComp = theComp.duplicate();
                //newComp.name += "_R";
            }
        }
    }          
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function depthFill() {
    app.beginUndoGroup("Depth Fill");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];

                if (curLayer.matchName != "ADBE Camera Layer") {
                    var effect1 = curLayer.property("Effects").addProperty("Slider Control");
                    effect1.name = "Depth Offset";
                    effect1.property("Slider").setValue(2000);

                    var effect2 = curLayer.property("Effects").addProperty("Fill");

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
                    alert("Doesn't work on camera layers.");
                }
            }
        }
    }
 
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function depthSort() {
    app.beginUndoGroup("Sort by Depth");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var cz;
        var isCamera = true;
        try {
            cz = theComp.activeCamera.property("Position").valueAtTime(theComp.time,true);
        } catch(err) {
            isCamera = false;
        }

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            var minMax = confirm("Sort from min to max depth?");
            if (minMax) {
                theLayers.sort(sortByZmin);
            } else {
                theLayers.sort(sortByZmax);
            }

            for (var i = 0; i < theLayers.length; i++) {
                theLayers[i].moveToBeginning();
            }
        }
    }

    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to two layers
function mergeStereoPair(doUndoGroup) {
    if (doUndoGroup) app.beginUndoGroup("Merge Stereo pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length != 2) {
            alert("Select exactly two layers.");
        } else { 
            var overUnder = confirm("Use over-under stereo?");

            var leftLayer = theLayers[0];
            var rightLayer = theLayers[1];

            leftLayer.name += " L";
            rightLayer.name += " R";
            
            rightLayer.audioEnabled = false;

            var sL = leftLayer.transform.scale.value;
            var sR = rightLayer.transform.scale.value;

            if (!overUnder) {
                sL[0] = ((theComp.width/2) / leftLayer.width) * 100;
                sL[1] = (theComp.height / leftLayer.height) * 100;
                sR[0] = ((theComp.width/2) / rightLayer.width) * 100;
                sR[1] = (theComp.height / rightLayer.height) * 100;
            } else { 
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

            if (!overUnder) {
                pL[0] = theComp.width*0.25;
                pL[1] = theComp.height*0.5;
                pR[0] = theComp.width*0.75;
                pR[1] = theComp.height*0.5;
            } else { 
                pL[0] = theComp.width*0.5;
                pL[1] = theComp.height*0.25;
                pR[0] = theComp.width*0.5;
                pR[1] = theComp.height*0.75;
            }

            leftLayer.transform.position.setValue([pL[0],pL[1]]);
            rightLayer.transform.position.setValue([pR[0],pR[1]]);
        }
    }

    if (doUndoGroup) app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to a whole comp
function stereoDispMap() {
    app.beginUndoGroup("s3D Displacement Map");

    var ioDistance = 6.0;
    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0 || theLayers.length > 2) {
            alert("Select one or two layers.");
        } else { 
            var overUnder = confirm("Use over-under stereo?");

            var oldLayer = theLayers[0];

            //if one layer selected, duplicated that layer and make it a precomp.
            //if two layers selected, put the second layer in the precomp.
            var newLayer;
            if (theLayers.length==1) {
                newLayer = oldLayer.duplicate();
            } else if (theLayers.length==2) {
                newLayer = theLayers[1];
            }

            var newPrecomp = theComp.layers.precompose([newLayer.index], "Precomp DispMap", true);
            newPrecomp.layers[1].property("Effects").addProperty("Levels");
            var fb = newPrecomp.layers[1].property("Effects").addProperty("Fast Blur");
            fb.property("Blurriness").setValue(10);

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
            for (var i=0; i<newComp.layers.length; i++) {
                if (newComp.layers[i+1].name=="Precomp DispMap") {
                    targetNum = i+2;
                }
            }
            
            var newLayer2;
            try {
                newLayer2 = newComp.layers[targetNum];
                var effect2 = newLayer2.property("Effects").property("Displacement Map");
                effect2.property("Max Horizontal Displacement").setValue(ioDistance);
            } catch(err) {
                alert("Displacement map must be selected last and be immediately above target layer." + "\r" + "You'll need to change displacement settings manually.")
            }
            
            //~~~~~~~~~~~~~
            //delete everything in stereoComp
            var theLayers1 = stereoComp.layers;
        
            while (theLayers1.length > 0) {  
                var curLayer = theLayers1[1];          
                curLayer.remove();
            }

            var stereoL = theLayers1.add(theComp);
            var stereoR = theLayers1.add(newComp);
            stereoR.audioEnabled = false;

            if (!overUnder) {
                stereoL.transform.scale.setValue([50,100]);
                stereoR.transform.scale.setValue([50,100]);
            } else { 
                stereoL.transform.scale.setValue([100,50]);
                stereoR.transform.scale.setValue([100,50]);                
            }
            
            if (!overUnder) {
                stereoL.transform.position.setValue([(stereoComp.width*0.25),(stereoComp.height*0.5)]);
                stereoR.transform.position.setValue([(stereoComp.width*0.75),(stereoComp.height*0.5)]);
            } else { 
                stereoL.transform.position.setValue([(stereoComp.width*0.5),(stereoComp.height*0.25)]);
                stereoR.transform.position.setValue([(stereoComp.width*0.5),(stereoComp.height*0.75)]);
            }   
        }
    }   

    app.endUndoGroup();    
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to a whole comp
function splitStereoPair() {
    app.beginUndoGroup("Split s3D Pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var overUnder = confirm("Use over-under stereo?");

        var newComp1 = theComp.duplicate();
        newComp1.name = theComp.name + " L";
        var theLayers1 = newComp1.layers;
        
        while (theLayers1.length > 0) {  
            var curLayer = theLayers1[1];          
            curLayer.remove();
        }

        var newComp1target = theLayers1.add(theComp);
        if (!overUnder) {
            newComp1.width = newComp1.width/2;
        } else { 
            newComp1.height = newComp1.height/2;
        }

        //~~~~~~~~~~~~~~~~~

        var newComp2 = theComp.duplicate();
        newComp2.name = theComp.name + " R";
        var theLayers2 = newComp2.layers;
        
        while (theLayers2.length > 0) {  
            var curLayer = theLayers2[1];          
            curLayer.remove();
        }

        var newComp2target = theLayers2.add(theComp);
        
        if (!overUnder) {
            newComp2.width = newComp2.width/2;
        } else { 
            newComp2.height = newComp2.height/2;
        }
        
        var p2 = newComp2target.transform.position.value;
        
        if (!overUnder) {
            newComp2target.transform.position.setValue([0,p2[1]]);
        } else { 
            newComp2target.transform.position.setValue([p2[0],0]);
        }

        theComp.name = "Precomp s3D Pair";
    }

    app.endUndoGroup();    
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to two layers
function stereo360() {
    app.beginUndoGroup("Merge Stereo pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length != 2) {
            alert("Select exactly two layers.");
        } else { 
            theComp.width = 3840;
            theComp.height = 2160;
            if (theComp.frameRate == 12) {
              theComp.frameRate = 24;
            } else if (theComp.frameRate == 15) {
              theComp.frameRate = 30;
            }           

            mergeStereoPair(false);
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to exactly six layers
function instaGrid() {
    app.beginUndoGroup("Create Instagram grid");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length < 1 || theLayers.length > 6) {
            alert("Select 1-6 layers.");
        } else {
            for (var i=0; i<theLayers.length; i++) {
                if (i===0) theLayers[i].position.setValue([320, 860]);
                if (i===1) theLayers[i].position.setValue([960, 860]);
                if (i===2) theLayers[i].position.setValue([1600, 860]);
                if (i===3) theLayers[i].position.setValue([320, 320]);
                if (i===4) theLayers[i].position.setValue([960, 320]);
                if (i===5) theLayers[i].position.setValue([1600, 320]);
            }
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function rgbdtk() {
    app.beginUndoGroup("Create RGBD-TK comps");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            var doFrameRate = false; //confirm("Reduce to 12fps?");
            for (var i=0; i<theLayers.length; i++) {
                var precompRgb = theComp.layers.precompose([theLayers[i].index], theLayers[i].name, true);
                theComp.selectedLayers[i].position.setValue([256, 212]);

                precompRgb.width = 512;
                precompRgb.height = 424;
                precompRgb.layers[1].position.setValue([256, 424]);
                if (doFrameRate) precompRgb.frameRate = 12;

                var precompDepth = precompRgb.duplicate();
                var origName = precompRgb.name;
                precompRgb.name += "_rgb";
                precompDepth.name = origName + "_depth";
                precompDepth.layers[1].position.setValue([256, 0]);

                rgbToGrayDepth(precompDepth);

                precompDepth = theComp.layers.add(precompDepth);
                precompDepth.audioEnabled = false;
                precompDepth.position.setValue([256, 636]);
            }
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function holoflix720p() {
    app.beginUndoGroup("Create Holoflix comps");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            var doFrameRate = false; //confirm("Reduce to 12fps?");
            for (var i=0; i<theLayers.length; i++) {
                var precompRgb = theComp.layers.precompose([theLayers[i].index], theLayers[i].name, true);
                theComp.selectedLayers[i].position.setValue([960, 360]);

                precompRgb.width = 640;
                precompRgb.height = 480;
                precompRgb.layers[1].position.setValue([0, 240]);
                if (doFrameRate) precompRgb.frameRate = 12;

                var precompDepth = precompRgb.duplicate();
                var origName = precompRgb.name;
                precompRgb.name += "_rgb";
                precompDepth.name = origName + "_depth";
                precompDepth.layers[1].position.setValue([640, 240]);

                precompDepth = theComp.layers.add(precompDepth);
                precompDepth.audioEnabled = false;
                precompDepth.position.setValue([320, 360]);
            }
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to a whole comp
function viveRecording() {
    app.beginUndoGroup("Split Vive Recording");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else {
        if (theComp.selectedLayers.length == 0) {
            alert(errorNoLayerSelected);
        } else { 
            baseWidth = theComp.width / 4;
            baseHeight = theComp.height / 4
            theComp.width = baseWidth * 2;
            theComp.height = baseHeight * 2;

            var titleBarSize = 36;
            if (!confirm("Use title bar compensation?")) titleBarSize = 0;
            
            var scaleOffset = 0.5;
            var theLayers = theComp.selectedLayers;

            for (var i=0; i<theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var origName = curLayer.name;                        

                    if (titleBarSize !== 0) {
                        var precomp = theComp.layers.precompose([curLayer.index], "Precomp " + origName, true);
                        precomp.width = baseWidth * 4;
                        precomp.height = (baseHeight * 4) - titleBarSize;
                        precomp.layers[1].transform.position.setValue([baseWidth * 2, (baseHeight * 2) - titleBarSize]);
                        
                        var precomp2 = theComp.layers.precompose([theComp.selectedLayers[0].index], "Precomp " + origName + " 2", true);
                        precomp2.width = baseWidth * 4;
                        precomp2.height = baseHeight * 4;
                        precomp2.layers[1].transform.scale.setValue([100, 100 * (precomp2.height/precomp.height)]);
                        precomp2.layers[1].transform.position.setValue([baseWidth * 2, baseHeight * 2]);
                    }

                    var fgLayer = curLayer;
                    if (titleBarSize !== 0) fgLayer = theComp.selectedLayers[0];
                    fgLayer.name =  origName + "_foreground";
                    fgLayer.transform.anchorPoint.setValue([baseWidth, baseHeight]);
                    fgLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var alphaLayer = fgLayer.duplicate();
                    alphaLayer.name =  origName + "_alpha";
                    alphaLayer.transform.anchorPoint.setValue([baseWidth * 3, baseHeight]);
                    alphaLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var cameraPovLayer = fgLayer.duplicate();
                    cameraPovLayer.name = origName + "_camera_POV";
                    cameraPovLayer.transform.anchorPoint.setValue([baseWidth, baseHeight * 3]);
                    cameraPovLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var playerPovLayer = fgLayer.duplicate();
                    playerPovLayer.name = origName + "_player_POV";
                    playerPovLayer.transform.anchorPoint.setValue([baseWidth * 3, baseHeight * 3]);
                    playerPovLayer.transform.position.setValue([baseWidth, baseHeight]);

                    if (titleBarSize !== 0) {
                        fgLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        alphaLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        cameraPovLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        playerPovLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                    }

                    var fg_SavedIndex = fgLayer.index;
                    var fgLayer2 = theComp.layers.precompose([fg_SavedIndex], fgLayer.name, true);
                    fgLayer2.width = baseWidth * 2;
                    fgLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) fgLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[fg_SavedIndex].audioEnabled = false;

                    var alpha_SavedIndex = alphaLayer.index;
                    var alphaLayer2 = theComp.layers.precompose([alpha_SavedIndex], alphaLayer.name, true);
                    alphaLayer2.width = baseWidth * 2;
                    alphaLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) alphaLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[alpha_SavedIndex].audioEnabled = false;

                    var cameraPov_SavedIndex = cameraPovLayer.index;
                    var cameraPovLayer2 = theComp.layers.precompose([cameraPov_SavedIndex], cameraPovLayer.name, true);
                    cameraPovLayer2.width = baseWidth * 2;
                    cameraPovLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) cameraPovLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[cameraPov_SavedIndex].audioEnabled = true;

                    var playerPov_SavedIndex = playerPovLayer.index;
                    var playerPovLayer2 = theComp.layers.precompose([playerPov_SavedIndex], playerPovLayer.name, true);
                    playerPovLayer2.width = baseWidth * 2;
                    playerPovLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) playerPovLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[playerPov_SavedIndex].audioEnabled = false;
                } else {
                    alert(errorFootageOnly);
                }
            }
        }
    }

    app.endUndoGroup();    
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to any number of layers
function skeleView(doUndoGroup) {
    if (doUndoGroup || doUndoGroup==undefined) app.beginUndoGroup("Skeleton View");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Skeleton View", theComp.width, theComp.height, 1);
            solid.guideLayer = true;
            var slider = solid.property("Effects").addProperty("Slider Control");
            slider.name = "Thickness";
            slider.property("Slider").setValue(8);

            var color = solid.property("Effects").addProperty("Color Control");
            color.property("Color").setValue([0,1,0]);

            var firstRun = true;

            for (var i = 0; i < theLayers.length; i++) {
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
        }
    }
    solid.locked = true;

    if (doUndoGroup || doUndoGroup==undefined) app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: One-shot--create an adjustment layer with controllable onion skinning
function onionSkin() {  
    app.beginUndoGroup("Create Onion Skin Layer");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
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
                           "if (s >= 0) {" + "\r" + 
                           "  rd = -d;" + "\r" + 
                           "} else if (s < 0) {" + "\r" + 
                           "  rd = d;" + "\r" + 
                           "}";

        prop2.expression = "var s = effect(\"Number of Frames\")(\"Slider\");" + "\r" +
                           "var rs;" + "\r" +
                           "if (s > 0) {" + "\r" +
                           "  rs = s;" + "\r" +
                           "} else if (s == 0) {" + "\r" +
                           "  rs = 0;" + "\r" +
                           "} else if (s < 0) {" + "\r" +
                           "  rs = -s;" + "\r" +
                           "}" + "\r" +
                           "rs;";
        prop3.expression = "var val = 0.5;" + "\r" +
                           "var offset = 0.175;" + "\r" +
                           "var s = effect(\"Number of Frames\")(\"Slider\");" + "\r" +
                           "var rtn;" + "\r" +
                           "if (s < 0) s = -s;" + "\r" +
                           "if (s != 0) {" + "\r" +
                           "  rtn = val + (offset/s);" + "\r" +
                           "} else { " + "\r" +
                           "  rtn = 1;" + "\r" +
                           "}" + "\r" +
                           "rtn;";
        prop4.setValue(0.5);
        prop5.setValue(7);

        solid.locked = true;
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Export
function unityAnim() {  //start script
    app.beginUndoGroup("Export Unity Anim");

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

            var unityMainHeader = "%YAML 1.1" + "\r" + 
                                  "%TAG !u! tag:unity3d.com,2011:" + "\r" + 
                                  "--- !u!74 &7400000";

            var unityMainFooter = "";

            var scaleFactor = 5.0;

            //~~~~~~~~~~~~~~~~~~
            for(var i = 0; i < theLayers.length; i++) {
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var fileName = theComp.name + "_" + curLayer.name;
                var unityLayerHeader = "AnimationClip:" + "\r" + 
                                       "  m_ObjectHideFlags: 0" + "\r" + 
                                       "  m_PrefabParentObject: {fileID: 0}" + "\r" + 
                                       "  m_PrefabInternal: {fileID: 0}" + "\r" + 
                                       "  m_Name: " + fileName + "\r" + 
                                       "  serializedVersion: 4" + "\r" + 
                                       "  m_AnimationType: 2" + "\r" + 
                                       "  m_Compressed: 0" + "\r" + 
                                       "  m_UseHighQualityCurve: 1" + "\r" + 
                                       "  m_RotationCurves: []" + "\r" + 
                                       "  m_CompressedRotationCurves: []" + "\r" + 
                                       "  m_PositionCurves:" + "\r" + 
                                       "  - curve:" + "\r" + 
                                       "      serializedVersion: 2" + "\r" + 
                                       "      m_Curve:";
                var unityLayerFooter = "";

                var myFile = File.saveDialog("Save your file", ".anim", "");
                var fileOK = myFile.open("w","TEXT","????");

                myFile.writeln(unityMainHeader);
                myFile.writeln(unityLayerHeader);

                var p = curLayer.property("Position");
                for(var j = 0; j < p.numKeys; j++) {
                    var pp = p.keyValue(j+1);

                    pp[0] = ( (pp[0]-(theComp.width/2)) / theComp.width ) * scaleFactor;
                    pp[1] = ( -1 * (pp[1]-(theComp.height/2)) / theComp.height) * scaleFactor;
                    pp[2] = ( pp[2] / ((theComp.width+theComp.height)/2) ) * scaleFactor;
                
                    var unityKeyPos = "      - time: " + p.keyTime(j+1) + "\r" +
                                      "        value: {x: " + pp[0] + ", y: " + pp[1] + ", z: " + pp[2] + "}" + "\r" +
                                      "        inSlope: {x: 0, y: 0, z: 0}" + "\r" +
                                      "        outSlope: {x: 0, y: 0, z: 0}" + "\r" +
                                      "        tangentMode: 0"; 
                                      
                    myFile.writeln(unityKeyPos);
                
               }              
                // not using a footer presently                
                //myFile.writeln(unityLayerFooter);
                //myFile.writeln(unityMainFooter);
                myFile.close;    
            }
        }
    }

    app.endUndoGroup();
}  //end script

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function writeExample() {  
    app.beginUndoGroup("Export Example File");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            //~~~~~~~~~~~~~~~~~~
            var fileMainHeader = "Sample Main Header" + "\r";
            var fileMainFooter = "Sample Main Footer" + "\r";
            var scaleFactor = 1.0;

            var myFile = File.saveDialog("Save your file", ".txt", "");
            var fileOK = myFile.open("w","TEXT","????");

            myFile.writeln(fileMainHeader);
            //~~~~~~~~~~~~~~~~~~
            for (var i = 0; i < theLayers.length; i++) {
                // ...then loop through each layer in the selected comp
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
}  

// Notes: apply process to any number of layers or properties
function xmlExport() {  
    app.beginUndoGroup("Export to XML");
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers or properties
function jsonExport() {  
    app.beginUndoGroup("Export to JSON");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var curProperty;
                    try {
                        curProperty = curLayer.property("position");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("anchorPoint");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("rotation");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("scale");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("opacity");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    //~~
                    try {
                        curProperty = curLayer.property("pointOfInterest");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                    try {
                        curProperty = curLayer.property("focusDistance");
                        convertToKeyframes(curProperty);
                    } catch(err) {}
                } else { 
                    alert("Only works on footage layers.");
                }
            }
        }
    }

    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers or properties
function cameraToMaya() {  
    app.beginUndoGroup("Export Camera to Maya");

    //****************************** MAIN

    // AE_CameraToMaya v1.1n
    // by Ryan Gilmore, 2008
    // www.urbanspaceman.net
    // contact@urbanspaceman.net

    // Select the camera in After Effects you want to send to Maya, and this script will create an .ma file with a copy of the camera in it, with
    // correct position, rotation, and focal length.  Should work for any AE camera, no matter how it is animated, without any restrictions.

    // fixed for CS6 by Nick Fox-Gieg, 2012
    // null export by Nick Fox-Gieg, 2014

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
    var totalFrames=Math.round(theComp.duration * theComp.frameRate) + 1;
    var aeCompRate = theComp.frameRate;
    var compRate = Math.round(aeCompRate);
    var frameDuration = theComp.frameDuration;

    var worldScale = 100;
    var worldCenter = [compWidth / 2, compHeight / 2];

    var aspect = theComp.pixelAspect;
    // these are more accurate video PARs, that AE rounds off 
    // [00]  D2 NTSC        0.8592
    // [01]  D1 NTSC        0.9 
    // [02]  D4 Stan        0.9481481
    // [03]  SQUARE         1
    // [04]  D2 PAL         1.0186      
    // [05]  D1 PAL         1.0667
    // [06]  D1 NTSC wide   1.2
    // [07]  HDV            1.333
    // [08]  D1 PAL wide    1.4222
    // [09]  DVCPROHD       1.5
    // [10]  D4 Ana         1.8962962
    // [11]  Ana2:1         2
    var ratio= [0.8592, 0.9, 0.9481481, 1.0, 1.0186, 1.0667, 1.2, 1.333, 1.4222, 1.5, 1.8962962, 2];
    if (aspect == 0.86) { aspect =ratio[0] }
    else if (aspect == 0.95) {aspect =ratio[2]}
    else if (aspect == 1.02) {aspect =ratio[4]}
    else if (aspect == 1.07) {aspect =ratio[5]}
    else if (aspect == 1.33) {aspect =ratio[7]}
    else if (aspect == 1.42) {aspect =ratio[8]}
    else if (aspect == 1.9) {aspect =ratio[10]};

    var frameAspect = (compWidth*aspect)/compHeight;

    mayaFBHeight = 1; // in inches
    mayaFilmBack = frameAspect*mayaFBHeight; // in inches

    // fps presets for Maya
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

    // error check: is the comp the active timeline window?
    if (app.project.activeItem!=null) {
    theComp = app.project.activeItem;

    // error check: is camera selected?
    if (theComp.selectedLayers!="") {
    theCamera = theComp.selectedLayers;

    // error check: is more than one layer selected?
    if (theCamera.length<2) {
    CameraName = theCamera[0].name;

    // error check: is it a camera selected?
    if (theCamera[0].zoom!=null) {

    theCamera[0].moveToEnd(); //null layers won"t all be counted unless camera is on the bottom

    CamIn=theCamera[0].inPoint;
    CamOut=theCamera[0].outPoint;

    // if camera has a parent that uses a scale value other than 100, this will affect rotation and zoom calculations.
    // NB: if the scale does not have equal XYZ values, this script won"t work.  That"s because this will stretch, 
    // distort, and skew the camera, and since the first step of this script is to output a free camera, it can"t be done since
    // a skewed free camera is impossible in After Effects.
    // if their is a parent, the unit value in the rotation matrix is scale/100
    // otherwise the unit value is 1.
    if (theCamera[0].parent!=null) {
        CamMaster=theCamera[0].parent;
        CamMasterExpression="this_comp.layer("+"\""+CamMaster.name+"\""+").scale/100";
    } else { 
        CamMasterExpression="[1,1,1]";
    };

    // make new camera.  This will inherit the Y and X rotations.
    theComp.layers.addCamera("CamCopy_yRot_xRot",[0,0]).startTime=0;
    CamCopy01=theComp.layer(1);
    CamCopy01.inPoint=CamIn;
    CamCopy01.outPoint=CamOut;
    CamCopy01.pointOfInterest.expression="position";
    CamCopy01.position.setValue([theComp.width/2, theComp.height/2, 0]);
    // make camera parent.  This is needed to reverse the rotation order.  This null will inherit the position and Z rotation.
    theComp.layers.addNull(theComp.duration).name="CamCopy_zRot_pos";
    CamParent01=theComp.layer(1);
    setNull(CamParent01,CamIn,CamOut,theComp);
    // attach child camera to parent
    CamCopy01.parent=CamParent01;

    // translate the data from the original camera with expressions
    CamParent01.position.expression="L=thisComp.layer("+"\""+CameraName+"\""+");L.toWorld([0,0,0])";
    CamParent01.rotation.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005) {p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[0]";
    CamCopy01.orientation.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005) {p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];[ 0, BHP[1], 0 ]";
    CamCopy01.rotationX.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005) {p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[2]";
    CamCopy01.zoom.expression="unit="+CamMasterExpression+";this_comp.layer("+"\""+CameraName+"\""+").zoom*1/unit[0]";

    // Make a second copy of the camera, this time it will be baked
    ShortCamName=removeForbiddenCharacters(CameraName);
    theComp.layers.addCamera("<"+ShortCamName+">",[0,0]).startTime=0;
    CamCopy02=theComp.layer(1);
    CamCopy02.inPoint=CamIn;
    CamCopy02.outPoint=CamOut;
    CamCopy02.pointOfInterest.expression="position";
    CamCopy02.position.setValue([theComp.width/2, theComp.height/2, 0]);
    // make seconcd camera parent.
    theComp.layers.addNull(theComp.duration).name="<"+ShortCamName+"Parent"+">";
    CamParent02=theComp.layer(1);
    setNull(CamParent02,CamIn,CamOut,theComp);
    // attach child camera to parent
    CamCopy02.parent=CamParent02;

    Bake(theComp, theComp.layer(3).position, CamParent02.position);
    Bake(theComp, theComp.layer(3).rotation, CamParent02.rotation);
    Bake(theComp, theComp.layer(4).orientation, CamCopy02.orientation);
    Bake(theComp, theComp.layer(4).rotationX, CamCopy02.rotationX);
    Bake(theComp, theComp.layer(4).zoom, CamCopy02.zoom);

    //remove the expression camera and its parent
    theComp.layer(4).remove();
    theComp.layer(3).remove();

    } else { alert("ERROR!!\r"+
    "Please select a camera. ")};
    } else { alert("ERROR!!\r"+
    "Please select only one layer at a time. ")};
    } else { alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};
    } else { alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};

    //****************************** STEP 2: create Maya scene file

    var CamName = removeForbiddenCharacters(CameraName);

    // create text file
    var myFile = File.saveDialog("Save your file", CamName + ".ma", "");
    var fileOK = myFile.open("w","TEXT","????");

    // Maya scene file header
    myFile.writeln("//Maya ASCII 6.0 scene");
    myFile.writeln("//Name: " + CamName + "_export.ma");
    myFile.writeln("//Last modified:");
    myFile.writeln("requires maya \"6.0\";");
    myFile.writeln("currentUnit -l centimeter -a degree -t " + fps + ";");
    myFile.writeln("");

    // make camera nodes

    // transform node
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
    //~~~
    /*
    var aeZoom = theComp.layer(2).zoom.valueAtTime(0, false);
    var HFOV=Math.atan( (compWidth*aspect*0.5) /aeZoom);//half the FOV, in radians
    var fLength=( (mayaFilmBack*0.5) / Math.tan(HFOV) ) * 25.4; //in inches, converted to mm    
    myFile.writeln("    setAttr \".fl\" " + fLength + " ;");
    */
    //~~~
    myFile.writeln("");

    // X position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateX\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
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

    for (var i=1;i<=totalFrames;i++) {
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

    for (var i=1;i<=totalFrames;i++) {
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

    for (var i=1;i<=totalFrames;i++) {
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

    for (var i=1;i<=totalFrames;i++) {
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

    for (var i=1;i<=totalFrames;i++) {
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
            
    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        aeZoom = theComp.layer(2).zoom.valueAtTime(f, false);
        HFOV=Math.atan( (compWidth*aspect*0.5) /aeZoom);//half the FOV, in radians
        fLength=( (mayaFilmBack*0.5) / Math.tan(HFOV) ) * 25.4; //in inches, converted to mm
        myFile.write(" " + i + " " + fLength);
    }
            
    myFile.write(";");
    myFile.writeln(""); 
    myFile.writeln(""); 
    
    // Render size settings
    myFile.writeln("select -ne :time1;");
    myFile.writeln("    setAttr \".o\" 1;");
    myFile.writeln("select -ne :defaultResolution;");
    myFile.writeln("    setAttr \".w\" " + compWidth + ";");
    myFile.writeln("    setAttr \".h\" " + compHeight + ";");
    myFile.writeln("    setAttr \".dar\" " + frameAspect + ";");
    myFile.writeln("");

    // connect the nodes together
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
    var allLayers = theComp.layers;
    for (var i=1; i < allLayers.length; i++) {
        var curLayer = allLayers[i];
        var curLayerName = curLayer.name.replace(/[^a-zA-Z0-9]+/g,"");
        if (curLayer.matchName != "ADBE Camera Layer" && curLayerName != CamName + "Parent") {
            //alert(curLayerName);

            var pos = curLayer.property("Position").valueAtTime(0,false);
            var Xpos=(pos[0]-worldCenter[0])/worldScale;
            var Ypos=-((pos[1]-worldCenter[1])/worldScale);
            var Zpos=-(pos[2]/worldScale);

            /*
            var Xrot=curLayer.rotationX.valueAtTime(0, false);
            var Yrot=curLayer.orientation.valueAtTime(0, false);
            var Zrot=curLayer.rotationZ.valueAtTime(0, false);

            var scale=curLayer.scale.valueAtTime(0, false);
            var Xscale=scale[0]/100;
            var Yscale=scale[1]/100;
            var Zscale=scale[2]/100;
            */

            myFile.writeln("createNode transform -n \"" + curLayerName +"\";");
            myFile.writeln("setAttr \".t\" -type \"double3\" " + Xpos + " " + Ypos + " " + Zpos + " ;");
            myFile.writeln("setAttr -av \".tx\";");
            myFile.writeln("setAttr -av \".ty\";");
            myFile.writeln("setAttr -av \".tz\";");
            myFile.writeln("");

            /*
            myFile.writeln("setAttr \".r\" -type \"double3\" " + Xrot + " " + Yrot + " " + Zrot + " ;");
            myFile.writeln("setAttr -av \".rx\";");
            myFile.writeln("setAttr -av \".ry\";");
            myFile.writeln("setAttr -av \".rz\";");
            myFile.writeln("");

            myFile.writeln("setAttr \".s\" -type \"double3\" " + Xscale + " " + Yscale + " " + Zscale + " ;");
            myFile.writeln("setAttr -av \".sx\";");
            myFile.writeln("setAttr -av \".sy\";");
            myFile.writeln("setAttr -av \".sz\";");
            myFile.writeln("");
            */

            myFile.writeln("createNode locator -n \"locatorShape"+ i +"\" -p \"" + curLayerName +"\";");
            myFile.writeln("setAttr -k off \".v\";");

            myFile.writeln("");   
            myFile.writeln("connectAttr \"" + curLayerName + "_visibility.o\" \"" + curLayerName + ".v\";");
            myFile.writeln("");   

            //1-3 TRANSLATE
            // X position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Xpos=(pos[0]-worldCenter[0])/worldScale;
                myFile.write(" " + counter + " " + Xpos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Ypos=-((pos[1]-worldCenter[1])/worldScale);
                myFile.write(" " + counter + " " + Ypos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Zpos=-(pos[2]/worldScale);
                myFile.write(" " + counter + " " + Zpos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateX.o\" \"" + curLayerName + ".tx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateY.o\" \"" + curLayerName + ".ty\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateZ.o\" \"" + curLayerName + ".tz\";");
           
            myFile.writeln("");
            
            /*
            //2-3 ROTATION
            // X rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Xrot=curLayer.rotationX.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Xrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Yrot=curLayer.orientation.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Yrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Zrot=curLayer.rotationZ.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Zrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_rotateX.o\" \"" + curLayerName + ".rx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_rotateY.o\" \"" + curLayerName + ".ry\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_rotateZ.o\" \"" + curLayerName + ".rz\";");
           
            myFile.writeln("");

            //3-3 SCALE
            // X scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Xscale=scale[0]/100;
                myFile.write(" " + counter + " " + Xscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Yscale=scale[1]/100;
                myFile.write(" " + counter + " " + Yscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Zscale=scale[2]/100;
                myFile.write(" " + counter + " " + Zscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_scaleX.o\" \"" + curLayerName + ".sx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_scaleY.o\" \"" + curLayerName + ".sy\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_scaleZ.o\" \"" + curLayerName + ".sz\";");
           
            myFile.writeln("");
            */
        }
    }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // finish it all up...

    // set work area 
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
} 

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to any number of layers.
function gmlToPos() {  
    app.beginUndoGroup("GML to Position");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var xmlFile = File.openDialog();
        var file = xmlFile.open("r");
        var xmlRoot;
        if (file) {
            var xmlString = xmlFile.read();
            xmlRoot = new XML(xmlString);
            xmlFile.close();
        }

        if (xmlRoot) {
            tag = xmlRoot.descendants("tag");
            var header = tag.descendants("header");
            var environment = header.descendants("environment");
            var screenBounds = environment.descendants("screenBounds");
            var dim = [ parseFloat(screenBounds.descendants("x")), parseFloat(screenBounds.descendants("y")), parseFloat(screenBounds.descendants("z")) ];
            if (!dim[0]) dim[0] = 640.0;
            if (!dim[1]) dim[1] = 640.0;
            if (!dim[2]) dim[2] = 640.0;

            var gml = theComp.layers.addSolid([0, 0, 0], "GML", parseInt(dim[0]), parseInt(dim[1]), 1);
            gml.guideLayer = true;
            gml.threeDLayer = true;

            var drawing = tag.descendants("drawing");
            var strokesEl = drawing.stroke;
            for (var i=0; i<strokesEl.length(); i++) {
                for (var j=0; j<strokesEl[i].pt.length(); j++) {
                    var pointEl = strokesEl[i].pt[j];
                    var x = parseFloat(pointEl.descendants("x")) * dim[0];
                    var y = parseFloat(pointEl.descendants("y")) * dim[1];
                    var z = parseFloat(pointEl.descendants("z")) * dim[2];
                    var time = parseFloat(pointEl.descendants("time"));
                    
                    if (!x) x = 0.0;
                    if (!y) y = 0.0;
                    if (!z) z = 0.0;
                    if (!time) time = 0.0;

                    var pos = gml.property("Position");
                    // TODO normalize time and fit in comp time
                    pos.setValueAtTime(time, [ x, y, z ]);
                }
            }
        }
    }

    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: Import XML or JSON file of tracking data for 3D characters
function importMocap3D() {  
    app.beginUndoGroup("Import 3D Points From XML or JSON");

    if(parseFloat(app.version) >= 10.5) {
        var myComp = app.project.activeItem;
        var fileType="xml";
        var myRoot;

        //load xml or json file
        var myFile = File.openDialog();
        var fileOK = myFile.open("r");
        if (fileOK) {
            var myFileString = myFile.read();
            if (myFile.name.split(".").pop()=="xml") {
                fileType="xml";
                myRoot = new XML(myFileString);
            } else if (myFile.name.split(".").pop()=="json") {
                fileType="json";
                myRoot = eval("(" + myFileString + ")");
            }
            myFile.close();
        }
        
        if (fileType=="xml") {
            //~~~~~~~~~~~~~~~~~begin 3D XML version
            var compRate = parseFloat(myRoot.@fps); // comp frame rate

            var sW = parseFloat(myRoot.@width);
            var sH = parseFloat(myRoot.@height);
            var sD = parseFloat(myRoot.@depth);

            var mocap = myComp.layer("mocap");

            var trackPoint = jointNamesMaster;

            // add joint information
            for (var j=0; j<trackPoint.length; j++) {
                var myEffect = mocap.property("Effects").property(trackPoint[j]);
                myEffect.name = trackPoint[j];
                var p = mocap.property("Effects")(trackPoint[j])("3D Point");

                for (var i=0; i<myRoot.MocapFrame.length(); i++) {
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //keyframes go here
                    //var pTfps = myRoot.@fps;
                    var pT = i/compRate;
                    var pXs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@x;
                    var pYs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@y;
                    var pZs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@z;

                    if (pXs != "NaN" && pYs != "NaN" && pZs != "NaN") {
                        var pX = parseFloat(pXs);
                        var pY = parseFloat(pYs);
                        var pZ = parseFloat(pZs);
                        p.setValueAtTime(pT, [pX * sW, pY * sH, pZ * sD]);
                    }
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }
            //~~~~~~~~~~~~~~~~~end 3D XML version
        } else if (fileType=="json") {
            //~~~~~~~~~~~~~begin 3D JSON version
                var compRate = myRoot.MotionCapture.fps; // comp frame rate
                var sW = myRoot.MotionCapture.width;
                var sH = myRoot.MotionCapture.height;
                var sD = myRoot.MotionCapture.depth;
                
                var mocap = myComp.layer("mocap");

                var trackPoint = jointNamesMaster;

                // add joint information
            for (var name in myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints) {
                var myEffect = mocap.property("Effects").property(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name);
                myEffect.name = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name;
                var p = mocap.property("Effects")(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name)("3D Point");
                
                for (var i=0;i<myRoot.MotionCapture.numFrames;i++) {
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
        alert(cs55warning);
    }
 
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Notes: apply process to two layers
function freeformRig() {
    app.beginUndoGroup("Create Freeform Pro rig");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length != 2) {
            alert("Select exactly two layers (depth first).");
        } else { 
            var depthLayer = theLayers[0];
            var rgbLayer = theLayers[1];

            depthLayer.audioEnabled = false;
            depthLayer.enabled = false;
            rgbLayer.audioEnabled = true;
            rgbLayer.enabled = true;

            var depthComp = getLayerSource(depthLayer);
            var rgbComp = getLayerSource(rgbLayer);

            var origRgbLayer = rgbComp.layer(1);
            var newDepthLayer = rgbComp.layers.add(depthComp);
            newDepthLayer.audioEnabled = false;
            newDepthLayer.enabled = false;
            origRgbLayer.trackMatteType = TrackMatteType.LUMA;

            var freeform = rgbLayer.property("Effects").addProperty("Mettle FreeForm Pro");
            freeform.property("Displacement Layer").setValue(depthLayer.index);
            freeform.property("Displacement Height").setValue(560);
            freeform.property("Display Grid").setValue(0);
            freeform.property("Alpha Threshold").setValue(0);
            freeform.property("Pre-blur Layer").setValue(2); // depth only
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: One-shot--create a complex bunch of objects and scripts.
function charParticle() {  
    app.beginUndoGroup("Create a Particle Rig");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else {
        var solid = theComp.layers.addSolid([0, 1.0, 1.0], "Particle Solid", theComp.width, theComp.height, 1);
        solid.locked = true;

        var particle_ctl = theComp.layers.addNull();
        particle_ctl.name = "particle_ctl";
        particle_ctl.threeDLayer = true;

        try {
            var particle = solid.property("Effects").addProperty("Particular");

            var expr1 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint);"

            particle.property("Position XY").expression = expr1;

            var expr2 = "L = thisComp.layer(\"" + particle_ctl.name + "\");" + "\r" + 
                        "L.toWorld(L.anchorPoint)[2];"

            particle.property("Position Z").expression = expr2;
        } catch(err) {
            alert("Requires Trapcode Particular.");           
        }
    }
 
    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: apply process to any number of layers
function rsmbTwos() {
    app.beginUndoGroup("Reelsmart Motion Blur on Twos");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            //var baseOnFps = confirm("Base on comp frame rate?");

            for (var i = 0; i < theLayers.length; i++) {
                var effects = theLayers[i].property("Effects");

                var blur = effects.addProperty("RSMB");
                blur.property("Blur Amount").setValue(0.25);
                blur.property("Use GPU").setValue(2);

                var posterize = effects.addProperty("Posterize Time");
                //if (baseOnFps) {
                posterize.property("Frame Rate").setValue(theComp.frameRate/2);
                //} else {
                    //posterize.property("Frame Rate").setValue(12);
                //}
            }
        }
    }

    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
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