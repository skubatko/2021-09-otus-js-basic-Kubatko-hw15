!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?y:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function b(){}function g(){}var m={};c(m,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(T([])));O&&O!==r&&n.call(O,i)&&(m=O);var L=g.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return b.prototype=g,c(L,"constructor",g),c(g,"constructor",b),b.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),c(L,u,"Generator"),c(L,i,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=a(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},u.apply(this,arguments)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}r.d(n,{el:function(){return k}});var s=function(t){return function(e){var r=t.querySelector(".calendar");r&&(r.innerHTML="");var n=t.querySelector(".list");n&&(n.innerHTML="");var o=t.querySelector(".about");o&&(o.innerHTML="About")}},h=function(t){return function(e){var r=t.querySelector(".calendar");r&&(r.innerHTML="Calendar");var n=t.querySelector(".list");n&&(n.innerHTML="");var o=t.querySelector(".about");o&&(o.innerHTML="")}},p=function(t){return function(e){var r=t.querySelector(".calendar");r&&(r.innerHTML="");var n=t.querySelector(".list");n&&(n.innerHTML="");var o=t.querySelector(".about");o&&(o.innerHTML="")}},y=function(t){return function(e){var r=t.querySelector(".calendar");r&&(r.innerHTML="");var n=t.querySelector(".list");n&&(n.innerHTML="List");var o=t.querySelector(".about");o&&(o.innerHTML="")}};function v(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,u,"next",t)}function u(t){v(i,n,o,a,u,"throw",t)}a(void 0)}))}}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=r(757),m=r.n(g);function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L=function(){function e(r){t(this,e),b(this,"listeners",[]),b(this,"currentPath",location.pathname),b(this,"previousPath",this.currentPath),this.assignApiHandler(r)}var r,n;return o(e,[{key:"assignApiHandler",value:function(t){var e=this;document.body.addEventListener("click",function(){var r=d(m().mark((function r(n){var o,i;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((o=n.target).matches("a")){r.next=3;break}return r.abrupt("return");case 3:return n.preventDefault(),e.previousPath=e.currentPath,i=o.getAttribute("href")||"/",t&&t.hashApiEnabled?location.hash=i:history.pushState({url:i},i,i),e.currentPath=i,r.next=10,e.handleAllListeners();case 10:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}},{key:"handleAllListeners",value:(n=d(m().mark((function t(){var e=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.listeners.map((function(t){return e.handleListener(t)})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"handleListener",value:(r=d(m().mark((function t(r){var n,o,i,a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={currentPath:this.currentPath,previousPath:this.previousPath,state:history.state},!e.isMatch(r.match,this.currentPath)){t.next=6;break}return t.next=4,null===(o=r.onBeforeEnter)||void 0===o?void 0:o.call(r,n);case 4:return t.next=6,null===(i=r.onEnter)||void 0===i?void 0:i.call(r,n);case 6:if(!e.isMatch(r.match,this.previousPath)){t.next=9;break}return t.next=9,null===(a=r.onLeave)||void 0===a?void 0:a.call(r,n);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"on",value:function(t){var e=this,r=this.generateId(),n=O(O({},t),{},{id:r});return this.listeners.push(n),function(){e.listeners=e.listeners.filter((function(t){return t.id!==r}))}}},{key:"generateId",value:function(){for(var t=this,e=function(){return Math.floor(Math.random()*t.listeners.length*1e3)},r=function(e){return t.listeners.find((function(t){return t.id===e}))},n=e();r(n);)n=e();return n}}],[{key:"isMatch",value:function(t,e){return t instanceof RegExp&&t.test(e)||"function"==typeof t&&t(e)||"string"==typeof t&&t===e}}]),e}();function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(){function e(r){t(this,e),b(this,"events",{}),this.el=r,this.onMount()}return o(e,[{key:"subscribeToEvents",value:function(){var t=this;Object.entries(this.events).forEach((function(e){var r=E(e,2),n=r[0],o=r[1],i=E(n.split("@"),2),a=i[0],u=i[1],c=t.el.querySelector(".".concat(u));null!==c&&c.addEventListener(a,o.bind(t))}))}},{key:"onMount",value:function(){this.el.innerHTML=this.render(),this.subscribeToEvents()}}]),e}();var P=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(l,e);var r,n,a=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=i(r);if(n){var o=i(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return f(this,t)});function l(){return t(this,l),a.apply(this,arguments)}return o(l,[{key:"onMount",value:function(){u(i(l.prototype),"onMount",this).call(this);var t=new L;t.on({match:function(t){return"/"===t},onEnter:p(k)}),t.on({match:function(t){return"/calendar"===t},onEnter:h(k)}),t.on({match:function(t){return"/list"===t},onEnter:y(k)}),t.on({match:function(t){return"/about"===t},onEnter:s(k)})}},{key:"render",value:function(){return'\n      <header>\n        <h1>\n          Календарь\n        </h1>\n        <nav>\n          <a href="/">#</a>\n          <a href="/calendar">Календарь</a>\n          <a href="/list">Список</a>\n          <a href="/about">О проекте</a>\n        </nav>\n      </header>\n      <div class="calendar"></div>\n      <div class="list"></div>\n      <div class="about"></div>\n    '}}]),l}(j),S=document.querySelector("#app"),k=document.createElement("div");S.appendChild(k),new P(k)}()}();