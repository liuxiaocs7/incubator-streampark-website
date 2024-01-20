"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(a),u=r,d=k["".concat(s,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={slug:"streampark-usercase-joyme",title:"StreamPark \u5728 Joyme \u7684\u751f\u4ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},o=void 0,i={permalink:"/zh-CN/blog/streampark-usercase-joyme",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/6-streampark-usercase-joyme.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/6-streampark-usercase-joyme.md",title:"StreamPark \u5728 Joyme \u7684\u751f\u4ea7\u5b9e\u8df5",description:"\u6458\u8981\uff1a \u672c\u6587\u5e26\u6765 StreamPark \u5728 Joyme \u4e2d\u7684\u751f\u4ea7\u5b9e\u8df5, \u4f5c\u8005\u662f Joyme \u7684\u5927\u6570\u636e\u5de5\u7a0b\u5e08\u79e6\u57fa\u52c7, \u4e3b\u8981\u5185\u5bb9\u4e3a:",date:"2024-01-20T12:29:05.000Z",formattedDate:"2024\u5e741\u670820\u65e5",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"},{label:"FlinkSQL",permalink:"/zh-CN/blog/tags/flink-sql"}],readingTime:14.71,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-joyme",title:"StreamPark \u5728 Joyme \u7684\u751f\u4ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},prevItem:{title:"StreamPark \u5728\u5c18\u950b\u4fe1\u606f\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5316\u7e41\u4e3a\u7b80\u6781\u81f4\u4f53\u9a8c",permalink:"/zh-CN/blog/streampark-usercase-dustess"},nextItem:{title:"StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",permalink:"/zh-CN/blog/streampark-usercase-haibo"}},s={authorsImageUrls:[]},p=[{value:"1 \u9047\u89c1 StreamPark",id:"1-\u9047\u89c1-streampark",level:2},{value:"2 Flink SQL \u4f5c\u4e1a\u5f00\u53d1",id:"2-flink-sql-\u4f5c\u4e1a\u5f00\u53d1",level:2},{value:"<strong>1. \u7f16\u5199SQL</strong>",id:"1-\u7f16\u5199sql",level:3},{value:"<strong>2. \u6dfb\u52a0\u4f9d\u8d56</strong>",id:"2-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"<strong>3. \u53c2\u6570\u914d\u7f6e</strong>",id:"3-\u53c2\u6570\u914d\u7f6e",level:3},{value:"<strong>4. \u52a8\u6001\u53c2\u6570\u8bbe\u7f6e</strong>",id:"4-\u52a8\u6001\u53c2\u6570\u8bbe\u7f6e",level:3},{value:"3 Custom Code \u4f5c\u4e1a\u5f00\u53d1",id:"3-custom-code-\u4f5c\u4e1a\u5f00\u53d1",level:2},{value:"4 \u76d1\u63a7\u544a\u8b66",id:"4-\u76d1\u63a7\u544a\u8b66",level:2},{value:"5 \u5e38\u89c1\u95ee\u9898",id:"5-\u5e38\u89c1\u95ee\u9898",level:2},{value:"<strong>1. \u4f5c\u4e1a\u542f\u52a8\u5931\u8d25</strong>",id:"1-\u4f5c\u4e1a\u542f\u52a8\u5931\u8d25",level:3},{value:"<strong>2. \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25</strong>",id:"2-\u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25",level:3},{value:"6 \u793e\u533a\u5370\u8c61",id:"6-\u793e\u533a\u5370\u8c61",level:2},{value:"7 \u603b\u7ed3",id:"7-\u603b\u7ed3",level:2}],c={toc:p};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6458\u8981\uff1a")," \u672c\u6587\u5e26\u6765 StreamPark \u5728 Joyme \u4e2d\u7684\u751f\u4ea7\u5b9e\u8df5, \u4f5c\u8005\u662f Joyme \u7684\u5927\u6570\u636e\u5de5\u7a0b\u5e08\u79e6\u57fa\u52c7, \u4e3b\u8981\u5185\u5bb9\u4e3a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9047\u89c1StreamPark"),(0,r.kt)("li",{parentName:"ul"},"Flink Sql \u4f5c\u4e1a\u5f00\u53d1"),(0,r.kt)("li",{parentName:"ul"},"Custom code \u4f5c\u4e1a\u5f00\u53d1"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u544a\u8b66"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u793e\u533a\u5370\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u603b\u7ed3")),(0,r.kt)("h2",{id:"1-\u9047\u89c1-streampark"},"1 \u9047\u89c1 StreamPark"),(0,r.kt)("p",null,"\u9047\u89c1 StreamPark \u662f\u5fc5\u7136\u7684\uff0c\u57fa\u4e8e\u6211\u4eec\u73b0\u6709\u7684\u5b9e\u65f6\u4f5c\u4e1a\u5f00\u53d1\u6a21\u5f0f\uff0c\u4e0d\u5f97\u4e0d\u5bfb\u627e\u4e00\u4e2a\u5f00\u6e90\u7684\u5e73\u53f0\u6765\u652f\u6491\u6211\u53f8\u7684\u5b9e\u65f6\u4e1a\u52a1\u3002\u6211\u4eec\u7684\u73b0\u72b6\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u5199\u4f5c\u4e1a\u6253\u5305\u5230\u670d\u52a1\u5668\uff0c\u7136\u540e\u6267\u884c Flink run \u547d\u4ee4\u8fdb\u884c\u63d0\u4ea4\uff0c\u8fc7\u7a0b\u7e41\u7410\uff0c\u6548\u7387\u4f4e\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"Flink Sql \u901a\u8fc7\u81ea\u7814\u7684\u8001\u5e73\u53f0\u63d0\u4ea4\uff0c\u8001\u5e73\u53f0\u5f00\u53d1\u4eba\u5458\u5df2\u79bb\u804c\uff0c\u540e\u7eed\u7684\u4ee3\u7801\u65e0\u4eba\u7ef4\u62a4\uff0c\u5373\u4fbf\u6709\u4eba\u7ef4\u62a4\u4e5f\u4e0d\u5f97\u4e0d\u9762\u5bf9\u7ef4\u62a4\u6210\u672c\u9ad8\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u4e00\u90e8\u5206\u4f5c\u8005\u662f SparkStreaming \u4f5c\u4e1a\uff0c\u4e24\u5957\u6d41\u5f15\u64ce\uff0c\u6846\u67b6\u4e0d\u7edf\u4e00\uff0c\u5f00\u53d1\u6210\u672c\u5927"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u4f5c\u4e1a\u6709 Scala \u548c Java \u5f00\u53d1\uff0c\u8bed\u8a00\u548c\u6280\u672f\u6808\u4e0d\u7edf\u4e00")),(0,r.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u79cd\u79cd\u539f\u56e0\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5f00\u6e90\u5e73\u53f0\u6765\u7ba1\u7406\u6211\u4eec\u7684\u5b9e\u65f6\u4f5c\u4e1a\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u9700\u8981\u8fdb\u884c\u91cd\u6784\uff0c\u7edf\u4e00\u5f00\u53d1\u6a21\u5f0f\uff0c\u7edf\u4e00\u5f00\u53d1\u8bed\u8a00\uff0c\u5c06\u9879\u76ee\u96c6\u4e2d\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u9047\u89c1 StreamPark \u5c31\u57fa\u672c\u786e\u5b9a\u4e86\uff0c\u6211\u4eec\u6839\u636e\u5b98\u7f51\u7684\u6587\u6863\u5feb\u901f\u8fdb\u884c\u4e86\u90e8\u7f72\u5b89\u88c5\uff0c\u642d\u5efa\u4ee5\u540e\u8fdb\u884c\u4e86\u4e00\u4e9b\u64cd\u4f5c\uff0c\u754c\u9762\u53cb\u597d\uff0cFlink \u591a\u7248\u672c\u652f\u6301\uff0c\u6743\u9650\u7ba1\u7406\uff0c\u4f5c\u4e1a\u76d1\u63a7\u7b49\u4e00\u7cfb\u5217\u529f\u80fd\u5df2\u80fd\u8f83\u597d\u7684\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u8fdb\u4e00\u6b65\u4e86\u89e3\u5230\u5176\u793e\u533a\u4e5f\u5f88\u6d3b\u8dc3\uff0c\u4ece 1.1.0 \u7248\u672c\u5f00\u59cb\u89c1\u8bc1\u4e86 StreamPark \u529f\u80fd\u5b8c\u5584\u7684\u8fc7\u7a0b\uff0c\u5f00\u53d1\u56e2\u961f\u662f\u975e\u5e38\u6709\u8ffd\u6c42\u7684\uff0c\u76f8\u4fe1\u4f1a\u4e0d\u65ad\u7684\u5b8c\u5584\u3002"),(0,r.kt)("h2",{id:"2-flink-sql-\u4f5c\u4e1a\u5f00\u53d1"},"2 Flink SQL \u4f5c\u4e1a\u5f00\u53d1"),(0,r.kt)("p",null,"Flink Sql \u5f00\u53d1\u6a21\u5f0f\u5e26\u6765\u4e86\u5f88\u5927\u7684\u4fbf\u5229\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u7684\u6307\u6807\u5f00\u53d1\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684 Sql \u5c31\u53ef\u4ee5\u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u5199\u4e00\u884c\u4ee3\u7801\u3002Flink Sql \u65b9\u4fbf\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5f00\u53d1\u5de5\u4f5c\uff0c\u6bd5\u7adf\u4e00\u4e9b\u505a\u4ed3\u5e93\u7684\u540c\u5b66\u5728\u7f16\u5199\u4ee3\u7801\u65b9\u9762\u8fd8\u662f\u6709\u4e9b\u96be\u5ea6\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 StreamPark \u7684\u4efb\u52a1\u65b0\u589e\u754c\u9762\u8fdb\u884c\u6dfb\u52a0\u65b0\u4efb\u52a1\uff0c\u9ed8\u8ba4 Development Mode \u5c31\u662f Flink Sql \u6a21\u5f0f\u3002\u76f4\u63a5\u5728 Flink Sql \u90e8\u5206\u7f16\u5199Sql \u903b\u8f91\u3002"),(0,r.kt)("p",null,"Flink Sql \u90e8\u5206\uff0c\u6309\u7167 Flink \u5b98\u7f51\u7684\u6587\u6863\u9010\u6b65\u7f16\u5199\u903b\u8f91 Sql \u5373\u53ef\uff0c\u5bf9\u4e8e\u6211\u53f8\u6765\u8bf4\uff0c\u4e00\u822c\u5c31\u4e09\u90e8\u5206: \u63a5\u5165 Source \uff0c\u4e2d\u95f4\u903b\u8f91\u5904\u7406\uff0c\u6700\u540e Sink\u3002\u57fa\u672c\u4e0a Source \u90fd\u662f\u6d88\u8d39 kafka \u7684\u6570\u636e\uff0c\u903b\u8f91\u5904\u7406\u5c42\u4f1a\u6709\u5173\u8054 MySQL \u53bb\u505a\u7ef4\u8868\u67e5\u8be2\uff0c\u6700\u540e Sink \u90e8\u5206\u5927\u591a\u662f Es\uff0cRedis\uff0cMySQL\u3002"),(0,r.kt)("h3",{id:"1-\u7f16\u5199sql"},(0,r.kt)("strong",{parentName:"h3"},"1. \u7f16\u5199SQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8fde\u63a5kafka\nCREATE TABLE source_table (\n `Data` ROW<uid STRING>\n) WITH (\n'connector.type' = 'kafka',\n'connector.version' = 'universal',\n'connector.topic' = '\u4e3b\u9898',\n'connector.properties.bootstrap.servers'='broker\u5730\u5740',\n'connector.startup-mode' = 'latest-offset',\n'update-mode' = 'append',\n'format.type' = 'json',\n'connector.properties.group.id' = '\u6d88\u8d39\u7ec4id',\n'format.derive-schema' = 'true'\n);\n\n-- \u843d\u5730\u8868sink\nCREATE TABLE sink_table (\n`uid` STRING\n) WITH (\n'connector.type' = 'jdbc',\n'connector.url' = 'jdbc:mysql://xxx/xxx?useSSL=false',\n'connector.username' = 'username',\n'connector.password' = 'password',\n'connector.table' = 'tablename',\n'connector.write.flush.max-rows' = '50',\n'connector.write.flush.interval' = '2s',\n'connector.write.max-retries' = '3'\n);\n\n-- \u4ee3\u7801\u903b\u8f91\u8fc7\nINSERT INTO sink_table\nSELECT  Data.uid  FROM source_table;\n")),(0,r.kt)("h3",{id:"2-\u6dfb\u52a0\u4f9d\u8d56"},(0,r.kt)("strong",{parentName:"h3"},"2. \u6dfb\u52a0\u4f9d\u8d56")),(0,r.kt)("p",null,"\u5173\u4e8e\u4f9d\u8d56\u8fd9\u5757\u662f StreamPark \u91cc\u7279\u6709\u7684\uff0c\u5728 StreamPark \u4e2d\u521b\u65b0\u578b\u7684\u5c06\u4e00\u4e2a\u5b8c\u6574\u7684 Flink Sql \u4efb\u52a1\u62c6\u5206\u6210\u4e24\u90e8\u5206\u7ec4\u6210: Sql \u548c \u4f9d\u8d56, Sql \u5f88\u597d\u7406\u89e3\u4e0d\u591a\u5570\u55e6, \u4f9d\u8d56\u662f Sql \u91cc\u9700\u8981\u7528\u5230\u7684\u4e00\u4e9b Connector \u7684 Jar, \u5982 Sql \u91cc\u7528\u5230\u4e86 Kafka \u548c MySQL \u7684 Connector, \u90a3\u5c31\u9700\u8981\u5f15\u5165\u8fd9\u4e24\u4e2a Connector \u7684\u4f9d\u8d56, \u5728 StreamPark \u4e2d\u6dfb\u52a0\u4f9d\u8d56\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u57fa\u4e8e\u6807\u51c6\u7684 Maven pom \u5750\u6807\u65b9\u5f0f\uff0c\u53e6\u4e00\u79cd\u662f\u4ece\u672c\u5730\u4e0a\u4f20\u9700\u8981\u7684 Jar \u3002\u8fd9\u4e24\u79cd\u4e5f\u53ef\u4ee5\u6df7\u7740\u7528\uff0c\u6309\u9700\u6dfb\u52a0\uff0c\u70b9\u51fb\u5e94\u7528\u5373\u53ef\uff0c \u5728\u63d0\u4ea4\u4f5c\u4e1a\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u52a0\u8f7d\u8fd9\u4e9b\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(29289).Z,width:"1080",height:"469"})),(0,r.kt)("h3",{id:"3-\u53c2\u6570\u914d\u7f6e"},(0,r.kt)("strong",{parentName:"h3"},"3. \u53c2\u6570\u914d\u7f6e")),(0,r.kt)("p",null,"\u5728\u4efb\u52a1\u7684\u6dfb\u52a0\u548c\u4fee\u6539\u9875\u9762\u4e2d\u5df2\u7ecf\u7f57\u5217\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u53c2\u6570\u8bbe\u7f6e\uff0c\u66f4\u591a\u7684\u53c2\u6570\u8bbe\u7f6e\u5219\u63d0\u4f9b\u4e86\u4e00\u4e2a yaml \u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u53ea\u662f\u8bbe\u7f6e\u4e86 checkpoint \u548c savepoint \u8fd9\u4e24\u4e2a\u914d\u7f6e\u3002\u4e00\u662f checkpoint \u7684\u4f4d\u7f6e\uff0c\u4e8c\u662f \u6267\u884c checkpoint \u7684\u9891\u7387\u3002\u5176\u4ed6\u7684\u914d\u7f6e\u57fa\u672c\u6ca1\u6709\u52a8\uff0c\u8fd9\u90e8\u5206\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u6309\u9700\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5269\u4e0b\u7684\u4e00\u4e9b\u53c2\u6570\u8bbe\u7f6e\u5c31\u8981\u6839\u636e\u4f5c\u4e1a\u7684\u5177\u4f53\u60c5\u51b5\u53bb\u5bf9\u75c7\u4e0b\u836f\u7684\u914d\u7f6e\u4e86\uff0c\u5904\u7406\u7684\u6570\u636e\u91cf\u5927\u4e86\uff0c\u903b\u8f91\u590d\u6742\u4e86\uff0c\u53ef\u80fd\u5c31\u9700\u8981\u66f4\u591a\u7684\u5185\u5b58\uff0c\u5e76\u884c\u5ea6\u7ed9\u591a\u4e00\u4e9b\u3002\u6709\u65f6\u5019\u9700\u8981\u6839\u636e\u4f5c\u4e1a\u7684\u8fd0\u884c\u60c5\u51b5\u8fdb\u884c\u591a\u6b21\u8c03\u6574\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(13430).Z,width:"1080",height:"610"})),(0,r.kt)("h3",{id:"4-\u52a8\u6001\u53c2\u6570\u8bbe\u7f6e"},(0,r.kt)("strong",{parentName:"h3"},"4. \u52a8\u6001\u53c2\u6570\u8bbe\u7f6e")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u6a21\u5f0f\u90e8\u7f72\u662f on Yarn\uff0c\u5728\u52a8\u6001\u9009\u9879\u914d\u7f6e\u91cc\u914d\u7f6e\u4e86 Yarn \u7684\u961f\u5217\u540d\u79f0\u3002\u4e5f\u6709\u4e00\u4e9b\u914d\u7f6e\u4e86\u5f00\u542f\u589e\u91cf\u7684 Checkpoint \u9009\u9879\u548c\u72b6\u6001\u8fc7\u671f\u65f6\u95f4\uff0c\u57fa\u672c\u7684\u8fd9\u4e9b\u53c2\u6570\u90fd\u53ef\u4ee5\u4ece Flink \u7684\u5b98\u7f51\u53bb\u67e5\u8be2\u5230\u3002\u4e4b\u524d\u6709\u4e00\u4e9b\u4f5c\u4e1a\u786e\u5b9e\u7ecf\u5e38\u51fa\u73b0\u5185\u5b58\u6ea2\u51fa\u7684\u95ee\u9898\uff0c\u52a0\u4e0a\u589e\u91cf\u53c2\u6570\u548c\u8fc7\u671f\u53c2\u6570\u4ee5\u540e\uff0c\u4f5c\u4e1a\u7684\u8fd0\u884c\u60c5\u51b5\u597d\u591a\u4e86\u3002\u8fd8\u6709\u5c31\u662f Flink Sql \u4f5c\u4e1a\u8bbe\u8ba1\u5230\u72b6\u6001\u8fd9\u79cd\u6bd4\u8f83\u5927\u548c\u903b\u8f91\u590d\u6742\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4e2a\u4eba\u611f\u89c9\u8fd8\u662f\u7528 Streaming \u4ee3\u7801\u6765\u5b9e\u73b0\u6bd4\u8f83\u597d\u63a7\u5236\u4e00\u4e9b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-Dyarn.application.queue= yarn\u961f\u5217\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"-Dstate.backend.incremental=true"),(0,r.kt)("li",{parentName:"ul"},"-Dtable.exec.state.ttl=\u8fc7\u671f\u65f6\u95f4")),(0,r.kt)("p",null,"\u5b8c\u6210\u914d\u7f6e\u4ee5\u540e\u63d0\u4ea4\uff0c\u7136\u540e\u5728 application \u754c\u9762\u8fdb\u884c\u90e8\u7f72\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9061).Z,width:"1080",height:"422"})),(0,r.kt)("h2",{id:"3-custom-code-\u4f5c\u4e1a\u5f00\u53d1"},"3 Custom Code \u4f5c\u4e1a\u5f00\u53d1"),(0,r.kt)("p",null,"Streaming \u4f5c\u4e1a\u6211\u4eec\u662f\u4f7f\u7528 Flink java \u8fdb\u884c\u5f00\u53d1\uff0c\u5c06\u4e4b\u524d Spark scala\uff0cFlink scala\uff0cFlink java \u7684\u4f5c\u4e1a\u8fdb\u884c\u4e86\u91cd\u6784\uff0c\u7136\u540e\u5de5\u7a0b\u6574\u5408\u5230\u4e86\u4e00\u8d77\uff0c\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u7ef4\u62a4\u8d77\u6765\u65b9\u4fbf\u3002Custom code \u4f5c\u4e1a\u9700\u8981\u63d0\u4ea4\u4ee3\u7801\u5230 Git\uff0c\u7136\u540e\u914d\u7f6e\u9879\u76ee:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(66520).Z,width:"1080",height:"365"})),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u4ee5\u540e\uff0c\u6839\u636e\u5bf9\u5e94\u7684\u9879\u76ee\u8fdb\u884c\u7f16\u8bd1\uff0c\u4e5f\u5c31\u5b8c\u6210\u9879\u76ee\u7684\u6253\u5305\u73af\u8282\u3002\u8fd9\u6837\u540e\u9762\u7684 Constom code \u4f5c\u4e1a\u4e5f\u53ef\u4ee5\u5f15\u7528\u3002\u6bcf\u6b21\u9700\u8981\u4e0a\u7ebf\u90fd\u9700\u8981\u8fdb\u884c\u7f16\u8bd1\u624d\u53ef\u4ee5\uff0c\u5426\u5219\u53ea\u80fd\u662f\u4e0a\u6b21\u7f16\u8bd1\u7684\u4ee3\u7801\u3002\u8fd9\u91cc\u6709\u4e2a\u95ee\u9898\uff0c\u4e3a\u4e86\u5b89\u5168\uff0c\u6211\u53f8\u7684 gitlab \u8d26\u53f7\u5bc6\u7801\u90fd\u662f\u5b9a\u671f\u66f4\u65b0\u7684\u3002\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\uff0cStreamPark \u5df2\u7ecf\u914d\u7f6e\u597d\u7684\u9879\u76ee\u8fd8\u662f\u4e4b\u524d\u7684\u5bc6\u7801\uff0c\u7ed3\u679c\u5bfc\u81f4\u7f16\u8bd1\u65f6\u4ece git \u91cc\u62c9\u53d6\u9879\u76ee\u5931\u8d25\uff0c\u5bfc\u81f4\u6574\u4e2a\u7f16\u8bd1\u73af\u8282\u5931\u8d25\uff0c\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u8054\u7cfb\u5230\u793e\u533a\uff0c\u4e86\u89e3\u5230\u8fd9\u90e8\u5206\u5df2\u7ecf\u5728\u540e\u7eed\u7684 1.2.1 \u7248\u672c\u4e2d\u652f\u6301\u4e86\u9879\u76ee\u7684\u4fee\u6539\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(97596).Z,width:"1080",height:"214"})),(0,r.kt)("p",null,"\u65b0\u5efa\u4efb\u52a1\uff0c\u9009\u62e9 Custom code \uff0c\u9009\u62e9 Flink \u7248\u672c\uff0c\u9009\u62e9\u9879\u76ee\u4ee5\u53ca\u6a21\u5757 Jar \u5305\uff0c\u9009\u62e9\u5f00\u53d1\u7684\u5e94\u7528\u6a21\u5f0f\u4e3a Apache Flink (\u6807\u51c6\u7684 Flink \u7a0b\u5e8f)\uff0c\u7a0b\u5e8f\u4e3b\u51fd\u6570\u5165\u53e3\u7c7b\uff0c\u4efb\u52a1\u7684\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32607).Z,width:"1080",height:"536"})),(0,r.kt)("p",null,"\u4ee5\u53ca\u4efb\u52a1\u7684\u5e76\u884c\u5ea6\uff0c\u76d1\u63a7\u7684\u65b9\u5f0f\u7b49\uff0c\u5185\u5b58\u5927\u5c0f\u6839\u636e\u4efb\u52a1\u9700\u8981\u8fdb\u884c\u914d\u7f6e\u3002Program Args \u7a0b\u5e8f\u7684\u53c2\u6570\u5219\u6839\u636e\u7a0b\u5e8f\u9700\u8981\u81ea\u884c\u5b9a\u4e49\u5165\u53e3\u53c2\u6570,\u6bd4\u5982\uff1a\u6211\u4eec\u7edf\u4e00\u542f\u52a8\u7c7b\u662f StartJobApp\uff0c\u90a3\u4e48\u542f\u52a8\u4f5c\u4e1a\u5c31\u9700\u8981\u4f20\u5165\u4f5c\u4e1a\u7684 Full name \u544a\u8bc9\u542f\u52a8\u7c7b\u8981\u53bb\u627e\u54ea\u4e2a\u7c7b\u6765\u542f\u52a8\u6b64\u6b21\u4efb\u52a1\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u53cd\u5c04\u673a\u5236\uff0c\u4f5c\u4e1a\u914d\u7f6e\u5b8c\u6210\u4ee5\u540e\u540c\u6837\u4e5f\u662f Submit \u63d0\u4ea4\uff0c\u7136\u540e\u5728 application \u754c\u9762\u90e8\u7f72\u4efb\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26707).Z,width:"1080",height:"500"})),(0,r.kt)("h2",{id:"4-\u76d1\u63a7\u544a\u8b66"},"4 \u76d1\u63a7\u544a\u8b66"),(0,r.kt)("p",null,"StreamPark \u7684\u76d1\u63a7\u9700\u8981\u5728 setting \u6a21\u5757\u53bb\u914d\u7f6e\u53d1\u9001\u90ae\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7557).Z,width:"1080",height:"380"})),(0,r.kt)("p",null,"\u7136\u540e\u5728\u4efb\u52a1\u91cc\u914d\u7f6e\u91cd\u542f\u7b56\u7565\uff1a\u76d1\u63a7\u5728\u591a\u4e45\u5185\u51e0\u6b21\u5f02\u5e38\uff0c\u7136\u540e\u662f\u62a5\u8b66\u8fd8\u662f\u91cd\u542f\u7684\u7b56\u7565\uff0c\u540c\u65f6\u53d1\u9001\u62a5\u8b66\u8981\u53d1\u5230\u54ea\u4e2a\u90ae\u7bb1\u3002\u76ee\u524d\u6211\u53f8\u4f7f\u7528\u7248\u672c\u662f 1.2.1 \u53ea\u652f\u6301\u90ae\u4ef6\u53d1\u9001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2995).Z,width:"1080",height:"243"})),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u7684\u4f5c\u4e1a\u51fa\u73b0\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\uff0c\u5c31\u53ef\u4ee5\u63a5\u6536\u5230\u62a5\u8b66\u90ae\u7bb1\u3002\u8fd9\u62a5\u8b66\u8fd8\u662f\u5f88\u597d\u770b\u7684\u6709\u6728\u6709\uff0c\u53ef\u4ee5\u6e05\u695a\u770b\u5230\u6211\u4eec\u7684\u54ea\u4e2a\u4f5c\u4e1a\uff0c\u4ec0\u4e48\u72b6\u6001\u3002\u4e5f\u53ef\u4ee5\u70b9\u51fb\u4e0b\u9762\u7684\u5177\u4f53\u5730\u5740\u8fdb\u884c\u67e5\u770b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(36476).Z,width:"1080",height:"1517"})),(0,r.kt)("p",null,"\u5173\u4e8e\u62a5\u8b66\u8fd9\u4e00\u5757\u76ee\u524d\u6211\u4eec\u57fa\u4e8e StreamPark \u7684 t_flink_app \u8868\u8fdb\u884c\u4e86\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u7684\u5f00\u53d1\u3002\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\uff1f\u56e0\u4e3a\u53d1\u9001\u90ae\u4ef6\u8fd9\u79cd\u901a\u77e5\uff0c\u5927\u90e8\u5206\u4eba\u53ef\u80fd\u4e0d\u4f1a\u53bb\u53ca\u65f6\u53bb\u770b\u3002\u6240\u4ee5\u6211\u4eec\u9009\u62e9\u76d1\u63a7\u6bcf\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\u53bb\u628a\u5bf9\u5e94\u7684\u76d1\u63a7\u4fe1\u606f\u53d1\u9001\u6211\u4eec\u7684\u98de\u4e66\u62a5\u8b66\u7fa4\uff0c\u8fd9\u6837\u53ef\u4ee5\u53ca\u65f6\u53d1\u73b0\u95ee\u9898\u53bb\u89e3\u51b3\u4efb\u52a1\u3002\u4e00\u4e2a\u7b80\u5355\u7684 python \u811a\u672c\uff0c\u7136\u540e\u914d\u7f6e\u4e86 crontab \u53bb\u5b9a\u65f6\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"5-\u5e38\u89c1\u95ee\u9898"},"5 \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"\u5173\u4e8e\u4f5c\u4e1a\u7684\u5f02\u5e38\u95ee\u9898\uff0c\u6211\u4eec\u5f52\u7eb3\u5206\u6790\u4e86\u57fa\u672c\u5206\u4e3a\u8fd9\u4e48\u51e0\u79cd\u60c5\u51b5:"),(0,r.kt)("h3",{id:"1-\u4f5c\u4e1a\u542f\u52a8\u5931\u8d25"},(0,r.kt)("strong",{parentName:"h3"},"1. \u4f5c\u4e1a\u542f\u52a8\u5931\u8d25")),(0,r.kt)("p",null,"\u4f5c\u4e1a\u542f\u52a8\u5931\u8d25\u7684\u95ee\u9898\uff0c\u5c31\u662f\u70b9\u51fb\u542f\u52a8\u8fd0\u884c\u90e8\u7f72\u3002\u53d1\u73b0\u8d77\u4e0d\u6765\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u770b\u754c\u9762\u7684\u8be6\u60c5\u4fe1\u606f\u7684\u65e5\u5fd7\u3002\u5728\u6211\u4eec\u7684\u4efb\u52a1\u5217\u8868\u4e2d\u6709\u4e00\u4e2a\u773c\u775b\u7684\u6309\u94ae\uff0c\u70b9\u8fdb\u53bb\u3002\u5728start logs \u4e2d\u4f1a\u627e\u5230\u63d0\u4ea4\u7684\u4f5c\u4e1a\u65e5\u5fd7\u4fe1\u606f\uff0c\u70b9\u8fdb\u53bb\u67e5\u770b\uff0c\u5982\u679c\u6709\u660e\u663e\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u76f4\u63a5\u89e3\u51b3\u5c31\u53ef\u4ee5\u4e86\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5c31\u9700\u8981\u53bb\u67e5\u770b\u540e\u53f0\u90e8\u7f72\u4efb\u52a1\u7684\u76ee\u5f55 logs/\u4e0b\u9762\u7684 streamx.out\uff0c\u6253\u5f00\u4ee5\u540e\u4f1a\u627e\u5230\u542f\u52a8\u5931\u8d25\u7684\u65e5\u5fd7\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22016).Z,width:"1080",height:"83"})),(0,r.kt)("h3",{id:"2-\u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25"},(0,r.kt)("strong",{parentName:"h3"},"2. \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25")),(0,r.kt)("p",null,"\u5982\u679c\u662f\u4efb\u52a1\u5df2\u7ecf\u8d77\u6765\u4e86\uff0c\u4f46\u662f\u5728\u8fd0\u884c\u9636\u6bb5\u5931\u8d25\u4e86\u3002\u8fd9\u79cd\u60c5\u51b5\u8868\u9762\u770b\u4e0a\u53bb\u548c\u4e0a\u9762\u7684\u60c5\u51b5\u4e00\u6837\uff0c\u5b9e\u5219\u5b8c\u5168\u4e0d\u540c\uff0c\u8fd9\u79cd\u60c5\u51b5\u662f\u5df2\u7ecf\u5c06\u4efb\u52a1\u63d0\u4ea4\u7ed9\u96c6\u7fa4\u4e86\uff0c\u4f46\u662f\u4efb\u52a1\u8fd0\u884c\u4e0d\u8d77\u6765\uff0c\u90a3\u5c31\u662f\u6211\u4eec\u7684\u4efb\u52a1\u81ea\u8eab\u6709\u95ee\u9898\u4e86\u3002\u540c\u6837\u53ef\u4ee5\u7528\u4e0a\u9762\u7b2c\u4e00\u79cd\u60c5\u51b5\u7684\u6392\u67e5\u65b9\u5f0f\u6253\u5f00\u4f5c\u4e1a\u7684\u5177\u4f53\u65e5\u5fd7\uff0c\u627e\u5230\u4efb\u52a1\u5728 yarn \u4e0a\u8fd0\u884c\u7684\u4fe1\u606f\uff0c\u6839\u636e\u65e5\u5fd7\u91cc\u8bb0\u5f55\u7684 yarn \u7684 tackurl \u53bb yarn \u7684\u65e5\u5fd7\u91cc\u67e5\u770b\u5177\u4f53\u7684\u539f\u56e0\uff0c\u662f Sql \u7684 Connector \u4e0d\u5b58\u5728\uff0c\u8fd8\u662f\u4ee3\u7801\u7684\u54ea\u884c\u4ee3\u7801\u7a7a\u6307\u9488\u4e86\uff0c\u90fd\u53ef\u4ee5\u770b\u5230\u5177\u4f53\u7684\u5806\u6808\u4fe1\u606f\u3002\u6709\u4e86\u5177\u4f53\u4fe1\u606f\uff0c\u5c31\u53ef\u4ee5\u5bf9\u75c7\u4e0b\u836f\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(97244).Z,width:"1080",height:"82"})),(0,r.kt)("h2",{id:"6-\u793e\u533a\u5370\u8c61"},"6 \u793e\u533a\u5370\u8c61"),(0,r.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u6211\u4eec\u5728 StreamPark \u7528\u6237\u7fa4\u91cc\u8ba8\u8bba\u95ee\u9898\uff0c\u90fd\u4f1a\u5f97\u5230\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u5373\u65f6\u54cd\u5e94\u3002\u63d0\u4ea4\u7684\u4e00\u4e9b issue \u5728\u5f53\u4e0b\u4e0d\u80fd\u89e3\u51b3\u7684\uff0c\u57fa\u672c\u4e5f\u4f1a\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u6216\u8005\u6700\u65b0\u7684\u4ee3\u7801\u5206\u652f\u4e2d\u8fdb\u884c\u4fee\u590d\u3002\u5728\u7fa4\u91cc\uff0c\u6211\u4eec\u4e5f\u770b\u5230\u5f88\u591a\u4e0d\u662f\u793e\u533a\u7684\u5c0f\u4f19\u4f34\uff0c\u4e5f\u5728\u79ef\u6781\u4e92\u76f8\u5e2e\u52a9\u53bb\u89e3\u51b3\u95ee\u9898\u3002\u7fa4\u91cc\u4e5f\u6709\u5f88\u591a\u5176\u4ed6\u793e\u533a\u7684\u5927\u4f6c\uff0c\u5f88\u591a\u5c0f\u4f19\u4f34\u4e5f\u79ef\u6781\u52a0\u5165\u4e86\u793e\u533a\u7684\u5f00\u53d1\u5de5\u4f5c\u3002\u6574\u4e2a\u793e\u533a\u7ed9\u6211\u7684\u611f\u89c9\u8fd8\u662f\u5f88\u6d3b\u8dc3\uff01"),(0,r.kt)("h2",{id:"7-\u603b\u7ed3"},"7 \u603b\u7ed3"),(0,r.kt)("p",null,"\u76ee\u524d\u6211\u53f8\u7ebf\u4e0a\u8fd0\u884c 60 \u4e2a\u5b9e\u65f6\u4f5c\u4e1a\uff0cFlink sql \u4e0e Custom-code \u5dee\u4e0d\u591a\u5404\u4e00\u534a\u3002\u540e\u7eed\u4e5f\u4f1a\u6709\u66f4\u591a\u7684\u5b9e\u65f6\u4efb\u52a1\u8fdb\u884c\u4e0a\u7ebf\u3002\u5f88\u591a\u540c\u5b66\u90fd\u4f1a\u62c5\u5fc3 StreamPark \u7a33\u4e0d\u7a33\u5b9a\u7684\u95ee\u9898\uff0c\u5c31\u6211\u53f8\u6839\u636e\u51e0\u4e2a\u6708\u7684\u751f\u4ea7\u5b9e\u8df5\u800c\u8a00\uff0cStreamPark \u53ea\u662f\u4e00\u4e2a\u5e2e\u52a9\u4f60\u5f00\u53d1\u4f5c\u4e1a\uff0c\u90e8\u7f72\uff0c\u76d1\u63a7\u548c\u7ba1\u7406\u7684\u4e00\u4e2a\u5e73\u53f0\u3002\u5230\u5e95\u7a33\u4e0d\u7a33\uff0c\u8fd8\u662f\u8981\u770b\u81ea\u5bb6\u7684 Hadoop yarn \u96c6\u7fa4\u7a33\u4e0d\u7a33\u5b9a\uff08\u6211\u4eec\u7528\u7684onyan\u6a21\u5f0f\uff09\uff0c\u5176\u5b9e\u5df2\u7ecf\u8ddf StreamPark\u5173\u7cfb\u4e0d\u5927\u4e86\u3002\u8fd8\u6709\u5c31\u662f\u4f60\u5199\u7684 Flink Sql \u6216\u8005\u662f\u4ee3\u7801\u5065\u4e0d\u5065\u58ee\u3002\u66f4\u591a\u7684\u662f\u8fd9\u4e24\u65b9\u9762\u5e94\u8be5\u662f\u5927\u5bb6\u8981\u8003\u8651\u7684\uff0c\u8fd9\u4e24\u65b9\u9762\u6ca1\u95ee\u9898\u518d\u5145\u5206\u5229\u7528 StreamPark \u7684\u7075\u6d3b\u6027\u624d\u80fd\u8ba9\u4f5c\u4e1a\u66f4\u597d\u7684\u8fd0\u884c\uff0c\u5355\u4ece\u4e00\u65b9\u9762\u8bf4 StreamPark \u7a33\u4e0d\u7a33\u5b9a\uff0c\u5b9e\u5c5e\u504f\u6fc0\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f StreamPark \u5728\u4e50\u6211\u65e0\u9650\u7684\u5168\u90e8\u5206\u4eab\u5185\u5bb9\uff0c\u611f\u8c22\u5927\u5bb6\u770b\u5230\u8fd9\u91cc\u3002\u975e\u5e38\u611f\u8c22 StreamPark \u63d0\u4f9b\u7ed9\u6211\u4eec\u8fd9\u4e48\u4f18\u79c0\u7684\u4ea7\u54c1\uff0c\u8fd9\u5c31\u662f\u505a\u7684\u5229\u4ed6\u4eba\u4e4b\u4e8b\u3002\u4ece1.0 \u5230 1.2.1 \u5e73\u65f6\u9047\u5230\u90a3\u4e9bbug\u90fd\u4f1a\u88ab\u5373\u65f6\u7684\u4fee\u590d\uff0c\u6bcf\u4e00\u4e2aissue\u90fd\u88ab\u8ba4\u771f\u5bf9\u5f85\u3002\u76ee\u524d\u6211\u4eec\u8fd8\u662f onyarn\u7684\u90e8\u7f72\u6a21\u5f0f\uff0c\u91cd\u542fyarn\u8fd8\u662f\u4f1a\u5bfc\u81f4\u4f5c\u4e1a\u7684lost\u72b6\u6001\uff0c\u91cd\u542fyarn\u4e5f\u4e0d\u662f\u5929\u5929\u90fd\u5e72\u7684\u4e8b\uff0c\u5173\u4e8e\u8fd9\u4e2a\u793e\u533a\u4e5f\u4f1a\u5c3d\u65e9\u7684\u4f1a\u53bb\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002\u76f8\u4fe1 StreamPark \u4f1a\u8d8a\u6765\u8d8a\u597d\uff0c\u672a\u6765\u53ef\u671f\u3002"))}k.isMDXComponent=!0},29289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_dependency-281888d96a8f3ce6e9af01efef9de643.png"},32607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_projectconfiguration-26b97212de577a0cbc46b59f1eceea0b.png"},36476:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alarm_eamil-29b2875dbfcbeb071fef815ab751786a.png"},26707:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application_interface-51c8f96e343842f32b56c3c889064cba.png"},9061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application_job-5518b58af2b481d7bdb36a7bae252c41.png"},13430:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/checkpoint_configuration-861a4f0439b1a0f8aade35e10e6b60c5.png"},2995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/email_setting-7b8ddba6688c75cfad32f5d16e93354f.png"},97596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flink_system-02dee8b704254087aae900731ae47076.png"},66520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_configuration-add3d079bba91ac4977b830d3c3fe8f7.png"},22016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start_log-6ce6b3125c8693db96197193241d6807.png"},7557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/system_setting-6b5b21f22fc4a32b973ede0a5f21ebc2.png"},97244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yarn_log-100e18b484ec81cf3165736de8259365.png"}}]);