(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(107)),i={id:"introduction",title:"Getting Started",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Getting Started",description:"Pathom is a Clojure/script library to model attribute relationships.",source:"@site/docs/introduction.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/introduction.mdx",version:"current",sidebar:"docs",next:{title:"Pathom Tutorial - IP Weather",permalink:"/docs/tutorial"}},s=[{value:"Install",id:"install",children:[]},{value:"Namespace aliases",id:"namespace-aliases",children:[]},{value:"General attribute modeling view",id:"general-attribute-modeling-view",children:[]},{value:"Core Concepts",id:"core-concepts",children:[{value:"Resolver",id:"resolver",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Planner",id:"planner",children:[]},{value:"Runner",id:"runner",children:[]},{value:"Interface",id:"interface",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pathom")," is a Clojure/script library to model attribute relationships."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'{:deps\n {com.wsscode/pathom3 {:mvn/version "2021.07.10-1-alpha"}}}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check latest at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://clojars.org/com.wsscode/pathom3"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/clojars/v/com.wsscode/pathom3.svg",alt:"Clojars Project"})))))),Object(o.b)("h2",{id:"namespace-aliases"},"Namespace aliases"),Object(o.b)("p",null,"When you read code from the examples in this documentation they will use alias to reference\nnamespaces, here you can find what the aliases point to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"[com.wsscode.pathom3.cache :as p.cache]\n[com.wsscode.pathom3.connect.built-in.resolvers :as pbir]\n[com.wsscode.pathom3.connect.built-in.plugins :as pbip]\n[com.wsscode.pathom3.connect.foreign :as pcf]\n[com.wsscode.pathom3.connect.indexes :as pci]\n[com.wsscode.pathom3.connect.operation :as pco]\n[com.wsscode.pathom3.connect.operation.transit :as pcot]\n[com.wsscode.pathom3.connect.planner :as pcp]\n[com.wsscode.pathom3.connect.runner :as pcr]\n[com.wsscode.pathom3.error :as p.error]\n[com.wsscode.pathom3.format.eql :as pf.eql]\n[com.wsscode.pathom3.interface.async.eql :as p.a.eql]\n[com.wsscode.pathom3.interface.eql :as p.eql]\n[com.wsscode.pathom3.interface.smart-map :as psm]\n[com.wsscode.pathom3.path :as p.path]\n[com.wsscode.pathom3.plugin :as p.plugin]\n")),Object(o.b)("h2",{id:"general-attribute-modeling-view"},"General attribute modeling view"),Object(o.b)("p",null,"Attribute modeling is a way to think and design information systems."),Object(o.b)("p",null,"Consider the question: What's the temperature in the city of Recife now?"),Object(o.b)("p",null,"Using my attribute modeler hat, I can break this description into two attributes and one\nvalue. The demand is for a ",Object(o.b)("inlineCode",{parentName:"p"},":temperature"),", and the available information is the\n",Object(o.b)("inlineCode",{parentName:"p"},":city")," with the value of ",Object(o.b)("inlineCode",{parentName:"p"},"Recife"),". Or we can express it as a Clojure map:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'{:city        "Recife"\n :temperature ?}\n')),Object(o.b)("p",null,"Note we left ",Object(o.b)("inlineCode",{parentName:"p"},"?")," for the unknown attributes. In a way, this map expresses the same thing\nas the question we had before."),Object(o.b)("p",null,"Now, to realize the ",Object(o.b)("inlineCode",{parentName:"p"},":temperature")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"city"),", we write a resolver\nestablishing this relationship."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'; our mock temperatures database\n(def temperatures\n  {"Recife" 23})\n\n(pco/defresolver temperature-from-city [{:keys [city]}]\n  {:temperature (get temperatures city)})\n')),Object(o.b)("p",null,"A resolver looks like a function but with some constraints:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The resolver input ",Object(o.b)("strong",{parentName:"li"},"must")," be a map, so the input information is labeled."),Object(o.b)("li",{parentName:"ol"},"A resolver ",Object(o.b)("strong",{parentName:"li"},"must")," return a map, so the output information is labeled."),Object(o.b)("li",{parentName:"ol"},"A resolver may also receive another map, containing the environment information.")),Object(o.b)("p",null,"The next step is to create the indexes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(def indexes\n  (pci/register [temperature-from-city]))\n")),Object(o.b)("p",null,"Pathom uses the indexes to traverse the attribute relationships."),Object(o.b)("p",null,"Now to make the original question to Pathom, we are going to use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/smart-maps"}),"Smart Map")," interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'; this creates a smart map, using our indexes, and with some initial data\n(def smart-map (psm/smart-map indexes {:city "Recife"}))\n\n; smart maps work as regular maps when looking for the initial data\n(:city smart-map); => "Recife"\n\n; but the difference comes when we ask for keys not present in the map, but reachable\n; via resolvers\n(:temperature smart-map); => 23\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that in this example, we only mention the indexes and the attributes, the resolver\nnames get abstracted from the user and left for Pathom to figure when to call then."))),Object(o.b)("p",null,"Now consider a slightly different question: Is it cold in ",Object(o.b)("inlineCode",{parentName:"p"},"Recife")," now?"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'{:city  "Recife"\n :cold? ?}\n')),Object(o.b)("p",null,"To compute the ",Object(o.b)("inlineCode",{parentName:"p"},":cold?")," attribute, we can write a resolver that depends on the ",Object(o.b)("inlineCode",{parentName:"p"},":temperature"),"\nattribute:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(pco/defresolver cold? [{:keys [temperature]}]\n  {:cold? (< temperature 20)})\n")),Object(o.b)("p",null,"Update the indexes definition to also include the ",Object(o.b)("inlineCode",{parentName:"p"},"cold?")," resolver:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(def indexes\n  (pci/register [temperature-from-city cold?]))\n")),Object(o.b)("p",null,"Now, back to the question: Is it cold in ",Object(o.b)("inlineCode",{parentName:"p"},"Recife")," now? This time we will use a different\ninterface, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/eql"}),"EQL")," interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'; this time we will use the EQL interface to trigger the Pathom engine\n(p.eql/process\n  indexes\n  {:city "Recife"}\n  [:cold?])\n; => {:cold? false}\n')),Object(o.b)("p",null,'Note that our "lookup code" remains the same size, although we have to run more operations\nnow. This ability to abstract the function call chain is the primary utility you should\nlook for in Pathom.'),Object(o.b)("p",null,"In this getting started, we talked a bit about attribute modeling, how to write a few\nresolvers and how to trigger the Pathom engine to fulfill attribute questions."),Object(o.b)("p",null,"You can find a complete tutorial playing with weather API's at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorial"}),"Pathom Tutorial"),"\npage."),Object(o.b)("h2",{id:"core-concepts"},"Core Concepts"),Object(o.b)("p",null,"Here is a list of the main concepts in Pathom that can help you navigate the\ndocumentation."),Object(o.b)("h3",{id:"resolver"},"Resolver"),Object(o.b)("p",null,"Resolvers are building blocks that establish relationships between attributes. Pathom\nsecret sauce is the ability to traverse a graph of attribute relationships, defined by\nresolvers, given some user request."),Object(o.b)("h3",{id:"environment"},"Environment"),Object(o.b)("p",null,"Is a map containing all the necessary context required to process a request. Data for\nPathom internals uses Pathom-specific namespaced keys, and you will typically add your\nown entries (database connections, etc.) such that all these data are available to your\nresolvers."),Object(o.b)("h3",{id:"planner"},"Planner"),Object(o.b)("p",null,"Given the environment, some initial data and a request, the planner is responsible for\nfiguring what resolvers to call, in what order."),Object(o.b)("h3",{id:"runner"},"Runner"),Object(o.b)("p",null,"Once the plan is ready the runner executes the plan, by traversing and executing resolvers,\nthen responses are coming as expected and chooses the path when multiple options\nshaping the results to satisfy the request. It handles errors as well as potential conflicts\nare available.(e.g. multiple resolvers can handle a given request)."),Object(o.b)("h3",{id:"interface"},"Interface"),Object(o.b)("p",null,"To bundle the process together, you interact using one of the Pathom interfaces:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/smart-maps"}),"Smart Maps")," is a custom map data structure, similar to a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.datomic.com/on-prem/entities.html"}),"Datomic Entity"),", but instead\nof loading from a database, realized using resolvers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/eql"}),"EQL")," is a syntax that allows users to express a data shape, and then Pathom\nfill the requirements using the logic from resolvers.")))}p.isMDXComponent=!0}}]);