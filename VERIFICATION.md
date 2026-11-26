SKYLANE verification — 26 November 2026

Browser: headless desktop Chromium, 1280 × 720. No game dependencies or external assets.

- `?selftest=1`: PASS, 8/8 ring discs, SAFE home landing, 11,785 points, 84 simulated seconds. The pilot varies throttle, pitch and bank through the same stepFlight function used by player input. No position changes or teleports during the sortie.
- Additional physics pilots: mail mission completed with all three deliveries and a return-home landing (9,788 points); storm mission reached the keeper beacon and landed at the harbour (8,962 points). These pilots also used ordinary flight steps, including rollout, refuelling and takeoff on the mail route.
- Browser input checks: clickable mission selection and departure; keyboard throttle and bank; held mouse steering; gear toggle; cockpit toggle; pause holds position; mute toggle; low-speed stall; hard volcano impact produces a readable crash reason. All passed.
- Four screenshots captured from the actual renderer and visually inspected: chase cover with island coast, volcano, ring, runway, aircraft and HUD; cockpit final; gear-down threshold; three-star completion with aircraft parked behind the panel.
- Two independent main.ts outputs compared recursively: identical. The kit's vendored helper is byte-identical to the supplied file. No network URLs, fetch calls, eval or Function constructor in game/.
- Kit check: 5 passed, 1 expected failure (`transcripts_present`), 16 skipped, 3 checked at submission. Transcript bundling and submission belong to the parent session and were not run here.

Audio synthesis and its browser activation were exercised; subjective sound quality was not assessed through a physical speaker. The screenshots use fixed reachable scene states rather than recording an entire sortie.
