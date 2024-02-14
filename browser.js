// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push($(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function C(e){return"string"==typeof e}function R(e){var r,i;if(!C(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var j,_=Object.prototype,N=_.toString,Z=_.__defineGetter__,O=_.__defineSetter__,W=_.__lookupGetter__,L=_.__lookupSetter__;j=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=_,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=j;function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=M();function z(){return B&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=z()?function(e){var r,i,t;if(null==e)return Y.call(e);i=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return Y.call(e)}return t=Y.call(e),r?e[J]=i:delete e[J],t}:function(e){return Y.call(e)},Q=Boolean,ee=Boolean.prototype.toString,re=z();function ie(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return X(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}G(te,"isPrimitive",X),G(te,"isObject",ie);var se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function pe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ue(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,Ee,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,be,"$1."),i=de.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Ie=String.fromCharCode,Ve=isNaN,Te=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,s,c,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ve(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ve(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=pe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ve(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ve(a)?String(t.arg):Ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=xe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ce(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Re(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(Ce(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function je(e){return"string"==typeof e}function _e(e){var r,i;if(!je(e))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Re(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $e.apply(null,r)}function Ne(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Oe="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Le=function(e){if(arguments.length){if(!X(e))throw new TypeError(_e("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ne()}if(We)return We;if(Ze)return Ze;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Le.document&&Le.document.childNodes,Ge=Int8Array,Ue=M(),Xe=Object.prototype.toString,Me="function"==typeof Symbol?Symbol:void 0,Be="function"==typeof Me?Me.toStringTag:"",ze=Ue&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return Xe.call(e);i=e[Be],r=D(e,Be);try{e[Be]=void 0}catch(r){return Xe.call(e)}return t=Xe.call(e),r?e[Be]=i:delete e[Be],t}:function(e){return Xe.call(e)};function Ye(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;G(Ye,"REGEXP",qe);var De=Array.isArray?Array.isArray:function(e){return"[object Array]"===ze(e)};function He(e){return"number"==typeof e}function Je(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ke(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Je(n):Je(n)+e,t&&(e="-"+e)),e}var Qe=String.prototype.toLowerCase,er=String.prototype.toUpperCase;function rr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!He(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ke(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ke(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===er.call(e.specifier)?er.call(i):Qe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ir(e){return"string"==typeof e}var tr=Math.abs,nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase,or=String.prototype.replace,sr=/e\+(\d)$/,cr=/e-(\d)$/,pr=/^(\d+)$/,lr=/^(\d+)e/,ur=/\.0$/,fr=/\.0*e/,gr=/(\..*[^0])0*e/;function dr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!He(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":tr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=or.call(i,gr,"$1e"),i=or.call(i,fr,"e"),i=or.call(i,ur,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=or.call(i,sr,"e+0$1"),i=or.call(i,cr,"e-0$1"),e.alternate&&(i=or.call(i,pr,"$1."),i=or.call(i,lr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ar.call(e.specifier)?ar.call(i):nr.call(i)}function hr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function wr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+hr(t):hr(t)+e}var br=String.fromCharCode,vr=isNaN,yr=Array.isArray;function mr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Er(e){var r,i,t,n,a,o,s,c,p;if(!yr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ir(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=mr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,vr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,vr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=rr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=vr(a)?String(t.arg):br(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ke(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=wr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var xr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Sr(e){var r,i,t,n;for(i=[],n=0,t=xr.exec(e);t;)(r=e.slice(n,xr.lastIndex-t[0].length)).length&&i.push(r),i.push(kr(t)),n=xr.lastIndex,t=xr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ir(e){return"string"==typeof e}function Vr(e){var r,i;if(!Ir(e))throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Sr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Er.apply(null,r)}function Tr(e){return null!==e&&"object"==typeof e}function Fr(e){var r,i,t,n;if(("Object"===(i=ze(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=qe.exec(t.toString()))return r[1]}return Tr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Tr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Vr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!De(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Tr));var $r="function"==typeof U||"object"==typeof Ge||"function"==typeof Pe?function(e){return Fr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Fr(e).toLowerCase():r};function Ar(e){return"function"===$r(e)}function Cr(e){return"number"==typeof e}var Rr=M();function jr(){return Rr&&"symbol"==typeof Symbol.toStringTag}var _r=Object.prototype.toString,Nr="function"==typeof Symbol?Symbol:void 0,Zr="function"==typeof Nr?Nr.toStringTag:"",Or=jr()?function(e){var r,i,t;if(null==e)return _r.call(e);i=e[Zr],r=D(e,Zr);try{e[Zr]=void 0}catch(r){return _r.call(e)}return t=_r.call(e),r?e[Zr]=i:delete e[Zr],t}:function(e){return _r.call(e)},Wr=Number,Lr=Wr.prototype.toString,Pr=jr();function Gr(e){return"object"==typeof e&&(e instanceof Wr||(Pr?function(e){try{return Lr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Or(e)))}function Ur(e){return Cr(e)||Gr(e)}G(Ur,"isPrimitive",Cr),G(Ur,"isObject",Gr);var Xr=Number.POSITIVE_INFINITY,Mr=Wr.NEGATIVE_INFINITY,Br=Math.floor;function zr(e){return e<Xr&&e>Mr&&Br(r=e)===r;var r}function Yr(e){return Cr(e)&&zr(e)}function qr(e){return Gr(e)&&zr(e.valueOf())}function Dr(e){return Yr(e)||qr(e)}function Hr(e){return Yr(e)&&e>0}function Jr(e){return qr(e)&&e.valueOf()>0}function Kr(e){return Hr(e)||Jr(e)}G(Dr,"isPrimitive",Yr),G(Dr,"isObject",qr),G(Kr,"isPrimitive",Hr),G(Kr,"isObject",Jr);var Qr="function"==typeof Symbol?Symbol:void 0,ei="function"==typeof Qr&&"symbol"==typeof Qr("foo")&&D(Qr,"iterator")&&"symbol"==typeof Qr.iterator?Symbol.iterator:null;function ri(e){return Math.abs(e)}function ii(e){return e!=e}var ti=Number.POSITIVE_INFINITY;function ni(e){return 0===e&&1/e===ti}var ai=Number.NEGATIVE_INFINITY,oi=M(),si=Object.prototype.toString,ci="function"==typeof Symbol?Symbol:void 0,pi="function"==typeof ci?ci.toStringTag:"",li=oi&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return si.call(e);i=e[pi],r=D(e,pi);try{e[pi]=void 0}catch(r){return si.call(e)}return t=si.call(e),r?e[pi]=i:delete e[pi],t}:function(e){return si.call(e)},ui="function"==typeof Float64Array,fi="function"==typeof Float64Array?Float64Array:null,gi="function"==typeof Float64Array?Float64Array:void 0,di=function(){var e,r,i;if("function"!=typeof fi)return!1;try{r=new fi([1,3.14,-3.14,NaN]),i=r,e=(ui&&i instanceof Float64Array||"[object Float64Array]"===li(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?gi:function(){throw new Error("not implemented")};function hi(e){return"number"==typeof e}function wi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function bi(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+wi(n):wi(n)+e,t&&(e="-"+e)),e}var vi=String.prototype.toLowerCase,yi=String.prototype.toUpperCase;function mi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!hi(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=bi(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=bi(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===yi.call(e.specifier)?yi.call(i):vi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ei(e){return"string"==typeof e}var xi=Math.abs,ki=String.prototype.toLowerCase,Si=String.prototype.toUpperCase,Ii=String.prototype.replace,Vi=/e\+(\d)$/,Ti=/e-(\d)$/,Fi=/^(\d+)$/,$i=/^(\d+)e/,Ai=/\.0$/,Ci=/\.0*e/,Ri=/(\..*[^0])0*e/;function ji(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!hi(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":xi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ii.call(i,Ri,"$1e"),i=Ii.call(i,Ci,"e"),i=Ii.call(i,Ai,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ii.call(i,Vi,"e+0$1"),i=Ii.call(i,Ti,"e-0$1"),e.alternate&&(i=Ii.call(i,Fi,"$1."),i=Ii.call(i,$i,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Si.call(e.specifier)?Si.call(i):ki.call(i)}function _i(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ni(e,r,i){var t=r-e.length;return t<0?e:e=i?e+_i(t):_i(t)+e}var Zi=String.fromCharCode,Oi=isNaN,Wi=Array.isArray;function Li(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Pi(e){var r,i,t,n,a,o,s,c,p;if(!Wi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ei(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Li(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Oi(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Oi(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=mi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Oi(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Oi(a)?String(t.arg):Zi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ji(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=bi(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ni(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Gi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ui(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Xi(e){var r,i,t,n;for(i=[],n=0,t=Gi.exec(e);t;)(r=e.slice(n,Gi.lastIndex-t[0].length)).length&&i.push(r),i.push(Ui(t)),n=Gi.lastIndex,t=Gi.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Mi(e){return"string"==typeof e}function Bi(e){var r,i;if(!Mi(e))throw new TypeError(Bi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Xi(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Pi.apply(null,r)}function zi(e){var r,i,t,n;if(!Hr(e))throw new TypeError(Bi("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new di(e),i=ai,n=-1,t=0,function(a){var o,s;if(0===arguments.length)return 0===t?null:i;if(n=(n+1)%e,t<e)t+=1,(ii(a)||a>i||a===i&&ni(a))&&(i=a);else if(ii(a)||a>i)i=a;else if(r[n]===i&&a<i||ii(r[n])){for(i=a,s=0;s<e;s++)if(s!==n){if(ii(o=r[s])){i=o;break}(o>i||o===i&&ni(o))&&(i=o)}}else if(r[n]===i&&a===i&&0===a)if(ni(a))i=a;else if(ni(r[n]))for(i=a,s=0;s<e;s++)if(s!==n&&ni(r[s])){i=r[s];break}return r[n]=a,i}}function Yi(e){return"number"==typeof e}function qi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Di(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+qi(n):qi(n)+e,t&&(e="-"+e)),e}var Hi=String.prototype.toLowerCase,Ji=String.prototype.toUpperCase;function Ki(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Yi(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Di(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Di(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ji.call(e.specifier)?Ji.call(i):Hi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Qi(e){return"string"==typeof e}var et=Math.abs,rt=String.prototype.toLowerCase,it=String.prototype.toUpperCase,tt=String.prototype.replace,nt=/e\+(\d)$/,at=/e-(\d)$/,ot=/^(\d+)$/,st=/^(\d+)e/,ct=/\.0$/,pt=/\.0*e/,lt=/(\..*[^0])0*e/;function ut(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Yi(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":et(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=tt.call(i,lt,"$1e"),i=tt.call(i,pt,"e"),i=tt.call(i,ct,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=tt.call(i,nt,"e+0$1"),i=tt.call(i,at,"e-0$1"),e.alternate&&(i=tt.call(i,ot,"$1."),i=tt.call(i,st,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===it.call(e.specifier)?it.call(i):rt.call(i)}function ft(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function gt(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ft(t):ft(t)+e}var dt=String.fromCharCode,ht=isNaN,wt=Array.isArray;function bt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function vt(e){var r,i,t,n,a,o,s,c,p;if(!wt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Qi(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=bt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ht(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ht(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Ki(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ht(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ht(a)?String(t.arg):dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ut(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Di(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=gt(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Et(e){var r,i,t,n;for(i=[],n=0,t=yt.exec(e);t;)(r=e.slice(n,yt.lastIndex-t[0].length)).length&&i.push(r),i.push(mt(t)),n=yt.lastIndex,t=yt.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function xt(e){return"string"==typeof e}function kt(e){var r,i;if(!xt(e))throw new TypeError(kt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Et(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return vt.apply(null,r)}function St(e){var r;if(!Hr(e))throw new TypeError(kt("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=zi(e),function(e){return 0===arguments.length?r():r(ri(e))}}function It(e){return"number"==typeof e}function Vt(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Tt(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Vt(n):Vt(n)+e,t&&(e="-"+e)),e}var Ft=String.prototype.toLowerCase,$t=String.prototype.toUpperCase;function At(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!It(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Tt(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Tt(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===$t.call(e.specifier)?$t.call(i):Ft.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ct(e){return"string"==typeof e}var Rt=Math.abs,jt=String.prototype.toLowerCase,_t=String.prototype.toUpperCase,Nt=String.prototype.replace,Zt=/e\+(\d)$/,Ot=/e-(\d)$/,Wt=/^(\d+)$/,Lt=/^(\d+)e/,Pt=/\.0$/,Gt=/\.0*e/,Ut=/(\..*[^0])0*e/;function Xt(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!It(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Rt(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Nt.call(i,Ut,"$1e"),i=Nt.call(i,Gt,"e"),i=Nt.call(i,Pt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Nt.call(i,Zt,"e+0$1"),i=Nt.call(i,Ot,"e-0$1"),e.alternate&&(i=Nt.call(i,Wt,"$1."),i=Nt.call(i,Lt,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===_t.call(e.specifier)?_t.call(i):jt.call(i)}function Mt(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Bt(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Mt(t):Mt(t)+e}var zt=String.fromCharCode,Yt=isNaN,qt=Array.isArray;function Dt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ht(e){var r,i,t,n,a,o,s,c,p;if(!qt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ct(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Dt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Yt(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Yt(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=At(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Yt(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Yt(a)?String(t.arg):zt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Xt(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Tt(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Bt(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Jt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Kt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Qt(e){var r,i,t,n;for(i=[],n=0,t=Jt.exec(e);t;)(r=e.slice(n,Jt.lastIndex-t[0].length)).length&&i.push(r),i.push(Kt(t)),n=Jt.lastIndex,t=Jt.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function en(e){return"string"==typeof e}function rn(e){var r,i,t;if(!en(e))throw new TypeError(rn("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Qt(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ht.apply(null,i)}return function e(r,i){var t,n,a,o,s;if(s=typeof(o=r),null===o||"object"!==s&&"function"!==s||!Ar(o.next))throw new TypeError(rn("invalid argument. First argument must be an iterator. Value: `%s`.",r));if(!Hr(i))throw new TypeError(rn("invalid argument. Second argument must be a positive integer. Value: `%s`.",i));return a=St(i),G(t={},"next",(function(){var e;return n?{done:!0}:(e=r.next()).done?(n=!0,{done:!0}):{value:e="number"==typeof e.value?a(e.value):a(NaN),done:!1}})),G(t,"return",(function(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}})),ei&&Ar(r[ei])&&G(t,ei,(function(){return e(r[ei](),i)})),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermmaxabs=r();
//# sourceMappingURL=browser.js.map
