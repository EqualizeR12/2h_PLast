(()=>{var e,t,o,n,r={122:(e,t,o)=>{o(98),e.exports=function(){var e=document.querySelector(".toggle-button"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".mobile-nav__close"),n=document.querySelector(".mobile-nav__backdrop");e.addEventListener("click",(function(){t.style.display="flex",n.style.display="block"})),o.addEventListener("click",(function(){t.classList.add("hide-back"),setTimeout((function(){t.classList.remove("hide-back"),t.style.display="none",n.style.display="none"}),1e3)}))}},114:(e,t,o)=>{o(782),o(270),o(417),o(877),e.exports=function(){console.log("script works fine")}},871:e=>{e.exports=function(){var e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function o(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(r)}function n(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}e.forEach((function(e){e.addEventListener("click",o)})),t.addEventListener("click",(function(e){e.target!==t&&""!=e.target.getAttribute("data-close")||n()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&t.classList.contains("show")&&n()}));var r=setTimeout(o,3e3);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(o(),window.removeEventListener("scroll",e))}))}},522:e=>{e.exports=function(){function e(e){return e>=0&&e<10?"0".concat(e):e}!function(t,o){var n=document.querySelector(t),r=n.querySelector("#days"),s=n.querySelector("#hours"),c=n.querySelector("#minutes"),i=n.querySelector("#seconds"),l=setInterval(a,1e3);function a(){var t=function(e){var t=Date.parse(e)-Date.parse(new Date);return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60),total:t}}(o);r.innerHTML=e(t.days),s.innerHTML=e(t.hours),c.innerHTML=e(t.minutes),i.innerHTML=e(t.seconds),t.total<=0&&clearInterval(l)}a()}(".timer","2022-09-10")}},98:(e,t,o)=>{"use strict";o.r(t)},877:(e,t,o)=>{"use strict";o.r(t)},417:(e,t,o)=>{"use strict";o.r(t)},782:(e,t,o)=>{"use strict";o.r(t)},270:(e,t,o)=>{"use strict";o.r(t)}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,c),o.exports}c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=c(114),t=c(122),o=c(522),n=c(871),e(),t(),o(),n()})();
//# sourceMappingURL=main.bundle.js.map