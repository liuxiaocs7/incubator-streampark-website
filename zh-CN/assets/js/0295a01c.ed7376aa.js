"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),i=n(86010),s=n(12466),l=n(16550),c=n(91980),o=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,o]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=c??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),k(e)}),[o,k,i]),tabValues:i}}var f=n(72389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==l&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",y,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function S(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(S,(0,a.Z)({},e,t)))}function b(e){const t=(0,f.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},20222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),s=n(85162);const l={id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:5},c=void 0,o={unversionedId:"connector/Elasticsearch-Connector",id:"connector/Elasticsearch-Connector",title:"Elasticsearch Connector",description:"Elasticsearch \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/5-es.md",sourceDirName:"connector",slug:"/connector/Elasticsearch-Connector",permalink:"/zh-CN/docs/connector/Elasticsearch-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/5-es.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Elasticsearch-Connector",title:"Elasticsearch Connector",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Apache Doris Connector",permalink:"/zh-CN/docs/connector/Doris-Connector"},next:{title:"Apache HBase Connector",permalink:"/zh-CN/docs/connector/Hbase-Connector"}},u={},p=[{value:"Elasticsearch \u5199\u5165\u4f9d\u8d56",id:"elasticsearch-\u5199\u5165\u4f9d\u8d56",level:2},{value:"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e",id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e",level:2},{value:"StreamPark \u5199\u5165 Elasticsearch",id:"streampark-\u5199\u5165-elasticsearch",level:2},{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",level:3},{value:"2. \u5199\u5165Elasticsearch",id:"2-\u5199\u5165elasticsearch",level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2},{value:"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42",id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42",level:3},{value:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",level:3},{value:"StreamPark\u914d\u7f6e",id:"streampark\u914d\u7f6e",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/elasticsearch/"},"Elasticsearch")," \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/"},"Flink \u5b98\u65b9"),"\u63d0\u4f9b\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/"},"Elasticsearch"),"\u7684\u8fde\u63a5\u5668,\u7528\u4e8e\u5411 elasticsearch \u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b ",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u5c11\u4e00\u6b21")," \u7684\u5904\u7406\u8bed\u4e49"),(0,r.kt)("p",null,"ElasticsearchSink \u4f7f\u7528 TransportClient\uff086.x \u4e4b\u524d\uff09\u6216\u8005 RestHighLevelClient\uff086.x \u5f00\u59cb\uff09\u548c Elasticsearch \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\uff0c\n",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u5bf9 flink-connector-elasticsearch6 \u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u5c4f\u853d\u5f00\u53d1\u7ec6\u8282\uff0c\u7b80\u5316Elasticsearch6\u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\u3002"),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u4e3aFlink Connector Elasticsearch \u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u5b58\u5728\u51b2\u7a81",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u6682\u65f6\u4ec5\u652f\u6301Elasticsearch6\u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\uff0c\u5982\u9700\u5199\u5165Elasticsearch5\u9700\u8981\u4f7f\u7528\u8005\u6392\u9664\nflink-connector-elasticsearch6 \u4f9d\u8d56\uff0c\u5f15\u5165 flink-connector-elasticsearch5\u4f9d\u8d56 \u521b\u5efa\norg.apache.flink.streaming.connectors.elasticsearch5.ElasticsearchSink \u5b9e\u4f8b\u5199\u5165\u6570\u636e\u3002")),(0,r.kt)("h2",{id:"elasticsearch-\u5199\u5165\u4f9d\u8d56"},"Elasticsearch \u5199\u5165\u4f9d\u8d56"),(0,r.kt)("p",null,"Elasticsearch \u7248\u672c\u4e0d\u540c\u4f9d\u8d56 Flink Connector Elasticsearch \u4e0d\u540c,\u4ee5\u4e0b\u4fe1\u606f\u6765\u6e90",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/datastream/elasticsearch/"},"flink-docs-release-1.14\u6587\u6863"),":\nElasticsearch 5.x Maven\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("p",null,"Elasticsearch 6.x Maven\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch6_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("p",null,"Elasticsearch 7.x\u53ca\u4ee5\u4e0a Maven\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch7_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e"},"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u6458\u81ea",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",java:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.flink.api.common.functions.RuntimeContext;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction;\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer;\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink;\n\nimport org.apache.http.HttpHost;\nimport org.elasticsearch.action.index.IndexRequest;\nimport org.elasticsearch.client.Requests;\n\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nDataStream<String> input = ...;\n\nList<HttpHost> httpHosts = new ArrayList<>();\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"));\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"));\n\n// \u4f7f\u7528 ElasticsearchSink.Builder \u521b\u5efa ElasticsearchSink\nElasticsearchSink.Builder<String> esSinkBuilder = new ElasticsearchSink.Builder<>(\n    httpHosts,\n    new ElasticsearchSinkFunction<String>() {\n        public IndexRequest createIndexRequest(String element) {\n            Map<String, String> json = new HashMap<>();\n            json.put("data", element);\n\n            return Requests.indexRequest()\n                    .index("my-index")\n                    .type("my-type")\n                    .source(json);\n        }\n\n        @Override\n        public void process(String element, RuntimeContext ctx, RequestIndexer indexer) {\n            indexer.add(createIndexRequest(element));\n        }\n    }\n);\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1);\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(\n  restClientBuilder -> {\n    restClientBuilder.setDefaultHeaders(...)\n    restClientBuilder.setMaxRetryTimeoutMillis(...)\n    restClientBuilder.setPathPrefix(...)\n    restClientBuilder.setHttpClientConfigCallback(...)\n  }\n);\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build());\n'))),(0,r.kt)(s.Z,{value:"scala, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.flink.api.common.functions.RuntimeContext\nimport org.apache.flink.streaming.api.datastream.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink\n\nimport org.apache.http.HttpHost\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.client.Requests\n\nimport java.util.ArrayList\nimport java.util.List\n\nval input: DataStream[String] = ...\n\nval httpHosts = new java.util.ArrayList[HttpHost]\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"))\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"))\n\nval esSinkBuilder = new ElasticsearchSink.Builder[String](\n  httpHosts,\n  new ElasticsearchSinkFunction[String] {\n     def process(element: String, ctx: RuntimeContext, indexer: RequestIndexer) {\n          val json = new java.util.HashMap[String, String]\n          json.put("data", element)\n\n          val rqst: IndexRequest = Requests.indexRequest\n            .index("my-index")\n            .`type`("my-type")\n            .source(json)\n\n          indexer.add(rqst)\n     }\n  }\n)\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1)\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(new RestClientFactory {\n  override def configureRestClientBuilder(restClientBuilder: RestClientBuilder): Unit = {\n       restClientBuilder.setDefaultHeaders(...)\n       restClientBuilder.setMaxRetryTimeoutMillis(...)\n       restClientBuilder.setPathPrefix(...)\n       restClientBuilder.setHttpClientConfigCallback(...)\n  }\n})\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build)\n')))),(0,r.kt)("p",null,"\u4ee5\u4e0a\u521b\u5efaElasticsearchSink\u6dfb\u52a0\u53c2\u6570\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"StreamPark"),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6ees\n\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamPark \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"),(0,r.kt)("h2",{id:"streampark-\u5199\u5165-elasticsearch"},"StreamPark \u5199\u5165 Elasticsearch"),(0,r.kt)("p",null,"ESSink \u5728\u542f\u7528 Flink checkpoint \u540e\uff0c\u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002"),(0,r.kt)("h3",{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"},"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink \u914d\u7f6e\n#  \u5fc5\u586b\u53c2\u6570\uff0c\u591a\u4e2a\u8282\u70b9\u4f7f\u7528 host1:port, host2:port,\nhost: localhost:9200\n#  \u9009\u586b\u53c2\u6570\n#  es:\n#    disableFlushOnCheckpoint: true #\u9ed8\u8ba4\u4e3afalse\n#    auth:\n#    user:\n#      password:\n#    rest:\n#      max.retry.timeout:\n#      path.prefix:\n#      content.type:\n#    connect:\n#      request.timeout:\n#      timeout:\n#    cluster.name: elasticsearch\n#  client.transport.sniff:\n#  bulk.flush.:\n")),(0,r.kt)("h3",{id:"2-\u5199\u5165elasticsearch"},"2. \u5199\u5165Elasticsearch"),(0,r.kt)("p",null,"\u7528 StreamPark \u5199\u5165Elasticsearch\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ESSink\nimport org.apache.streampark.flink.core.scala.util.ElasticSearchUtils\nimport org.apache.flink.api.scala._\nimport org.elasticsearch.action.index.IndexRequest\nimport org.json4s.DefaultFormats\nimport org.json4s.jackson.Serialization\n\nimport java.util.Date\n\nobject ConnectorApp extends FlinkStreaming {\n\n\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n    val ds = context.fromCollection(List(\n      OrderEntity(1, 1, 11.3d, 3.1d, new Date()),\n      OrderEntity(2, 1, 12.3d, 3.2d, new Date()),\n      OrderEntity(3, 1, 13.3d, 3.3d, new Date()),\n      OrderEntity(4, 1, 14.3d, 3.4d, new Date()),\n      OrderEntity(5, 1, 15.3d, 7.5d, new Date()),\n      OrderEntity(6, 1, 16.3d, 3.6d, new Date()),\n      OrderEntity(7, 1, 17.3d, 3.7d, new Date())\n    ))\n\n    // es sink.........\n\n    //1)\u5b9a\u4e49 Index\u7684\u5199\u5165\u89c4\u5219\n    implicit def indexReq(x: OrderEntity): IndexRequest = ElasticSearchUtils.indexRequest(\n      "flink_order",\n      "_doc",\n      s"${x.id}_${x.time.getTime}",\n      Serialization.write(x)\n    )\n    //3)\u5b9a\u4e49esSink\u5e76\u4e0b\u6c89=\u6570\u636e. done\n    ESSink().sink6[OrderEntity](ds)\n  }\n\n\n  case class OrderEntity(id: Int, num: Int, price: Double, gmv: Double, time: Date) extends Serializable\n\n}\n')))),(0,r.kt)("p",null,"Flink ElasticsearchSinkFunction\u53ef\u4ee5\u6267\u884c\u591a\u79cd\u7c7b\u578b\u8bf7\u6c42\uff0c\u5982\uff08DeleteRequest\u3001 UpdateRequest\u3001IndexRequest\uff09,StreamPark\u4e5f\u5bf9\u4ee5\u4e0a\u529f\u80fd\u8fdb\u884c\u4e86\u652f\u6301\uff0c\u5bf9\u5e94\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.streampark.flink.core.scala.StreamingContext\nimport org.apache.flink.streaming.api.datastream.DataStreamSink\nimport org.apache.flink.streaming.api.scala.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ActionRequestFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch.util.RetryRejectedExecutionFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch6.RestClientFactory\nimport org.elasticsearch.action.delete.DeleteRequest\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.action.update.UpdateRequest\n\nimport java.util.Properties\nimport scala.annotation.meta.param\n\n\nclass ESSink(@(transient@param) context: StreamingContext,\n             property: Properties = new Properties(),\n             parallelism: Int = 0,\n             name: String = null,\n             uid: String = null) {\n\n  /**\n   * for ElasticSearch6\n   *\n   * @param stream\n   * @param suffix\n   * @param restClientFactory\n   * @param failureHandler\n   * @param f\n   * @tparam T\n   * @return\n   */\n  def sink6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              (implicit f: T => IndexRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n\n  def update6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => UpdateRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n  def delete6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => DeleteRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n}\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u542f\u7528 Flink checkpoint \u540e\uff0cFlink Elasticsearch Sink \u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002 \u8fd9\u662f\u901a\u8fc7\u5728\u8fdb\u884c checkpoint \u65f6\u7b49\u5f85 BulkProcessor \u4e2d\u6240\u6709\u6302\u8d77\u7684\u64cd\u4f5c\u8bf7\u6c42\u6765\u5b9e\u73b0\u3002 \u8fd9\u6709\u6548\u5730\u4fdd\u8bc1\u4e86\u5728\u89e6\u53d1 checkpoint \u4e4b\u524d\u6240\u6709\u7684\u8bf7\u6c42\u88ab Elasticsearch \u6210\u529f\u786e\u8ba4\uff0c\u7136\u540e\u7ee7\u7eed\u5904\u7406\u53d1\u9001\u5230 sink \u7684\u8bb0\u5f55\u3002\n\u7528\u6237\u60f3\u8981\u7981\u7528\u5237\u65b0\uff0c\u53ef\u4ee5\u914d\u7f6edisableFlushOnCheckpoint\u4e3atrue\u6765\u5b9e\u73b0\uff0c\u5b9e\u8d28\u4e0a\u610f\u5473\u7740 sink \u5c06\u4e0d\u518d\u63d0\u4f9b\u4efb\u4f55\u53ef\u9760\u7684\u4ea4\u4ed8\u4fdd\u8bc1\uff0c\u5373\u4f7f\u542f\u7528\u4e86\u4f5c\u4e1a\u62d3\u6251\u7684 checkpoint\u3002")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42"},"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42"),(0,r.kt)("p",null,"Elasticsearch \u64cd\u4f5c\u8bf7\u6c42\u53ef\u80fd\u7531\u4e8e\u591a\u79cd\u539f\u56e0\u800c\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0ActionRequestFailureHandler\u6765\u6307\u5b9a\u5931\u8d25\u5904\u7406\u903b\u8f91\uff0c\u89c1\n",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863"),(0,r.kt)("strong",{parentName:"p"},"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42")," \u5355\u5143"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"},"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"),(0,r.kt)("p",null,"es\u5185\u90e8",(0,r.kt)("inlineCode",{parentName:"p"},"BulkProcessor"),"\u53ef\u4ee5\u8fdb\u4e00\u6b65\u914d\u7f6e\u5176\u5982\u4f55\u5237\u65b0\u7f13\u5b58\u64cd\u4f5c\u8bf7\u6c42\u7684\u884c\u4e3a\u8be6\u7ec6\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink"},"\u5b98\u65b9\u6587\u6863"),(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668")," \u5355\u5143"),(0,r.kt)("h3",{id:"streampark\u914d\u7f6e"},"StreamPark\u914d\u7f6e"),(0,r.kt)("p",null,"\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,r.kt)("strong",{parentName:"p"},"StreamPark")," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/development/conf"},"\u9879\u76ee\u914d\u7f6e")))}m.isMDXComponent=!0}}]);