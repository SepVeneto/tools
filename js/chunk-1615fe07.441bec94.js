(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1615fe07"],{1711:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:t.tag}},[n("div",{staticClass:"title"},[n("a",{attrs:{href:"#"+t.tag}},[t._v("#")]),n("span",[t._v(t._s(t.title))])]),n("div",{staticClass:"desc"},[t._v(t._s(t.desc))]),n("div",{staticClass:"area"},[n("div",{staticClass:"demo"},[t._t("default")],2),n("div",{staticClass:"code"},[n("transition",{attrs:{name:"collapse"}},[t.show?n("pre",[n("code",{ref:"codeRef",staticClass:"html hljs xml"},[t._v(t._s(t.code))])]):t._e()])],1),n("div",{class:["operate-button",{"is-show":t.show}]},[n("bc-button",{attrs:{type:"text"},on:{click:t.handleClick}},[t._v(t._s(t.show?"收起":"展开")+"代码")])],1)])])},a=[],o=n("1020"),r=n.n(o),i={name:"codeCard",props:{title:String,code:String,desc:String,tag:String},computed:{codes:function(){var t=this.$refs.codeRef;if(t){var e=r.a.highlightBlock(this.$refs.codeRef);return e}return""}},data:function(){return{show:!1}},created:function(){},mounted:function(){},methods:{handleClick:function(){var t=this;this.show=!this.show,this.$nextTick().then((function(){var e=t.$refs.codeRef;if(e){var n=r.a.highlightElement(t.$refs.codeRef);return console.log(n),n}return""}))}}},s=i,u=(n("1cbb"),n("2877")),l=Object(u["a"])(s,c,a,!1,null,"1245f4e5",null);e["a"]=l.exports},1788:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper"},[n("aside-menu",{attrs:{menus:t.config}}),n("main",t._l(t.asides,(function(t){return n(t.prop,{key:t.prop,tag:"component",staticClass:"container"})})),1)],1)},a=[],o=n("5530"),r=(n("d81d"),n("b893")),i=n("befa"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code-card",t._b({},"code-card",t.config,!1),[n("bc-input",{attrs:{width:"180px"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},u=[],l=n("1711"),d=n("82c5"),f={name:"basicInput",components:{codeCard:l["a"]},data:function(){return{config:d["default"],text:"bcInput"}}},p=f,b=n("2877"),h=Object(b["a"])(p,s,u,!1,null,null,null),m=h.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code-card",t._b({},"code-card",t.config,!1),[n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("bc-input",{attrs:{width:"180px",border:"none"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("bc-input",{attrs:{width:"180px",border:"bottom"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("bc-input",{attrs:{width:"180px",border:"all"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])},v=[],_=n("206c"),g={name:"inputBorder",components:{codeCard:l["a"]},data:function(){return{config:_["default"],text:"bcInput"}}},w=g,k=Object(b["a"])(w,x,v,!1,null,null,null),C=k.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code-card",t._b({},"code-card",t.config,!1),[n("bc-input",{attrs:{width:"180px","default-value":"bcInput"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},I=[],$=n("417d"),j={name:"inputDefault",components:{codeCard:l["a"]},data:function(){return{config:$["default"],text:""}}},E=j,O=Object(b["a"])(E,y,I,!1,null,null,null),S=O.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code-card",t._b({},"code-card",t.config,!1),[n("bc-input",{attrs:{width:"180px","only-display":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},A=[],B=n("73e0"),D={name:"inputDisplay",components:{codeCard:l["a"]},data:function(){return{config:B["default"],text:"bcInput"}}},T=D,q=Object(b["a"])(T,R,A,!1,null,null,null),J=q.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code-card",t._b({},"code-card",t.config,!1),[n("bc-input",{attrs:{width:"180px",password:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},P=[],V=n("1942"),z={name:"inputPassword",components:{codeCard:l["a"]},data:function(){return{config:V["default"],text:"bcInput"}}},F=z,G=Object(b["a"])(F,M,P,!1,null,null,null),H=G.exports,K=n("db49"),L={name:"inputExample",components:{AsideMenu:i["a"],BasicInput:m,InputBorder:C,InputDefault:S,InputDisplay:J,InputPassword:H},computed:{asides:function(){var t=K["b"].map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{prop:Object(r["b"])(t.prop)})}));return t}},data:function(){return{config:K["b"]}}},N=L,Q=(n("d1ce"),Object(b["a"])(N,c,a,!1,null,"22422ae9",null));e["default"]=Q.exports},"1cbb":function(t,e,n){"use strict";n("80b9")},"466d":function(t,e,n){"use strict";var c=n("d784"),a=n("825a"),o=n("50c4"),r=n("1d80"),i=n("8aa5"),s=n("14c3");c("match",1,(function(t,e,n){return[function(e){var n=r(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,n):new RegExp(e)[t](String(n))},function(t){var c=n(e,t,this);if(c.done)return c.value;var r=a(t),u=String(this);if(!r.global)return s(r,u);var l=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=s(r,u))){var b=String(d[0]);f[p]=b,""===b&&(r.lastIndex=i(u,o(r.lastIndex),l)),p++}return 0===p?null:f}]}))},"5c1f":function(t,e,n){},"80b9":function(t,e,n){},a0cd:function(t,e,n){},b202:function(t,e,n){"use strict";n("a0cd")},befa:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"aside"},[n("ul",t._l(t.menus,(function(e){return n("li",{key:e.prop,class:["menu-link"],on:{click:function(n){return t.handleClick(e.prop)}}},[n("router-link",{attrs:{to:"#"+e.prop}},[t._v(t._s(e.name))])],1)})),0)])},a=[],o=(n("ac1f"),n("466d"),{name:"asideMenu",props:{menus:{type:Array,default:function(){return[]}}},mounted:function(){this.goAnchor()},methods:{goAnchor:function(){if(location.href.match(/#/g).length>1){var t=location.href.match(/#[^#]+$/);if(!t)return;var e=document.querySelector(t[0]);if(!e)return;setTimeout((function(){document.querySelector("html").scrollTop=e.offsetTop}))}},handleClick:function(t){var e=document.querySelector("#".concat(t));e.scrollIntoView({behavior:"smooth"})}}}),r=o,i=(n("b202"),n("2877")),s=Object(i["a"])(r,c,a,!1,null,"7b51c8b9",null);e["a"]=s.exports},d1ce:function(t,e,n){"use strict";n("5c1f")}}]);