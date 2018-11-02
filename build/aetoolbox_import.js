// Notes: apply process to any number of layers.
function gmlToPos() {  
    app.beginUndoGroup("GML to Position");

    var theComp = app.project.activeItem; 
    
    if (theComp == null || !(theComp instanceof CompItem)) {
        alert(errorNoCompSelected);
    } else { 
        var xmlFile = File.openDialog();
        var file = xmlFile.open("r");
        var xmlRoot;
        if (file) {
            var xmlString = xmlFile.read();
            xmlRoot = new XML(xmlString);
            xmlFile.close();
        }

        if (xmlRoot) {
            tag = xmlRoot.descendants("tag");
            var header = tag.descendants("header");
            var environment = header.descendants("environment");
            var screenBounds = environment.descendants("screenBounds");
            var dim = [ parseFloat(screenBounds.descendants("x")), parseFloat(screenBounds.descendants("y")), parseFloat(screenBounds.descendants("z")) ];
            if (!dim[0]) dim[0] = 640.0;
            if (!dim[1]) dim[1] = 640.0;
            if (!dim[2]) dim[2] = 640.0;

            var gml = theComp.layers.addSolid([0, 0, 0], "GML", parseInt(dim[0]), parseInt(dim[1]), 1);
            gml.guideLayer = true;
            gml.threeDLayer = true;

            var drawing = tag.descendants("drawing");
            var strokesEl = drawing.stroke;
            for (var i=0; i<strokesEl.length(); i++) {
                for (var j=0; j<strokesEl[i].pt.length(); j++) {
                    var pointEl = strokesEl[i].pt[j];
                    var x = parseFloat(pointEl.descendants("x")) * dim[0];
                    var y = parseFloat(pointEl.descendants("y")) * dim[1];
                    var z = parseFloat(pointEl.descendants("z")) * dim[2];
                    var time = parseFloat(pointEl.descendants("time"));
                    
                    if (!x) x = 0.0;
                    if (!y) y = 0.0;
                    if (!z) z = 0.0;
                    if (!time) time = 0.0;

                    var pos = gml.property("Position");
                    // TODO normalize time and fit in comp time
                    pos.setValueAtTime(time, [ x, y, z ]);
                }
            }
        }
    }

    app.endUndoGroup();
}  

///////////////////////////////////////////////////////////////////////////////////////////

// Notes: Import XML or JSON file of tracking data for 3D characters
function importMocap3D() {  
    app.beginUndoGroup("Import 3D Points From XML or JSON");

    if(parseFloat(app.version) >= 10.5) {
        var myComp = app.project.activeItem;
        var fileType="xml";
        var myRoot;

        //load xml or json file
        var myFile = File.openDialog();
        var fileOK = myFile.open("r");
        if (fileOK) {
            var myFileString = myFile.read();
            if (myFile.name.split(".").pop()=="xml") {
                fileType="xml";
                myRoot = new XML(myFileString);
            } else if (myFile.name.split(".").pop()=="json") {
                fileType="json";
                myRoot = eval("(" + myFileString + ")");
            }
            myFile.close();
        }
        
        if (fileType=="xml") {
            //~~~~~~~~~~~~~~~~~begin 3D XML version
            var compRate = parseFloat(myRoot.@fps); // comp frame rate

            var sW = parseFloat(myRoot.@width);
            var sH = parseFloat(myRoot.@height);
            var sD = parseFloat(myRoot.@depth);

            var mocap = myComp.layer("mocap");

            var trackPoint = jointNamesMaster;

            // add joint information
            for (var j=0; j<trackPoint.length; j++) {
                var myEffect = mocap.property("Effects").property(trackPoint[j]);
                myEffect.name = trackPoint[j];
                var p = mocap.property("Effects")(trackPoint[j])("3D Point");

                for (var i=0; i<myRoot.MocapFrame.length(); i++) {
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    //keyframes go here
                    //var pTfps = myRoot.@fps;
                    var pT = i/compRate;
                    var pXs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@x;
                    var pYs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@y;
                    var pZs = myRoot.MocapFrame[i].Skeleton.Joints.descendants(trackPoint[j]).@z;

                    if (pXs != "NaN" && pYs != "NaN" && pZs != "NaN") {
                        var pX = parseFloat(pXs);
                        var pY = parseFloat(pYs);
                        var pZ = parseFloat(pZs);
                        p.setValueAtTime(pT, [pX * sW, pY * sH, pZ * sD]);
                    }
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }
            //~~~~~~~~~~~~~~~~~end 3D XML version
        } else if (fileType=="json") {
            //~~~~~~~~~~~~~begin 3D JSON version
                var compRate = myRoot.MotionCapture.fps; // comp frame rate
                var sW = myRoot.MotionCapture.width;
                var sH = myRoot.MotionCapture.height;
                var sD = myRoot.MotionCapture.depth;
                
                var mocap = myComp.layer("mocap");

                var trackPoint = jointNamesMaster;

                // add joint information
            for (var name in myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints) {
                var myEffect = mocap.property("Effects").property(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name);
                myEffect.name = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name;
                var p = mocap.property("Effects")(myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].name)("3D Point");
                
                for (var i=0;i<myRoot.MotionCapture.numFrames;i++) {
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        //keyframes go here
                        var pT = i/compRate;
                        var pX = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].x;
                        var pY = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].y;
                        var pZ = myRoot.MotionCapture.MocapFrame.Skeleton[0].Joints[name].pos[i].z;
                        p.setValueAtTime(pT, [pX,pY,pZ]);
                        
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            }
            //~~~~~~~~~~~~~end 3D JSON version
        }       
    } else {
        alert(cs55warning);
    }
 
    app.endUndoGroup();
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
