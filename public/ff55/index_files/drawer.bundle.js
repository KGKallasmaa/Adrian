(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drawer"],{"./nest/scripts/components/navigation/drawer.js":function(e,t,n){"use strict";(function(t){var a=n("./nest/scripts/utils/trapFocus.js");var r=o(a);var i=n("./nest/scripts/utils/i18n/vueI18nConfig.js");var s=o(i);function o(e){return e&&e.__esModule?e:{default:e}}var d=(0,s.default)();var c=document.querySelector(".js-header-menu-button");var l=document.querySelector(".js-drawer-nav");var u=document.querySelector(".js-drawer-screen");var f=document.querySelectorAll(".js-drawer-nav a");var v=document.querySelector(".js-header-menu-button-text-default");var b=document.querySelector(".js-header-menu-button-text-active");function m(){[c,u].forEach(function(e){e.addEventListener("click",j,false)});f.forEach(function(e){e.setAttribute("tabindex","-1")});y();p()}function p(){var e=t(".js-drawer-nav");e.append('<a href="#" class="sr-skip-link sr-mobile-nav-close">'+d.t("close")+"</a>");t(".sr-mobile-nav-close")[0].addEventListener("click",j)}function h(){return l.classList.contains("is-active")}function y(){document.addEventListener("keydown",function(e){27===e.keyCode&&h()&&j()})}var g=null;function j(){c.classList.toggle("is-active");c.setAttribute("aria-expanded",!h());c.setAttribute("disabled",h());l.setAttribute("aria-hidden",h());l.classList.toggle("is-active");if(h()){u.style.display="block";f.forEach(function(e){e.removeAttribute("tabindex")});l.addEventListener("transitionend",function e(){u.classList.add("is-active");l.removeEventListener("transitionend",e);c.removeAttribute("disabled");l.querySelector("ul:first-of-type li:first-child a").focus();g=(0,r.default)(l,[c])},false)}else{u.classList.remove("is-active");f.forEach(function(e){e.setAttribute("tabindex","-1")});l.addEventListener("transitionend",function e(){u.style.display="none";l.removeEventListener("transitionend",e);c.removeAttribute("disabled");c.focus();g&&l.removeEventListener("keydown",g)},false)}v.setAttribute("aria-hidden",h());b.setAttribute("aria-hidden",!h())}e.exports={init:m,menuIsActive:h}}).call(this,n("jquery"))},"./nest/scripts/utils/trapFocus.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var a=n("./node_modules/cash-dom/dist/cash.esm.js");var r=i(a);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];var a=':scope > a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';var i='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';var s=e.querySelectorAll(a);s=Array.prototype.slice.call(s);t.length>0&&t.forEach(function(e){s.unshift(e)});n.length>0&&n.forEach(function(e){s.push(e)});var o=s[0];var d=s[s.length-1];var c=s[s.length-1];function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{toggleClose:false},a=n.toggleClose;var o=(0,r.default)("#"+t);var l=(0,r.default)("#"+o.attr("data-dropdown"));if(l.attr("data-open")||a){s=e.querySelectorAll(i);c=s[s.length-1]}else c=d}(0,r.default)(document).on("click",'[data-js-component="dropdown"]',function(e){var t=(0,r.default)(e.target).closest('[data-js-component="dropdown"]').attr("id");l(t)});e.addEventListener("keydown",f);var u=9;function f(e){var t="Tab"===e.key||e.keyCode===u;if(!t)return;if(e.shiftKey){if(document.activeElement===o){e.preventDefault();c.focus()}}else if(document.activeElement===c){e.preventDefault();o.focus()}}return f}}}]);