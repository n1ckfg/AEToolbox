AEToolbox UI panel
The AEToolbox UI panel was developed with support from:
   Canada Council on the Arts
   Eyebeam Art + Technology Center
   Ontario Arts Council / Chalmers Family Fund

Copyright (c) 2018 Nick Fox-Gieg
http://fox-gieg.com


To install, drop the AEToolbox.jsx file into your After Effects ScriptUI Panels directory.  

By default, this is:
(Mac)
```
/Applications/YOUR AFTER EFFECTS VERSION/Scripts/ScriptUI Panels/
```

(Windows)
```
C:\Program Files\YOUR AFTER EFFECTS VERSION\Scripts\ScriptUI Panels\
```

After restarting After Effects, you can access the AEToolbox panel from the Window menu, just like your other panels.

FEATURES:

1. BASIC
1.1. Nulls for Pins (layer selection): Creates a controller null for each puppet pin on a layer. 
1.2. Parent Chain (layer selection): Parent a chain of layers one to another.
1.3. Locator Null...
     (layer selection): Creates a new null at the location of each selected layer.
     (no selection): Creates a new null in the center of the comp. 
1.4. Move to Position (layer selection): Moves all layers to the location of the last selected layer.
1.5. Make Loop...
     (layer selection): Puts a cycle expression on Time Remap.
     (property selection): Puts a cycle expression on the selected properties.
1.6. Random Position (layer selection): Randomizes a layer's position.
1.7. Graph Audio (layer selection): Converts audio to keyframes and enables the graph view.
1.8. Isolate Color (layer selection): Keys out everything but selected color.

2. ADVANCED
2.1. Bake Keyframes (layer selection): Bakes expressions and puppet pins to keyframes.
2.2. Lock Y Rotation (layer selection): Forces a layer to always face the camera.
2.3. Auto Z Rotation (layer selection): Smart 2D auto-rotation.
2.4. Parentable Null (layer selection): Creates a null with expressions that solve certain parenting problems. 
2.5. Sine Generator (layer selection): Applies sine-wave motion controls to a layer.  
2.6. Crossfade (comp selection): Fades a layer into a duplicate of itself for a seamless loop.
2.7. Motion Blur Twos* (layer selection): *Reelsmart Motion Blur* for animation on twos.

3. RIGGING
3.1. Blink Rig (comp selection): Turns a blink layer inside the comp on and off.  
3.2. Jaw Rig (comp selection): Rigs a jaw layer inside the comp for audio control of rotation or position.
3.3. Snake Rig (layer selection): Rigs a puppet-pin layer for automated snake-like movement.
3.4. Beam Rig (no selection): Creates a 3D laser effect with start and end nulls.
3.5. Particle Rig* (no selection): *Particular* null controller for particles.
3.6. Camera Rig (no selection): Creates a camera rigged for point-of-interest and DoF control. 
3.7. MoSketch Rig (no selection): Creates a null with 3D controls for use with Motion Sketch.
3.8. Photo Rig (layer selection): Creates precomps that each display one frame from a sequence.

4. DEPTH
4.1. Split s3D Pair (layer selection): Splits a stereo 3D pair video into two left and right comps.
4.2. Merge s3D Pair (layer selection): Merges two left and right comps into a stereo 3D pair comp.
4.3. s3D Dispmap...
     (one layer selected): Creates an s3D pair from the selected layer, using it as a displacement map.
     (two layers selected): Creates an s3D pair from the first layer, using the second layer for displacement.
4.4. Depth Fill (layer selection): Creates a grayscale depth fill based on distance to camera.
4.5. Depth Sort (layer selection): Sorts layers based on Z depth.
4.6. Stereo Controller (comp selection): Creates a stereo controller null for a single camera.
4.7. Vive Recording (layer selection): Splits a quad Vive recording into separate layers.
4.8. 4K Stereo 360 (layer selection): Creates a standard 4K OU 360 stereo comp.
4.9. Holoflix 720p (layer selection): Splits a Holoflix 720p clip into RGB and depth comps.

5. GUIDE
5.1. Onion Skin (no selection): Creates an adjustment layer that applies an onion skin effect.
5.2. Skeleton View (layer selection): View connections between parent and child layers.

6. EXPORT
6.1. Camera to Maya (layer selection): Export camera to Maya.
6.2. Unity Anim (layer selection): Export keyframes to Unity anim.
6.3. JSON Export (layer selection): Export keyframes to JSON.
6.4. XML Export (layer selection): Export keyframes to XML.

7. IMPORT
7.1. GML to Position (comp selection): Import position keyframes from GML.