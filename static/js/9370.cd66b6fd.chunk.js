"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[9370],{29370:(i,t,o)=>{o.d(t,{OutOutMode:()=>s});var e=o(14709);class s{constructor(i){this.container=i,this.modes=["out"]}async update(i,t,o,s){if(!this.modes.includes(s))return;const n=this.container;switch(i.outType){case"inside":{const{x:t,y:o}=i.velocity,s=e.OW.origin;s.length=i.moveCenter.radius,s.angle=i.velocity.angle+Math.PI,s.addTo(e.OW.create(i.moveCenter));const{dx:a,dy:r}=(0,e.oW)(i.position,s);if(t<=0&&a>=0||o<=0&&r>=0||t>=0&&a<=0||o>=0&&r<=0)return;i.position.x=Math.floor((0,e.vd)({min:0,max:n.canvas.size.width})),i.position.y=Math.floor((0,e.vd)({min:0,max:n.canvas.size.height}));const{dx:d,dy:c}=(0,e.oW)(i.position,i.moveCenter);i.direction=Math.atan2(-c,-d),i.velocity.angle=i.direction;break}default:if((0,e.Ac)(i.position,n.canvas.size,e.OW.origin,i.getRadius(),t))return;switch(i.outType){case"outside":{i.position.x=Math.floor((0,e.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor((0,e.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y;const{dx:t,dy:o}=(0,e.oW)(i.position,i.moveCenter);i.moveCenter.radius&&(i.direction=Math.atan2(o,t),i.velocity.angle=i.direction);break}case"normal":{const o=i.options.move.warp,s=n.canvas.size,a={bottom:s.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:s.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},r=i.getRadius(),d=(0,e.M_)(i.position,r);"right"===t&&d.left>s.width+i.offset.x?(i.position.x=a.left,i.initialPosition.x=i.position.x,o||(i.position.y=(0,e.sZ)()*s.height,i.initialPosition.y=i.position.y)):"left"===t&&d.right<-i.offset.x&&(i.position.x=a.right,i.initialPosition.x=i.position.x,o||(i.position.y=(0,e.sZ)()*s.height,i.initialPosition.y=i.position.y)),"bottom"===t&&d.top>s.height+i.offset.y?(o||(i.position.x=(0,e.sZ)()*s.width,i.initialPosition.x=i.position.x),i.position.y=a.top,i.initialPosition.y=i.position.y):"top"===t&&d.bottom<-i.offset.y&&(o||(i.position.x=(0,e.sZ)()*s.width,i.initialPosition.x=i.position.x),i.position.y=a.bottom,i.initialPosition.y=i.position.y);break}}}await Promise.resolve()}}}}]);
//# sourceMappingURL=9370.cd66b6fd.chunk.js.map