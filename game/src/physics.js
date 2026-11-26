import {clamp,wrap} from './config.js';
import {heightAt,runwayAt} from './terrain.js';
export function createFlight(){return{x:0,y:230,z:-3400,heading:0,pitch:0,roll:0,speed:58,vs:0,throttle:.65,fuel:100,damage:0,gear:false,landed:false,crash:'',stall:false,time:0};}
export function stepFlight(s,input,dt){
 if(s.crash)return;
 s.time+=dt;
 s.throttle=clamp(s.throttle+(input.power||0)*dt*.3,0,1);
 const authority=clamp(s.speed/40,.25,1);
 s.roll+=(clamp(input.roll||0,-1,1)*.8-s.roll)*dt*2.8*authority;
 s.pitch+=(clamp(input.pitch||0,-1,1)*.32-s.pitch)*dt*2*authority;
 s.stall=s.speed<27&&!s.landed;
 if(s.stall)s.pitch-=dt*.12;
 s.heading=wrap(s.heading+(Math.tan(s.roll)*.28*authority+(input.rudder||0)*.12)*dt);
 const target=s.fuel>0?22+s.throttle*(65-s.damage*.25):12;
 const drag=(s.gear?1.3:0)+Math.abs(s.roll)*1.5;
 s.speed=clamp(s.speed+((target-s.speed)*.18-Math.sin(s.pitch)*9-drag)*dt,0,100);
 let desired=Math.sin(s.pitch)*s.speed-(s.stall?9:0);
 const below=heightAt(s.x,s.z),overStrip=runwayAt(s.x,s.z);
 if(overStrip&&s.gear&&s.y-below<18&&desired<0)desired*=.8;
 s.vs+=(desired-s.vs)*Math.min(1,dt*3);
 s.fuel=Math.max(0,s.fuel-dt*(.018+s.throttle*.035));
 if(s.landed){
  s.speed=Math.max(0,s.speed-dt*(s.throttle<.3?7:0));s.vs=0;
  if(s.speed>35&&s.pitch>.06){s.landed=false;s.y+=2;}
  else{s.fuel=Math.min(100,s.fuel+dt*3);s.damage=Math.max(0,s.damage-dt*3);}
 }
 s.x+=Math.sin(s.heading)*s.speed*dt;
 s.z+=Math.cos(s.heading)*s.speed*dt;
 s.y+=s.vs*dt;
 const r=runwayAt(s.x,s.z),ground=r?r.y:heightAt(s.x,s.z);
 if(s.y<=ground+3&&!s.landed){
  const aligned=Math.abs(Math.sin(s.heading))<.25;
  if(r&&s.gear&&s.speed<45&&Math.abs(s.vs)<4.8&&aligned){
   s.landed=true;s.landingQuality=Math.abs(s.vs)<2?'BUTTER':'SAFE';
   s.landingRunway=r.name;s.y=ground+3;s.vs=0;
  }else if(r&&s.gear&&s.speed<49&&Math.abs(s.vs)<7&&aligned){
   s.damage=Math.min(99,s.damage+18);s.landed=true;s.landingQuality='FIRM';
   s.landingRunway=r.name;s.y=ground+3;s.vs=0;
  }else if(!r&&ground>1&&s.speed<30&&Math.abs(s.vs)<5&&s.damage<60){
   s.damage+=25;s.speed*=.7;s.y=ground+6;s.vs=3;
  }else{
   s.damage+=Math.abs(s.vs)*5+20;
   s.crash=ground<1?'Ditched in the sea':r?'Hard runway impact — slow down, align and lower gear':ground>400?'Hit the volcano slope':'Struck island terrain';
   s.crash+=' at '+Math.round(s.speed*1.944)+' kt';
  }
 }
 if(s.landed){s.y=ground+3;if(!r)s.crash='Ran off the runway';}
}
