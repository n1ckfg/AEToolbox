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
