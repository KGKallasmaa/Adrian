!function(o,r){"use strict";function u(e){var t=r.console;n[e]||(n[e]=!0,o.migrateWarnings.push(e),t&&t.warn&&!o.migrateMute&&(t.warn("JQMIGRATE: "+e),o.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r}})}var e;o.migrateVersion="3.0.0",(e=r.console&&r.console.log&&function(){r.console.log.apply(r.console,arguments)})&&(o&&!/^[12]\./.test(o.fn.jquery)||e("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),o.migrateWarnings&&e("JQMIGRATE: Migrate plugin loaded multiple times"),e("JQMIGRATE: Migrate is installed"+(o.migrateMute?"":" with logging active")+", version "+o.migrateVersion));var n={};o.migrateWarnings=[],o.migrateTrace===undefined&&(o.migrateTrace=!0),o.migrateReset=function(){n={},o.migrateWarnings.length=0},"BackCompat"===document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a=o.fn.init,s=o.isNumeric,c=o.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(i in o.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},o.fn.init.prototype=o.fn,o.find=function(e){var t=Array.prototype.slice.call(arguments);if("string"==typeof e&&l.test(e))try{document.querySelector(e)}catch(r){e=e.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{document.querySelector(e),u("Attribute selector with '#' must be quoted: "+t[0]),t[0]=e}catch(n){u("Attribute selector with '#' was not fixed: "+t[0])}}return c.apply(this,t)},c)Object.prototype.hasOwnProperty.call(c,i)&&(o.find[i]=c[i]);o.fn.size=function(){return u("jQuery.fn.size() is deprecated; use the .length property"),this.length},o.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},o.isNumeric=function(e){function t(e){var t=e&&e.toString();return!o.isArray(e)&&0<=t-parseFloat(t)+1}var r=s(e),n=t(e);return r!==n&&u("jQuery.isNumeric() should not be called on constructed objects"),n},t(o,"unique",o.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),t(o.expr,"filters",o.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),t(o.expr,":",o.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var d=o.ajax;o.ajax=function(){var e=d.apply(this,arguments);return e.promise&&(t(e,"success",e.done,"jQXHR.success is deprecated and removed"),t(e,"error",e.fail,"jQXHR.error is deprecated and removed"),t(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var f=o.fn.removeAttr,y=o.fn.toggleClass,g=/\S+/g;o.fn.removeAttr=function(e){var r=this;return o.each(e.match(g),function(e,t){o.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),f.apply(this,arguments)};var h=!(o.fn.toggleClass=function(t){return t!==undefined&&"boolean"!=typeof t?y.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&o.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":o.data(this,"__className__")||"")}))});o.swap&&o.each(["height","width","reliableMarginRight"],function(e,t){var r=o.cssHooks[t]&&o.cssHooks[t].get;r&&(o.cssHooks[t].get=function(){var e;return h=!0,e=r.apply(this,arguments),h=!1,e})}),o.swap=function(e,t,r,n){var i,a,s={};for(a in h||u("jQuery.swap() is undocumented and deprecated"),t)s[a]=e.style[a],e.style[a]=t[a];for(a in i=r.apply(e,n||[]),t)e.style[a]=s[a];return i};var m=o.data;o.data=function(e,t,r){var n;return t&&t!==o.camelCase(t)&&(n=o.hasData(e)&&m.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):m.apply(this,arguments)};var v=o.Tween.prototype.run;o.Tween.prototype.run=function(e){1<o.easing[this.easing].length&&(u('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),o.easing[this.easing]=o.easing[this.easing].bind(o.easing,e,this.options.duration*e,0,1,this.options.duration)),v.apply(this,arguments)};var j=o.fn.load,Q=o.event.fix;o.event.props=[],o.event.fixHooks={},o.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],i=o.event.props;if(i.length)for(u("jQuery.event.props are deprecated and removed: "+i.join());i.length;)o.event.addProp(i.pop());if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(i=n.props)&&i.length))for(;i.length;)o.event.addProp(i.pop());return t=Q.call(this,e),n&&n.filter?n.filter(t,e):t},o.each(["load","unload","error"],function(e,t){o.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?j.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),o(function(){o(document).triggerHandler("ready")}),o.event.special.ready={setup:function(){this===document&&u("'ready' event is deprecated")}},o.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)}});var b=o.fn.offset;o.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||document).documentElement,o.contains(e,t)?b.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var w=o.param;o.param=function(e,t){var r=o.ajaxSettings&&o.ajaxSettings.traditional;return t===undefined&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),w.call(this,e,t)};var x=o.fn.andSelf||o.fn.addBack;o.fn.andSelf=function(){return u("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),x.apply(this,arguments)};var A=o.Deferred,S=[["resolve","done",o.Callbacks("once memory"),o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory"),o.Callbacks("memory")]];o.Deferred=function(e){var a=A(),s=a.promise();return a.pipe=s.pipe=function(){var i=arguments;return u("deferred.pipe() is deprecated"),o.Deferred(function(n){o.each(S,function(e,t){var r=o.isFunction(i[e])&&i[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&o.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===s?n.promise():this,r?[e]:arguments)})}),i=null}).promise()},e&&e.call(a,a),a}}(jQuery,window);