(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{455:function(e,t,n){Promise.resolve().then(n.bind(n,6994))},3305:function(e,t,n){"use strict";n.d(t,{D:function(){return o},MyGlobalStateProvider:function(){return i}});var r=n(7437),s=n(2265);let o=(0,s.createContext)(void 0),i=e=>{let{children:t}=e,[n,i]=(0,s.useState)("");return(0,r.jsx)(o.Provider,{value:{username:n,setUsername:i},children:t})}},6994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),s=n(2265),o=n(3305),i=n(6463),l=()=>{let[e,t]=(0,s.useState)(""),n=(0,s.useContext)(o.D),l=(0,i.useRouter)();if(!n)throw Error("ClientUsernameInput must be used within a MyGlobalStateProvider");let{setUsername:u}=n;return(0,r.jsxs)("div",{className:"client-username-input flex flex-col",children:[(0,r.jsx)("input",{type:"text",value:e,onChange:e=>{t(e.target.value)},placeholder:"SleepyDawg",className:"flex-1 justify-center text-input rounded-xl home-input-style"}),(0,r.jsx)("button",{onClick:()=>{u(e),console.log("Username set to:",e),l.push("/topics")},className:"flex-1 justify-center rounded-xl home-button-style",children:"Submit Username"})]})},u=()=>(0,r.jsx)("div",{className:"home-color-scheme flex items-center justify-center min-h-screen",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full max-w-4xl p-4 home-border-style rounded-xl",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Welcome"}),(0,r.jsx)("p",{className:"mb-4",children:"Hi. Thank you for joining our study! We are eager to see how different designs can improve the way information is presented and experienced."}),(0,r.jsx)("p",{className:"mb-4",children:"To participate, simply enter a username below. You will then be taken to a page with various topics to explore. Feel free to switch between topics at any time. You can exit the study whenever you like and complete a brief survey to share your thoughts."}),(0,r.jsx)("p",{className:"mb-4",children:"Please be aware that while your interactions with the site are recorded anonymously to enhance future user experiences, no personal information beyond your site usage is collected."}),(0,r.jsx)(l,{})]})})},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=455)}),_N_E=e.O()}]);