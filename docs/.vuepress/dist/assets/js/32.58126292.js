(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{409:function(t,e,i){},421:function(t,e,i){"use strict";var a=i(409);i.n(a).a},424:function(t,e,i){"use strict";var a={name:"c-switch",props:{value:{type:Boolean,required:!0},inactiveColor:{type:String,default:"#C0CCDA"},activeColor:{type:String,default:"#6cb88b"},sWidth:{type:String,default:"40"},sHeight:{type:String,default:"20"},gap:{type:String,default:"2"},duration:{type:String,default:"0.4"},disabled:{type:Boolean,default:!1},activeText:{type:String},inactiveText:{type:String}},data:function(){return{_value:!1}},computed:{myStyle:function(){return{background:this.value&&!this.disabled?this.activeColor:this.inactiveColor,width:this.sWidth+"px",height:this.sHeight+"px",borderRadius:this.sHeight/2+"px",cursor:this.disabled?"not-allowed":this.value?"grabbing":"grab","--width":this.sHeight-2*this.gap+"px","--top":this.gap+"px","--distance":this.sWidth-this.sHeight+"px","--duration":this.duration+"s"}}},created:function(){this._value=this.value},methods:{onInput:function(){this.disabled||(this._value=!this._value,this.$emit("input",this._value))}}},s=(i(421),i(58)),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"container-switch"},[i("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),t.inactiveText?i("span",{staticClass:"switch-inactive",style:{fontSize:.7*t.sHeight+"px"}},[t._v(t._s(t.inactiveText))]):t._e(),t._v(" "),i("span",{staticClass:"switch",class:{checked:t.value},style:t.myStyle}),t._v(" "),t.activeText?i("span",{staticClass:"switch-active",style:{color:t.value?t.activeColor:"#333",fontSize:.7*t.sHeight+"px"}},[t._v(t._s(t.activeText))]):t._e()])}),[],!1,null,"742491ec",null);e.a=c.exports},486:function(t,e,i){},578:function(t,e,i){"use strict";var a=i(486);i.n(a).a},622:function(t,e,i){"use strict";i.r(e);var a={components:{"c-switch":i(424).a},data:function(){return{value:!1}}},s=(i(578),i(58)),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"global"},[i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35",duration:"0.6"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35",duration:"0.8"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35",duration:"1"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("c-switch",{staticClass:"switch-margin",attrs:{"active-color":"#ff9234","inactive-color":"#e8e4e1","s-width":"70","s-height":"35",duration:"1.2"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,"1a2e214b",null);e.default=c.exports}}]);