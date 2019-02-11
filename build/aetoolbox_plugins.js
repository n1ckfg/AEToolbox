// Notes: apply process to two layers
function freeformRig(doUndoGroup) {
    if (doUndoGroup) app.beginUndoGroup("Create Freeform Pro rig");

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
