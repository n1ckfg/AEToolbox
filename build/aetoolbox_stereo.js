// 37. Type: apply process to any number of layers
function holoflix720p() {
    app.beginUndoGroup("Create Holoflix comps");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
        alert(errorNoCompSelected);  
    } else { 
        var theLayers = theComp.selectedLayers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
          var doFrameRate = confirm("Reduce to 12fps?");
          for (var i=0; i<theLayers.length; i++) {
              var precompRgb = theComp.layers.precompose([theLayers[i].index], theLayers[i].name, true);
                theComp.selectedLayers[i].position.setValue([960, 360]);

              precompRgb.width = 640;
              precompRgb.height = 480;
              precompRgb.layers[1].position.setValue([0, 240]);
              if (doFrameRate) precompRgb.frameRate = 12;

              var precompDepth = precompRgb.duplicate();
              var origName = precompRgb.name;
              precompRgb.name += "_rgb";
              precompDepth.name = origName + "_depth";
              precompDepth.layers[1].position.setValue([640, 240]);

              precompDepth = theComp.layers.add(precompDepth);
              precompDepth.audioEnabled = false;
              precompDepth.position.setValue([320, 360]);
          }
        }
    }

    app.endUndoGroup();   
}

///////////////////////////////////////////////////////////////////////////////////////////

// 34.  Type: apply process to a whole comp
function viveRecording() {
    app.beginUndoGroup("Split Vive Recording");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
        alert(errorNoCompSelected);  
    } else {
        if (theComp.selectedLayers.length == 0) {
            alert(errorNoLayerSelected);
        } else { 
            baseWidth = theComp.width / 4;
            baseHeight = theComp.height / 4
            theComp.width = baseWidth * 2;
            theComp.height = baseHeight * 2;

            var titleBarSize = 36;
            if (!confirm("Use title bar compensation?")) titleBarSize = 0;
            
            var scaleOffset = 0.5;
            var theLayers = theComp.selectedLayers;

            for (var i=0; i<theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
                    var origName = curLayer.name;                        

                    if (titleBarSize !== 0) {
                        var precomp = theComp.layers.precompose([curLayer.index], "Precomp " + origName, true);
                        precomp.width = baseWidth * 4;
                        precomp.height = (baseHeight * 4) - titleBarSize;
                        precomp.layers[1].transform.position.setValue([baseWidth * 2, (baseHeight * 2) - titleBarSize]);
                        
                        var precomp2 = theComp.layers.precompose([theComp.selectedLayers[0].index], "Precomp " + origName + " 2", true);
                        precomp2.width = baseWidth * 4;
                        precomp2.height = baseHeight * 4;
                        precomp2.layers[1].transform.scale.setValue([100, 100 * (precomp2.height/precomp.height)]);
                        precomp2.layers[1].transform.position.setValue([baseWidth * 2, baseHeight * 2]);
                    }

                    var fgLayer = curLayer;
                    if (titleBarSize !== 0) fgLayer = theComp.selectedLayers[0];
                    fgLayer.name =  origName + "_foreground";
                    fgLayer.transform.anchorPoint.setValue([baseWidth, baseHeight]);
                    fgLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var alphaLayer = fgLayer.duplicate();
                    alphaLayer.name =  origName + "_alpha";
                    alphaLayer.transform.anchorPoint.setValue([baseWidth * 3, baseHeight]);
                    alphaLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var cameraPovLayer = fgLayer.duplicate();
                    cameraPovLayer.name = origName + "_camera_POV";
                    cameraPovLayer.transform.anchorPoint.setValue([baseWidth, baseHeight * 3]);
                    cameraPovLayer.transform.position.setValue([baseWidth, baseHeight]);

                    var playerPovLayer = fgLayer.duplicate();
                    playerPovLayer.name = origName + "_player_POV";
                    playerPovLayer.transform.anchorPoint.setValue([baseWidth * 3, baseHeight * 3]);
                    playerPovLayer.transform.position.setValue([baseWidth, baseHeight]);

                    if (titleBarSize !== 0) {
                        fgLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        alphaLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        cameraPovLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                        playerPovLayer.transform.scale.setValue([100, 100 + scaleOffset]);
                    }

                    var fg_SavedIndex = fgLayer.index;
                    var fgLayer2 = theComp.layers.precompose([fg_SavedIndex], fgLayer.name, true);
                    fgLayer2.width = baseWidth * 2;
                    fgLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) fgLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[fg_SavedIndex].audioEnabled = false;

                    var alpha_SavedIndex = alphaLayer.index;
                    var alphaLayer2 = theComp.layers.precompose([alpha_SavedIndex], alphaLayer.name, true);
                    alphaLayer2.width = baseWidth * 2;
                    alphaLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) alphaLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[alpha_SavedIndex].audioEnabled = false;

                    var cameraPov_SavedIndex = cameraPovLayer.index;
                    var cameraPovLayer2 = theComp.layers.precompose([cameraPov_SavedIndex], cameraPovLayer.name, true);
                    cameraPovLayer2.width = baseWidth * 2;
                    cameraPovLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) cameraPovLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[cameraPov_SavedIndex].audioEnabled = true;

                    var playerPov_SavedIndex = playerPovLayer.index;
                    var playerPovLayer2 = theComp.layers.precompose([playerPov_SavedIndex], playerPovLayer.name, true);
                    playerPovLayer2.width = baseWidth * 2;
                    playerPovLayer2.height = baseHeight * 2;
                    if (titleBarSize !== 0) playerPovLayer2.layers[1].collapseTransformation = true;
                    theComp.layers[playerPov_SavedIndex].audioEnabled = false;
                } else {
                    alert(errorFootageOnly);
                }
            }
        }
    }

    app.endUndoGroup();    
}

///////////////////////////////////////////////////////////////////////////////////////////

// 31. One-shot--create a bunch of objects and scripts.
function stereoController() { 
    app.beginUndoGroup("Create a Stereo Controller for a Camera");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)){
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

// 25.  Type: apply process to any number of layers
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

// 28.  Type: apply process to any number of layers
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

// 22.  Type: apply process to two layers
function mergeStereoPair(doUndoGroup) {
    if (doUndoGroup) app.beginUndoGroup("Merge Stereo pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
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

// 21.  Type: apply process to a whole comp
function stereoDispMap() {
    app.beginUndoGroup("s3D Displacement Map");

    var ioDistance = 6.0;
    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
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

// 20.  Type: apply process to a whole comp
function splitStereoPair() {
    app.beginUndoGroup("Split s3D Pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
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

// 35. Type: apply process to two layers
function stereo360() {
    app.beginUndoGroup("Merge Stereo pair");

    var theComp = app.project.activeItem;

    if (theComp == null || !(theComp instanceof CompItem)){  
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
