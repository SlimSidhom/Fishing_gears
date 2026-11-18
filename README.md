# Fishing_gears

Interactive 3D viewers for fishing gear.

**Live viewer:** https://slimsidhom.github.io/Fishing_gears/

## Reels

- **Daiwa Emeraldas Air PC LT2500-H** — open `index.html` in a browser.
  Click a part (or pick it from the list) to fly the camera to it, scroll to zoom
  toward the pointer, drag to orbit, right-drag to pan. Explode pulls all 53
  parts apart along their axes like a parts diagram, X-ray shows the internals
  in place. Turn handle animates the drive train at the speed you set, or
  drag the handle with the mouse or a finger to wind it by hand.
  Multicolour braid (a new colour every 5 m) runs from the rod guide over the
  line roller onto the spool, with white arrow tags showing which way it travels. Open bail flips the bail over (turning
  the handle snaps it shut), Cut slices the shell open along the spool, and
  Strip down takes the reel apart in a typical servicing order, step by step.

The model is stylised and built from primitives in code (three.js, vendored in
`vendor/`). It is not manufacturer CAD and proportions are approximate.
