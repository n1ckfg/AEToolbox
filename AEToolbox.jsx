// AEToolbox 1.1
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
var col1butCount = 8;
win.basicGroup = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col1butCount*butYinc)], 'Basic', {borderStyle: "etched"});
win.basicGroup0 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Nulls for Pins');
win.basicGroup1 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Parent Chain');
win.basicGroup2 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Locator Null');
win.basicGroup3 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Move to Position');
win.basicGroup4 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Bake Keyframes');
win.basicGroup5 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Make Loop');
win.basicGroup6 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], 'Crossfade');
win.basicGroup7 = win.basicGroup.add('button', [butXstart,butYstart+(butYinc*7),butXend,butYend+(butYinc*7)], 'Onion Skin');
//--
//Character button group
var col2butCount = 7;
win.rigGroup = win.add('panel', [colXstart+(colXinc * 1),colYstart,colXend+(colXinc*1),colYendBase+(col2butCount*butYinc)], 'Rigging', {borderStyle: "etched"});
win.rigGroup0 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Blink Control');
win.rigGroup1 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Jaw Rig Side');
win.rigGroup2 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Jaw Rig Front');
win.rigGroup3 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], 'Snake Rig');
win.rigGroup4 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Beam Rig');
win.rigGroup5 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Particle Rig');
win.rigGroup6 = win.rigGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], 'Camera Rig');
//--
//Advanced button group
var col3butCount = 7;
win.advGroup = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
win.advGroup0 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Lock Y Rotation');
win.advGroup1 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*1),butXend,butYend+(butYinc*1)], 'Auto Z Rotation');
win.advGroup2 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*2),butXend,butYend+(butYinc*2)], 'Parentable Null');
win.advGroup3 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*3),butXend,butYend+(butYinc*3)], '3D MoSketch');
win.advGroup4 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*4),butXend,butYend+(butYinc*4)], 'Sine Generator');
win.advGroup5 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*5),butXend,butYend+(butYinc*5)], 'Split s3D Pair');
win.advGroup6 = win.advGroup.add('button', [butXstart,butYstart+(butYinc*6),butXend,butYend+(butYinc*6)], 's3D Dispmap');
//-----------------------------------------------------
//2. Link buttons to functions
win.basicGroup0.onClick = nullsForPins;
win.basicGroup1.onClick = parentChain;
win.basicGroup2.onClick = locatorNull;
win.basicGroup3.onClick = moveToPos;
win.basicGroup4.onClick = bakePinKeyframes;
win.basicGroup5.onClick = makeLoop;
win.basicGroup6.onClick = crossfader;
win.basicGroup7.onClick = onionSkin;
//--
win.rigGroup0.onClick = charBlink;
win.rigGroup1.onClick = charJawSide;
win.rigGroup2.onClick = charJawFront;
win.rigGroup3.onClick = charSnake;
win.rigGroup4.onClick = charBeam;
win.rigGroup5.onClick = charParticle;
win.rigGroup6.onClick = handheldCamera;
//--
win.advGroup0.onClick = lockRotation;
win.advGroup1.onClick = autoOrientZ;
win.advGroup2.onClick = parentableNull;
win.advGroup3.onClick = threeDmoSketch;
win.advGroup4.onClick = sineWave;
win.advGroup5.onClick = splitStereoPair;
win.advGroup6.onClick = stereoDispMap;
//-----------------------------------------------------app.executeCommand(app.findMenuCommandId("Convert Audio to Keyframes"));

return win
}
var w = buildUI(this);
if (w.toString() == "[object Panel]") {
w;
} else {
w.show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 22.  Type: apply process to a whole comp
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
            stereoL.transform.scale.setValue([50,100]);
            stereoR.transform.scale.setValue([50,100]);
            var pL = stereoL.transform.position.value;
            var pR = stereoR.transform.position.value;
            stereoL.transform.position.setValue([(stereoComp.width*0.25),pL[1]]);
            stereoR.transform.position.setValue([(stereoComp.width*0.75),pR[1]]);
        }
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21.  Type: apply process to a whole comp
function splitStereoPair(){
    app.beginUndoGroup("Split s3D Pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  // check if comp is selected
        alert("Please establish a comp as the active item and run the script again");  // if no comp selected, display an alert
    } else { 
        var newComp1 = theComp.duplicate();
        newComp1.name = theComp.name + " L";
        var theLayers1 = newComp1.layers;
        
        while(theLayers1.length > 0){  // otherwise, loop through each selected layer in the selected comp
            var curLayer = theLayers1[1];  // define the layer in the loop we're currently looking at        
            curLayer.remove();
        }

        var newComp1target = theLayers1.add(theComp);
        newComp1.width = newComp1.width/2;
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
        newComp2.width = newComp2.width/2;
        var p2 = newComp2target.transform.position.value;
        newComp2target.transform.position.setValue([0,p2[1]]);

        theComp.name = "Precomp s3D Pair";
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 20.  Type: apply process to any number of layers
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

// 19.  Type: apply process to any number of layers
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

// 18. One-shot--create a complex bunch of objects and scripts.
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

// 17. One-shot--create a complex bunch of objects and scripts.
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

// 16.  Type: apply process to any number of layers
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

// 15.  Type: process for any number of layers or properties
function charSnake(){  //start script
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//COMMON FUNCTIONS

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
    }
}

}

