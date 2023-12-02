// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,x=isNaN,S=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function V(r){var e,t,n;if(!O(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var N,P=Object.prototype,C=P.toString,$=P.__defineGetter__,B=P.__defineSetter__,R=P.__lookupGetter__,M=P.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=N;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[D]=t:delete r[D],n}:function(r){return K.call(r)},J=Boolean,Q=Boolean.prototype.toString,rr=X();function er(r){return"object"==typeof r&&(r instanceof J||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return U(r)||er(r)}function nr(){return new Function("return this;")()}L(tr,"isPrimitive",U),L(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!U(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;L(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var yr="function"==typeof Z||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===yr(r)}function hr(r){return"number"==typeof r}var vr=Number,wr=vr.prototype.toString,mr=X();function jr(r){return"object"==typeof r&&(r instanceof vr||(mr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Er(r){return hr(r)||jr(r)}L(Er,"isPrimitive",hr),L(Er,"isObject",jr);var _r=Number.POSITIVE_INFINITY,xr=vr.NEGATIVE_INFINITY,Sr=Math.floor;function Ar(r){return r<_r&&r>xr&&Sr(e=r)===e;var e}function Tr(r){return hr(r)&&Ar(r)}function kr(r){return jr(r)&&Ar(r.valueOf())}function Ir(r){return Tr(r)||kr(r)}function Fr(r){return Tr(r)&&r>0}function Or(r){return kr(r)&&r.valueOf()>0}function Vr(r){return Fr(r)||Or(r)}L(Ir,"isPrimitive",Tr),L(Ir,"isObject",kr),L(Vr,"isPrimitive",Fr),L(Vr,"isObject",Or);var Nr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function Pr(r){return Math.abs(r)}function Cr(r){return r!=r}function $r(r){return 0===r&&1/r===_r}var Br="function"==typeof Float64Array,Rr="function"==typeof Float64Array?Float64Array:null,Mr="function"==typeof Float64Array?Float64Array:void 0,Gr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,NaN]),t=e,r=(Br&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};function Lr(r){var e;if(!Fr(r))throw new TypeError(V("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=function(r){var e,t,n,i;if(!Fr(r))throw new TypeError(V("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new Gr(r),t=xr,i=-1,n=0,function(o){var a,u;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(Cr(o)||o>t||o===t&&$r(o))&&(t=o);else if(Cr(o)||o>t)t=o;else if(e[i]===t&&o<t||Cr(e[i])){for(t=o,u=0;u<r;u++)if(u!==i){if(Cr(a=e[u])){t=a;break}(a>t||a===t&&$r(a))&&(t=a)}}else if(e[i]===t&&o===t&&0===o)if($r(o))t=o;else if($r(e[i]))for(t=o,u=0;u<r;u++)if(u!==i&&$r(e[u])){t=e[u];break}return e[i]=o,t}}(r),function(r){return 0===arguments.length?e():e(Pr(r))}}function Zr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function r(e,t){var n,i,o,a,u;if(u=typeof(a=e),null===a||"object"!==u&&"function"!==u||!br(a.next))throw new TypeError(Zr("1Kv3v,IA",e));if(!Fr(t))throw new TypeError(Zr("1Kv45,IB",t));return o=Lr(t),L(n={},"next",(function(){var r;return i?{done:!0}:(r=e.next()).done?(i=!0,{done:!0}):{value:r="number"==typeof r.value?o(r.value):o(NaN),done:!1}})),L(n,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),Nr&&br(e[Nr])&&L(n,Nr,(function(){return r(e[Nr](),t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itermmaxabs=e();
//# sourceMappingURL=browser.js.map
