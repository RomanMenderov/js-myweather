!function(){var t={352:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r(666);var i="userCityHistory",a="fa5292c9164722fbd4dd9fb5132d9ea9",c=[];function u(t){return s.apply(this,arguments)}function s(){return(s=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",localStorage.setItem(i,JSON.stringify(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return e.some((function(e){return t.toLowerCase()===e.toLowerCase()}))}function h(t){return t.length<=10}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return f(t,e)||(e.unshift(t),h(e)||e.pop()),u(e)}function l(){return d.apply(this,arguments)}function d(){return(d=o(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://get.geojs.io/v1/ip/geo.json");case 3:if(!(e=t.sent).ok){t.next=9;break}return t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",r.city);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=o(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return e=t.sent,t.next=5,m(e);case 5:return r=t.sent,t.abrupt("return",(x(e,r),b(y(r.coord))));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var e=t.lon,r=t.lat;return"".concat("https://static-maps.yandex.ru/1.x/?l=map","&ll=").concat(e,",").concat(r,"\n&size=").concat("400,400","&z=").concat(10,"&pt=").concat(e,",").concat(r)}function m(t){return g.apply(this,arguments)}function g(){return(g=o(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.openweathermap.org/data/2.5/weather\n?q=".concat(e,"&units=metric&appid=").concat(a),t.next=3,fetch(r);case 3:if(!(n=t.sent).ok){t.next=9;break}return t.next=7,n.json();case 7:return o=t.sent,t.abrupt("return",o);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return e.innerHTML="",t.forEach((function(t){var r=document.createElement("li");r.innerText=t,r.addEventListener("click",o(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.innerText,t.next=3,m(e);case 3:(n=t.sent)&&(x(e,n),b(y(n.coord)));case 5:case"end":return t.stop()}}),t)})))),e.appendChild(r)}))}function x(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.getElementById("weatherCurrentParams"),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document.getElementById("weatherCurrentCity");if("string"==typeof e)n.innerHTML="".concat(t),r.innerText=e;else{var o="https://openweathermap.org/img/w/\n".concat(e.weather[0].icon,".png");n.innerHTML="".concat(t,'&nbsp;<img width="50" src="').concat(o,'">'),r.innerText="Температура: ".concat(JSON.stringify(e.main.temp))}}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.getElementById("weatherMap");return t&&(e.src=t,e.style.display="block"),!1}!function(t){var e=document.createElement("div");e.id="weatherDescription";var r=document.createElement("span");r.id="weatherCurrentCity",e.appendChild(r);var n=document.createElement("p");n.id="weatherCurrentParams",e.appendChild(n),t.appendChild(e);var a=document.createElement("input");a.id="input",t.appendChild(a);var u=document.createElement("button");u.id="button",u.innerText="Проверить погоду",t.appendChild(u);var s=document.createElement("img");s.id="weatherMap",s.src="",s.width="400",s.height="400",s.style.display="none",t.appendChild(s);var f,h=document.createElement("ul");h.id="cityList",t.appendChild(h),u.addEventListener("click",o(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.value,a.value="",t.next=4,m(e);case 4:(o=t.sent)?(x(e,o,n,r),p(e),w(c,h),b(y(o.coord),s)):x(e,"по этому запросу нет данных",n,r);case 6:case"end":return t.stop()}}),t)})))),(f=localStorage.getItem(i),f?JSON.parse(f):[]).forEach((function(t){c.push(t)})),w(c,h),function(){v.apply(this,arguments)}()}(document.getElementsByTagName("body")[0])},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",l="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(R([])));b&&b!==r&&n.call(b,i)&&(w=b);var E=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=E.constructor=g,g.constructor=m,m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,c,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(352)}();