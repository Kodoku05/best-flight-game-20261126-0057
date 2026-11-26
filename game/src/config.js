export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
export const missions=[{name:'RING RUN',brief:'Follow eight survey gates, then land at Pulau home. Smooth turns save fuel.',limit:520},{name:'MAIL DROP',brief:'Deliver the island post: land at all three airstrips, then return home.',limit:720},{name:'STORM RESCUE',brief:'Find the lighthouse keeper. Reach the beacon, then land at the harbour.',limit:360}];
export const palette={sea:'#277e88',sand:'#d6bc79',green:'#507e50',ink:'#102b35',amber:'#ffd784'};
