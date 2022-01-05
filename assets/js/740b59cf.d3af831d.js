"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18490:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"first-api",title:"Your first External API Call"},s=void 0,p={unversionedId:"first-api",id:"first-api",isDocsHomePage:!1,title:"Your first External API Call",description:"Dark has built-in standard libraries for working with external HTTP Calls",source:"@site/docs/first-api.md",sourceDirName:".",slug:"/first-api",permalink:"/first-api",editUrl:"https://github.com/darklang/docs/edit/main/docs/first-api.md",tags:[],version:"current",frontMatter:{id:"first-api",title:"Your first External API Call"}},c=[],d={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dark has built-in standard libraries for working with external HTTP Calls\n(",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient"),"). This allows you to work with any external REST APIs."),(0,i.kt)("p",null,"In this Tutorial, we'll send the Daily Report we created to Airtable, so other\nteam members can see it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up Airtable (~10 minutes).")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com"},"Airtable")," and create a new base."),(0,i.kt)("li",{parentName:"ul"},"In the base, create two columns, one for date (field type is date) and one for\nrequests (field type is number). You can see our sample\n",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/invite/l?inviteId=invOadxgcpBKaCQiv&inviteToken=e7492a049bf7e4cd1c475b43efac35d296578f66198bff549ca99af6ee5821b4"},"here"),".\n",(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(28213).Z})),(0,i.kt)("li",{parentName:"ul"},"Generate an API key on the ",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/account"},"Account page"),". Put\nthe API key in a function in your Dark canvas.\n",(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(88782).Z})),(0,i.kt)("li",{parentName:"ul"},"Airtable's full API documentation for your base will be available on the\n",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/api"},"API page"),". Within this page, go to Create Records\nin the left hand navigation to copy the URI from the right hand side.\n",(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(57935).Z}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add the HTTP POST call to the ",(0,i.kt)("inlineCode",{parentName:"li"},"storeReport")," worker so it will run\nasynchronously. Hit ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," after the ",(0,i.kt)("inlineCode",{parentName:"li"},"Db::set")," function. ",(0,i.kt)("inlineCode",{parentName:"li"},"DB::set")," will\nstill run as a side effect, and we can add the new function.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(3866).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::post")," function takes four arguments. Paste the URI from\nAirtable from the base into the first argument.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(19161).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Above ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::post")," declare a new variable, ",(0,i.kt)("inlineCode",{parentName:"li"},"airtable_header"),". Use the\n",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::bearerToken")," and pass your API key function as the argument.\nThen, pipe ",(0,i.kt)("inlineCode",{parentName:"li"},"|>")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"Dict::merge")," and merge with\n",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::jsonContentType"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"airtable_header")," will now be a nicely\nformatted header for the Airtable API.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(38605).Z})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The query can be empty for this particular request, but we do need to provide\nan argument, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the information from the report to the body (the date and number of\nrequests). Airtable expects the following format:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"records : [{fields : {Date : date, Requests : count}}]")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(17469).Z})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Run the API request in the editor by hitting the play button next to\n",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::post"),". If the request is successful, a success will be returned\nand you'll see the record in your Airtable base.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(36908).Z})),(0,i.kt)("p",null,"If the request is not successful, the error message will be displayed in line,\nand you'll see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," on the error rail. In this case, the format of the\ndate passed did not expect what Airtable expected."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gettingstarted/newworker.png",src:n(21207).Z})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Each time your cron runs (daily, or when triggered) a record will be added to\nyour Airtable base.")))}u.isMDXComponent=!0},28213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/airtable_base-522019e75989057f53800784a8e40418.png"},88782:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/airtable_key-d88e1cd7d36e23e4aec19190d9198c7c.png"},57935:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/airtable_url-26369ed16786fa952cec9d4d6a7ac78a.png"},17469:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_body-8d49c381476818e09814d8f7b2258780.png"},21207:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_error-932e1cd6d9c7cec4c0960f7cce14ebf1.png"},38605:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_header-6220c617bd04d7153c678401a801f72e.png"},19161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_httpclientpost-71172c71b0cee15af314c7d4c033e0f3.png"},36908:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_success-319ae39f168e2ea49440be94c02c77ab.png"},3866:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apiworker_newline-1200cb0ac3fc517b5d5ecb0dd3544d8e.png"}}]);