(()=>{var e,t,n,o,r,c={546:(e,t,n)=>{n(145),e.exports=function(){var e=document.querySelector(".scroll-to-top"),t=document.querySelector("#about-us"),n=document.querySelector(".contact-form");console.log(n),window.addEventListener("scroll",(function(){window.pageYOffset>"1000"?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(){window.scrollTo({top:1,behavior:"smooth"})})),t.addEventListener("click",(function(e){e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"center"})}))}},122:(e,t,n)=>{n(98),e.exports=function(){var e=document.querySelector(".toggle-button"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".mobile-nav__close"),o=document.querySelector(".mobile-nav__backdrop");e.addEventListener("click",(function(){t.style.display="flex",o.style.display="block"})),n.addEventListener("click",(function(){t.classList.add("hide-back"),setTimeout((function(){t.classList.remove("hide-back"),t.style.display="none",o.style.display="none"}),1e3)}))}},871:(e,t,n)=>{n(782),e.exports=function(){var e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(r)}function o(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}e.forEach((function(e){e.addEventListener("click",n)})),t.addEventListener("click",(function(e){e.target!==t&&""!=e.target.getAttribute("data-close")||o()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&t.classList.contains("show")&&o()}));var r=setTimeout(n,5e3);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(n(),window.removeEventListener("scroll",e))}))}},522:(e,t,n)=>{n(270);var o=new Date("Sep 01 2022 00:00:00");function r(){var e=new Date;gap=o-e;var t=Math.floor(gap/1e3/60/60/24),n=Math.floor(gap/1e3/60/60)%24,r=Math.floor(gap/1e3/60)%60,c=Math.floor(gap/1e3)%60;gap<0&&(t+=14,n+=24,r+=60,c+=60),document.getElementById("d").innerText=t,document.getElementById("h").innerText=n,document.getElementById("m").innerText=r,document.getElementById("s").innerText=c}r(),setInterval(r,1e3),e.exports=r},149:(e,t,n)=>{n(745);var o=document.querySelectorAll(".next"),r=document.querySelectorAll(".prev"),c=document.querySelectorAll(".reviews__slider");e.exports=function(){var e=1;function t(t){var n,o=document.getElementsByClassName("rewievs"),r=document.getElementsByClassName("reviews__slider-item");for(t>o.length&&(e=1),t<1&&(e=o.length),n=0;n<o.length;n++)o[n].style.display="none";for(n=0;n<r.length;n++)o[e-1].style.display="block"}t(e),o.forEach((function(n){n.addEventListener("click",(function(){t(e+=1)}))})),r.forEach((function(n){n.addEventListener("click",(function(){t(e-=1)}))})),c.forEach((function(n){n.addEventListener("click",(function(n){t(e=n.target.id)}))}));var n=document.querySelectorAll(".rewievs");n.forEach((function(){addEventListener("touchstart",i,!1)})),n.forEach((function(){addEventListener("touchmove",a,!1)}));var s=null,l=null;function i(e){var t=e.touches[0];s=t.clientX,l=t.clientY}function a(n){if(!s||!l)return!1;var o=n.touches[0].clientX,r=n.touches[0].clientY,c=o-s,i=r-l;Math.abs(c)>Math.abs(i)&&t(c>0?e+=1:e-=1),s=null,l=null}}},629:(e,t,n)=>{n(417),n(877),n(322),n(71),n(402),n(11),n(555),n(951),n(745),e.exports=function(){var e=document.querySelector(".tabs-variants"),t=document.querySelector("#comercial"),n=document.querySelector("#residential"),o=document.querySelector("#industrial"),r=document.querySelector(".comercial"),c=document.querySelector(".residential"),s=document.querySelector(".industrial");function l(e){document.querySelector(e).classList.remove("extractor-tabs")}e.addEventListener("click",(function(e){console.log(e.target.className),"comercial__tab-identify"!==e.target.id&&"comercial-image-btn"!==e.target.className&&"comercial-text-btn"!==e.target.className||(r.classList.add("extractor-tabs"),l(".residential"),l(".industrial"),o.style.display="none",n.style.display="none",t.style.display="flex"),"residential__tab-identify"!==e.target.id&&"residential-image-btn"!==e.target.className&&"residential-text-btn"!==e.target.className||(c.classList.add("extractor-tabs"),l(".comercial"),l(".industrial"),o.style.display="none",t.style.display="none",n.style.display="flex"),"industrial__tab-identify"!==e.target.id&&"industrial-image-btn"!==e.target.className&&"industrial-text-btn"!==e.target.className||(s.classList.add("extractor-tabs"),l(".comercial"),l(".residential"),t.style.display="none",n.style.display="none",o.style.display="flex")}))}},145:(e,t,n)=>{"use strict";n.r(t)},98:(e,t,n)=>{"use strict";n.r(t)},745:(e,t,n)=>{"use strict";n.r(t)},322:(e,t,n)=>{"use strict";n.r(t)},11:(e,t,n)=>{"use strict";n.r(t)},877:(e,t,n)=>{"use strict";n.r(t)},417:(e,t,n)=>{"use strict";n.r(t)},71:(e,t,n)=>{"use strict";n.r(t)},782:(e,t,n)=>{"use strict";n.r(t)},270:(e,t,n)=>{"use strict";n.r(t)},402:(e,t,n)=>{"use strict";n.r(t)},951:(e,t,n)=>{"use strict";n.r(t)},555:(e,t,n)=>{"use strict";n.r(t)}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return c[e](n,n.exports,l),n.exports}l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=l(629),t=l(122),n=l(522),o=l(871),r=l(149),l(546)(),e(),t(),n(),o(),r()})();
//# sourceMappingURL=main.bundle.js.map