"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[4288],{84288:(e,s,t)=>{t.d(s,{DestroyOutMode:()=>o});var i=t(14709);class o{constructor(e){this.container=e,this.modes=["destroy"]}async update(e,s,t,o){if(!this.modes.includes(o))return;const r=this.container;switch(e.outType){case"normal":case"outside":if((0,i.Ac)(e.position,r.canvas.size,i.OW.origin,e.getRadius(),s))return;break;case"inside":{const{dx:s,dy:t}=(0,i.oW)(e.position,e.moveCenter),{x:o,y:r}=e.velocity;if(o<0&&s>e.moveCenter.radius||r<0&&t>e.moveCenter.radius||o>=0&&s<-e.moveCenter.radius||r>=0&&t<-e.moveCenter.radius)return;break}}r.particles.remove(e,void 0,!0),await Promise.resolve()}}}}]);
//# sourceMappingURL=4288.e4d403ff.chunk.js.map