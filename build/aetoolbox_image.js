// Notes: apply process to any number of layers
function softLayeredImage1() {
    app.beginUndoGroup("Soften Image 1");

    var theComp = app.project.activeItem; 
    
    if (theComp === null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length === 0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {   
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName === "ADBE AV Layer") {
                    var newLayer2 = curLayer.duplicate();
                    var newLayer1 = curLayer.duplicate();

                    var effects1 = newLayer1.property("Effects");
                    var opacity1 = newLayer1.property("opacity");
                    var blur1 = effects1.addProperty("Gaussian Blur");

                    newLayer1.blendingMode = BlendingMode.MULTIPLY;
                    newLayer1.audioEnabled = false;
                    blur1.property("Blurriness").setValue(13);
                    opacity1.setValue(100);

                    var effects2 = newLayer2.property("Effects");
                    var opacity2 = newLayer2.property("opacity");
                    var blur2 = effects2.addProperty("Gaussian Blur");

                    newLayer2.blendingMode = BlendingMode.SCREEN;
                    newLayer2.audioEnabled = false;
                    blur2.property("Blurriness").setValue(7);
                    opacity2.setValue(70);
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
function softLayeredImage2() {
    app.beginUndoGroup("Soften Image 2");

    var theComp = app.project.activeItem; 
    
    if (theComp === null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length === 0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {   
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName === "ADBE AV Layer") {
                    var newLayer2 = curLayer.duplicate();
                    var newLayer1 = curLayer.duplicate();

                    var effects1 = newLayer1.property("Effects");
                    var opacity1 = newLayer1.property("opacity");
                    var blur1 = effects1.addProperty("Gaussian Blur");

                    newLayer1.blendingMode = BlendingMode.MULTIPLY;
                    newLayer1.audioEnabled = false;
                    blur1.property("Blurriness").setValue(10);
                    opacity1.setValue(70);

                    var effects2 = newLayer2.property("Effects");
                    var opacity2 = newLayer2.property("opacity");
                    var blur2 = effects2.addProperty("Gaussian Blur");

                    newLayer2.blendingMode = BlendingMode.SCREEN;
                    newLayer2.audioEnabled = false;
                    blur2.property("Blurriness").setValue(7);
                    opacity2.setValue(50);
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
function highPass() {
    app.beginUndoGroup("High Pass");

    var theComp = app.project.activeItem; 
    
    if (theComp === null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length === 0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {   
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName === "ADBE AV Layer") {
                    var newLayer = curLayer.duplicate();
                    var opacity = newLayer.property("opacity");
                    newLayer.blendingMode = BlendingMode.OVERLAY;
                    opacity.setValue(50);
                    newLayer.audioEnabled = false;

                    var effects = newLayer.property("Effects");
                    
                    var monochrome = effects.addProperty("Checkbox Control");
                    monochrome.name = "Monochrome On";
                    monochrome.property("Checkbox").setValue(true);

                    var soften = effects.addProperty("Checkbox Control");
                    soften.name = "Soften On";
                    soften.property("Checkbox").setValue(true);

                    var radius = effects.addProperty("Slider Control");
                    radius.name = "Radius";
                    radius.property("Slider").setValue(38);

                    var invert1 = effects.addProperty("Invert");
                    var transform = effects.addProperty("Transform");

                    var blur = effects.addProperty("Gaussian Blur");
                    var blurExpr = "effect(\"Radius\")(\"Slider\")";
                    blur.property("Blurriness").expression = blurExpr;

                    var composite = effects.addProperty("CC Composite");
                    composite.property("Composite Original").setValue(2);

                    var tint = effects.addProperty("Tint");
                    var tintExpr = "effect(\"Monochrome On\")(\"Checkbox\")*100";
                    tint.property("Amount to Tint").expression = tintExpr;

                    var levels = effects.addProperty("Levels");
                    levels.property("Input Black").setValue(0.249);
                    levels.property("Input White").setValue(0.751);

                    var invert2 = effects.addProperty("Invert");
                    var invert2Expr = "Math.abs((effect(\"Soften On\")(\"Checkbox\")*100)-100)";
                    invert2.property("Blend With Original").expression = invert2Expr;
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
