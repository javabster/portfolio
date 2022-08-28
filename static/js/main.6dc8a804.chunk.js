/*! For license information please see main.6dc8a804.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(t,e,n){t.exports=n.p+"static/media/profile.ac7a8fd6.png"},30:function(t,e,n){t.exports=n(67)},35:function(t,e,n){},46:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var r,o,a,i=n(0),c=n.n(i),l=n(26),u=n.n(l),s=(n(35),n(8)),h=n(6),f=n(4),p=n(3),d=p.b.div(r||(r=Object(f.a)(["\n    background-color: ",";\n    min-height: 100vh;\n    margin-top: 0;\n    padding: 20px;\n    width: 100vw;\n    box-sizing: border-box;\n"])),(function(t){return t.theme.background})),y=p.b.button(o||(o=Object(f.a)(["\n    background-color: ",";\n    margin: 10px;\n    min-height: ",";\n    \n    height: ",";\n    min-width: ",";\n    padding: '0 20px 0 20px';\n    font-size: ",";\n    border: none;\n    font-family: 'IBM Plex Sans';\n    color: ",";\n    text-align: center;\n\n    box-shadow: ",";\n\n    transform: ",";\n\n    &:focus {\n    outline: none;\n    }\n\n"])),(function(t){return"tile"===t.type?t.theme.tileBtn:!1===t.clicked?t.theme.btnMain:!0===t.clicked?t.theme.accent:void 0}),(function(t){return"small"===t.type?"30px":"40px"}),(function(t){return"small"===t.type?"10px":"50px"}),(function(t){return"small"===t.type?"20px":"100px"}),(function(t){return"small"===t.type?"0.70rem":"1rem"}),(function(t){return"tile"===t.type?"white":!1===t.clicked?t.theme.accent:!0===t.clicked?t.theme.background:void 0}),(function(t){return!1===t.clicked?"5px 5px 0px ".concat(t.theme.accent,";"):!0===t.clicked?"3px 3px 0px ".concat(t.theme.btnMain):void 0}),(function(t){if(!1===t.clicked)return"translate(0em,-0.2em)"})),m=p.b.div(a||(a=Object(f.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    min-height: 100px;\n    width:100%;\n    padding-top: 20px;\n    justify-content: center;\n"]))),g=function t(e){return{type:t,theme:e}},v=function t(e){return{type:t,tab:e}},b=function t(e){return{type:t,mobile:e}},x=function t(e){return{type:t,data:e}},w=function t(e){return{type:t,data:e}},E=function t(e){return{type:t,data:e}};function k(t){var e=Object(i.useContext)(Y),n=e.state,r=e.dispatch;return c.a.createElement(m,{className:"nav-bar-row"},c.a.createElement(y,{type:"nav-bar",clicked:"about"===n.tabOpen,onClick:function(){r(v("about"))}},n.about.title),c.a.createElement(y,{type:"nav-bar",clicked:"blogs"===n.tabOpen,onClick:function(){r(v("blogs"))}},n.blogs.title),c.a.createElement(y,{type:"nav-bar",clicked:"talks"===n.tabOpen,onClick:function(){r(v("talks"))}},n.talks.title))}function j(t){var e=Object(i.useContext)(Y),n=e.state,r=e.dispatch;return c.a.createElement(m,null,c.a.createElement(y,{type:"small",clicked:"light"===n.mode,onClick:function(){return r(g("light"))}},"Light Mode"),c.a.createElement(y,{type:"small",clicked:"dark"===n.mode,onClick:function(){return r(g("dark"))}},"Dark Mode"))}var L,O,F=n(5),_=(n(46),p.b.div(L||(L=Object(f.a)(["\n    min-height: 100px;\n    height: auto;\n    padding: 25px;\n    color: ",";\n    margin: 20px;\n    background-color: ",";\n    box-shadow: ",";\n\n"])),(function(t){return t.theme.color}),(function(t){return t.theme.bodyMain}),(function(t){return"5px 5px 0px ".concat(t.theme.accent,";\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly")})));function S(t){var e=Object(i.useContext)(Y).state,r=Object(i.useState)("#8093F1"),o=Object(h.a)(r,2),a=o[0],l=o[1];return Object(i.useEffect)((function(){"light"===e.mode?l("#8093F1"):l("#DFE4FB")}),[e.mode]),c.a.createElement("div",null,e.isMobile?c.a.createElement("div",{style:{display:"inline-grid"}},c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement(_,{style:{width:"100%",padding:"unset"}},c.a.createElement("h1",null,e.about.heading))),c.a.createElement(_,{style:{padding:"0"}},c.a.createElement("img",{style:{height:"100%",width:"100%",objectFit:"cover"},src:n(17)})),c.a.createElement(_,{style:{fontSize:"x-large",alignItems:"center",lineHeight:"2em"}},e.about.description,c.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},c.a.createElement(F.SocialIcon,{style:{margin:"10px"},bgColor:a,url:"https://www.linkedin.com/in/abby-mitchell/",target:"_blank"}),c.a.createElement(F.SocialIcon,{style:{margin:"10px"},"data-testid":"github-link",bgColor:a,url:"https://github.com/javabster",target:"_blank"}),c.a.createElement(F.SocialIcon,{style:{margin:"10px"},bgColor:a,url:"https://twitter.com/javabster",target:"_blank"})))):c.a.createElement("div",{style:{display:"inline-grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateTows:"repeat(5, 1fr)"}},c.a.createElement(_,{style:{padding:"0",gridArea:"1 / 1 / 5 / 3"}},c.a.createElement("img",{style:{height:"100%",width:"100%",objectFit:"cover"},src:n(17)})),c.a.createElement("div",{style:{gridArea:"1 / 3 / 2 / 6",display:"flex",justifyContent:"center"}},c.a.createElement(_,{style:{paddingLeft:"50px",paddingRight:"50px",width:"50%"}},c.a.createElement("h1",{style:{fontSize:"50px",lineHeight:"55px"}},e.about.heading))),c.a.createElement(_,{style:{gridArea:"2 / 3 / 5 / 6",fontSize:"x-large",alignItems:"center",lineHeight:"2em"}},e.about.description,c.a.createElement("div",{style:{width:"50%",padding:"20px",display:"flex",justifyContent:"space-evenly"}},c.a.createElement(F.SocialIcon,{style:{padding:"10px"},bgColor:a,url:"https://www.linkedin.com/in/abby-mitchell/",target:"_blank"}),c.a.createElement(F.SocialIcon,{style:{padding:"10px"},"data-testid":"github-link",bgColor:a,url:"https://github.com/javabster",target:"_blank"}),c.a.createElement(F.SocialIcon,{style:{padding:"10px"},bgColor:a,url:"https://twitter.com/javabster",target:"_blank"})))))}function C(t){var e=t.content,n=t.buttonText,r=t.width;return c.a.createElement(_,{style:{width:r}},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,new Date(e.published).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})),c.a.createElement(y,{type:"tile",clicked:!1,onClick:function(){window.open(e.link,"_blank","noopener,noreferrer")}},n))}var M=p.b.h1(O||(O=Object(f.a)(["\n    color: ",";\n"])),(function(t){return t.theme.color}));function B(t){var e=Object(i.useContext)(Y).state;return c.a.createElement("div",null,c.a.createElement(M,{style:{textAlign:"center",margin:"20px"}},"Articles (first author)"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},e.blogs.blogsList.map((function(t,n){if("author"==t.type)return c.a.createElement(C,{content:t,buttonText:"Read Me!",key:n,width:e.isMobile?"100%":"25%"})}))),c.a.createElement(M,{style:{textAlign:"center",margin:"50px"}},"Other Articles (co-author/editor)"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},e.blogs.blogsList.map((function(t,n){if("author"!=t.type)return c.a.createElement(C,{content:t,buttonText:"Read Me!",key:n,width:e.isMobile?"100%":"25%"})}))))}function T(t){var e=Object(i.useContext)(Y).state;return c.a.createElement("div",null,c.a.createElement(M,{style:{textAlign:"center",margin:"20px"}},"Quantum Computing Talks"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},e.talks.talksList.map((function(t,n){if("quantum"===t.type)return c.a.createElement(C,{key:n,content:t,buttonText:"Watch Me!",width:e.isMobile?"100%":"25%"})}))),c.a.createElement(M,{style:{textAlign:"center",margin:"50px"}},"Other Talks"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}},e.talks.talksList.map((function(t,n){if("quantum"!=t.type)return c.a.createElement(C,{key:n,content:t,buttonText:"Watch Me!",width:e.isMobile?"100%":"25%"})}))))}var I=n(2),G={mode:"light",tabOpen:"about",isMobile:null,about:{title:null,description:null,heading:null},talks:{title:null,talksList:[]},blogs:{title:null,blogsList:[]}};function N(t,e){switch(e.type){case g:return Object(I.a)(Object(I.a)({},t),{},{mode:e.theme});case v:return Object(I.a)(Object(I.a)({},t),{},{tabOpen:e.tab});case b:return Object(I.a)(Object(I.a)({},t),{},{isMobile:e.mobile});case x:return Object(I.a)(Object(I.a)({},t),{},{about:e.data});case w:return Object(I.a)(Object(I.a)({},t),{},{talks:{title:"Speaking",talksList:e.data}});case E:return Object(I.a)(Object(I.a)({},t),{},{blogs:{title:"Writing",blogsList:e.data}});default:return t}}function P(){P=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==e&&n.call(m,o)&&(d=m);var g=p.prototype=h.prototype=Object.create(d);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var A=n(47),D=function(){var t=Object(s.a)(P().mark((function t(e){var n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A({method:"get",url:"".concat("http://localhost:5000/","api/").concat(e)});case 3:if(n=t.sent,console.log(n),!n.data){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",[]);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),W=(n(66),{background:"#DFE4FB",accent:"#45050C",bodyMain:"#FFFFFF",btnMain:"#8093F1",font:"IBM Plex Sans",bar:"#DFE4FB",innerBar:"#FF2E33",bubble:"#45050C",diamond:"#8093F1",timelineShadow:"#8093F1",tileBtn:"#2EBFA5"}),z={background:"#38023B",accent:"#DFE4FB",bodyMain:"#8093F1",btnMain:"#8093F1",font:"IBM Plex Sans",color:"white",bar:"#DFE4FB",innerBar:"#38023B",bubble:"#FF2E33",diamond:"#38023B",timelineShadow:"#38023B",tileBtn:"#2EBFA5"};function R(){R=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var d={};c(d,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==e&&n.call(m,o)&&(d=m);var g=p.prototype=h.prototype=Object.create(d);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var Y=Object(i.createContext)(null);function H(){var t=Object(i.useReducer)(N,G),e=Object(h.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(),a=Object(h.a)(o,2);a[0],a[1];return Object(i.useEffect)((function(){(function(){var t=Object(s.a)(R().mark((function t(){var e,n,o;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("about");case 2:return e=t.sent,r(x(e)),t.next=6,D("talks");case 6:return n=t.sent,r(w(n)),t.next=10,D("blogs");case 10:o=t.sent,r(E(o));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()();var t=parseInt(document.body.clientWidth)<=1024;r(b(t))}),[]),c.a.createElement(Y.Provider,{value:{state:n,dispatch:r}},c.a.createElement(p.a,{theme:"light"===n.mode?W:z},c.a.createElement(d,null,c.a.createElement("div",null,c.a.createElement(k,null),function(t){switch(t){case"about":return c.a.createElement(S,null);case"talks":return c.a.createElement(T,null);case"blogs":return c.a.createElement(B,null);default:return c.a.createElement(S,null)}}(n.tabOpen),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"10px",justifyContent:"center"}},c.a.createElement(j,null))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6dc8a804.chunk.js.map