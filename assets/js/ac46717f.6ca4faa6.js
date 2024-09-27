/*! For license information please see ac46717f.6ca4faa6.js.LICENSE.txt */
(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[682],{9769:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var i=n(6942),r=n.n(i),s=n(6540),a=Object.defineProperty,o=(e,t,n)=>((e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),c=new Map,l=new WeakMap,d=0,u=void 0;function h(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(l.has(n)||(d+=1,l.set(n,d.toString())),l.get(n)):"0"):e[t]}`;var n})).toString()}function m(e,t,n={},i=u){if(void 0===window.IntersectionObserver&&void 0!==i){const r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:s,elements:a}=function(e){const t=h(e);let n=c.get(t);if(!n){const i=new Map;let r;const s=new IntersectionObserver((t=>{t.forEach((t=>{var n;const s=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((e=>{e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},c.set(t,n)}return n}(n),o=a.get(e)||[];return a.has(e)||a.set(e,o),o.push(t),s.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(a.delete(e),s.unobserve(e)),0===a.size&&(s.disconnect(),c.delete(r))}}s.Component;var f=n(4848);function p(){const[e,t]=function({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:r,triggerOnce:a,skip:o,initialInView:c,fallbackInView:l,onChange:d}={}){var u;const[h,f]=s.useState(null),p=s.useRef(),[x,g]=s.useState({inView:!!c,entry:void 0});p.current=d,s.useEffect((()=>{if(o||!h)return;let s;return s=m(h,((e,t)=>{g({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:r,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,h,r,i,a,o,n,l,t]);const b=null==(u=x.entry)?void 0:u.target,v=s.useRef();h||!b||a||o||v.current===b||(v.current=b,g({inView:!!c,entry:void 0}));const w=[f,x.inView,x.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!1,threshold:.5}),[i,a]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{0==t&&a(!1)}),[t]),(0,f.jsxs)("footer",{id:"footer",ref:e,className:"bg-[#303846] mt-20",children:[(0,f.jsx)("section",{className:"pt-16 xl:py-16 relative",children:(0,f.jsx)("div",{className:"container ",children:(0,f.jsxs)("div",{className:"flex flex-wrap",children:[(0,f.jsx)("div",{className:"w-full  lg:w-1/2 xl:w-4/12",children:(0,f.jsxs)("div",{className:"mx-3 mb-8",children:[(0,f.jsx)("div",{className:"footer-logo mb-3",children:(0,f.jsx)("img",{className:r()("h-32 animate__animated ",{"animate__fadeInUp opacity-100":t,"animate__fadeOut opacity-0":!t}),draggable:"false",src:n(334).A,alt:"logo"})}),(0,f.jsx)("div",{className:r()("animate__animated animate__duration_1-3 text-gray-300 ",{"animate__fadeInUp opacity-100":t,"animate__fadeOut opacity-0":!t}),children:"\u57fa\u4e8e JavaScript \u6240\u6784\u5efa\u7684\u8de8\u5e73\u53f0\u5f00\u53d1\u6846\u67b6"})]})}),(0,f.jsx)("div",{className:"w-full  lg:w-1/2 xl:w-6/12",children:(0,f.jsxs)("div",{className:r()("mx-3 mb-8  animate__animated animate__duration_1-5",{"animate__fadeInUp opacity-100":t,"animate__fadeOut opacity-0":!t}),children:[(0,f.jsx)("div",{className:"font-bold text-xl text-white mb-5",children:"\u6559\u7a0b"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:" text-white cursor-pointer",onClick:()=>window.location.href="/docs/intro",children:"\u7b80\u4ecb"})}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:" text-white cursor-pointer",onClick:()=>window.location.href="/docs/category/\u5f00\u53d1\u6587\u6863",children:"\u5f00\u53d1\u6587\u6863"})})]})]})}),(0,f.jsx)("div",{className:"w-full lg:w-1/2 xl:w-2/12 flex justify-start",children:(0,f.jsxs)("div",{className:r()("mx-3 mb-8  animate__animated animate__duration_1-5",{"animate__fadeInUp opacity-100":t,"animate__fadeOut opacity-0":!t}),children:[(0,f.jsx)("div",{className:"font-bold text-xl text-white mb-5",children:"\u66f4\u591a"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:" text-white cursor-pointer",onClick:()=>{window.open("https://github.com/lemonade-lab/alemonjs","_blank")},children:"alemonjs"})}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:" text-white cursor-pointer",onClick:()=>window.open("https://github.com/lemonade-lab/chat-space","_blank"),children:"chat-space"})})]})]})})]})})}),(0,f.jsx)("section",{className:"border-t-2 border-gray-700 border-dotted"}),(0,f.jsx)("section",{className:"py-6 px-4",children:(0,f.jsxs)("div",{className:"text-center text-[#e5e7eb]",children:["Copyright \xa9 ",(new Date).getFullYear()," LEMONADE |"," ",(0,f.jsxs)("span",{className:" cursor-pointer text-blue-400",onClick:()=>window.open("https://beian.miit.gov.cn/"),children:["\u6d25ICP\u59072023004480\u53f7"," "]})]})})]})}},334:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});const i=n.p+"assets/images/alemon-8362ce4579b7f62397532a30682bb4d8.png"},6942:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,s(n)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);