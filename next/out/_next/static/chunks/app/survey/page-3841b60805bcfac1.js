(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{3845:function(e,t,o){Promise.resolve().then(o.bind(o,9541))},9541:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var n=o(7437),r=o(2265),s=e=>{let{questionText:t,name:o}=e;return(0,n.jsxs)("div",{className:"flex flex-col px-2 py-4",children:[(0,n.jsx)("label",{children:t}),(0,n.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-col px-2",children:[(0,n.jsx)("input",{type:"radio",id:"".concat(o,"-1"),name:o,value:"1"}),(0,n.jsx)("label",{htmlFor:"".concat(o,"-1"),children:"1 - Poor"})]}),(0,n.jsxs)("div",{className:"flex flex-col px-2",children:[(0,n.jsx)("input",{type:"radio",id:"".concat(o,"-2"),name:o,value:"2"}),(0,n.jsx)("label",{htmlFor:"".concat(o,"-2"),children:"2 - Fair"})]}),(0,n.jsxs)("div",{className:"flex flex-col px-2",children:[(0,n.jsx)("input",{type:"radio",id:"".concat(o,"-3"),name:o,value:"3"}),(0,n.jsx)("label",{htmlFor:"".concat(o,"-3"),children:"3 - Good"})]}),(0,n.jsxs)("div",{className:"flex flex-col px-2",children:[(0,n.jsx)("input",{type:"radio",id:"".concat(o,"-4"),name:o,value:"4"}),(0,n.jsx)("label",{htmlFor:"".concat(o,"-4"),children:"4 - Excellent"})]})]})]})},i=()=>(0,n.jsx)("button",{type:"submit",className:"border-2 p-2 rounded-xl hover:font-extrabold",children:"Submit Feedback"}),l=o(6463),a=()=>{let e=(0,l.useRouter)(),[t,o]=(0,r.useState)(!1),[a,c]=(0,r.useState)(null);return(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault(),o(!0),fetch("/api/submit_form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(t.currentTarget).entries()))}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(t=>{console.log("Success:",t),e.push("/thankyou"),o(!1)}).catch(e=>{console.error("Error:",e),c(e.message),o(!1)})},children:[[{questionText:"What are your thoughts on the color scheme of our website?",name:"color_scheme"},{questionText:"How do you find the layout and organization of our website?",name:"layout_organization"},{questionText:"How would you rate the execution and performance of our website?",name:"execution_performance"},{questionText:"What is your experience with the interactivity of our website?",name:"website_interactivity"},{questionText:"Did you experience any confusion while navigating our website?",name:"navigation_confusion"},{questionText:"How likely are you to recommend our website to others based on its usability?",name:"usability_recommendation"}].map((e,t)=>(0,n.jsx)(s,{questionText:e.questionText,name:e.name},t)),(0,n.jsx)(i,{}),t&&(0,n.jsx)("p",{children:"Submitting..."}),a&&(0,n.jsxs)("p",{children:["Error: ",a]})]})},c=()=>(0,n.jsx)("div",{className:"home-color-scheme min-h-screen flex flex-col items-center p-4",children:(0,n.jsxs)("div",{className:"max-w-4xl home-border-style w-full flex flex-col items-center rounded-xl",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-4 text-center m-10",children:"User Experience Survey"}),(0,n.jsx)(a,{})]})})},6463:function(e,t,o){"use strict";var n=o(1169);o.o(n,"useRouter")&&o.d(t,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=3845)}),_N_E=e.O()}]);