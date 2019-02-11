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
