import {createFlight} from './physics.js';
import {createMission} from './missions.js';
export function stageShot(name){const s=createFlight(),m=createMission();s.time=42;s.fuel=78;s.roll=-.16;s.throttle=.68;m.elapsed=84;
 if(name==='cover'){s.z=-1250;s.y=260;m.ring=7;s.roll=-.12;}
 if(name==='cockpit'){s.z=250;s.y=105;s.speed=34;s.pitch=-.07;s.vs=-1.4;s.gear=true;s.roll=0;m.ring=8;}
 if(name==='landing'){s.z=645;s.y=55;s.speed=32;s.pitch=-.04;s.vs=-1.2;s.gear=true;s.roll=0;m.ring=8;}
 if(name==='complete'){s.z=1000;s.y=45;s.speed=0;s.throttle=0;s.gear=true;s.roll=0;s.landed=true;s.landingQuality='BUTTER';m.ring=8;m.done=true;m.stars=3;m.score=11240;m.timeBonus=3290;m.landingBonus=2000;m.fuelBonus=1950;}
 return{s,m,view:name==='cockpit'?'cockpit':'chase'};}
