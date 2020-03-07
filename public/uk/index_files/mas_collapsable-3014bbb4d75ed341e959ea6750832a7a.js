define(["jquery","common"],function(h,n){"use strict";function o(t,e){t&&(e.module="collapsable",n.publish("collapsable",e),n.publish("analytics:trigger",e))}function r(t,e){t.removeClass(e.o.activeClass).addClass(e.o.inactiveClass),t.attr("aria-hidden","true")}function c(t,e){t.removeClass(e.o.inactiveClass).addClass(e.o.activeClass),t.attr("aria-hidden","false")}var a={name:"not set",triggerEl:".collapsible",targetEl:".collapsible-section",targetType:"class",targetItems:".item",viewAllButton:".view-all",activeClass:"is-on",inactiveClass:"is-off",numberItemsToDisplay:6,closeOffFocus:!1,parentWrapper:!1,accordion:!1,showOnlyFirst:!1,showText:!0,showIcon:!1,headingIcon:'<span class="icon icon--toggle"></span>',headingText:'<span class="visually-hidden js-collapsable-hidden">{{txt}}</span>',useButton:!1,textString:{showThisSection:n.text.show||"Show",hideThisSection:n.text.hide||"Hide"},onSelect:!1,onFocusout:!1},t=function(t){this.o=h.extend({},a,t),this.sections=[],this.selected=!1;var e=this,s=h(this.o.triggerEl),i=s.length,o=0;if(0===i)return n.warn&&n.warn("mas_collapsible => no trigger elements in page: "+this.o.triggerEl);for(;o<i;o++)this._setupEach.call(this,o,s[o]);if(this.o.closeOffFocus){if(this.$parent=h(this.o.parentWrapper),!this.o.parentWrapper||!this.$parent.length)return void(n.warn&&n.warn("options.parentWrapper should be set & valid for closeOffFocus to work"));this.$parent.on("focusout",h.proxy(e._delayDomCheck,e))}},l=function(t,e){return!!t.hasClass(e.inactiveClass)||!t.hasClass(e.activeClass)&&t.is(":hidden")},d=function(t,e){switch(e.targetType){case"class":var s=t.next(e.targetEl);return!!s.length?s:t.siblings(e.targetEl);case"href":var i=t.attr("href"),o=h(i);return!!o.length&&o;default:return!1}},u=function(t,e){return t.find(e.targetItems)},p=function(t,e){return t.find(e.viewAllButton)};return t.prototype._delayDomCheck=function(){setTimeout(h.proxy(function(){0===this.$parent.find(document.activeElement).length&&!1!==this.selected&&("function"==typeof this.o.onFocusout&&this.o.onFocusout(this),this.hide(this.selected))},this),300)},t.prototype._modifyButtonHTML=function(t){var e,s,i=this.sections[t].trigger;if(s=this.o.showText?this.o.headingText.replace("{{txt}}",this.o.textString.showThisSection):"",e=this.o.showIcon?this.o.headingIcon:"",this.o.useButton){var o=i.text();if("A"===i[0].nodeName){var n=h("<a></a>").addClass(i[0].className).attr("id",i[0]).text(e+s+o);i.after(n),i.remove(),i=n}else i.html('<button class="unstyled-button">'+e+s+o+"</button>")}else i.attr("aria-role","button"),i.attr("tabindex","0"),i.prepend(e),i.prepend(s);this.o.showIcon&&(this.sections[t].icon=i.find(".icon")),this.o.showText&&(this.sections[t].txt=i.find(".js-collapsable-hidden"))},t.prototype._setupEach=function(e,t){var s=h(t),i=this,o=d(s,i.o),n=u(o,i.o),a=p(o,i.o);if(this.sections[e]={index:e,items:n,trigger:s,target:o,viewAll:a,hidden:l(o,i.o)},this.sections[e].target.length)return this.o.showOnlyFirst&&(this.sections[e].hidden=0!==e),this.o.accordion&&!1!==this.selected&&this.sections[e].hidden&&(this.sections[e].hidden=!0),this._modifyButtonHTML(e),this.setVisibility(!this.sections[e].hidden,e),this.sections[e].trigger.on("click",e,function(t){t.preventDefault(),"function"==typeof i.o.onSelect&&i.o.onSelect(i.sections[e]),i.setVisibility(i.sections[e].hidden,e),i.sections[e].items.length<=i.o.numberItemsToDisplay&&r(i.sections[e].viewAll,i)}),this.sections[e].viewAll.on("click",e,function(t){t.preventDefault(),c(i.sections[e].items,i),r(i.sections[e].viewAll,i)}),this.sections[e].trigger.on("keypress",function(t){32===t.which&&"BUTTON"!==i.sections[e].trigger[0].nodeName&&(i.o.useButton||(t.preventDefault(),i.sections[e].trigger.trigger("click")))}),this},t.prototype.setVisibility=function(t,e){return this[t?"show":"hide"](e),this},t.prototype.show=function(t,e){o(e,{name:this.o.name,index:t,action:"show"});var s=this.sections[t],i=s.items.slice(0,this.o.numberItemsToDisplay);return s.trigger.removeClass(this.o.inactiveClass).addClass(this.o.activeClass),c(s.target,this),c(i,this),c(s.viewAll,this),s.hidden=!1,this.o.showText&&s.txt.text(this.o.textString.hideThisSection+" "),this.o.accordion&&!1!==this.selected&&this.selected!==t&&this.hide(this.selected,!1),this.selected=t,this},t.prototype.hide=function(t,e){o(e,{name:this.o.name,index:t,action:"hide"});var s=this.sections[t],i=s.items;return s.trigger.removeClass(this.o.activeClass).addClass(this.o.inactiveClass),r(s.target,this),r(s.viewAll,this),r(i,this),s.hidden=!0,this.o.showText&&s.txt.text(this.o.textString.showThisSection+" "),this},t});