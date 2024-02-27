"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[6036],{36036:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(72791),i=a(55821),s=a(72120),n=a(57689),o=a(63710),r=a(79208);const d=l.forwardRef((function(e,t){let{title:a,titleId:i,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),a?l.createElement("title",{id:i},a):null,l.createElement("path",{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}));var c=a(85072),m=a(20480),u=a(83481),x=a(67995),h=a(13832),f=a(88526),p=a(49389),g=a(2556),v=a(12481),b=a(41241),w=a(80184);const{confirm:j}=x.default;const y=function(){const e=(0,n.s0)(),[t,a]=(0,l.useState)({fac:"",visible:!1}),y=e=>{console.log("Success:",e),(0,v.ET)((0,v.hJ)(b.db,"requests"),{...e,prof:t.fac,facEmail:t.facEmail}).then((()=>{h.ZP.success("Your request has been sent successfully!"),a({...t,visible:!1})}))},N=(0,n.UO)();return(0,w.jsxs)(o.Z,{no:3,page:"themes",title:"Domains in focus",backButton:N.postId&&(0,w.jsx)(d,{className:"w-7 absolute left-4 top-4 text-slate-600 cursor-pointer",onClick:()=>e(-1)}),children:[(0,w.jsx)(x.default,{title:"Request to meet",open:t.visible,onCancel:()=>a({...t,visible:!1}),okButtonProps:{hidden:!0},cancelButtonProps:{hidden:!0},children:(0,w.jsxs)(f.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:y,onFinishFailed:y,autoComplete:"off",children:[(0,w.jsx)(f.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:(0,w.jsx)(p.Z,{})}),(0,w.jsx)(f.Z.Item,{label:"Contact number",name:"number",rules:[{required:!0,message:"Please input your number!"}],children:(0,w.jsx)(p.Z,{})}),(0,w.jsxs)("h1",{className:"font-mont text-xs italic",children:["Enter your email address and contact number so that our team can contact you to facilitate the meeting with Prof."," ",(0,w.jsx)("bold",{className:"font-bold",children:t.fac}),"."]}),(0,w.jsxs)(f.Z.Item,{className:"mt-4 -mb-4",wrapperCol:{offset:8,span:16},children:[(0,w.jsx)(g.ZP,{onClick:()=>a({...t,visible:!1}),children:"Cancel"}),(0,w.jsx)(g.ZP,{className:"ml-4 bg-blue-500 ",type:"primary",htmlType:"submit",children:"Request"})]})]})}),(0,w.jsx)(i.E.div,{layoutId:"pgm.themes",className:"w-full overflow-auto px-6 md:px-16 h-[75vh] md:h-[90%] "+(!N.postId&&" grid grid-cols-1 relative md:grid-cols-2 md:gap-4"),children:N.postId&&N.postId<s.O.length?(0,w.jsxs)("div",{className:"flex md:mb-0 flex-col w-full",children:[(0,w.jsx)("div",{className:"flex flex-row items-start gap-4",children:(0,w.jsx)("div",{className:"flex flex-col ",children:(0,w.jsx)(i.E.h1,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5}},exit:{opacity:0,translateY:20,transition:{duration:.5}},className:"text-2xl text-center md:text-left font-pop font-semibold",children:s.O[N.postId].label})})}),(0,w.jsx)(i.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5}},exit:{opacity:0,translateY:20,transition:{duration:.5}},className:"absolute -z-0 pointer-events-none bottom-0 right-4",children:(0,w.jsx)("img",{src:s.O[N.postId].img,alt:"",className:"w-full opacity-40 filter "},"img.exp.".concat(N.postId))}),(0,w.jsx)("div",{className:"grid z-10 grid-cols-1 md:grid-cols-2 w-full gap-2 mt-4",children:s.O[N.postId].prof.sort(((e,t)=>e.name.localeCompare(t.name))).map(((t,l)=>(0,w.jsxs)(i.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.1*l}},exit:{opacity:0,translateY:20,transition:{duration:.5,delay:.05*l}},className:"  flex flex-col justify-between rounded-md bg-indigo-50/40 hover:bg-indigo-100/70 border border-indigo-200 gap-4  font-pop ",children:[(0,w.jsxs)("div",{className:"grid p-3 gap-4 cursor-pointer  md:grid-cols-[5em_auto] w-full text-slate-600",children:[t.img?(0,w.jsx)("img",{src:t.img,alt:(0,w.jsx)(c.Z,{className:"w-16 h-16 p-2 bg-indigo-600 rounded-full text-white mr-2"}),className:"w-16 h-16 mx-auto object-cover bg-indigo-500 rounded-full"}):(0,w.jsx)("div",{className:" mx-auto",children:(0,w.jsx)(c.Z,{className:"w-16 h-16 p-2 bg-indigo-600 rounded-full text-white mr-2"})}),(0,w.jsxs)("div",{className:"flex flex-col items-center md:items-start",children:[(0,w.jsx)("h1",{className:"font-semibold",children:t.name}),(0,w.jsx)("h1",{className:"font-medium",children:t.designation}),(0,w.jsx)("h1",{className:"font-light",children:t.dept}),(0,w.jsx)("h1",{className:"font-light italic",children:"e : "+t.email})]})]}),(0,w.jsxs)("div",{className:"flex rounded-b-md overflow-hidden divide-x divide-x-indigo-200 flex-row justify-between border-t border-indigo-200",children:[(0,w.jsxs)("div",{onClick:()=>(null===t||void 0===t?void 0:t.link)&&(e=>{let{url:t}=e;j({title:"External Link",icon:(0,w.jsx)(r.Z,{className:"w-5 text-gray-400 mr-1"}),content:"You are now leaving CoLab's website to an external link\"".concat(t,'".'),okButtonProps:{className:"bg-blue-400 "},onOk(){window.open(t,"_blank")}})})({url:null===t||void 0===t?void 0:t.link}),className:"bg-gradient-to-br  py-2  text-center cursor-pointer from-white/40 to-slate-200/40 hover:text-white hover:from-indigo-400 hover:to-indigo-500 text-xs flex group items-center justify-around w-full ",children:[(0,w.jsx)(c.Z,{className:"w-5 text-slate-600 group-hover:text-white"}),"Profile"]}),t.hash&&(0,w.jsxs)("div",{onClick:a=>{a.stopPropagation(),e("/slidedeck/".concat(t.hash))},className:"bg-gradient-to-br  py-2  text-center cursor-pointer from-white/40 to-slate-200/40 hover:text-white hover:from-indigo-400 hover:to-indigo-500 text-xs flex group items-center justify-around w-full ",children:[(0,w.jsx)(m.Z,{className:"w-5 text-slate-600 group-hover:text-white"}),"Slide"]}),(0,w.jsxs)("div",{onClick:e=>{e.stopPropagation(),a({fac:t.name,facEmail:t.email,visible:!0})},className:"bg-gradient-to-br  py-2  text-center cursor-pointer from-white/40 to-slate-200/40 hover:text-white hover:from-indigo-400 hover:to-indigo-500 text-xs flex group items-center justify-around w-full ",children:[(0,w.jsx)(u.Z,{className:"w-5 text-slate-600 group-hover:text-white"}),"Meet"]})]})]})))})]}):s.O.map(((t,a)=>(0,w.jsx)("div",{onClick:()=>e("".concat(a)),className:"w-full cursor-pointer xmd:w-1/2 mx-4 my-2 p-2 rounded-md transition-all bg-indigo-100 border hover:shadow-lg border-indigo-200 hover:border-indigo-300 hover:bg-indigo-200",children:(0,w.jsxs)("div",{className:"flex flex-row items-center text-slate-700 gap-4",children:[(0,w.jsx)(i.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.1*a}},exit:{opacity:0,translateY:20,transition:{duration:.5,delay:.1*a}},children:(0,w.jsx)("img",{src:t.img,alt:"",className:"w-16 filter "},"img.exp.".concat(a))}),(0,w.jsxs)("div",{className:"flex flex-col ",children:[(0,w.jsx)(i.E.h1,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.1*a}},exit:{opacity:0,translateY:20,transition:{duration:.5,delay:.1*a}},className:"text-xl font-pop font-semibold",children:s.O[a].label}),(0,w.jsx)(i.E.h1,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.1*a+.1}},exit:{opacity:0,translateY:20,transition:{duration:.5,delay:.1*a+.1}},className:"text-xs mt-2 w-[85%] font-pop text-justify font-light"})]})]})})))})]})}},79208:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(72791);const i=l.forwardRef((function(e,t){let{title:a,titleId:i,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),a?l.createElement("title",{id:i},a):null,l.createElement("path",{fillRule:"evenodd",d:"M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z",clipRule:"evenodd"}))}))},20480:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(72791);const i=l.forwardRef((function(e,t){let{title:a,titleId:i,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),a?l.createElement("title",{id:i},a):null,l.createElement("path",{fillRule:"evenodd",d:"M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z",clipRule:"evenodd"}))}))},85072:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(72791);const i=l.forwardRef((function(e,t){let{title:a,titleId:i,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),a?l.createElement("title",{id:i},a):null,l.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}))},83481:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(72791);const i=l.forwardRef((function(e,t){let{title:a,titleId:i,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},s),a?l.createElement("title",{id:i},a):null,l.createElement("path",{d:"M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"}))}))}}]);
//# sourceMappingURL=6036.ae68e1ff.chunk.js.map