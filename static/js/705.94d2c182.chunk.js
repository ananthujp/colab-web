"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[705],{8889:(e,t,a)=>{a.d(t,{Z:()=>k,o:()=>N});var s=a(9645),l=a(2791),i=a(4289),o=a(4413),r=a(7689),n=a(9221),d=a(8526),c=a(3832),x=a(7070),m=a(9389),p=a(6818),u=a(2556),h=a(4093),b=a(6641),f=a(2481),v=a(1241),g=a(1723),j=a(9214),w=a(9771),y=a(184);const N=e=>{let{isModalOpen:t,setIsModalOpen:a,edit:s={edit:!1,data:{}}}=e;const[i]=d.Z.useForm();(0,l.useEffect)((()=>{s.edit&&a(!0),s.edit&&i.setFieldsValue(s.data)}),[s]);const o=e=>{console.log("Success:",e),null!==s&&void 0!==s&&s.edit?(0,f.pl)((0,f.JU)(v.db,"speakers",s.data.id),e).then((()=>{a(!1)})).catch((e=>console.log(e))):(0,f.ET)((0,f.hJ)(v.db,"speakers"),{...e}).then((()=>{c.ZP.success("Your request has been sent successfully!"),a(!1)}))};return(0,y.jsx)(x.default,{title:"Add Speaker",open:t,onCancel:()=>a(!1),okButtonProps:{hidden:!0},cancelButtonProps:{hidden:!0},children:(0,y.jsxs)(d.Z,{form:i,name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:o,onFinishFailed:o,autoComplete:"off",children:[(0,y.jsx)(d.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your email!"}],children:(0,y.jsx)(m.Z,{})}),(0,y.jsx)(d.Z.Item,{label:"Image",name:"img",rules:[{required:!0,message:"Please input your email!"}],children:(0,y.jsx)(m.Z,{})}),(0,y.jsx)(d.Z.Item,{label:"Type",className:"group",name:"type",rules:[{required:!0,message:"Please select an icon!"}],children:(0,y.jsx)(p.Z,{children:["Panellist","Speaker","Moderator"].map(((e,t)=>(0,y.jsx)(p.Z.Option,{value:t,children:(0,y.jsx)("div",{className:"w-6 ",children:e})},"select.item.ico.".concat(t))))})}),(0,y.jsx)(d.Z.Item,{label:"Designation",name:"bio",rules:[{required:!0,message:"Please input your message!"}],children:(0,y.jsx)(b.Z,{})}),(0,y.jsx)(d.Z.Item,{label:"Email",name:"mail",rules:[{required:!0,message:"Please input your email!"}],children:(0,y.jsx)(m.Z,{})}),(0,y.jsx)(d.Z.Item,{label:"Website",name:"website",rules:[{required:!0,message:"Please input your email!"}],children:(0,y.jsx)(m.Z,{})}),(0,y.jsxs)(d.Z.Item,{className:"mt-4 -mb-4",wrapperCol:{offset:8,span:16},children:[(0,y.jsx)(u.ZP,{onClick:()=>a(!1),children:"Cancel"}),(0,y.jsx)(u.ZP,{className:"ml-4 bg-blue-500 ",type:"primary",htmlType:"submit",children:"Add"})]})]})})};const k=function(e){let{delay:t}=e;const a=(0,l.useRef)(null),[d,c]=(0,l.useState)(null),[x,m]=(0,l.useState)(!1),p=(0,i.Y)(a,{once:!0}),{nav:u,setNav:b,speakers:f,user:v}=(0,n.Z)(),[k,Z]=(0,l.useState)(!1),Y=(0,r.s0)();return(0,y.jsxs)("div",{ref:a,className:"w-[90%] md:w-full md:h-auto",children:[(0,y.jsx)(N,{isModalOpen:k,setIsModalOpen:Z}),p&&(0,y.jsxs)(o.E.div,{onHoverStart:()=>m(!0),onHoverEnd:()=>m(!1),initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*t}},exit:{opacity:0,translateY:20,transition:{duration:.5}},className:"mt-8 md:mt-0 relative md:h-full  bg-slate-100/70  border border-gray-300 hover:border-gray-400 flex flex-col xjustify-between p-4 rounded-lg",children:[(0,y.jsxs)("div",{className:"absolute z-50 w-[90%] top-4 flex flex-row  justify-between",children:[(0,y.jsx)(o.E.h1,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*t+.3}},className:"text-lg flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-slate-600",children:(0,y.jsxs)("div",{className:"flex flex-row gap-2 border-b pb-2 border-slate-300 items-center",children:[(0,y.jsx)(s.Z,{className:"w-5"}),(0,y.jsx)("h1",{children:"Speakers"})]})}),(0,y.jsxs)("div",{className:"flex flex-row gap-1",children:["admin"===(null===v||void 0===v?void 0:v.role)&&(0,y.jsx)(o.E.div,{onClick:()=>Z(!0),initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.5}},className:"rounded-full cursor-pointer h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300",children:"Add"},"exp.card.btn.1"),(0,y.jsx)(o.E.div,{onClick:()=>{b({from:"/",to:"speakers"}),Y("/speakers")},initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.5}},className:"rounded-full cursor-pointer h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300",children:"More"},"exp.card.btn.2")]})]}),x?(0,y.jsxs)(o.E.div,{className:"flex h-56 pt-12 relative ",children:[(0,y.jsx)("div",{className:"bg-gradient-to-b from-slate-100 to-transparent z-10 h-16 absolute top-0 w-full "}),(0,y.jsx)("div",{className:" absolute top-0 overflow-y-auto h-full",children:(0,y.jsx)(o.E.div,{className:"grid pt-10 grid-cols-3 gap-6 group",children:null===f||void 0===f?void 0:f.map(((e,t)=>(0,y.jsxs)(o.E.div,{initial:{opacity:0,translateY:-10},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.2+.1*t}},exit:{opacity:0,translateY:10,transition:{duration:.5}},onClick:()=>Y("/speakers/".concat(t)),layout:!0,className:"flex cursor-pointer  transform rounded-md pt-2 hover:border hover:border-indigo-200 hover:bg-indigo-100 scale-100 transition-all flex-col items-center ".concat(null!==d&&d!==t?"opacity-50 saturate-0":"opacity-100  saturate-100"," "),onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:[(0,y.jsx)(o.E.img,{layoutId:"image.speaker.".concat(t),src:e.img,className:"w-16 border-2 shadow-md border-white h-16 rounded-full object-cover",alt:"speaker"}),(0,y.jsx)("h1",{className:"text-xs font-mont text-center mt-1 xborder-tx font-semibold xborder-slate-600 pb-1 ",children:null===e||void 0===e?void 0:e.name}),(0,y.jsx)("p",{className:"text-xs font-mont w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-1 py-0",children:g.items[null===e||void 0===e?void 0:e.type]})]},"chunk.item.".concat(t))))})})]}):(0,y.jsx)(o.E.div,{initial:{opacity:0,translateY:-10},animate:{opacity:1,translateY:0,transition:{duration:.5}},exit:{opacity:0,translateY:10,transition:{duration:.5}},className:"mt-4 pt-10",children:(0,y.jsx)(h.Z,{dotPosition:"right",autoplay:!0,children:null===f||void 0===f?void 0:f.map(((e,t)=>(0,y.jsx)("div",{className:"h-44 my-auto md:h-36",children:(0,y.jsxs)("div",{className:"flex flex-row items-start gap-4",children:[(0,y.jsx)("img",{src:e.img,className:"w-36 h-36 rounded-full object-cover",alt:"speaker"}),(0,y.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[(0,y.jsx)("h1",{className:"text-base md:text-lg font-semibold  border-b border-slate-600 pb-1 ",children:null===e||void 0===e?void 0:e.name}),(0,y.jsx)("p",{className:"text-xs font-mont md:block hidden",children:null===e||void 0===e?void 0:e.bio}),(0,y.jsx)("p",{className:"text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5",children:g.items[null===e||void 0===e?void 0:e.type]}),(0,y.jsxs)("div",{className:"flex flex-col gap-",children:[(0,y.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,y.jsx)(j.Z,{className:"w-4 inline-block"})," ","\xa0: \xa0 ",null===e||void 0===e?void 0:e.mail]}),(0,y.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,y.jsx)(w.Z,{className:"w-4 inline-block"})," ","\xa0: \xa0",null===e||void 0===e?void 0:e.website]})]})]})]})})))})})]})]})}},1723:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g,items:()=>f});var s=a(2791),l=a(3710),i=a(4413),o=a(6688),r=a(8872),n=a(6796),d=a(9214),c=a(9771),x=a(9221),m=a(8889),p=a(2481),u=a(1241),h=a(7689),b=a(184);const f=["Panellist","Speaker","Moderator"],v=e=>{let{data:t}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("img",{className:" w-full h-36 md:w-36 md:h-full  object-cover border-2 border-white shadow-md",src:null===t||void 0===t?void 0:t.img,alt:""}),(0,b.jsxs)("div",{className:"flex flex-col  px-6 py-8 gap-2",children:[(0,b.jsx)("h1",{className:"text-lg font-semibold  border-b border-slate-600 pb-1 ",children:null===t||void 0===t?void 0:t.name}),(0,b.jsx)("p",{className:"text-xs font-mont ",children:null===t||void 0===t?void 0:t.bio}),(0,b.jsx)("p",{className:"text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5",children:f[null===t||void 0===t?void 0:t.type]}),(0,b.jsxs)("div",{className:"flex flex-col gap-",children:[(0,b.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,b.jsx)(d.Z,{className:"w-4 inline-block"})," \xa0: \xa0"," ",null===t||void 0===t?void 0:t.mail]}),(0,b.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,b.jsx)(c.Z,{className:"w-4 inline-block"})," \xa0: \xa0",null===t||void 0===t?void 0:t.website]})]})]})]})};const g=function(){var e,t,a,g,j,w;const{speakers:y,user:N}=(0,x.Z)(),[k,Z]=(0,s.useState)(!1),Y=(0,h.UO)(),I=(0,h.s0)(),[E,P]=(0,s.useState)({edit:!1,data:{}});return(0,b.jsxs)(l.Z,{no:4,page:"speakers",title:"Speakers & Panellists",children:[(0,b.jsx)(m.o,{isModalOpen:k,setIsModalOpen:Z,edit:E}),Y.speakerId?(0,b.jsxs)(i.E.div,{className:"w-full font-mont items-center relative overflow-scroll gap-3 px-6 mt-4 flex flex-col h-full md:h-[90%]",children:[(0,b.jsx)(i.E.img,{layoutId:"image.speaker.".concat(Y.speakerId),className:" h-1/2 aspect-square rounded-full object-cover border-2 border-white shadow-md",src:null===(e=y[Y.speakerId])||void 0===e?void 0:e.img,alt:""}),(0,b.jsx)(i.E.p,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.2}},exit:{opacity:0,translateY:-20,transition:{duration:.5}},className:"text-xs w-20 scale-90 text-center bg-opacity-75 border border-indigo-300 text-indigo-600 bg-white rounded-full px-2 py-0.5",children:f[null===(t=y[Y.speakerId])||void 0===t?void 0:t.type]}),(0,b.jsxs)(i.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.4}},exit:{opacity:0,translateY:-20,transition:{duration:.5}},className:"flex flex-col  px-6 py-8 gap-2",children:[(0,b.jsx)("h1",{className:"text-lg font-semibold  border-b border-slate-600 pb-1 ",children:null===(a=y[Y.speakerId])||void 0===a?void 0:a.name}),(0,b.jsx)("p",{className:"text-xs font-mont ",children:null===(g=y[Y.speakerId])||void 0===g?void 0:g.bio}),(0,b.jsxs)("div",{className:"flex flex-col gap-",children:[(0,b.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,b.jsx)(d.Z,{className:"w-4 inline-block"})," \xa0: \xa0"," ",null===(j=y[Y.speakerId])||void 0===j?void 0:j.mail]}),(0,b.jsxs)("p",{className:"flex flex-row text-xs",children:[(0,b.jsx)(c.Z,{className:"w-4 inline-block"})," \xa0: \xa0",null===(w=y[Y.speakerId])||void 0===w?void 0:w.website]})]})]})]}):(0,b.jsxs)(i.E.div,{className:"w-full relative overflow-scroll gap-6 px-6 mt-4 flex flex-col md:flex-row md:flex-wrap h-full md:h-[90%]",children:[null===y||void 0===y?void 0:y.map(((e,t)=>(0,b.jsxs)(i.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.1*t}},exit:{opacity:0,translateY:-20,transition:{duration:.5}},onClick:()=>I("".concat(t)),className:"flex cursor-pointer flex-col md:flex-row items-start relative md:w-[48%]  font-mont rounded-lg overflow-hidden text-slate-600 border-indigo-200 hover:bg-indigo-200 transition-all bg-indigo-100 border shadow-md gap-4",children:["admin"===(null===N||void 0===N?void 0:N.role)&&(0,b.jsxs)("div",{className:"absolute flex flex-row bg-slate-100 rounded-full px-2 py-1 top-2 right-2 ml-4",children:[(0,b.jsx)(o.Z,{onClick:t=>{t.stopPropagation(),P({edit:!0,data:e})},className:" w-5 text-red-400 cursor-pointer hover:text-blue-400"}),(0,b.jsx)(r.Z,{onClick:t=>{var a;t.stopPropagation(),window.confirm('Are you sure you want to delete "'.concat(e.name,'"?'))?(a=e.id,(0,p.oe)((0,p.JU)(u.db,"speakers",a))):console.log("no")},className:"w-5 text-red-400 cursor-pointer hover:text-blue-400"})]}),(0,b.jsx)(v,{data:e},"speaker.page.".concat(e.id))]},e.id))),"admin"===(null===N||void 0===N?void 0:N.role)&&(0,b.jsxs)("div",{onClick:()=>Z(!0),className:"flex cursor-pointer items-center justify-center text-xl font-semibold md:w-[48%]  font-mont rounded-lg overflow-hidden text-white flex-row bg-gradient-to-br from-green-900 via-green-800 to-green-600 border border-indigo-300 shadow-md gap-4",children:[(0,b.jsx)(n.Z,{className:"w-24 text-white"}),"Add New"]})]})]})}}}]);
//# sourceMappingURL=705.94d2c182.chunk.js.map