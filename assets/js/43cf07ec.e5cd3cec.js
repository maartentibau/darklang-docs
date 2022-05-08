"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95019:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"unique-aspects",title:"Unique Aspects",sidebar_label:"Unique Aspects"},s=void 0,u={unversionedId:"discussion/unique-aspects",id:"discussion/unique-aspects",title:"Unique Aspects",description:"Dark being connected to the editor and infrastructure allows for unique language",source:"@site/docs/discussion/unique-aspects.md",sourceDirName:"discussion",slug:"/discussion/unique-aspects",permalink:"/discussion/unique-aspects",editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/unique-aspects.md",tags:[],version:"current",frontMatter:{id:"unique-aspects",title:"Unique Aspects",sidebar_label:"Unique Aspects"},sidebar:"docs",previous:{title:"Overview",permalink:"/discussion/languageoverview"},next:{title:"Functional Aspects",permalink:"/discussion/functional-aspects"}},c=[{value:"Play &amp; Replay Buttons",id:"play--replay-buttons",children:[],level:2},{value:"Function Versioning",id:"function-versioning",children:[],level:2},{value:"Functions that use Error Rail",id:"functions-that-use-error-rail",children:[],level:2},{value:"Taking Functions off the Error Rail",id:"taking-functions-off-the-error-rail",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dark being connected to the editor and infrastructure allows for unique language\nfunctionality."),(0,i.kt)("h2",{id:"play--replay-buttons"},"Play & Replay Buttons"),(0,i.kt)("p",null,"The language being connected to the editor and infrastructure allows interactive\nfunctions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions that do not have side effects (like ",(0,i.kt)("inlineCode",{parentName:"li"},"Int::add"),") run automatically."),(0,i.kt)("li",{parentName:"ul"},"Functions with side effects have play buttons. Press the play button to\nexecute the function for the selected trace.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/playbutton.png",src:n(77843).Z,width:"1604",height:"396"})),(0,i.kt)("p",null,"The replay icon indicates the function has been executed already. Pressing it\nexecutes the code for the trace again."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/replaybutton.png",src:n(36680).Z,width:"1600",height:"386"})),(0,i.kt)("p",null,"Replay an entire handler for the selected trace (including all functions within\nthe handler) in the upper right. This would replay ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::generateKey")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"DB::set"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/replayhandler.png",src:n(2120).Z,width:"850",height:"382"})),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nhShq-HCFxs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"function-versioning"},"Function Versioning"),(0,i.kt)("p",null,"You can see that many standard library items are labeled \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"v3"),"\u201d or \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),"\u201d in the\neditor. These refer to the version of the function. When you start a new canvas,\nyou will always have the latest versions. If we upgrade, you\u2019ll have the choice\nto do so, but can continue to use the old ones."),(0,i.kt)("h2",{id:"functions-that-use-error-rail"},"Functions that use Error Rail"),(0,i.kt)("p",null,"Functions that return Result or Option Types (like ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::get")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient::get"),") are handled by the Error Rail by default. The documentation\nin the editor indicates if this is the case for a given function."),(0,i.kt)("p",null,"The error rail allows you to keep writing code along the \u201chappy path,\u201d without\nstopping. This is based on\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.darklang.com/real-problems-with-functional-languages/"},"Railway Oriented Programming"),".\nThe idea is that when you call a function which might not succeed, you can keep\ngoing. For example, if you try to look up a value in a dictionary or database,\nwe don't make you immediately handle the error case."),(0,i.kt)("p",null,"An expression that returns to the rail has a signifier on the right hand side.\nBefore it runs, there is a dotted line and no indication of a happy case or\nerror."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(63018).Z,width:"828",height:"176"})),(0,i.kt)("p",null,"Once it runs, it will show the happy case (circle) or error case (error\nsignifier)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(96215).Z,width:"806",height:"172"}),"\n",(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(96372).Z,width:"826",height:"162"})),(0,i.kt)("p",null,'In the case of a "happy" value, you can just ignore the result and option type -\nwe unwrap them automatically, as seen above. In the case of an error, the\nexecution will end (similar to throwing an exception that isn\'t caught).'),(0,i.kt)("p",null,"There are two different types that both operate this way: the Result Type\n(",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," or the Option type ",(0,i.kt)("inlineCode",{parentName:"p"},"Just val")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),"). Dark returns a 500\nerror for bad results and a 404 for bad Options."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Happy Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Case"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result type"),(0,i.kt)("td",{parentName:"tr",align:null},"OK val"),(0,i.kt)("td",{parentName:"tr",align:null},"Error message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Option type"),(0,i.kt)("td",{parentName:"tr",align:null},"Just val"),(0,i.kt)("td",{parentName:"tr",align:null},"Nothing")))),(0,i.kt)("p",null,"In the case above, when the function is on the rail, the value is as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/onrail_value.png",src:n(60125).Z,width:"954",height:"254"})),(0,i.kt)("h2",{id:"taking-functions-off-the-error-rail"},"Taking Functions off the Error Rail"),(0,i.kt)("p",null,"When you are ready to handle error cases, you remove them from the rail by using\nthe editor command ",(0,i.kt)("inlineCode",{parentName:"p"},"take-function-off-rail")," (open the Command palette by hitting\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-\\")," ",(0,i.kt)("strong",{parentName:"p"},"on the function name"),"). This will unwrap the values."),(0,i.kt)("p",null,"In this case it unwraps to ",(0,i.kt)("inlineCode",{parentName:"p"},"Just val")," and the behavior would be the same for\nfunctions that would return ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok val"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/offrail_value.png",src:n(41066).Z,width:"954",height:"258"})),(0,i.kt)("p",null,"When the function is off the rail, instead of execution halting, you will handle\nit yourself."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/offrail_value.png",src:n(34868).Z,width:"928",height:"166"})),(0,i.kt)("p",null,"Handling these errors is best done using a Match statement."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/match.png",src:n(90144).Z,width:"808",height:"270"})),(0,i.kt)("p",null,"Live values on Match statements will show which branch executed. In this case,\nthe first arm of the branch ",(0,i.kt)("inlineCode",{parentName:"p"},"Just result")," executed, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," did not."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/match.png",src:n(56687).Z,width:"1356",height:"352"})),(0,i.kt)("p",null,"More on Match is available in\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.darklang.com/discussion/functional-aspects"},"Functional Aspects of Dark"),",\nand there is a sample ",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-match"},"here"),"."))}d.isMDXComponent=!0},96372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/errorrail_failure-b4040aef678d99fda09c91e008b2be17.png"},96215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/errorrail_success-e000a956c35ed7501228f689e7158f87.png"},90144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/match-74867aab1d612baf31c5e1daac21a4f8.png"},56687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/match_just-5e3ef6c0935c178a90bd47eb898c8a77.png"},34868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offrail_error-bc3b03753a94b5d8883252eda2742a45.png"},41066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offrail_value-b69903e3884744f84fa53e39c3c837a3.png"},60125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/onrail_value-cac16b10ac9949b73083a15b1ca80fdc.png"},77843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playbutton-e89dde4f3e24b4bbf7d6db0df914d43a.png"},63018:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/railnotyetrun-f9809db48bdf629b37769f884c167517.png"},36680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/replaybutton-b39dfceafe87e077a58b11bbf90221d4.png"},2120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/replayhandler-024389441b5b3b408b11e47fa638c927.png"}}]);