(()=>{var t={718:t=>{function r(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw i}}}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function o(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,r,n){return r&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}t.exports=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n,c=function(){function t(r){e(this,t),this.product=r}return a(t,[{key:"render",value:function(){var t=document.createElement("li");return t.className="product-item",t.innerHTML='\n                  <div class="product-item__div">\n                  <h2>'.concat(this.product.title,'</h2>\n                      <img src="').concat(this.product.imageUrl,'" alt="').concat(this.product.title,'">\n                      <div class="product-item__content">\n                      <p>').concat(this.product.descrition,'</p>\n                      <a class="path" href=').concat(this.product.path,">Дізнатись більше</a>\n                      </div>\n                  </div>\n                  "),t}}]),t}(),u=function(){function t(){e(this,t)}return a(t,[{key:"render",value:function(){var t=document.querySelector(".assortment__all"),n=document.createElement("ul");n.className="product-list";var e,o=r(i);try{for(o.s();!(e=o.n()).done;){var a=e.value,u=new c(a).render();n.append(u)}}catch(t){o.e(t)}finally{o.f()}t.append(n)}}]),t}(),l=new u;l.render()}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n(718)()})();