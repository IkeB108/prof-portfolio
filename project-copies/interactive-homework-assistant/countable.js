!function(t){"use strict";let n=[];const e=Array.prototype.forEach;function r(t){const n=[];let e=0;const r=t.length;for(;e<r;){const o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<r){const r=t.charCodeAt(e++);56320==(64512&r)?n.push(((1023&o)<<10)+(1023&r)+65536):(n.push(o),e--)}else n.push(o)}return n}function o(t,n){const e=Object.prototype.toString.call(t),r="string"==typeof t||"[object NodeList]"===e||"[object HTMLCollection]"===e||1===t.nodeType,o="function"==typeof n;return r||console.error("Countable: Not a valid target"),o||console.error("Countable: Not a valid callback function"),r&&o}function c(t,n){let o=""+("string"==typeof t?t:"value"in t?t.value:t.textContent);(n=n||{}).stripTags&&(o=o.replace(/<\/?[a-z][^>]*>/gi,"")),n.ignore&&e.call(n.ignore,function(t){o=o.replace(t,"")});const c=o.trim();return{paragraphs:c?(c.match(n.hardReturns?/\n{2,}/g:/\n+/g)||[]).length+1:0,sentences:c?(c.match(/[.?!…]+./g)||[]).length+1:0,words:c?(c.replace(/['";:,.?¿\-!¡]+/g,"").match(/\S+/g)||[]).length:0,characters:c?r(c.replace(/\s/g,"")).length:0,all:r(o).length}}const i={on:function(t,r,i){if(o(t,r))return Array.isArray(t)||(t=[t]),e.call(t,function(t){const e=function(){r.call(t,c(t,i))};n.push({element:t,handler:e}),e(),t.addEventListener("input",e)}),this},off:function(t){if(o(t,function(){}))return Array.isArray(t)||(t=[t]),n.filter(function(n){return-1!==t.indexOf(n.element)}).forEach(function(t){t.element.removeEventListener("input",t.handler)}),n=n.filter(function(n){return-1===t.indexOf(n.element)}),this},count:function(t,n,r){if(o(t,n))return Array.isArray(t)||(t=[t]),e.call(t,function(t){n.call(t,c(t,r))}),this},enabled:function(t){return void 0===t.length&&(t=[t]),n.filter(function(n){return-1!==t.indexOf(n.element)}).length===t.length}};"object"==typeof exports?module.exports=i:"function"==typeof define&&define.amd?define(function(){return i}):t.Countable=i}(this);