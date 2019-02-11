<b>AEToolbox UI panel</b><br>
The AEToolbox UI panel was developed with support from:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Canada Council on the Arts<br>
&nbsp;&nbsp;&nbsp;&nbsp;Eyebeam Art + Technology Center<br>
&nbsp;&nbsp;&nbsp;&nbsp;Ontario Arts Council / Chalmers Family Fund<br>
<br>
Copyright (c) 2019 Nick Fox-Gieg<br>
http://fox-gieg.com<br>
<br>
To install, drop the AEToolbox.jsx file into your After Effects ScriptUI Panels directory. After restarting After Effects, you can access the AEToolbox panel from the Window menu, just like your other panels. By default, this is:<br>
```
// Mac:
/Applications/AFTER_EFFECTS_VERSION/Scripts/ScriptUI Panels/

// Windows:
C:\Program Files\AFTER_EFFECTS_VERSION\Scripts\ScriptUI Panels\
```
<br>
<b>List of Features:</b><br>
<br>
1. BASIC<br>
1.1. Nulls for Pins (layer selection): Creates a controller null for each puppet pin on a layer. <br>
1.2. Parent Chain (layer selection): Parent a chain of layers one to another.<br>
1.3. Locator Null...<br>
&nbsp;&nbsp;&nbsp;&nbsp;(layer selection): Creates a new null at the location of each selected layer.<br>
&nbsp;&nbsp;&nbsp;&nbsp;(no selection): Creates a new null in the center of the comp. <br>
1.4. Move to Position (layer selection): Moves all layers to the location of the last selected layer.<br>
1.5. Make Loop...<br>
&nbsp;&nbsp;&nbsp;&nbsp;(layer selection): Puts a cycle expression on Time Remap.<br>
&nbsp;&nbsp;&nbsp;&nbsp;(property selection): Puts a cycle expression on the selected properties.<br>
1.6. Random Position (layer selection): Randomizes a layer's position.<br>
1.7. Graph Audio (layer selection): Converts audio to keyframes and enables the graph view.<br>
1.8. Isolate Color (layer selection): Keys out everything but selected color.<br>
<br>
2. ADVANCED<br>
2.1. Bake Keyframes (layer selection): Bakes expressions and puppet pins to keyframes.<br>
2.2. Lock Y Rotation (layer selection): Forces a layer to always face the camera.<br>
2.3. Auto Z Rotation (layer selection): Smart 2D auto-rotation.<br>
2.4. Parentable Null (layer selection): Creates a null with expressions that solve certain parenting problems. <br>
2.5. Sine Generator (layer selection): Applies sine-wave motion controls to a layer.  <br>
2.6. Crossfade (comp selection): Fades a layer into a duplicate of itself for a seamless loop.<br>
2.7. Motion Blur Twos* (layer selection): *Reelsmart Motion Blur* for animation on twos.<br>
<br>
3. RIGGING<br>
3.1. Blink Rig (comp selection): Turns a blink layer inside the comp on and off.  <br>
3.2. Jaw Rig (comp selection): Rigs a jaw layer inside the comp for audio control of rotation or position.<br>
3.3. Snake Rig (layer selection): Rigs a puppet-pin layer for automated snake-like movement.<br>
3.4. Beam Rig (no selection): Creates a 3D laser effect with start and end nulls.<br>
3.5. Particle Rig* (no selection): *Particular* null controller for particles.<br>
3.6. Camera Rig (no selection): Creates a camera rigged for point-of-interest and DoF control. <br>
3.7. MoSketch Rig (no selection): Creates a null with 3D controls for use with Motion Sketch.<br>
3.8. Photo Rig (layer selection): Creates precomps that each display one frame from a sequence.<br>
<br>
4. DEPTH<br>
4.1. Split s3D Pair (layer selection): Splits a stereo 3D pair video into two left and right comps.<br>
4.2. Merge s3D Pair (layer selection): Merges two left and right comps into a stereo 3D pair comp.<br>
4.3. s3D Dispmap...<br>
&nbsp;&nbsp;&nbsp;&nbsp;(one layer selected): Creates an s3D pair from the selected layer, using it as a displacement map.<br>
&nbsp;&nbsp;&nbsp;&nbsp;(two layers selected): Creates an s3D pair from the first layer, using the second layer for displacement.<br>
4.4. Depth Fill (layer selection): Creates a grayscale depth fill based on distance to camera.<br>
4.5. Depth Sort (layer selection): Sorts layers based on Z depth.<br>
4.6. Stereo Controller (comp selection): Creates a stereo controller null for a single camera.<br>
4.7. Vive Recording (layer selection): Splits a quad Vive recording into separate layers.<br>
4.8. 4K Stereo 360 (layer selection): Creates a standard 4K OU 360 stereo comp.<br>
4.9. Holoflix 720p (layer selection): Splits a Holoflix 720p clip into RGB and depth comps.<br>
<br>
5. GUIDE<br>
5.1. Onion Skin (no selection): Creates an adjustment layer that applies an onion skin effect.<br>
5.2. Skeleton View (layer selection): View connections between parent and child layers.<br>
<br>
6. EXPORT<br>
6.1. Camera to Maya (layer selection): Export camera to Maya.<br>
6.2. Unity Anim (layer selection): Export keyframes to Unity anim.<br>
6.3. JSON Export (layer selection): Export keyframes to JSON.<br>
6.4. XML Export (layer selection): Export keyframes to XML.<br>
<br>
7. IMPORT<br>
7.1. GML to Position (comp selection): Import position keyframes from GML.