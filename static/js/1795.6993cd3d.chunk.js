"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[1795],{31795:(i,o,e)=>{e.d(o,{NoneOutMode:()=>s});var t=e(14709);class s{constructor(i){this.container=i,this.modes=["none"]}async update(i,o,e,s){var n;if(!this.modes.includes(s))return;if(null!==(n=i.options.move.distance.horizontal&&("left"===o||"right"===o))&&void 0!==n?n:i.options.move.distance.vertical&&("top"===o||"bottom"===o))return;const a=i.options.move.gravity,c=this.container,r=c.canvas.size,l=i.getRadius();if(a.enable){const e=i.position;(!a.inverse&&e.y>r.height+l&&"bottom"===o||a.inverse&&e.y<-l&&"top"===o)&&c.particles.remove(i)}else{if(i.velocity.y>0&&i.position.y<=r.height+l||i.velocity.y<0&&i.position.y>=-l||i.velocity.x>0&&i.position.x<=r.width+l||i.velocity.x<0&&i.position.x>=-l)return;(0,t.Ac)(i.position,c.canvas.size,t.OW.origin,l,o)||c.particles.remove(i)}await Promise.resolve()}}}}]);
//# sourceMappingURL=1795.6993cd3d.chunk.js.map