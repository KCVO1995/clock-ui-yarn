(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{687:function(t,e,n){"use strict";function o(t,e,n,o,r,i,l,s){var c,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),l?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},a._ssrRegister=c):r&&(c=s?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(a.functional){a._injectStyles=c;var u=a.render;a.render=function(t,e){return c.call(e),u(t,e)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:a}}n.d(e,"a",(function(){return o}))},714:function(t,e,n){},723:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(84),n(85),n(119),n(21),n(47),n(62);var o=n(86);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(o.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,l=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw l}}}}},730:function(t,e,n){"use strict";var o=n(714);n.n(o).a},736:function(t,e,n){"use strict";n(428);var o=n(723),r={name:"ScrollIndicator",data:function(){return{scrollNode:{},timer:null,currentScroll:0}},props:{colors:{type:Array|String,default:"#75daad"},scrollElementId:{type:String},delay:{type:Boolean,default:!1}},computed:{node:function(){return this.scrollElementId?document.querySelector("#".concat(this.scrollElementId)):document.scrollingElement},eventNode:function(){return this.scrollElementId?document.querySelector("#".concat(this.scrollElementId)):window}},mounted:function(){var t=this;if(this.scrollNode=document.querySelector(".scroll-indicator"),this.scroll(),this.paintColor(),!this.delay)return this.eventNode.addEventListener("scroll",this.scroll);this.eventNode.addEventListener("scroll",(function(){null!==t.timer&&clearTimeout(t.timer),t.timer=setTimeout(t.scroll,300)}))},methods:{scroll:function(){var t=this.node.scrollHeight-this.node.clientHeight,e=this.node.scrollTop/t*100;this.delay?this.smoothMove(e):this.scrollNode.style.width=Math.round(e)+"%"},paintColor:function(){if("string"==typeof this.colors)this.scrollNode.style.background="linear-gradient(to right,".concat(this.colors,", ").concat(this.colors,")");else if(this.colors instanceof Array){var t,e="linear-gradient(to right",n=Object(o.a)(this.colors);try{for(n.s();!(t=n.n()).done;){var r=t.value;e+=",".concat(r)}}catch(t){n.e(t)}finally{n.f()}this.scrollNode.style.background=e+")"}},smoothMove:function(t){var e=this.currentScroll===Math.round(t);Math.round(t)>this.currentScroll?this.currentScroll+=.5:this.currentScroll-=.5,this.scrollNode.style.width=this.currentScroll+"%";var n=window.requestAnimationFrame(this.smoothMove.bind(null,t));e&&window.cancelAnimationFrame(n)}}},i=(n(730),n(687)),l=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"scroll-indicator"})}),[],!1,null,"04297142",null);e.a=l.exports},787:function(t,e,n){},879:function(t,e,n){"use strict";var o=n(787);n.n(o).a},939:function(t,e,n){"use strict";n.r(e);var o={components:{"c-scroll-indicator":n(736).a}},r=(n(879),n(687)),i=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"global"},[e("c-scroll-indicator",{attrs:{delay:""}})],1)}),[],!1,null,"3a6665eb",null);e.default=i.exports}}]);