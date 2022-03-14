"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,b=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45370:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>s,default:()=>m});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"troubleshooting",title:"Troubleshooting"},c=void 0,u={unversionedId:"contributing/troubleshooting",id:"contributing/troubleshooting",title:"Troubleshooting",description:"If you're having problems contributing, we want to help:",source:"@site/docs/contributing/troubleshooting.md",sourceDirName:"contributing",slug:"/contributing/troubleshooting",permalink:"/contributing/troubleshooting",editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"Contributing",previous:{title:"Debugging",permalink:"/contributing/debugging"},next:{title:"Making a Pull Request",permalink:"/contributing/making-a-pull-request"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're having problems contributing, we want to help:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ask for help in #development in ",(0,i.kt)("a",{parentName:"li",href:"https://darklang.com/slack-invite"},"Slack"),". Or\nDM Paul Biggar directly if you prefer."),(0,i.kt)("li",{parentName:"ul"},"make an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/issues"},"issue")," describing the\nproblem, and someone will come help.")),(0,i.kt)("p",null,"Common fixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sometimes there are compilation problems where the build caches from various\npackage managers we use (npm, esy, opam, cargo) develop problems. They can be\nfixed by clearing the build directories (which are in Docker volumes) by\nrunning the related scripts:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for client errors, use ",(0,i.kt)("inlineCode",{parentName:"li"},"./scripts/clear-bs-cache")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"./scripts/clear-node-modules")),(0,i.kt)("li",{parentName:"ul"},"for other errors, use ",(0,i.kt)("inlineCode",{parentName:"li"},"./scripts/clear-builder-volumes")))),(0,i.kt)("li",{parentName:"ul"},"Integration tests sometimes fail. At time of writing ",(0,i.kt)("inlineCode",{parentName:"li"},"execute_function_works"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"max_callstack_bug"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"record_consent_saved_across_canvases")," are flaky, and\nyou can ignore related test failures.")))}m.isMDXComponent=!0}}]);