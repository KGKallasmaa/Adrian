define([],function(){"use strict";function e(e,t){try{return e in t&&null!==t[e]}catch(n){return!1}}var t={};return t.js=e("querySelector",document)&&e("localStorage",window)&&e("addEventListener",window)?"advanced":"basic",t.touch=e("ontouchstart",window)||e("onmsgesturechange",window),t.localstorage=e("localStorage",window),t.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,t.inputtypes=Modernizr.inputtypes,t.mediaQueries="undefined"!=typeof window.matchMedia||"undefined"!=typeof window.msMatchMedia,t.test=e,t});