/* global Bliss */
// eslint-disable-next-line -- blissfuljs v1.0.6 Shy https://blissfuljs.com/
!function(){"use strict";function e(o,i,t){return i=void 0===i?1:i,(t=t||i+1)-i<=1?function(){if(arguments.length<=i||"string"===c.type(arguments[i]))return o.apply(this,arguments);var t,e,n=arguments[i];for(e in n){var r=Array.prototype.slice.call(arguments);r.splice(i,1,e,n[e]),t=o.apply(this,r)}return t}:e(e(o,i+1,t),i,t-1)}function s(e,n,t){var r=a(t);if("string"===r){var o=Object.getOwnPropertyDescriptor(n,t);!o||o.writable&&o.configurable&&o.enumerable&&!o.get&&!o.set?e[t]=n[t]:(delete e[t],Object.defineProperty(e,t,o))}else if("array"===r)t.forEach(function(t){t in n&&s(e,n,t)});else for(var i in n)t&&("regexp"===r&&!t.test(i)||"function"===r&&!t.call(n,i))||s(e,n,i);return e}function a(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return"number"==e&&isNaN(t)?"nan":e}var c=self.Bliss=s(function(t,e){return 2==arguments.length&&!e||!t?null:"string"===c.type(t)?(e||document).querySelector(t):t||null},self.Bliss);s(c,{extend:s,overload:e,type:a,property:c.property||"_",listeners:new(self.WeakMap?WeakMap:Map),original:{addEventListener:(self.EventTarget||Node).prototype.addEventListener,removeEventListener:(self.EventTarget||Node).prototype.removeEventListener},sources:{},noop:function(){},$:function(t,e){return t instanceof Node||t instanceof Window?[t]:2!=arguments.length||e?Array.prototype.slice.call("string"==typeof t?(e||document).querySelectorAll(t):t||[]):[]},defined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},create:function(t,e){return t instanceof Node?c.set(t,e):(1===arguments.length&&(e="string"===c.type(t)?{}:(t=(e=t).tag,c.extend({},e,function(t){return"tag"!==t}))),c.set(document.createElement(t||"div"),e))},each:function(t,e,n){for(var r in n=n||{},t)n[r]=e.call(t,r,t[r]);return n},ready:function(e,t,n){if("function"!=typeof e||t||(t=e,e=void 0),e=e||document,t&&("loading"!==e.readyState?t():c.once(e,"DOMContentLoaded",function(){t()})),!n)return new Promise(function(t){c.ready(e,t,!0)})},Class:function(t){var e,n,r=["constructor","extends","abstract","static"].concat(Object.keys(c.classProps)),o=t.hasOwnProperty("constructor")?t.constructor:c.noop;2==arguments.length?(n=arguments[0],t=arguments[1]):((n=function(){if(this.constructor.__abstract&&this.constructor===n)throw new Error("Abstract classes cannot be directly instantiated.");n.super&&!e&&n.super.apply(this,arguments),o.apply(this,arguments)}).super=t.extends||null,!n.super||(e=0===(n.super+"").indexOf("class "))&&console.error(`You are using $.Class() to create a fake function-based class that extends a native JS class. This will not work. You should convert your code to use native JS classes too. You can still pass a class into $.Class() to use its conveniences.`),n.prototype=c.extend(Object.create(n.super?n.super.prototype:Object),{constructor:n}),n.prototype.super=n.super?n.super.prototype:null,n.__abstract=!!t.abstract);function i(t){return this.hasOwnProperty(t)&&-1===r.indexOf(t)}if(t.static)for(var s in c.extend(n,t.static,i),c.classProps)s in t.static&&c.classProps[s](n,t.static[s]);for(s in c.extend(n.prototype,t,i),c.classProps)s in t&&c.classProps[s](n.prototype,t[s]);return n},classProps:{lazy:e(function(t,e,n){return Object.defineProperty(t,e,{get:function(){var t=n.call(this);return Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),t},set:function(t){Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0})},configurable:!0,enumerable:!0}),t}),live:e(function(t,n,r){return"function"===c.type(r)&&(r={set:r}),Object.defineProperty(t,n,{get:function(){var t=this["_"+n],e=r.get&&r.get.call(this,t);return void 0!==e?e:t},set:function(t){var e=this["_"+n],e=r.set&&r.set.call(this,t,e);this["_"+n]=void 0!==e?e:t},configurable:r.configurable,enumerable:r.enumerable}),t})},include:function(){var n=arguments[arguments.length-1],t=2===arguments.length&&arguments[0],r=document.createElement("script");return t?Promise.resolve():new Promise(function(t,e){c.set(r,{async:!0,onload:function(){t(r),r.parentNode&&r.parentNode.removeChild(r)},onerror:function(){e(r)},src:n,inside:document.head})})},load:function t(r,e){e=e?new URL(e,location.href):location.href,r=new URL(r,e);e=t.loading=t.loading||{};return e[r+""]||(/\.css$/.test(r.pathname)?e[r+""]=new Promise(function(t,e){var n=c.create("link",{href:r,rel:"stylesheet",inside:document.head,onload:function(){t(n)},onerror:function(){e(n)}})}):e[r+""]=c.include(r))},fetch:function(t,e){if(!t)throw new TypeError("URL parameter is mandatory and cannot be "+t);var n,r=s({url:new URL(t,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},e);for(n in r.method=r.method.toUpperCase(),c.hooks.run("fetch-args",r),"GET"===r.method&&r.data&&(r.url.search+=r.data),document.body.setAttribute("data-loading",r.url),r.xhr.open(r.method,r.url.href,!1!==r.async,r.user,r.password),e)if("upload"===n)r.xhr.upload&&"object"==typeof e[n]&&c.extend(r.xhr.upload,e[n]);else if(n in r.xhr)try{r.xhr[n]=e[n]}catch(t){self.console&&console.error(t)}var o,t=Object.keys(r.headers).map(function(t){return t.toLowerCase()});for(o in"GET"!==r.method&&-1===t.indexOf("content-type")&&r.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.headers)void 0!==r.headers[o]&&r.xhr.setRequestHeader(o,r.headers[o]);t=new Promise(function(t,e){r.xhr.onload=function(){document.body.removeAttribute("data-loading"),0===r.xhr.status||200<=r.xhr.status&&r.xhr.status<300||304===r.xhr.status?t(r.xhr):e(c.extend(Error(r.xhr.statusText),{xhr:r.xhr,get status(){return this.xhr.status}}))},r.xhr.onerror=function(){document.body.removeAttribute("data-loading"),e(c.extend(Error("Network Error"),{xhr:r.xhr}))},r.xhr.ontimeout=function(){document.body.removeAttribute("data-loading"),e(c.extend(Error("Network Timeout"),{xhr:r.xhr}))},r.xhr.send("GET"===r.method?null:r.data)});return t.xhr=r.xhr,t},value:function(t){var e="string"!=typeof t;return c.$(arguments).slice(+e).reduce(function(t,e){return t&&t[e]},e?t:self)}}),c.Hooks=new c.Class({add:function(t,e,n){if("string"==typeof arguments[0])(Array.isArray(t)?t:[t]).forEach(function(t){this[t]=this[t]||[],e&&this[t][n?"unshift":"push"](e)},this);else for(var t in arguments[0])this.add(t,arguments[0][t],e)},run:function(t,e){this[t]=this[t]||[],this[t].forEach(function(t){t.call(e&&e.context?e.context:e,e)})}}),c.hooks=new c.Hooks;c.property;c.Element=function(t){this.subject=t,this.data={},this.bliss={}},c.Element.prototype={set:e(function(t,e){t in c.setProps?c.setProps[t].call(this,e):t in this?this[t]=e:this.setAttribute(t,e)},0),transition:function(o,i){return new Promise(function(t,e){var n,r;"transition"in this.style&&0!==i?(n=c.extend({},this.style,/^transition(Duration|Property)$/),c.style(this,{transitionDuration:(i||400)+"ms",transitionProperty:Object.keys(o).join(", ")}),c.once(this,"transitionend",function(){clearTimeout(r),c.style(this,n),t(this)}),r=setTimeout(t,i+50,this),c.style(this,o)):(c.style(this,o),t(this))}.bind(this))},fire:function(t,e){var n=document.createEvent("HTMLEvents");return n.initEvent(t,!0,!0),this.dispatchEvent(c.extend(n,e))},bind:e(function(t,n){var e;1<arguments.length&&("function"===c.type(n)||n.handleEvent)&&(e=n,(n="object"===c.type(arguments[2])?arguments[2]:{capture:!!arguments[2]}).callback=e);var r=c.listeners.get(this)||{};t.trim().split(/\s+/).forEach(function(t){var e;-1<t.indexOf(".")&&(e=(t=t.split("."))[1],t=t[0]),r[t]=r[t]||[],0===r[t].filter(function(t){return t.callback===n.callback&&t.capture==n.capture}).length&&r[t].push(c.extend({className:e},n)),c.original.addEventListener.call(this,t,n.callback,n)},this),c.listeners.set(this,r)},0),unbind:e(function(t,i){var e;i&&("function"===c.type(i)||i.handleEvent)&&(e=i,i=arguments[2]),(i=(i="boolean"==c.type(i)?{capture:i}:i)||{}).callback=i.callback||e;var s=c.listeners.get(this);(t||"").trim().split(/\s+/).forEach(function(t){var e,n;if(-1<t.indexOf(".")&&(e=(t=t.split("."))[1],t=t[0]),!s)return t&&i.callback?c.original.removeEventListener.call(this,t,i.callback,i.capture):void 0;for(n in s)if(!t||n===t)for(var r,o=0;r=s[n][o];o++)e&&e!==r.className||i.callback&&i.callback!==r.callback||!!i.capture!=!!r.capture&&(t||i.callback||void 0!==i.capture)||(s[n].splice(o,1),c.original.removeEventListener.call(this,n,r.callback,r.capture),o--)},this)},0),when:function(r,o){var t=this;return new Promise(function(n){t.addEventListener(r,function t(e){o&&!o.call(this,e)||(this.removeEventListener(r,t),n(e))})})},toggleAttribute:function(t,e,n){(n=arguments.length<3?null!==e:n)?this.setAttribute(t,e):this.removeAttribute(t)}},c.setProps={style:function(t){for(var e in t)e in this.style?this.style[e]=t[e]:this.style.setProperty(e,t[e])},attributes:function(t){for(var e in t)this.setAttribute(e,t[e])},properties:function(t){c.extend(this,t)},events:function(t){if(1!=arguments.length||!t||!t.addEventListener)return c.bind.apply(this,[this].concat(c.$(arguments)));var e,n=this;if(c.listeners){var r,o=c.listeners.get(t);for(r in o)o[r].forEach(function(t){c.bind(n,r,t.callback,t.capture)})}for(e in t)0===e.indexOf("on")&&(this[e]=t[e])},once:e(function(t,e){function n(){return c.unbind(r,t,n),e.apply(r,arguments)}var r=this;c.bind(this,t,n,{once:!0})},0),delegate:e(function(t,e,n){c.bind(this,t,function(t){t.target.closest(e)&&n.call(this,t)})},0,2),contents:function(t){!t&&0!==t||(Array.isArray(t)?t:[t]).forEach(function(t){var e=c.type(t);/^(string|number)$/.test(e)?t=document.createTextNode(t+""):"object"===e&&(t=c.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(t){t&&t.appendChild(this)},before:function(t){t&&t.parentNode.insertBefore(this,t)},after:function(t){t&&t.parentNode.insertBefore(this,t.nextSibling)},start:function(t){t&&t.insertBefore(this,t.firstChild)},around:function(t){t&&t.parentNode&&c.before(this,t),this.appendChild(t)}},c.Array=function(t){this.subject=t},c.Array.prototype={all:function(t){var e=c.$(arguments).slice(1);return this[t].apply(this,e)}},c.add=e(function(r,n,o,t){o=c.extend({$:!0,element:!0,array:!0},o),"function"==c.type(n)&&(!o.element||r in c.Element.prototype&&t||(c.Element.prototype[r]=function(){return this.subject&&c.defined(n.apply(this.subject,arguments),this.subject)}),!o.array||r in c.Array.prototype&&t||(c.Array.prototype[r]=function(){var e=arguments;return this.subject.map(function(t){return t&&c.defined(n.apply(t,e),t)})}),o.$&&(c.sources[r]=c[r]=n,(o.array||o.element)&&(c[r]=function(){var t=[].slice.apply(arguments),e=t.shift(),n=o.array&&Array.isArray(e)?"Array":"Element";return c[n].prototype[r].apply({subject:e},t)})))},0),c.add(c.Array.prototype,{element:!1}),c.add(c.Element.prototype),c.add(c.setProps),c.add(c.classProps,{element:!1,array:!1});var n=document.createElement("_");c.add(c.extend({},HTMLElement.prototype,function(t){return"function"===c.type(n[t])}),null,!0)}();
// eslint-disable-next-line
export const $ = Bliss
// eslint-disable-next-line
export const $$ = Bliss.$
