(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{6325:function(e,t,n){Promise.resolve().then(n.bind(n,2537)),Promise.resolve().then(n.bind(n,1920)),Promise.resolve().then(n.t.bind(n,231,23))},3278:function(e,t,n){"use strict";n.d(t,{D:function(){return l},MyGlobalStateProvider:function(){return i}});var o=n(7437),r=n(2265);let l=(0,r.createContext)(void 0),i=e=>{let{children:t}=e,[n,i]=(0,r.useState)("");return(0,o.jsx)(l.Provider,{value:{username:n,setUsername:i},children:t})}},2537:function(e,t,n){"use strict";var o=n(2265),r=n(3278);t.default=()=>{let e=(0,o.useContext)(r.D);return(0,o.useEffect)(()=>{e?console.log("Current username in global state:",e.username):console.log("Global state is not available.")},[e]),null}},1920:function(e,t,n){"use strict";var o=n(2265),r=n(3278);t.default=()=>{var e;let t,n;let l=(0,o.useContext)(r.D),[i,s]=(0,o.useState)(""),a=[];(0,o.useEffect)(()=>{if(s(window.location.pathname),!l){console.error("Global state is not available!");return}let e=()=>{["click","touchend","mouseover","mousemove","scroll","keypress","resize"].forEach(e=>{document.removeEventListener(e,u)})};["click","touchend","mouseover","mousemove","scroll","keypress","resize"].forEach(e=>{document.addEventListener(e,u)});let t=setInterval(c,15e3);return()=>{e(),clearInterval(t)}},[l,i]);let u=(e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={x:"clientX"in e?e.clientX:null,y:"clientY"in e?e.clientY:null,tag:e.target instanceof HTMLElement?e.target.tagName:null,id:e.target instanceof HTMLElement?e.target.id:null,key:"key"in e?e.key:null,button:"button"in e?e.button:null,scrollDepth:window.scrollY,width:window.innerWidth,height:window.innerHeight,page:i,...t},o={username:(null==l?void 0:l.username)||"LandingPage",type:e.type,timestamp:new Date().toISOString(),details:n};a.push(o),a.length>=1e3&&c()},n=0,function(){for(var o=arguments.length,r=Array(o),l=0;l<o;l++)r[l]=arguments[l];let i=Date.now();(!n||i-n>=3e3)&&(t&&clearTimeout(t),t=setTimeout(()=>{e(...r),n=i},3e3))}),c=()=>{0!==a.length&&(console.log("Sending interactions:",a),fetch("http://localhost:8000/log-interactions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(e=>{if(!e.ok)throw Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{console.log("Success:",e),a.length=0}).catch(e=>{console.error("Error:",e)}))};return null}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=6325)}),_N_E=e.O()}]);