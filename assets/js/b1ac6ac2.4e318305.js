"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22170:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>s,default:()=>f});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"external-infra",title:"Connect to External Infrastructure",sidebar_label:"Connect to External Infrastructure"},c=void 0,u={unversionedId:"external-infra",id:"external-infra",isDocsHomePage:!1,title:"Connect to External Infrastructure",description:"Connect to Existing Infrastructure",source:"@site/docs/external-infra.md",sourceDirName:".",slug:"/external-infra",permalink:"/external-infra",editUrl:"https://github.com/darklang/docs/edit/main/docs/external-infra.md",tags:[],version:"current",frontMatter:{id:"external-infra",title:"Connect to External Infrastructure",sidebar_label:"Connect to External Infrastructure"},sidebar:"docs",previous:{title:"Write Tests",permalink:"/writing-tests"},next:{title:"Built-in Function reference",permalink:"/function-reference"}},s=[{value:"Connect to Existing Infrastructure",id:"connect-to-existing-infrastructure",children:[],level:2},{value:"Add Additional Functionality",id:"add-additional-functionality",children:[],level:2},{value:"Sample Integrations",id:"sample-integrations",children:[],level:2}],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"connect-to-existing-infrastructure"},"Connect to Existing Infrastructure"),(0,i.kt)("p",null,"If you already have an existing application, you can build a new service for it\nin Dark. To connect to any other external infrastructure, connect to it's REST\nAPI using Dark's ",(0,i.kt)("a",{parentName:"p",href:"/httpclient"},"HttpClient Library"),"."),(0,i.kt)("p",null,"Dark operates in US-West."),(0,i.kt)("h2",{id:"add-additional-functionality"},"Add Additional Functionality"),(0,i.kt)("p",null,"While Dark is in private beta, not all functionality is available. If you need\nsomething that Dark does not support yet, you could also integrate to an\nexternal service via the ",(0,i.kt)("a",{parentName:"p",href:"/httpclient"},"HttpClient Library"),"."),(0,i.kt)("h2",{id:"sample-integrations"},"Sample Integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://darklang.com/a/sample-gcpbucket"},"GCP Storage Buckets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://darklang.com/a/sample-aws-signing"},"AWS Signing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://darklang.com/a/sample-firebaseauth"},"Firebase Auth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/external-db"},"Other Datastores"))))}f.isMDXComponent=!0}}]);