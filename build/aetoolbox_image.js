// Notes: apply process to any number of layers
function softenImage() {
    app.beginUndoGroup("Soften Image");

    var theComp = app.project.activeItem; 
    
    if (theComp === null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length === 0) {
            alert(errorNoLayerSelected);
        } else { 
            alert("EEEE");
            for (var i = 0; i < theLayers.length; i++) {   
                var curLayer = theLayers[i];
                // condition 1: must be a footage layer
                if (curLayer.matchName === "ADBE AV Layer") {
                    app.executeCommand(app.findMenuCommandId("Duplicate"));
                    var newLayer1 = theComp.selectedLayers[0];
                    
                    app.executeCommand(app.findMenuCommandId("Duplicate"));
                    var newLayer2 = theComp.selectedLayers[0];

                    var effects1 = newLayer1.property("Effects");
                    var opacity1 = newLayer1.property("opacity");
                    var blur1 = effects1.addProperty("Gaussian Blur");

                    newLayer1.blendingMode = BlendingMode.ADD;
                    blur1.property("Blurriness").setValue(10);
                    opacity1.setValue(50);

                    var effects2 = newLayer2.property("Effects");
                    var opacity2 = newLayer2.property("opacity");
                    var blur2 = effects2.addProperty("Gaussian Blur");

                    newLayer2.blendingMode = BlendingMode.ADD;
                    blur2.property("Blurriness").setValue(20);
                    opacity2.setValue(25);
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
