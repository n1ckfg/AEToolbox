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
