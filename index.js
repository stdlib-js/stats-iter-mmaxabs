// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).itermmaxabs=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var c=r;function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[w]=e:delete t[w],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var h=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return p(t)||_(t)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",_);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof T?T:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(O)return O;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=I.document&&I.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var M=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",M);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function B(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=M.exec(n.toString()))return r[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(B));var C="function"==typeof y||"object"==typeof P||"function"==typeof F?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===C(t)}function L(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var Y=b();function X(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function q(t){return L(t)||X(t)}l(q,"isPrimitive",L),l(q,"isObject",X);var z=Number.POSITIVE_INFINITY,D=R.NEGATIVE_INFINITY,H=Math.floor;function J(t){return t<z&&t>D&&H(r=t)===r;var r}function K(t){return L(t)&&J(t)}function Q(t){return X(t)&&J(t.valueOf())}function W(t){return K(t)||Q(t)}function Z(t){return K(t)&&t>0}function $(t){return Q(t)&&t.valueOf()>0}function tt(t){return Z(t)||$(t)}l(W,"isPrimitive",K),l(W,"isObject",Q),l(tt,"isPrimitive",Z),l(tt,"isObject",$);var rt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function et(t){return Math.abs(t)}function nt(t){return t!=t}function ot(t){return 0===t&&1/t===z}var it="function"==typeof Float64Array;var ut="function"==typeof Float64Array?Float64Array:null;var ft="function"==typeof Float64Array?Float64Array:void 0;var at=function(){var t,r,e;if("function"!=typeof ut)return!1;try{r=new ut([1,3.14,-3.14,NaN]),e=r,t=(it&&e instanceof Float64Array||"[object Float64Array]"===g(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ft:function(){throw new Error("not implemented")};function ct(t){var r;if(!Z(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=function(t){var r,e,n,o;if(!Z(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=new at(t),e=D,o=-1,n=0,function(i){var u,f;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,n<t)n+=1,(nt(i)||i>e||i===e&&ot(i))&&(e=i);else if(nt(i)||i>e)e=i;else if(r[o]===e&&i<e||nt(r[o])){for(e=i,f=0;f<t;f++)if(f!==o){if(nt(u=r[f])){e=u;break}(u>e||u===e&&ot(u))&&(e=u)}}else if(r[o]===e&&i===e&&0===i)if(ot(i))e=i;else if(ot(r[o]))for(e=i,f=0;f<t;f++)if(f!==o&&ot(r[f])){e=r[f];break}return r[o]=i,e}}(t),function(t){if(0===arguments.length)return r();return r(et(t))}}function lt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function t(r,e){var n,o,i,u,f;if(f=typeof(u=r),null===u||"object"!==f&&"function"!==f||!G(u.next))throw new TypeError(lt("0fM48",r));if(!Z(e))throw new TypeError(lt("0fM4I",e));return i=ct(e),l(n={},"next",(function(){var t;if(o)return{done:!0};if((t=r.next()).done)return o=!0,{done:!0};t="number"==typeof t.value?i(t.value):i(NaN);return{value:t,done:!1}})),l(n,"return",(function(t){if(o=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),rt&&G(r[rt])&&l(n,rt,(function(){return t(r[rt](),e)})),n}}));
//# sourceMappingURL=index.js.map
