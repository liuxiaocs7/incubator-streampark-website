"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={slug:"flink-development-framework-streampark",title:"StreamPark - Powerful Flink Development Framework",tags:["StreamPark","DataStream","FlinkSQL"]},i=void 0,l={permalink:"/blog/flink-development-framework-streampark",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/1-flink-framework-streampark.md",source:"@site/blog/1-flink-framework-streampark.md",title:"StreamPark - Powerful Flink Development Framework",description:"Although the Hadoop system is widely used today, its architecture is complicated, it has a high maintenance complexity, version upgrades are challenging, and due to departmental reasons, data center scheduling is prolonged. We urgently need to explore agile data platform models. With the current popularization of cloud-native architecture and the integration between lake and warehous, we have decided to use Doris as an offline data warehouse and TiDB (which is already in production) as a real-time data platform. Furthermore, because Doris has ODBC capabilities on MySQL, it can integrate external database resources and uniformly output reports.",date:"2024-01-20T12:29:05.000Z",formattedDate:"January 20, 2024",tags:[{label:"StreamPark",permalink:"/blog/tags/stream-park"},{label:"DataStream",permalink:"/blog/tags/data-stream"},{label:"FlinkSQL",permalink:"/blog/tags/flink-sql"}],readingTime:10.22,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"flink-development-framework-streampark",title:"StreamPark - Powerful Flink Development Framework",tags:["StreamPark","DataStream","FlinkSQL"]},prevItem:{title:"StreamPark Flink on Kubernetes practice",permalink:"/blog/streampark-flink-on-k8s"},nextItem:{title:"China Union's Flink Real-Time Computing Platform Ops Practice",permalink:"/blog/streampark-usercase-chinaunion"}},s={authorsImageUrls:[]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Although the Hadoop system is widely used today, its architecture is complicated, it has a high maintenance complexity, version upgrades are challenging, and due to departmental reasons, data center scheduling is prolonged. We urgently need to explore agile data platform models. With the current popularization of cloud-native architecture and the integration between lake and warehous, we have decided to use Doris as an offline data warehouse and TiDB (which is already in production) as a real-time data platform. Furthermore, because Doris has ODBC capabilities on MySQL, it can integrate external database resources and uniformly output reports."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(92282).Z,width:"1200",height:"738"})))}u.isMDXComponent=!0},92282:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/doris-4baaea78343b928b0a798ae9238c489f.png"}}]);