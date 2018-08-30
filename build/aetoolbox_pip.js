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
///////////////////////////////////////////////////////////////////////////////////////////
