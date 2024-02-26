"use strict";(self.webpackChunkcolab=self.webpackChunkcolab||[]).push([[5155],{224:(e,s,l)=>{l.d(s,{J:()=>N,Z:()=>C});var a=l(47677),t=l(17685),n=l(77258),i=l(3500),r=l(21402),o=l(72791),d=l(24289),c=l(55821),m=l(57689),u=l(19221),h=l(13832),x=l(67995),p=l(88526),f=l(14281),b=l(49389),j=l(2556),g=l(12481),w=l(41241),v=l(72120),y=l(76641),Z=l(80184);function N(e){return e.map(((e,s)=>({value:e.label,label:e.label,children:e.prof.map(((e,s)=>({value:"".concat(e.name),label:" ".concat(e.name)})))})))}const C=function(e){let{delay:s}=e;const l=(0,o.useRef)(null),[C,k]=(0,o.useState)({visible:!1}),P=N(v.O),I=e=>{console.log("Success:",e),(0,g.ET)((0,g.hJ)(w.db,"requests"),{...e}).then((()=>{h.ZP.success("Your request has been sent successfully!"),k({...C,visible:!1})}))},F=(0,d.Y)(l,{once:!0}),{nav:S,setNav:E}=(0,u.Z)(),Y=(0,m.s0)();return(0,Z.jsx)("div",{ref:l,className:"w-[100%] group z-50 md:w-full md:h-auto",children:F&&(0,Z.jsxs)(c.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s}},exit:{opacity:0,translateY:20,transition:{duration:.5}},className:"mt-8 md:mt-0 md:h-full bg-white  border border-gray-200 hover:border-gray-400 flex flex-col justify-between p-4 rounded-lg",children:[(0,Z.jsxs)("div",{className:"flex flex-row mb-2 justify-between",children:[(0,Z.jsx)(x.default,{title:"Request to meet",open:C.visible,onCancel:()=>k({...C,visible:!1}),okButtonProps:{hidden:!0},cancelButtonProps:{hidden:!0},children:(0,Z.jsxs)(p.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:I,onFinishFailed:I,autoComplete:"off",children:[(0,Z.jsx)("h1",{className:"font-mont text-xs italic",children:"Select the faculty member you want to meet from the dropdown"}),(0,Z.jsx)(p.Z.Item,{label:"Faculty",name:"faculty",rules:[{required:!0,message:"Please input your email!"}],children:(0,Z.jsx)(f.Z,{options:P})}),(0,Z.jsxs)("h1",{className:"font-mont text-xs italic",children:["Enter your email address and contact number so that our team can contact you to facilitate the meeting with Prof."," ",(0,Z.jsx)("bold",{className:"font-bold",children:C.fac}),"."]}),(0,Z.jsx)(p.Z.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:(0,Z.jsx)(b.Z,{})}),(0,Z.jsx)(p.Z.Item,{label:"Contact number",name:"number",rules:[{required:!0,message:"Please input your number!"}],children:(0,Z.jsx)(b.Z,{})}),(0,Z.jsx)(p.Z.Item,{label:"Message",name:"message",rules:[{required:!0,message:"Please input your message!"}],children:(0,Z.jsx)(y.Z,{})}),(0,Z.jsxs)(p.Z.Item,{className:"mt-4 -mb-4",wrapperCol:{offset:8,span:16},children:[(0,Z.jsx)(j.ZP,{onClick:()=>k({...C,visible:!1}),children:"Cancel"}),(0,Z.jsx)(j.ZP,{className:"ml-4 bg-blue-500 ",type:"primary",htmlType:"submit",children:"Request"})]})]})}),(0,Z.jsxs)(c.E.h1,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s+.3}},className:"text-lg border-b pb-2 border-slate-300 flex items-center gap-2 ml-2  flex-row font-pop font-semibold text-indigo-600",children:[(0,Z.jsx)(a.Z,{className:"w-5"}),(0,Z.jsx)("h1",{children:"Contact"})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(c.E.div,{onClick:()=>{E({from:"/",to:"contact"}),Y("/contact")},initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},exit:{opacity:0,transition:{duration:.5}},className:"rounded-full h-8 font-pop text-center border font-semibold w-24 text-sm px-2 py-1 text-slate-800 bg-gradient-to-br from-slate-50 to-slate-200 hover:to-slate-300",children:"More"},"exp.card.btn")})]}),(0,Z.jsx)(c.E.div,{className:"flex flex-col w-full md:flex-row justify-between h-full",children:(0,Z.jsxs)("div",{className:"flex flex-col  md:group-hover:flex-row items-start w-full gap-2",children:[(0,Z.jsxs)(c.E.div,{layoutId:"contact.card.user",onClick:()=>k({...C,visible:!0}),initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s+.7}},className:"flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full",children:[(0,Z.jsx)(t.Z,{className:"w-5 md:group-hover:w-16 text-indigo-400"}),(0,Z.jsx)("h1",{className:"text-xs font-normal font-mont",children:"One-to-One meeting with faculty"})]}),(0,Z.jsxs)(c.E.div,{initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s+.7}},onClick:()=>window.open("tel:+917923952136"),className:"flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full",children:[(0,Z.jsx)(n.Z,{className:"w-5 md:group-hover:w-16 text-indigo-400"}),(0,Z.jsx)("h1",{className:"text-xs font-normal font-mont",children:"+91 7923952136"})]}),(0,Z.jsxs)(c.E.div,{onClick:()=>window.open("mailto:industryconnect@iitgn.ac.in"),initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s+.7}},className:"flex flex-row hover:bg-indigo-100 transition-all group-hover:h-full  group-hover:justify-center group-hover:flex-col gap-2 items-center bg-white cursor-pointer hover:shadow-lg border border-slate-300 p-2 rounded-lg shadow-sm w-full",children:[(0,Z.jsx)(i.Z,{className:"w-5 md:group-hover:w-16 text-indigo-400"}),(0,Z.jsx)("h1",{className:"text-xs font-normal font-mont",children:"industryconnect @iitgn.ac.in"})]}),(0,Z.jsxs)(c.E.div,{onClick:()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQp4bK8REhP0ZYBA88kRSSzoCd5jnYBSE8Ui6fUZiMpoa_sQ/viewform"),initial:{opacity:0,translateY:-20},animate:{opacity:1,translateY:0,transition:{duration:.5,delay:.5*s+.8}},className:"flex flex-row group-hover:h-full group-hover:justify-center group-hover:flex-col gap-2 cursor-pointer items-center bg-gradient-to-br from-indigo-400 to-indigo-500 transition-all hover:from-indigo-300 hover:to-indigo-400 border border-slate-300 p-2 rounded-lg shadow-sm w-full",children:[(0,Z.jsx)(r.Z,{className:"w-5 md:group-hover:w-16 text-white"}),(0,Z.jsx)("h1",{className:"text-xs font-normal  group-hover:text-center text-white font-mont",children:"CoLab 2024 Registration form"})]})]})})]})})}},95155:(e,s,l)=>{l.r(s),l.d(s,{default:()=>Y});var a=l(72791),t=l(63710),n=l(88526),i=l(13832),r=l(67995),o=l(49389),d=l(89862),c=l(2556),m=l(14281),u=l(66818),h=l(50610),x=l(66770),p=l.n(x),f=(l(86009),l(68747)),b=l(79286),j=l(60732),g=l(38889),w=l(224),v=l(72120),y=l(12481),Z=l(41241),N=l(11087),C=l(57689),k=l(82189),P=l(67156),I=l(98872),F=l(19221),S=l(80184);const E=e=>{let{data:s,handleEdit:l,handleDelete:a,handleView:t}=e;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"w-full  grid border py-2 border-slate-300 text-center gap-2 font-mont px-6 grid-cols-4",children:[(0,S.jsx)("h1",{className:"font-semibold border-b border-slate-300 pb-2",children:"No"}),(0,S.jsx)("h1",{className:"font-semibold border-b border-slate-300 pb-2",children:"Faculty"}),(0,S.jsx)("h1",{className:"font-semibold border-b border-slate-300 pb-2",children:"id"}),(0,S.jsx)("h1",{className:"font-semibold border-b border-slate-300 pb-2",children:"Actions"}),null===s||void 0===s?void 0:s.map(((e,s)=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("h1",{className:"",children:s},"".concat(s,".slider.dash.item.1")),(0,S.jsx)("h1",{className:"",children:e.data.faculty[1]},"".concat(s,".slider.dash.item.2")),(0,S.jsx)("h1",{className:"",children:e.id},"".concat(s,".slider.dash.item.3")),(0,S.jsxs)("h1",{className:"flex flex-row justify-center w-full gap-2",children:[(0,S.jsx)(k.Z,{onClick:()=>window.confirm("Do you want to view ".concat(e.id))&&t(e.id),className:"w-5 cursor-pointer hover:text-green-300 text-green-400"}),(0,S.jsx)(P.Z,{onClick:()=>window.confirm("Do you want to edit ".concat(e.id))&&l(e.id),className:"w-5 cursor-pointer hover:text-blue-300 text-blue-400"}),(0,S.jsx)(I.Z,{onClick:()=>window.confirm("Do you want to delete ".concat(e.id))&&a(e.id),className:"w-5 cursor-pointer hover:text-red-300 text-red-400"})]},"".concat(s,".slider.dash.item.4"))]})))]}),(0,S.jsx)(N.rU,{to:"/addslide",className:"py-2 font-mont px-6 mx-auto bg-gradient-to-br from-green-400 to-green-500 hover:to-green-600 text-white rounded-full",children:"Add"})]})};const Y=function(){const[e]=n.Z.useForm(),{user:s,setUser:l}=(0,F.Z)(),[x,N]=(0,a.useState)(!1),[k,P]=(0,a.useState)(!1),I=(0,C.s0)(),[Y,q]=(0,a.useState)([]);(0,a.useEffect)((()=>{(0,y.cf)((0,y.hJ)(Z.db,"slides"),(e=>{q(e.docs.map((e=>({data:e.data(),id:e.id}))))}))}),[]);const[A,D]=(0,a.useState)("dash"===(0,C.TH)().pathname.split("/").pop()),T=(0,w.J)(v.O),[L,U]=(0,a.useState)({edit:!1,data:null}),[V,B]=(0,a.useState)("");(0,a.useEffect)((()=>{console.log(L),L.edit&&e.setFieldsValue(L.data.data),L.edit&&B(L.data.data.images)}),[L]);const J=e=>{I("/addslide/dash"),D(!0)};return(0,S.jsxs)(t.Z,{page:"themes",title:A?"Slides Dashboard":"Add Slide",hideBreadcrumb:!0,children:[(0,S.jsx)(r.default,{title:"Login",open:k,onCancel:()=>P(!1),okButtonProps:{hidden:!0},cancelButtonProps:{hidden:!0},children:(0,S.jsxs)(n.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:e=>{N(!0);const s=[{e:"rupamjuner@gmail.com",pw:"colab2024"}].find((s=>s.e===e.username&&s.pw===e.password));s?(console.log("Success:",s),l({role:"user",email:s.e}),P(!1),N(!1)):(i.ZP.error("Invalid Credentials"),N(!1))},onFinishFailed:e=>{console.log("Failed:",e),N(!1)},autoComplete:"off",children:[(0,S.jsx)(n.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,S.jsx)(o.Z,{})}),(0,S.jsx)(n.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,S.jsx)(o.Z.Password,{})}),(0,S.jsx)(n.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:(0,S.jsx)(d.Z,{children:"Remember me"})}),(0,S.jsxs)(n.Z.Item,{wrapperCol:{offset:8,span:16},children:[(0,S.jsx)(c.ZP,{onClick:()=>P(!1),children:"Cancel"}),(0,S.jsx)(c.ZP,{className:"ml-4 bg-blue-500 ".concat(x&&"bg-slate-400"),type:"primary",disabled:x,htmlType:"submit",children:"Login"})]})]})}),"admin"===(null===s||void 0===s?void 0:s.role)||"user"===(null===s||void 0===s?void 0:s.role)?(0,S.jsx)(S.Fragment,{children:A?(0,S.jsx)(E,{data:Y,handleEdit:e=>{U({edit:!0,data:Y.find((s=>s.id===e))}),D(!1)},handleDelete:e=>{(0,y.oe)((0,y.JU)(Z.db,"slides",e)).then((()=>{i.ZP.success("Slide Deleted"),q(Y.filter((s=>s.id!==e)))}))},handleView:e=>{I("/slidedeck/".concat(e))}}):(0,S.jsx)("div",{className:"flex flex-col font-mont items-center h-full overflow-scroll w-[90%]",children:(0,S.jsxs)(n.Z,{form:e,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{projects:[{}]},className:"w-full mx-auto",onFinish:s=>{null!==L&&void 0!==L&&L.edit?(0,y.pl)((0,y.JU)(Z.db,"slides",L.data.id),{...s,images:V}).then((()=>{i.ZP.success("Slide Edited"),e.setFieldsValue({projects:[{}],app:[{}],domains:[{}],sect:[{}],obj:"",title:""}),B(""),D(!0)})).catch((e=>console.log(e))):(0,y.ET)((0,y.hJ)(Z.db,"slides"),{...s,images:V}).then((()=>{i.ZP.success("Slide Added"),e.setFieldsValue({projects:[{}],app:[{}],domains:[{}],sect:[{}],obj:"",title:""}),B(""),I("/addslide/dash")}))},onFinishFailed:J,autoComplete:"off",children:[(0,S.jsx)(n.Z.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input your username!"}],children:(0,S.jsx)(o.Z,{})}),(0,S.jsx)(n.Z.Item,{label:"Faculty",name:"faculty",rules:[{required:!0,message:"Please input your email!"}],children:(0,S.jsx)(m.Z,{options:T})}),(0,S.jsx)(n.Z.Item,{name:"obj",label:"Objective",children:(0,S.jsx)(o.Z.TextArea,{})}),(0,S.jsx)(n.Z.Item,{label:"Approaches Used",children:(0,S.jsx)(n.Z.List,{name:"app",children:(e,s)=>{let{add:l,remove:a}=s;return(0,S.jsxs)(S.Fragment,{children:[e.map((e=>{let{key:s,name:l,...t}=e;return(0,S.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,S.jsx)(n.Z.Item,{...t,className:"w-full",name:[l,"data"],rules:[{required:!0,message:"Missing first name"}],children:(0,S.jsx)(o.Z.TextArea,{className:"w-full"})}),(0,S.jsx)(f.Z,{className:"mb-auto mt-4 text-red-600",onClick:()=>a(l)})]})})),(0,S.jsx)(n.Z.Item,{children:(0,S.jsx)(c.ZP,{type:"dashed",onClick:()=>l(),block:!0,icon:(0,S.jsx)(b.Z,{}),children:"Add"})})]})}})}),(0,S.jsx)(n.Z.Item,{label:"Domains",children:(0,S.jsx)(n.Z.List,{name:"domains",children:(e,s)=>{let{add:l,remove:a}=s;return(0,S.jsxs)(S.Fragment,{children:[e.map((e=>{let{key:s,name:l,...t}=e;return(0,S.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,S.jsx)(n.Z.Item,{...t,className:"w-full",name:[l,"data"],rules:[{required:!0,message:"Missing first name"}],children:(0,S.jsx)(u.Z,{className:"w-full ",options:g.zp.map(((e,s)=>({key:s,value:e})))})}),(0,S.jsx)(f.Z,{className:"mb-auto mt-2 text-red-600",onClick:()=>a(l)})]})})),(0,S.jsx)(n.Z.Item,{children:(0,S.jsx)(c.ZP,{type:"dashed",onClick:()=>l(),block:!0,icon:(0,S.jsx)(b.Z,{}),children:"Add"})})]})}})}),(0,S.jsx)(n.Z.Item,{label:"Key Sectors",children:(0,S.jsx)(n.Z.List,{name:"sect",children:(e,s)=>{let{add:l,remove:a}=s;return(0,S.jsxs)(S.Fragment,{children:[e.map((e=>{let{key:s,name:l,...t}=e;return(0,S.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,S.jsx)(n.Z.Item,{...t,className:"w-full",name:[l,"data"],rules:[{required:!0,message:"Missing first name"}],children:(0,S.jsx)(o.Z,{className:"w-full"})}),(0,S.jsx)(f.Z,{className:"mb-auto mt-4 text-red-600",onClick:()=>a(l)})]})})),(0,S.jsx)(n.Z.Item,{children:(0,S.jsx)(c.ZP,{type:"dashed",onClick:()=>l(),block:!0,icon:(0,S.jsx)(b.Z,{}),children:"Add"})})]})}})}),(0,S.jsx)(n.Z.Item,{label:"Projects/Publications",children:(0,S.jsx)(n.Z.List,{name:"projects",children:(e,s)=>{let{add:l,remove:a}=s;return(0,S.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[e.map((e=>(0,S.jsxs)(h.Z,{size:"small",title:"Domain ".concat(e.name+1),extra:(0,S.jsx)(j.Z,{onClick:()=>{a(e.name)}}),children:[(0,S.jsx)(n.Z.Item,{label:"Domain Name",name:[e.name,"domain"],children:(0,S.jsx)(o.Z,{})}),(0,S.jsx)(n.Z.Item,{label:"Project Title",children:(0,S.jsx)(n.Z.List,{name:[e.name,"title"],children:(e,s)=>(0,S.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[e.map((e=>(0,S.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,S.jsx)(n.Z.Item,{noStyle:!0,className:"w-full",name:[e.name,"data"],children:(0,S.jsx)(o.Z,{className:"w-full",placeholder:"Project Title"})}),(0,S.jsx)(j.Z,{onClick:()=>{s.remove(e.name)}})]},e.key))),(0,S.jsx)(c.ZP,{type:"dashed",onClick:()=>s.add(),block:!0,children:"+ Add Project/Publication"})]})})})]},e.key))),(0,S.jsx)(c.ZP,{type:"dashed",onClick:()=>l(),block:!0,children:"+ Add Domain"})]})}})}),(0,S.jsxs)("div",{className:"ant-row  ant-form-item-row gap-0 css-dev-only-do-not-override-1b0bdye",children:[(0,S.jsxs)("h1",{className:"ant-col ant-col-8 ant-form-item-label css-dev-only-do-not-override-1b0bdye text-right -ml-4 mr-2 ".concat(V.length/1024>200&&"text-red-500"),children:["Images (Size :",parseInt(V.length/1024)," kb) :"," "]}),(0,S.jsx)("div",{className:"ant-col mb-4 ant-col-16 ant-form-item-control css-dev-only-do-not-override-1b0bdye",children:(0,S.jsx)(p(),{modules:{toolbar:[["link"]]},theme:"snow",value:V,onChange:B})})]}),(0,S.jsxs)(n.Z.Item,{wrapperCol:{offset:8,span:16},children:[(0,S.jsx)(c.ZP,{onClick:()=>J(),children:"Cancel"}),(0,S.jsx)(c.ZP,{className:"ml-4 bg-blue-500",type:"primary",htmlType:"submit",children:"Submit"})]})]})})}):(0,S.jsx)("div",{onClick:()=>P(!0),className:"px-6 py-2 cursor-pointer bg-gradient-to-br from-indigo-400 to-indigo-500 hover:to-indigo-600 mx-auto rounded-full text-white",children:"Login"})]})}}}]);
//# sourceMappingURL=5155.fcac70e0.chunk.js.map