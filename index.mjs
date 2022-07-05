// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmaxabs@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function d(m,l){var f,p,j;if(!t(m))throw new TypeError(o("0fM48",m));if(!r(l))throw new TypeError(o("0fM4I",l));return j=i(l),e(f={},"next",(function(){var e;if(p)return{done:!0};if((e=m.next()).done)return p=!0,{done:!0};e="number"==typeof e.value?j(e.value):j(NaN);return{value:e,done:!1}})),e(f,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&s(m[n])&&e(f,n,(function(){return d(m[n](),l)})),f}export{d as default};
//# sourceMappingURL=index.mjs.map
