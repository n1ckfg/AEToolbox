The AEToolbox UI panel was developed with support from:
   Canada Council on the Arts
   
   Eyebeam Art + Technology Center
   Ontario Arts Council / Chalmers Family Fund

Copyright (c) 2017 Nick Fox-Gieg
http://fox-gieg.com


FEATURES:

I.  BASIC
1. Nulls for Pins (layer selection): Creates a controller null for each puppet pin on a layer. 
2. Parent Chain (layer selection): Parent a chain of layers one to another.
3. Locator Null...
     (layer selection): Creates a new null at the location of each selected layer.
     (no selection): Creates a new null in the center of the comp. 
4. Move to Position (layer selection): Moves all layers to the location of the last selected layer.
5. Make Loop...
     (layer selection): Puts a cycle expression on Time Remap.
     (property selection): Puts a cycle expression on the selected properties.
6. Random Position (layer selection): Randomizes a layer's position.
7. Graph Audio (layer selection): Converts audio to keyframes and enables the graph view.
8. Isolate Color (layer selection): Keys out everything but selected color.

II.  ADVANCED
1. Bake Keyframes (layer selection): Bakes expressions and puppet pins to keyframes.
2. Lock Y Rotation (layer selection): Forces a layer to always face the camera.
3. Auto Z Rotation (layer selection): Smart 2D auto-rotation.
4. Parentable Null (layer selection): Creates a null with expressions that solve certain parenting problems. 
5. Sine Generator (layer selection): Applies sine-wave motion controls to a layer.  
6. Crossfade (comp selection): Fades a layer into a duplicate of itself for a seamless loop.
7. Motion Blur Twos* (layer selection): *Reelsmart Motion Blur* for animation on twos.

III.  RIGGING
1. Blink Rig (comp selection): Turns a blink layer inside the comp on and off.  
2. Jaw Rig (comp selection): Rigs a jaw layer inside the comp for audio control of rotation or position.
3. Snake Rig (layer selection): Rigs a puppet-pin layer for automated snake-like movement.
4. Beam Rig (no selection): Creates a 3D laser effect with start and end nulls.
5. Particle Rig* (no selection): *Particular* null controller for particles.
6. Camera Rig (no selection): Creates a camera rigged for point-of-interest and DoF control. 
7. MoSketch Rig (no selection): Creates a null with 3D controls for use with Motion Sketch.
8. Photo Rig (layer selection): Creates precomps that each display one frame from a sequence.

IV.  DEPTH
1. Split s3D Pair (layer selection): Splits a stereo 3D pair video into two left and right comps.
2. Merge s3D Pair (layer selection): Merges two left and right comps into a stereo 3D pair comp.
3. s3D Dispmap...
     (one layer selected): Creates an s3D pair from the selected layer, using it as a displacement map.
     (two layers selected): Creates an s3D pair from the first layer, using the second layer for displacement.
4. Depth Fill (layer selection): Creates a grayscale depth fill based on distance to camera.
5. Depth Sort (layer selection): Sorts layers based on Z depth.
6. Stereo Controller (comp selection): Creates a stereo controller null for a single camera.
7. Vive Recording (layer selection): Splits a quad Vive recording into separate layers.
8. 4K Stereo 360 (layer selection): Creates a standard 4K OU 360 stereo comp.
9. Holoflix 720p (layer selection): Splits a Holoflix 720p clip into RGB and depth comps.

V.  GUIDE
1. Onion Skin (no selection): Creates an adjustment layer that applies an onion skin effect.
2. Skeleton View (layer selection): View connections between parent and child layers.

VI.  IO
1. Camera to Maya (layer selection): Export camera to Maya.
2. Unity Anim (layer selection): Export keyframes to Unity anim.
3. JSON Export (layer selection): Export keyframes to JSON.
4. XML Export (layer selection): Export keyframes to XML.