// 23. Export
function unityAnim() {  //start script
    app.beginUndoGroup("Export Unity Anim");

    var theComp = app.project.activeItem; //only selected

    // check if comp is selected
    if (theComp == null || !(theComp instanceof CompItem)) {
        // if no comp selected, display an alert
        alert("Please establish a comp as the active item and run the script again.");
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert("Please select some layers and run the script again.");
        } else {

            //~~~~~~~~~~~~~~~~~~

            var unityMainHeader = "%YAML 1.1" + "\r" + 
                                  "%TAG !u! tag:unity3d.com,2011:" + "\r" + 
                                  "--- !u!74 &7400000";

            var unityMainFooter = "";

            var scaleFactor = 5.0;

            //~~~~~~~~~~~~~~~~~~
            for(var i = 0; i < theLayers.length; i++){
                // ...then loop through each layer in the selected comp
                // define the layer in the loop we're currently looking at
                var curLayer = theLayers[i];
                var fileName = theComp.name + "_" + curLayer.name;
                var unityLayerHeader = "AnimationClip:" + "\r" + 
                                       "  m_ObjectHideFlags: 0" + "\r" + 
                                       "  m_PrefabParentObject: {fileID: 0}" + "\r" + 
                                       "  m_PrefabInternal: {fileID: 0}" + "\r" + 
                                       "  m_Name: " + fileName + "\r" + 
                                       "  serializedVersion: 4" + "\r" + 
                                       "  m_AnimationType: 2" + "\r" + 
                                       "  m_Compressed: 0" + "\r" + 
                                       "  m_UseHighQualityCurve: 1" + "\r" + 
                                       "  m_RotationCurves: []" + "\r" + 
                                       "  m_CompressedRotationCurves: []" + "\r" + 
                                       "  m_PositionCurves:" + "\r" + 
                                       "  - curve:" + "\r" + 
                                       "      serializedVersion: 2" + "\r" + 
                                       "      m_Curve:";
                var unityLayerFooter = "";

                var myFile = File.saveDialog("Save your file", ".anim", "");
                var fileOK = myFile.open("w","TEXT","????");

                myFile.writeln(unityMainHeader);
                myFile.writeln(unityLayerHeader);

                var p = curLayer.property("Position");
                for(var j = 0; j < p.numKeys; j++) {
                    var pp = p.keyValue(j+1);

                    pp[0] = ( (pp[0]-(theComp.width/2)) / theComp.width ) * scaleFactor;
                    pp[1] = ( -1 * (pp[1]-(theComp.height/2)) / theComp.height) * scaleFactor;
                    pp[2] = ( pp[2] / ((theComp.width+theComp.height)/2) ) * scaleFactor;
                
                    var unityKeyPos = "      - time: " + p.keyTime(j+1) + "\r" +
                                      "        value: {x: " + pp[0] + ", y: " + pp[1] + ", z: " + pp[2] + "}" + "\r" +
                                      "        inSlope: {x: 0, y: 0, z: 0}" + "\r" +
                                      "        outSlope: {x: 0, y: 0, z: 0}" + "\r" +
                                      "        tangentMode: 0"; 
                                      
                    myFile.writeln(unityKeyPos);
                
               }              
                // not using a footer presently                
                //myFile.writeln(unityLayerFooter);
                //myFile.writeln(unityMainFooter);
                myFile.close;    
            }
        }
    }

    app.endUndoGroup();
}  //end script

///////////////////////////////////////////////////////////////////////////////////////////

// 26.  Type: apply process to any number of layers
function writeExample() {  
    app.beginUndoGroup("Export Example File");

    var theComp = app.project.activeItem; 

    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        var allLayers = theComp.layers;

        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else {
            //~~~~~~~~~~~~~~~~~~
            var fileMainHeader = "Sample Main Header" + "\r";
            var fileMainFooter = "Sample Main Footer" + "\r";
            var scaleFactor = 1.0;

            var myFile = File.saveDialog("Save your file", ".txt", "");
            var fileOK = myFile.open("w","TEXT","????");

            myFile.writeln(fileMainHeader);
            //~~~~~~~~~~~~~~~~~~
            for (var i = 0; i < theLayers.length; i++) {
                // ...then loop through each layer in the selected comp
                var curLayer = theLayers[i];
                var fileName = theComp.name + "_" + curLayer.name;
                var fileLayerHeader = "Sample Layer Header" + "\r";
                var fileLayerFooter = "Sample Layer Footer" + "\r";

                myFile.writeln(fileLayerHeader);

                var p = curLayer.property("Position");
                for(var j = 0; j < p.numKeys; j++) {
                    var pp = p.keyValue(j+1);

                    pp[0] = ( (pp[0]-(theComp.width/2)) / theComp.width ) * scaleFactor;
                    pp[1] = ( -1 * (pp[1]-(theComp.height/2)) / theComp.height) * scaleFactor;
                    pp[2] = ( pp[2] / ((theComp.width+theComp.height)/2) ) * scaleFactor;
                
                    var fileKeyPos = "time: " + p.keyTime(j+1) + ", x: " + pp[0] + ", y: " + pp[1] + ", z: " + pp[2] + "\r";
                                      
                    myFile.writeln(fileKeyPos);
                
               }              
                myFile.writeln(fileLayerFooter);
            }
            myFile.writeln(fileMainFooter);
            myFile.close;    
        }
    }

    app.endUndoGroup();
}  

// 33.  Type: apply process to any number of layers or properties
function xmlExport() {  
    app.beginUndoGroup("Export to XML");
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////

// 32.  Type: apply process to any number of layers or properties
function jsonExport() {  
    app.beginUndoGroup("Export to JSON");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)){
        alert(errorNoCompSelected);
    } else { 
        var theLayers = theComp.selectedLayers;
        if (theLayers.length==0) {
            alert(errorNoLayerSelected);
        } else { 
            for (var i = 0; i < theLayers.length; i++) {
                var curLayer = theLayers[i];                
                if (curLayer.matchName == "ADBE AV Layer") {
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

// 0.  Type: apply process to any number of layers or properties
function cameraToMaya() {  
    app.beginUndoGroup("Export Camera to Maya");

    //****************************** MAIN

    // AE_CameraToMaya v1.1n
    // by Ryan Gilmore, 2008
    // www.urbanspaceman.net
    // contact@urbanspaceman.net

    // Select the camera in After Effects you want to send to Maya, and this script will create an .ma file with a copy of the camera in it, with
    // correct position, rotation, and focal length.  Should work for any AE camera, no matter how it is animated, without any restrictions.

    // fixed for CS6 by Nick Fox-Gieg, 2012
    // null export by Nick Fox-Gieg, 2014

    //****************************** GLOBALS

    var f = 0;

    var theComp = app.project.activeItem;
    var theLayers = theComp.layers;
    var allLayers = theComp.layers;

    var compWidth = theComp.width;
    var compHeight = theComp.height;
    var selectedLayers = theComp.selectedLayers;
    var numLayers = selectedLayers.length;
    var theComplength = theComp.duration; //in seconds
    var totalFrames=Math.round(theComp.duration * theComp.frameRate) + 1;
    var aeCompRate = theComp.frameRate;
    var compRate = Math.round(aeCompRate);
    var frameDuration = theComp.frameDuration;

    var worldScale = 100;
    var worldCenter = [compWidth / 2, compHeight / 2];

    var aspect = theComp.pixelAspect;
    // these are more accurate video PARs, that AE rounds off 
    // [00]  D2 NTSC        0.8592
    // [01]  D1 NTSC        0.9 
    // [02]  D4 Stan        0.9481481
    // [03]  SQUARE         1
    // [04]  D2 PAL         1.0186      
    // [05]  D1 PAL         1.0667
    // [06]  D1 NTSC wide   1.2
    // [07]  HDV            1.333
    // [08]  D1 PAL wide    1.4222
    // [09]  DVCPROHD       1.5
    // [10]  D4 Ana         1.8962962
    // [11]  Ana2:1         2
    var ratio= [0.8592, 0.9, 0.9481481, 1.0, 1.0186, 1.0667, 1.2, 1.333, 1.4222, 1.5, 1.8962962, 2];
    if (aspect == 0.86) { aspect =ratio[0] }
    else if (aspect == 0.95){aspect =ratio[2]}
    else if (aspect == 1.02){aspect =ratio[4]}
    else if (aspect == 1.07){aspect =ratio[5]}
    else if (aspect == 1.33){aspect =ratio[7]}
    else if (aspect == 1.42){aspect =ratio[8]}
    else if (aspect == 1.9){aspect =ratio[10]};

    var frameAspect = (compWidth*aspect)/compHeight;

    mayaFBHeight = 1; // in inches
    mayaFilmBack = frameAspect*mayaFBHeight; // in inches

    // fps presets for Maya
    /*
    if (compRate == 30) {fps = "ntsc"} 
    else {}
    if (compRate == 25) {fps = "pal"}
    else {}
    if (compRate == 24) {fps = "film"}
    else {}
    if (compRate == 15) {fps = "game"}
    else {}
    if (compRate == 48) {fps = "show"} 
    else {}
    if (compRate == 60) {fps = "ntscf"}
    else {}
    if (compRate == 50) {fps = "palf"}
    else {}
    */
    if (compRate == 60) fps = "ntscf";
    if (compRate == 50) fps = "palf";
    if (compRate == 48) fps = "show";
    if (compRate == 30) fps = "ntsc";
    if (compRate == 25) fps = "pal";
    if (compRate <= 24 && compRate % 2 == 0) fps = "film";
    if (compRate == 15) fps = "game";

    //****************************** STEP 1: create free ZYX camera in After Effects

    DeselectProjectWindowItems();

    // error check: is the comp the active timeline window?
    if (app.project.activeItem!=null) {
    theComp = app.project.activeItem;

    // error check: is camera selected?
    if (theComp.selectedLayers!="") {
    theCamera = theComp.selectedLayers;

    // error check: is more than one layer selected?
    if (theCamera.length<2) {
    CameraName = theCamera[0].name;

    // error check: is it a camera selected?
    if (theCamera[0].zoom!=null) {

    theCamera[0].moveToEnd(); //null layers won"t all be counted unless camera is on the bottom

    CamIn=theCamera[0].inPoint;
    CamOut=theCamera[0].outPoint;

    // if camera has a parent that uses a scale value other than 100, this will affect rotation and zoom calculations.
    // NB: if the scale does not have equal XYZ values, this script won"t work.  That"s because this will stretch, 
    // distort, and skew the camera, and since the first step of this script is to output a free camera, it can"t be done since
    // a skewed free camera is impossible in After Effects.
    // if their is a parent, the unit value in the rotation matrix is scale/100
    // otherwise the unit value is 1.
    if (theCamera[0].parent!=null) {
        CamMaster=theCamera[0].parent;
        CamMasterExpression="this_comp.layer("+"\""+CamMaster.name+"\""+").scale/100";
    } else { 
        CamMasterExpression="[1,1,1]";
    };

    // make new camera.  This will inherit the Y and X rotations.
    theComp.layers.addCamera("CamCopy_yRot_xRot",[0,0]).startTime=0;
    CamCopy01=theComp.layer(1);
    CamCopy01.inPoint=CamIn;
    CamCopy01.outPoint=CamOut;
    CamCopy01.pointOfInterest.expression="position";
    CamCopy01.position.setValue([theComp.width/2, theComp.height/2, 0]);
    // make camera parent.  This is needed to reverse the rotation order.  This null will inherit the position and Z rotation.
    theComp.layers.addNull(theComp.duration).name="CamCopy_zRot_pos";
    CamParent01=theComp.layer(1);
    setNull(CamParent01,CamIn,CamOut,theComp);
    // attach child camera to parent
    CamCopy01.parent=CamParent01;

    // translate the data from the original camera with expressions
    CamParent01.position.expression="L=thisComp.layer("+"\""+CameraName+"\""+");L.toWorld([0,0,0])";
    CamParent01.rotation.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[0]";
    CamCopy01.orientation.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];[ 0, BHP[1], 0 ]";
    CamCopy01.rotationX.expression="L=this_comp.layer("+"\""+CameraName+"\""+");unit="+CamMasterExpression+";u=L.toWorldVec([unit[0],0,0]);v=L.toWorldVec([0,unit[1],0]);w=L.toWorldVec([0,0,unit[2]]);hLock=clamp(u[2],-1,1);h=Math.asin(-hLock);cosH=Math.cos(h);if (Math.abs(cosH) > 0.0005){p=Math.atan2(v[2], w[2]);b=Math.atan2(u[1],u[0]/thisComp.pixelAspect);} else { b=Math.atan2(w[1], v[1]);p=0;}BHP = [ radiansToDegrees(b), radiansToDegrees(h), radiansToDegrees(p) ];BHP[2]";
    CamCopy01.zoom.expression="unit="+CamMasterExpression+";this_comp.layer("+"\""+CameraName+"\""+").zoom*1/unit[0]";

    // Make a second copy of the camera, this time it will be baked
    ShortCamName=removeForbiddenCharacters(CameraName);
    theComp.layers.addCamera("<"+ShortCamName+">",[0,0]).startTime=0;
    CamCopy02=theComp.layer(1);
    CamCopy02.inPoint=CamIn;
    CamCopy02.outPoint=CamOut;
    CamCopy02.pointOfInterest.expression="position";
    CamCopy02.position.setValue([theComp.width/2, theComp.height/2, 0]);
    // make seconcd camera parent.
    theComp.layers.addNull(theComp.duration).name="<"+ShortCamName+"Parent"+">";
    CamParent02=theComp.layer(1);
    setNull(CamParent02,CamIn,CamOut,theComp);
    // attach child camera to parent
    CamCopy02.parent=CamParent02;

    Bake(theComp, theComp.layer(3).position, CamParent02.position);
    Bake(theComp, theComp.layer(3).rotation, CamParent02.rotation);
    Bake(theComp, theComp.layer(4).orientation, CamCopy02.orientation);
    Bake(theComp, theComp.layer(4).rotationX, CamCopy02.rotationX);
    Bake(theComp, theComp.layer(4).zoom, CamCopy02.zoom);

    //remove the expression camera and its parent
    theComp.layer(4).remove();
    theComp.layer(3).remove();

    } else { alert("ERROR!!\r"+
    "Please select a camera. ")};
    } else { alert("ERROR!!\r"+
    "Please select only one layer at a time. ")};
    } else { alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};
    } else { alert("ERROR!!\r"+
    "A camera must be highlighted, and its timeline must be the active window.")};

    //****************************** STEP 2: create Maya scene file

    var CamName = removeForbiddenCharacters(CameraName);

    // create text file
    var myFile = File.saveDialog("Save your file", CamName + ".ma", "");
    var fileOK = myFile.open("w","TEXT","????");

    // Maya scene file header
    myFile.writeln("//Maya ASCII 6.0 scene");
    myFile.writeln("//Name: " + CamName + "_export.ma");
    myFile.writeln("//Last modified:");
    myFile.writeln("requires maya \"6.0\";");
    myFile.writeln("currentUnit -l centimeter -a degree -t " + fps + ";");
    myFile.writeln("");

    // make camera nodes

    // transform node
    myFile.writeln("createNode transform -n \"" + CamName + "\";");

    // shape node, that will have film back
    myFile.writeln("createNode camera -n \"" + CamName + "Shape\" -p \"" + CamName + "\";"); //is parented to the transform node
    myFile.writeln("    setAttr -k off \".v\";");
    myFile.writeln("    setAttr \".rnd\" yes;");// renderable
    myFile.writeln("    setAttr \".ow\" 10.0;");
    myFile.writeln("    setAttr \".dof\" no;");// depth of field
    myFile.writeln("    setAttr \".s\" no;");
    myFile.writeln("    setAttr \".eo\" 1.0;");
    myFile.writeln("    setAttr \".ff\" 1;"); // film fit.  1 = horizontal (FOV measured on the horizontal)
    myFile.writeln("    setAttr \".cap\" -type \"double2\" " + mayaFilmBack + " " + mayaFBHeight + ";"); // Camera Aperature
    myFile.writeln("    setAttr \".col\" -type \"float3\" 0.0 0.0 0.0 ;");
    myFile.writeln("    setAttr \".imn\" -type \"string\" \"" + CamName + "\";");
    myFile.writeln("    setAttr \".den\" -type \"string\" \"" + CamName + "_Depth\";");
    myFile.writeln("    setAttr \".man\" -type \"string\" \"" + CamName + "_Mask\";");
    //~~~
    /*
    var aeZoom = theComp.layer(2).zoom.valueAtTime(0, false);
    var HFOV=Math.atan( (compWidth*aspect*0.5) /aeZoom);//half the FOV, in radians
    var fLength=( (mayaFilmBack*0.5) / Math.tan(HFOV) ) * 25.4; //in inches, converted to mm    
    myFile.writeln("    setAttr \".fl\" " + fLength + " ;");
    */
    //~~~
    myFile.writeln("");

    // X position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateX\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Xpos=(pos[0]-worldCenter[0])/worldScale;
        myFile.write(" " + i + " " + Xpos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Y position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateY\";")
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Ypos=-((pos[1]-worldCenter[1])/worldScale);
        myFile.write(" " + i + " " + Ypos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Z position
    myFile.writeln("createNode animCurveTL -n \"" + CamName + "_TranslateZ\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        pos=theComp.layer(1).position.valueAtTime(f, false);
        Zpos=-(pos[2]/worldScale);
        myFile.write(" " + i + " " + Zpos);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Pitch (X rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateX\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotX=theComp.layer(2).rotationX.valueAtTime(f, false);
        Xrot=rotX;
        myFile.write(" " + i + " " + Xrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Heading (Y rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateY\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotY=theComp.layer(2).orientation.valueAtTime(f, false);
        Yrot=-(rotY[1]);
        myFile.write(" " + i + " " + Yrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Bank (Z rotation)
    myFile.writeln("createNode animCurveTA -n \"" + CamName + "_RotateZ\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        rotZ=theComp.layer(1).rotation.valueAtTime(f, false);
        Zrot=-(rotZ);
        myFile.write(" " + i + " " + Zrot);
    }

    myFile.write(";");
    myFile.writeln("");
    myFile.writeln("");

    // Focal length
    myFile.writeln("createNode animCurveTU -n \"" + CamName + "Shape_FocalLength\";");
    myFile.writeln("    setAttr \".tan\" 9;");
    myFile.writeln("    setAttr \".wgt\" no;");
    myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");
            
    for (var i=1;i<=totalFrames;i++) {
        f=(i-1)*frameDuration;
        aeZoom = theComp.layer(2).zoom.valueAtTime(f, false);
        HFOV=Math.atan( (compWidth*aspect*0.5) /aeZoom);//half the FOV, in radians
        fLength=( (mayaFilmBack*0.5) / Math.tan(HFOV) ) * 25.4; //in inches, converted to mm
        myFile.write(" " + i + " " + fLength);
    }
            
    myFile.write(";");
    myFile.writeln(""); 
    myFile.writeln(""); 
    
    // Render size settings
    myFile.writeln("select -ne :time1;");
    myFile.writeln("    setAttr \".o\" 1;");
    myFile.writeln("select -ne :defaultResolution;");
    myFile.writeln("    setAttr \".w\" " + compWidth + ";");
    myFile.writeln("    setAttr \".h\" " + compHeight + ";");
    myFile.writeln("    setAttr \".dar\" " + frameAspect + ";");
    myFile.writeln("");

    // connect the nodes together
    myFile.writeln("connectAttr \"" + CamName + "_TranslateX.o\" \"" + CamName + ".tx\";");
    myFile.writeln("connectAttr \"" + CamName + "_TranslateY.o\" \"" + CamName + ".ty\";");
    myFile.writeln("connectAttr \"" + CamName + "_TranslateZ.o\" \"" + CamName + ".tz\";");
    myFile.writeln("");
    myFile.writeln("connectAttr \"" + CamName + "_RotateX.o\" \"" + CamName + ".rx\";");
    myFile.writeln("connectAttr \"" + CamName + "_RotateY.o\" \"" + CamName + ".ry\";");
    myFile.writeln("connectAttr \"" + CamName + "_RotateZ.o\" \"" + CamName + ".rz\";");
    myFile.writeln("");
    myFile.writeln("connectAttr \"" + CamName + "Shape_FocalLength.o\"\"" + CamName + "Shape.fl\";");
    myFile.writeln("");


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // modifications by Nick Fox-Gieg
    var allLayers = theComp.layers;
    for (var i=1; i < allLayers.length; i++) {
        var curLayer = allLayers[i];
        var curLayerName = curLayer.name.replace(/[^a-zA-Z0-9]+/g,"");
        if (curLayer.matchName != "ADBE Camera Layer" && curLayerName != CamName + "Parent"){
            //alert(curLayerName);

            var pos = curLayer.property("Position").valueAtTime(0,false);
            var Xpos=(pos[0]-worldCenter[0])/worldScale;
            var Ypos=-((pos[1]-worldCenter[1])/worldScale);
            var Zpos=-(pos[2]/worldScale);

            /*
            var Xrot=curLayer.rotationX.valueAtTime(0, false);
            var Yrot=curLayer.orientation.valueAtTime(0, false);
            var Zrot=curLayer.rotationZ.valueAtTime(0, false);

            var scale=curLayer.scale.valueAtTime(0, false);
            var Xscale=scale[0]/100;
            var Yscale=scale[1]/100;
            var Zscale=scale[2]/100;
            */

            myFile.writeln("createNode transform -n \"" + curLayerName +"\";");
            myFile.writeln("setAttr \".t\" -type \"double3\" " + Xpos + " " + Ypos + " " + Zpos + " ;");
            myFile.writeln("setAttr -av \".tx\";");
            myFile.writeln("setAttr -av \".ty\";");
            myFile.writeln("setAttr -av \".tz\";");
            myFile.writeln("");

            /*
            myFile.writeln("setAttr \".r\" -type \"double3\" " + Xrot + " " + Yrot + " " + Zrot + " ;");
            myFile.writeln("setAttr -av \".rx\";");
            myFile.writeln("setAttr -av \".ry\";");
            myFile.writeln("setAttr -av \".rz\";");
            myFile.writeln("");

            myFile.writeln("setAttr \".s\" -type \"double3\" " + Xscale + " " + Yscale + " " + Zscale + " ;");
            myFile.writeln("setAttr -av \".sx\";");
            myFile.writeln("setAttr -av \".sy\";");
            myFile.writeln("setAttr -av \".sz\";");
            myFile.writeln("");
            */

            myFile.writeln("createNode locator -n \"locatorShape"+ i +"\" -p \"" + curLayerName +"\";");
            myFile.writeln("setAttr -k off \".v\";");

            myFile.writeln("");   
            myFile.writeln("connectAttr \"" + curLayerName + "_visibility.o\" \"" + curLayerName + ".v\";");
            myFile.writeln("");   

            //1-3 TRANSLATE
            // X position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Xpos=(pos[0]-worldCenter[0])/worldScale;
                myFile.write(" " + counter + " " + Xpos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Ypos=-((pos[1]-worldCenter[1])/worldScale);
                myFile.write(" " + counter + " " + Ypos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z position
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_TranslateZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var pos=curLayer.position.valueAtTime(f, false);
                var Zpos=-(pos[2]/worldScale);
                myFile.write(" " + counter + " " + Zpos);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateX.o\" \"" + curLayerName + ".tx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateY.o\" \"" + curLayerName + ".ty\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_TranslateZ.o\" \"" + curLayerName + ".tz\";");
           
            myFile.writeln("");
            
            /*
            //2-3 ROTATION
            // X rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Xrot=curLayer.rotationX.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Xrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Yrot=curLayer.orientation.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Yrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z rotation
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_RotateZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var Zrot=curLayer.rotationZ.valueAtTime(f, false);
                myFile.write(" " + counter + " " + Zrot);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_rotateX.o\" \"" + curLayerName + ".rx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_rotateY.o\" \"" + curLayerName + ".ry\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_rotateZ.o\" \"" + curLayerName + ".rz\";");
           
            myFile.writeln("");

            //3-3 SCALE
            // X scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleX\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Xscale=scale[0]/100;
                myFile.write(" " + counter + " " + Xscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Y scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleY\";")
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Yscale=scale[1]/100;
                myFile.write(" " + counter + " " + Yscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            // Z scale
            myFile.writeln("createNode animCurveTL -n \"" + curLayerName + "_ScaleZ\";");
            myFile.writeln("    setAttr \".tan\" 9;");
            myFile.writeln("    setAttr \".wgt\" no;");
            myFile.write("  setAttr -s " + totalFrames + " \".ktv[1:" + totalFrames + "]\"");

            var counter = 1; // why does this only work with a while loop?
            while (counter <= totalFrames) {
                var f=(counter-1)*frameDuration;
                var scale=curLayer.scale.valueAtTime(f, false);
                var Zscale=scale[2]/100;
                myFile.write(" " + counter + " " + Zscale);
                counter++;
            }

            myFile.write(";");
            myFile.writeln("");
            myFile.writeln("");

            myFile.writeln("connectAttr \"" + curLayerName + "_scaleX.o\" \"" + curLayerName + ".sx\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_scaleY.o\" \"" + curLayerName + ".sy\";");
            myFile.writeln("connectAttr \"" + curLayerName + "_scaleZ.o\" \"" + curLayerName + ".sz\";");
           
            myFile.writeln("");
            */
        }
    }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // finish it all up...

    // set work area 
    myFile.writeln("createNode script -n \"sceneConfigurationScriptNode\";");
    myFile.writeln("    setAttr \".b\" -type \"string\"\"playbackOptions -min 1.0 -max " + totalFrames + " -ast 1.0 -aet " + totalFrames + "\";");
    myFile.writeln("    setAttr \".st\" 6;");
    myFile.writeln("");
    myFile.writeln("//End of " + CamName + ".ma");

    myFile.close();

    //erase baked camera and its parent
    theComp.layer(2).remove();
    theComp.layer(1).remove();

    app.endUndoGroup();
} 

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
