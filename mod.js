// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&u&&u.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=v()?function(r){var t,e,n;if(null==r)return s.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return n=s.call(r),t?r[w]=e:delete r[w],n}:function(r){return s.call(r)},j=Boolean.prototype.toString;var _=v();function h(r){return"object"==typeof r&&(r instanceof Boolean||(_?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function S(r){return p(r)||h(r)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof T?T:null;var I=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(E)return E;if(O)return O;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=I.document&&I.document.childNodes,P=Int8Array;function M(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(M,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};function B(r){return null!==r&&"object"==typeof r}function k(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return B(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(B,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!x(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(B));var C="function"==typeof y||"object"==typeof P||"function"==typeof F?function(r){return k(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?k(r).toLowerCase():t};function G(r){return"function"===C(r)}function L(r){return"number"==typeof r}var R=Number,U=R.prototype.toString;var Y=v();function X(r){return"object"==typeof r&&(r instanceof R||(Y?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function q(r){return L(r)||X(r)}l(q,"isPrimitive",L),l(q,"isObject",X);var z=Number.POSITIVE_INFINITY,D=R.NEGATIVE_INFINITY,H=Math.floor;function J(r){return r<z&&r>D&&H(t=r)===t;var t}function K(r){return L(r)&&J(r)}function Q(r){return X(r)&&J(r.valueOf())}function W(r){return K(r)||Q(r)}function Z(r){return K(r)&&r>0}function $(r){return Q(r)&&r.valueOf()>0}function rr(r){return Z(r)||$(r)}l(W,"isPrimitive",K),l(W,"isObject",Q),l(rr,"isPrimitive",Z),l(rr,"isObject",$);var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function er(r){return Math.abs(r)}function nr(r){return r!=r}function or(r){return 0===r&&1/r===z}var ir="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr="function"==typeof Float64Array?Float64Array:void 0;var ar=function(){var r,t,e;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),e=t,r=(ir&&e instanceof Float64Array||"[object Float64Array]"===g(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};function cr(r){var t;if(!Z(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=function(r){var t,e,n,o;if(!Z(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new ar(r),e=D,o=-1,n=0,function(i){var u,f;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%r,n<r)n+=1,(nr(i)||i>e||i===e&&or(i))&&(e=i);else if(nr(i)||i>e)e=i;else if(t[o]===e&&i<e||nr(t[o])){for(e=i,f=0;f<r;f++)if(f!==o){if(nr(u=t[f])){e=u;break}(u>e||u===e&&or(u))&&(e=u)}}else if(t[o]===e&&i===e&&0===i)if(or(i))e=i;else if(or(t[o]))for(e=i,f=0;f<r;f++)if(f!==o&&or(t[f])){e=t[f];break}return t[o]=i,e}}(r),function(r){if(0===arguments.length)return t();return t(er(r))}}function lr(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function yr(r,t){var e,n,o,i,u;if(u=typeof(i=r),null===i||"object"!==u&&"function"!==u||!G(i.next))throw new TypeError(lr("0fM48",r));if(!Z(t))throw new TypeError(lr("0fM4I",t));return o=cr(t),l(e={},"next",(function(){var t;if(n)return{done:!0};if((t=r.next()).done)return n=!0,{done:!0};t="number"==typeof t.value?o(t.value):o(NaN);return{value:t,done:!1}})),l(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tr&&G(r[tr])&&l(e,tr,(function(){return yr(r[tr](),t)})),e}export{yr as default};
//# sourceMappingURL=mod.js.map