/* v1.1.0 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GiveTappPlugins=t():e.GiveTappPlugins=t()}(this,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}e.r(t),e.d(t,{Plugin:()=>i});var i=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"getDonor",value:function(){try{var e=JSON.parse(localStorage.getItem("user")),t=e.email.split("@")[0].split(".")[0];return{id:e.id,name:t[0].toUpperCase()+t.slice(1)}}catch(e){return null}}},{key:"getBenfs",value:function(e){try{var t;if(!document.querySelector("#video"))return null;var r=null===(t=document.querySelector("#mobileControls > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)"))||void 0===t||null===(t=t.innerText)||void 0===t||null===(t=t.split(",")[0])||void 0===t?void 0:t.trim();return r?{id:r.toLowerCase().replace(/ /g,"_"),name:r}:null}catch(e){return null}}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();return t})()));
