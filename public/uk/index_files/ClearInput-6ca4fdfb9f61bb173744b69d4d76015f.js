define(["jquery","DoughBaseComponent"],function(t,e){"use strict";var n,u={uiEvents:{"keyup [data-dough-clear-input]":"updateResetButton","click [data-dough-clear-input-button]":"resetForm"}};return n=function(t,e){n.baseConstructor.call(this,t,e,u),this.$resetInput=this.$el.find("[data-dough-clear-input]"),this.$resetButton=this.$el.find("[data-dough-clear-input-button]"),this.updateResetButton()},e.extend(n),n.componentName="ClearInput",n.prototype.init=function(t){this._initialisedSuccess(t)},n.prototype.updateResetButton=function(){var t=""===this.$resetInput.val()?"removeClass":"addClass";this.$resetButton[t]("is-active")},n.prototype.resetForm=function(t){this.$resetInput.val(""),this.updateResetButton(),this.$resetInput.focus(),t.preventDefault()},n});