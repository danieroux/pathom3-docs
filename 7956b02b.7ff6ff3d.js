(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return t?r.a.createElement(b,c(c({ref:n},i),{},{components:t})):r.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},326:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/pets-parallel-1a6895d0ab4068f1848a8056223ffa2a.png"},327:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/pets-serial-aa58b284bcf1f24ecc4141f3cdde7708.png"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),s=(t(0),t(107)),o={title:"Async"},c={unversionedId:"async",id:"async",isDocsHomePage:!1,title:"Async",description:"Async process allows Pathom to process resolvers that require async processing.",source:"@site/docs/async.mdx",slug:"/async",permalink:"/docs/async",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/async.mdx",version:"current",sidebar:"docs",previous:{title:"Built-in Plugins",permalink:"/docs/built-in-plugins"},next:{title:"Debugging",permalink:"/docs/debugging"}},l=[{value:"Promesa",id:"promesa",children:[]},{value:"Async resolvers",id:"async-resolvers",children:[]},{value:"Async EQL",id:"async-eql",children:[]},{value:"Async ENV",id:"async-env",children:[]},{value:"Parallel Process",id:"parallel-process",children:[{value:"Batching in parallel mode",id:"batching-in-parallel-mode",children:[]}]},{value:"Using core.async",id:"using-coreasync",children:[]}],i={rightToc:l};function p(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,o,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Async process allows Pathom to process resolvers that require async processing."),Object(s.b)("p",null,"In JS environments are limited without async support, you can't trigger HTTP or database\nrequests."),Object(s.b)("p",null,"In this section, you will learn how to use the async features from Pathom 3."),Object(s.b)("h2",{id:"promesa"},"Promesa"),Object(s.b)("p",null,"Pathom 3 uses the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/funcool/promesa"}),"Promesa")," library under the hood to manage the async process."),Object(s.b)("p",null,"Promesa uses native ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promises"),"\nin Javascript environments, and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/CompletableFuture.html"}),"CompletableFuture"),"\non the JVM."),Object(s.b)("p",null,"I'll use the term ",Object(s.b)("inlineCode",{parentName:"p"},"future")," to refer to both ",Object(s.b)("inlineCode",{parentName:"p"},"Promises")," and ",Object(s.b)("inlineCode",{parentName:"p"},"CompletableFuture")," in the\nrest of this page."),Object(s.b)("h2",{id:"async-resolvers"},"Async resolvers"),Object(s.b)("p",null,"Async resolvers are not unique. They use the same constructs as the other resolvers\nyou know so far."),Object(s.b)("p",null,"The difference when you write an async resolver is that it may return a ",Object(s.b)("inlineCode",{parentName:"p"},"future")," from\nthe resolver, for example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.async\n  (:require [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [promesa.core :as p]))\n\n(defn json-get [url]\n  (p/let [resp (js/fetch url)\n          json (.json resp)]\n    (js->clj json :keywordize-keys true)))\n\n(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n    {::age age}))\n')),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The ",Object(s.b)("inlineCode",{parentName:"p"},"future")," must be around the return map in the resolver. Returning futures as\nvalues for the keys won't work. This is a bad example:"),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  ; return map\n  {::age\n   ; with key value as a promise, won\'t work\n   (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n     age)})\n')))),Object(s.b)("h2",{id:"async-eql"},"Async EQL"),Object(s.b)("p",null,"To async, there is only the EQL interface. It behaves similar to the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/eql"}),"EQL"),"\nstandard interface, but returns a promise in the end."),Object(s.b)("p",null,"Example usage:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure",metastring:"{4,17-19,22-25}","{4,17-19,22-25}":!0}),'(ns com.wsscode.pathom3.docs.demos.core.async\n  (:require [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [com.wsscode.pathom3.interface.async.eql :as p.a.eql]\n            [promesa.core :as p]))\n\n(defn json-get [url]\n  (p/let [resp (js/fetch url)\n          json (.json resp)]\n    (js->clj json :keywordize-keys true)))\n\n(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n    {::age age}))\n\n(def env\n  (pci/register\n    age-from-name))\n\n(comment\n  (p/let [res (p.a.eql/process env\n                {::first-name "Ada"}\n                [::age])]\n    (cljs.pprint/pprint res)))\n')),Object(s.b)("h2",{id:"async-env"},"Async ENV"),Object(s.b)("p",null,"When using the async helpers, Pathom also supports the ",Object(s.b)("inlineCode",{parentName:"p"},"env")," being async."),Object(s.b)("p",null,"This is useful when the environment build requires async operations. For example, in\na CLJS client, to integrate a remote Pathom service we need to request the index\nasync:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(defn transit-request [url body]\n  (p/let [resp (js/fetch url\n                 #js {:method "POST"\n                      :body   (tt/write-str body {:handlers pcot/write-handlers})})\n          text (.text resp)]\n    (tt/read-str text {:handlers pcot/read-handlers})))\n\n(defn pathom-remote [request]\n  (transit-request "https://name-server.com" request))\n\n(def users\n  {1 {:person/first-name "Alex"\n      :person/last-name  "French Guy Cooking"}\n   2 {:person/first-name "Denise"\n      :person/last-name  "Mascarenhas"}})\n\n; note now we make env a promise instead of a map\n(def async-env\n  (p/let [rem (pcf/foreign-register pathom-remote)]\n    (pci/register\n      [rem\n       (pbir/static-table-resolver :person/id users)])))\n\n;           use directly as env, supported by Pathom\n(p/let [res (p.a.eql/process async-env\n              {:person/id 2}\n              [:person/full-name])]\n  (js/console.log "!! " res))\n')),Object(s.b)("h2",{id:"parallel-process"},"Parallel Process"),Object(s.b)("p",null,"In Parallel mode Pathom will run as many things at the same time as it can."),Object(s.b)("p",null,"Example setup:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver random-dog-image []\n  {::pco/output [::random-dog-image-url]\n   ::pco/cache? false}\n  (p/let [{:keys [message]} (json-get "https://dog.ceo/api/breeds/image/random")]\n    {::random-dog-image-url message}))\n\n(pco/defresolver random-cat-image []\n  {::pco/output [::random-cat-image-url]\n   ::pco/cache? false}\n  (p/let [{:keys [file]} (json-get "https://aws.random.cat/meow")]\n    {::random-cat-image-url file}))\n\n(pco/defresolver random-pets [{::keys [random-dog-image-url\n                                       random-cat-image-url]}]\n  {::random-pets [random-dog-image-url\n                  random-cat-image-url]})\n\n(def parallel-env\n  (-> {::p.a.eql/parallel? true}\n      (pci/register\n        [random-dog-image\n         random-cat-image\n         random-pets])))\n\n(p.a.eql/process async-env\n  {:items [{} {} {} {} {}]}\n  [{:items\n    [::random-pets]}])\n')),Object(s.b)("p",null,"In the previous example, we have 5 items and load a random dog and cat picture\nfor each. Using Pathom Viz we can see the items running in parallel:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Pets Parallel",src:t(326).default})),Object(s.b)("p",null,"Let's compare it with the serial runner:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(def parallel-env\n  (-> {::p.a.eql/parallel? false} ; disable parallel\n      (pci/register\n        [random-dog-image\n         random-cat-image\n         random-pets])))\n")),Object(s.b)("p",null,Object(s.b)("img",{alt:"Pets Serial",src:t(327).default})),Object(s.b)("p",null,"Now you can see the cascading and each event running one after the other."),Object(s.b)("h3",{id:"batching-in-parallel-mode"},"Batching in parallel mode"),Object(s.b)("p",null,"In Parallel mode the batch process is different from the serial modes."),Object(s.b)("p",null,"In serial mode, the batches run after scanning every entity on the query, to trigger\nthe items and resume each graph run."),Object(s.b)("p",null,'In parallel, the notion of "scanning" isn\'t as clear and requires a different approach.'),Object(s.b)("p",null,"Instead of waiting for the end scan, Pathom will run batches based on time, it waits\nfor a window without any new entries and run."),Object(s.b)("p",null,"The default wait time is 10ms, and you can change it setting via the\n",Object(s.b)("inlineCode",{parentName:"p"},":com.wsscode.pathom3.connect.runner.parallel/batch-hold-delay-ms")," variable in your\nenvironment."),Object(s.b)("p",null,"You can also force a flush at a certain number of items collected for batching using\nthe ",Object(s.b)("inlineCode",{parentName:"p"},":com.wsscode.pathom3.connect.runner.parallel/batch-hold-flush-threshold"),", the\ndefault value is ",Object(s.b)("inlineCode",{parentName:"p"},"nil"),", which will make it flush only by time."),Object(s.b)("h2",{id:"using-coreasync"},"Using core.async"),Object(s.b)("p",null,"To use core.async we can extend the channel protocol to implement the conversion from\na core.async channel to a future."),Object(s.b)("p",null,"I have made a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wilkerlucio/promesa-bridges"}),"library")," to share the implementation of this extension, this way we can\navoid issues when multiple people try to extend the same type."),Object(s.b)("p",null,"First add promesa-bridges to your dependencies:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'{:deps {com.wsscode/promesa-bridges {:mvn/version "2021.01.20"}}}\n')),Object(s.b)("p",null,"Then include and use it:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.async-extend-core-async\n  (:require\n    [clojure.core.async :as async :refer [go <!]]\n    [com.wsscode.promesa.bridges.core-async]\n    [com.wsscode.pathom3.connect.indexes :as pci]\n    [com.wsscode.pathom3.connect.operation :as pco]\n    [com.wsscode.pathom3.interface.async.eql :as p.a.eql]\n    [promesa.core :as p]))\n\n(pco/defresolver slow-resolver []\n  {::pco/output [::slow-response]}\n  ; returning a channel from resolver\n  (go\n    (<! (async/timeout 400))\n    {::slow-response "done"}))\n\n(def env (pci/register slow-resolver))\n\n(comment\n  (p/let [res (p.a.eql/process env [::slow-response])]\n    (cljs.pprint/pprint res)))\n')),Object(s.b)("p",null,"If you like to add more extensions to ",Object(s.b)("inlineCode",{parentName:"p"},"promesa-bridges"),", please send a pull request."))}p.isMDXComponent=!0}}]);