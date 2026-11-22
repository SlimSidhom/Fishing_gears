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
  Multicolour braid (a new colour every 5 m) runs from the first rod guide,
  65 cm up the rod, over the
  line roller onto the spool, with white arrow tags showing which way it travels. Open bail flips the bail over (turning
  the handle snaps it shut), Cut slices the shell open along the spool, and
  Strip down takes the reel apart in a typical servicing order, step by step.
  Drag demo sets the drag from 0.2 to 10 kg (the knob turns and the washer
  stack squeezes), then lets a squid, a big squid or a sea bass run: when the
  pull beats the drag the spool slips, the clicker ticks and line pays out,
  with a live chart of pull against the setting. The pulls are illustrative,
  not measured.
  Sound (on by default, and remembered) plays the drag clicker, ticking on a
  slow slip and buzzing at the click-wheel rate on a fast run while the braid
  hisses off the spool, and the bail clacking open and shut. Every sound is
  synthesised in the browser; nothing is downloaded.

The model is stylised and built from primitives in code (three.js, vendored in
`vendor/`). It is not manufacturer CAD and proportions are approximate.
