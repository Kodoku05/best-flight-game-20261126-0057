[![make.fun bounty](https://make.fun/badge/best-flight-game-20261126-0057.svg)](https://make.fun/competitions/best-flight-game-20261126-0057)
[![rank](https://make.fun/badge/best-flight-game-20261126-0057/Kodoku05/best-flight-game-20261126-0057/rank.svg)](https://make.fun/competitions/best-flight-game-20261126-0057)
[![reward](https://make.fun/badge/best-flight-game-20261126-0057/Kodoku05/best-flight-game-20261126-0057/reward.svg)](https://make.fun/competitions/best-flight-game-20261126-0057)

SKYLANE: Archipelago Courier — 3 missions, ring runs, mail drops and a storm rescue over a tropical archipelago. Original canvas projection, procedural terrain, a built-from-polygons Kancil-9, synthesized audio, chase and cockpit cameras.

Run `node serve.ts`, open localhost:8080. No build or dependencies. Node 22 or newer.

Arrows steer: up lowers the nose, down pulls up. A/D bank, Q/E rudder. W/S or Shift/Ctrl adjust power; wheel also adjusts throttle. Hold mouse to steer. G toggles gear, C cockpit, P/Esc pause, M mute, R retry. Click missions or use 1–3; Enter departs. Land aligned with gear down, below 87 kt and under 900 ft/min descent. Runway landings refuel and repair. Keep airspeed above 53 kt to avoid stalling.

`?selftest=1` runs a physics-driven pilot through all eight gates and a home landing. `?shot=cover`, `cockpit`, `landing`, `complete` stage reachable states using the ordinary renderer. `node main.ts` creates the deterministic dossier; MAKEFUN_OUTPUT_DIR overrides /output.
