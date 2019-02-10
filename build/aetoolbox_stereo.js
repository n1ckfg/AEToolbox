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
