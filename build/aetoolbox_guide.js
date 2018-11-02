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
