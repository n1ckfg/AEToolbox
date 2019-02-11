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
