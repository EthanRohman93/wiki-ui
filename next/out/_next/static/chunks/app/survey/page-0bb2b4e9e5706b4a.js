(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{3845:function(e,t,n){Promise.resolve().then(n.bind(n,1196))},3305:function(e,t,n){"use strict";n.d(t,{D:function(){return s},MyGlobalStateProvider:function(){return a}});var o=n(7437),r=n(2265);let s=(0,r.createContext)({username:"LandingPage",setUsername:()=>{}}),a=e=>{let{children:t}=e,[n,a]=(0,r.useState)("");return(0,o.jsx)(s.Provider,{value:{username:n,setUsername:a},children:t})}},1196:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(7437),r=n(2265),s=n(1169),a=n(3305),i=()=>{let e=(0,s.useRouter)(),t=[{questionText:"What are your thoughts on the color scheme of the website?",name:"color_scheme"},{questionText:"How do you find the layout and organization of the website?",name:"layout_organization"},{questionText:"How would you rate the execution and performance of the website?",name:"execution_performance"},{questionText:"What is your experience with the interactivity of the website?",name:"website_interactivity"},{questionText:"How would you rate the clarity of navigating our website?",name:"navigation_confusion"}],[n,i]=(0,r.useState)({}),[l,c]=(0,r.useState)(!1),[u,h]=(0,r.useState)(null),{username:m}=(0,r.useContext)(a.D),x=(e,t)=>{i(n=>({...n,[e]:parseInt(t)}))};return(0,o.jsxs)("form",{onSubmit:o=>{if(o.preventDefault(),c(!0),Object.keys(n).length!==t.length){h("Please answer all questions."),c(!1);return}console.log("Username from context:",m);let r={...n,username:m};console.log("Data submitted to API:",r),fetch("http://18.220.173.252/submit-form/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(t=>{console.log("Success:",t),e.push("/thankyou"),c(!1)}).catch(e=>{console.error("Error:",e),h(e.message),c(!1)})},children:[t.map((e,t)=>(0,o.jsxs)("div",{className:"flex flex-col px-2 py-4",children:[(0,o.jsx)("label",{className:"text-lg",children:e.questionText}),(0,o.jsx)("div",{className:"flex flex-row justify-center",children:[1,2,3,4].map(t=>(0,o.jsxs)("div",{className:"flex flex-col px-10 py-2 items-center",children:[(0,o.jsx)("input",{type:"radio",id:"".concat(e.name,"-").concat(t),name:e.name,value:String(t),className:"h-5 w-5",onChange:t=>x(e.name,t.target.value)}),(0,o.jsx)("label",{htmlFor:"".concat(e.name,"-").concat(t),children:1===t?"Poor":2===t?"Fair":3===t?"Good":"Excellent"})]},t))})]},t)),(0,o.jsx)("button",{type:"submit",className:"border-2 p-2 rounded-xl hover:font-extrabold",children:"Submit Feedback"}),l&&(0,o.jsx)("p",{children:"Submitting..."}),u&&(0,o.jsxs)("p",{children:["Error: ",u]})]})},l=()=>(0,o.jsx)("div",{className:"home-color-scheme min-h-screen flex flex-col items-center p-4",children:(0,o.jsxs)("div",{className:"max-w-4xl home-border-style w-full flex flex-col items-center rounded-xl",children:[(0,o.jsx)("h1",{className:"text-2xl font-bold mb-4 text-center home-border-style rounded-xl m-10",children:"User Experience Survey"}),(0,o.jsx)(i,{})]})})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=3845)}),_N_E=e.O()}]);