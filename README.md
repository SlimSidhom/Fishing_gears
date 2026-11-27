# Fishing_gears

Interactive 3D viewers for fishing gear.

**Live viewer:** https://slimsidhom.github.io/Fishing_gears/

## Model reference

Daiwa rates the 2025 Emeraldas Air PC LT2500-H at 5.7 rotor turns per handle turn,
80 cm of line per handle turn, and 10 kgf maximum drag. The French specification
lists 200 m of 0.10 mm braid and 150 m of 0.20 mm nylon. Its bearing count is
12 ball bearings plus one roller clutch. [Daiwa France specifications](https://daiwa.fr/produits/moulinets/emeraldas-air-lt-2025)

Daiwa describes cross-wrap line lay, a 55 mm handle with a round EVA knob, the
twin-bearing MAGSEALED line roller, and clearance between the AIRDRIVE shaft
and pinion. [Daiwa technical description](https://www.daiwa.com/southeastasia/product/10wlj94)

The cutaway groups the assemblies for teaching. The tooth shapes and counts,
13.8 mm spool stroke, 0.55 oscillation cycles per handle turn, and bail-trip
angle are model estimates. Drag torque, friction, inertia, and pull profiles
are illustrative. The 10 kgf manufacturer rating expresses maximum line force.
Use the [official exploded parts diagram](https://www.sl-planets.co.jp/download/00061323.pdf)
and [matching parts list](https://www.sl-planets.co.jp/shop/p/p00061323/) for actual part references.

## Reels

- **Daiwa Emeraldas Air PC LT2500-H** — open `index.html` in a browser.
  Click a part (or pick it from the list) to fly the camera to it, scroll to zoom
  toward the pointer, drag to orbit, right-drag to pan. Explode pulls all 53
  parts apart along their axes like a parts diagram, X-ray shows the internals
  in place. Turn handle animates the drive train at the speed you set, or
  drag the handle with the mouse or a finger to wind it by hand.
  **One turn** advances one handle revolution at the selected speed. Watch
  the rotor turn 5.7 times and follow the recent wraps across the sliding spool
  in X-ray. Pickup varies with the radius of the wound line. The multicolour
  braid changes colour every 5 m and the arrows show its direction of travel.
  **Cast 5 m** opens the bail and releases line over the lip of the stationary
  spool. Cranking trips the bail when the kick lever reaches its stop. Pickup
  resumes once the bail closes and captures the braid.
  **Cut** sections the reel and **Strip down** walks through its assemblies.
  In **Drag demo**, choose a starting fill, set the drag and run a squid or
  sea bass pull. The knob setting corresponds to line force at full fill.
  A smaller line pack needs a stronger pull to produce the same torque.
  Wind during the run to compare gross drag payout and net line movement.
  The chart records the pull, drag limit and slip as they occurred.
  Sound (on by default, and remembered) plays the drag clicker, ticking on a
  slow slip and buzzing at the click-wheel rate on a fast run while the braid
  hisses off the spool, and the bail clacking open and shut. Every sound is
  synthesised in the browser; nothing is downloaded.

The model is stylised and built from primitives in code (three.js, vendored in
`vendor/`). It is not manufacturer CAD and proportions are approximate.
