(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{687:function(t,e,i){"use strict";function a(t,e,i,a,s,n,c,o){var l,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=i,r._compiled=!0),a&&(r.functional=!0),n&&(r._scopeId="data-v-"+n),c?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},r._ssrRegister=l):s&&(l=o?function(){s.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(r.functional){r._injectStyles=l;var u=r.render;r.render=function(t,e){return l.call(e),u(t,e)}}else{var h=r.beforeCreate;r.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:r}}i.d(e,"a",(function(){return a}))},701:function(t,e,i){},715:function(t,e,i){"use strict";var a=i(701);i.n(a).a},722:function(t,e,i){"use strict";var a={name:"c-switch",props:{value:{type:Boolean,required:!0},inactiveColor:{type:String,default:"#C0CCDA"},activeColor:{type:String,default:"#6cb88b"},sWidth:{type:String,default:"40"},sHeight:{type:String,default:"20"},gap:{type:String,default:"2"},duration:{type:String,default:"0.4"},disabled:{type:Boolean,default:!1},activeText:{type:String},inactiveText:{type:String}},data:function(){return{myValue:!1}},computed:{myStyle:function(){return{background:this.value&&!this.disabled?this.activeColor:this.inactiveColor,width:this.sWidth+"px",height:this.sHeight+"px",borderRadius:this.sHeight/2+"px",cursor:this.disabled?"not-allowed":this.value?"grabbing":"grab","--width":this.sHeight-2*this.gap+"px","--top":this.gap+"px","--distance":this.sWidth-this.sHeight+"px","--duration":this.duration+"s"}}},created:function(){this.myValue=this.value},methods:{onInput:function(){this.disabled||(this.myValue=!this.myValue,this.$emit("input",this.myValue))}}},s=(i(715),i(687)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"container-switch"},[i("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),t.inactiveText?i("span",{staticClass:"switch-inactive",style:{fontSize:.7*t.sHeight+"px"}},[t._v(t._s(t.inactiveText))]):t._e(),t._v(" "),i("span",{staticClass:"switch",class:{checked:t.value},style:t.myStyle}),t._v(" "),t.activeText?i("span",{staticClass:"switch-active",style:{color:t.value?t.activeColor:"#333",fontSize:.7*t.sHeight+"px"}},[t._v(t._s(t.activeText))]):t._e()])}),[],!1,null,"1ca9fae8",null);e.a=n.exports},799:function(t,e,i){},891:function(t,e,i){"use strict";var a=i(799);i.n(a).a},947:function(t,e,i){"use strict";i.r(e);var a={components:{"c-switch":i(722).a},data:function(){return{value:!1}}},s=(i(891),i(687)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"global"},[i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"30","s-height":"15"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"50","s-height":"25"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"90","s-height":"45"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"110","s-height":"55"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,"a0407e9a",null);e.default=n.exports}}]);