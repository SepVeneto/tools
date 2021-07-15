(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1d76fa6"],{"0243":function(e,n,t){"use strict";t.r(n),n["default"]={title:"自定义单元格",desc:"",tag:"custom-cell",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n  >\n    <template #name=\"{row}\">\n      <span>{{row.name}}</span>\n    </template>\n    <template #operate=\"{row}\">\n      <bc-button type=\"edit\" @click=\"handleEdit(row)\">编辑</bc-button>\n      <bc-button type=\"delete\" @click=\"handleRemove(row)\">删除</bc-button>\n    </template>\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n        { label: '操作', prop: 'operate' },\n      ],\n      tableData: Mock.mock({\n        'rows|10': [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }],\n      }).rows\n    }\n  },\n  methods: {\n    handleEdit(row) {\n      console.log('edit', row);\n    },\n    handleRemove(row) {\n      console.log('remove', row)\n    }\n  }\n}\n<\/script>\n  "}},1020:function(e,n){var t={exports:{}};function a(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||a(t)})),e}t.exports=a,t.exports.default=a;var o=t.exports;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function l(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const s="</span>",c=e=>!!e.kind,d=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`};class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;n=e.sublanguage?"language-"+n:d(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){c(e)&&(this.buffer+=s)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){while(this.closeNode());}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every(e=>"string"===typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{g._collapse(e)}))}}class p extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){const e=new u(this,this.options);return e.value()}finalize(){return!0}}function h(e){return e?"string"===typeof e?e:e.source:null}function b(e){return f("(?=",e,")")}function f(...e){const n=e.map(e=>h(e)).join("");return n}function m(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function w(...e){const n=m(e),t="("+(n.capture?"":"?:")+e.map(e=>h(e)).join("|")+")";return t}function x(e){return new RegExp(e.toString()+"|").exec("").length-1}function E(e,n){const t=e&&e.exec(n);return t&&0===t.index}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function k(e,{joinWith:n}){let t=0;return e.map(e=>{t+=1;const n=t;let a=h(e),o="";while(a.length>0){const e=y.exec(a);if(!e){o+=a;break}o+=a.substring(0,e.index),a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o}).map(e=>`(${e})`).join(n)}const _=/\b\B/,v="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",N="\\b\\d+(\\.\\d+)?",M="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",R="\\b(0b[01]+)",S="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",j=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=f(n,/.*\b/,e.binary,/\b.*/)),l({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},D={begin:"\\\\[\\s\\S]",relevance:0},A={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[D]},I={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[D]},C={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},T=function(e,n,t={}){const a=l({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=w("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:f(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},L=T("//","$"),B=T("/\\*","\\*/"),P=T("#","$"),$={scope:"number",begin:N,relevance:0},H={scope:"number",begin:M,relevance:0},U={scope:"number",begin:R,relevance:0},z={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[D,{begin:/\[/,end:/\]/,relevance:0,contains:[D]}]}]},K={scope:"title",begin:v,relevance:0},W={scope:"title",begin:O,relevance:0},X={begin:"\\.\\s*"+O,relevance:0},G=function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})};var F=Object.freeze({__proto__:null,MATCH_NOTHING_RE:_,IDENT_RE:v,UNDERSCORE_IDENT_RE:O,NUMBER_RE:N,C_NUMBER_RE:M,BINARY_NUMBER_RE:R,RE_STARTERS_RE:S,SHEBANG:j,BACKSLASH_ESCAPE:D,APOS_STRING_MODE:A,QUOTE_STRING_MODE:I,PHRASAL_WORDS_MODE:C,COMMENT:T,C_LINE_COMMENT_MODE:L,C_BLOCK_COMMENT_MODE:B,HASH_COMMENT_MODE:P,NUMBER_MODE:$,C_NUMBER_MODE:H,BINARY_NUMBER_MODE:U,REGEXP_MODE:z,TITLE_MODE:K,UNDERSCORE_TITLE_MODE:W,METHOD_GUARD:X,END_SAME_AS_BEGIN:G});function Z(e,n){const t=e.input[e.index-1];"."===t&&n.ignoreMatch()}function J(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function V(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Z,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function q(e,n){Array.isArray(e.illegal)&&(e.illegal=w(...e.illegal))}function Y(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Q(e,n){void 0===e.relevance&&(e.relevance=1)}const ee=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=f(t.beforeMatch,b(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},ne=["of","and","for","in","not","or","if","then","parent","list","value"],te="keyword";function ae(e,n,t=te){const a=Object.create(null);return"string"===typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach((function(t){Object.assign(a,ae(e[t],n,t))})),a;function o(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach((function(n){const t=n.split("|");a[t[0]]=[e,oe(t[0],t[1])]}))}}function oe(e,n){return n?Number(n):ie(e)?0:1}function ie(e){return ne.includes(e.toLowerCase())}const re={},le=e=>{console.error(e)},se=(e,...n)=>{console.log("WARN: "+e,...n)},ce=(e,n)=>{re[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),re[`${e}/${n}`]=!0)},de=new Error;function ue(e,n,{key:t}){let a=0;const o=e[t],i={},r={};for(let l=1;l<=n.length;l++)r[l+a]=o[l],i[l+a]=!0,a+=x(n[l-1]);e[t]=r,e[t]._emit=i,e[t]._multi=!0}function ge(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw le("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),de;if("object"!==typeof e.beginScope||null===e.beginScope)throw le("beginScope must be object"),de;ue(e,e.begin,{key:"beginScope"}),e.begin=k(e.begin,{joinWith:""})}}function pe(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw le("skip, excludeEnd, returnEnd not compatible with endScope: {}"),de;if("object"!==typeof e.endScope||null===e.endScope)throw le("endScope must be object"),de;ue(e,e.end,{key:"endScope"}),e.end=k(e.end,{joinWith:""})}}function he(e){e.scope&&"object"===typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}function be(e){he(e),"string"===typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"===typeof e.endScope&&(e.endScope={_wrap:e.endScope}),ge(e),pe(e)}function fe(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=x(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(k(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function o(e){const n=new a;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}function i(t,a){const r=t;if(t.isCompiled)return r;[J,Y,be,ee].forEach(e=>e(t,a)),e.compilerExtensions.forEach(e=>e(t,a)),t.__beforeBegin=null,[V,q,Q].forEach(e=>e(t,a)),t.isCompiled=!0;let l=null;return"object"===typeof t.keywords&&t.keywords.$pattern&&(t.keywords=Object.assign({},t.keywords),l=t.keywords.$pattern,delete t.keywords.$pattern),l=l||/\w+/,t.keywords&&(t.keywords=ae(t.keywords,e.case_insensitive)),r.keywordPatternRe=n(l,!0),a&&(t.begin||(t.begin=/\B|\b/),r.beginRe=n(t.begin),t.end||t.endsWithParent||(t.end=/\B|\b/),t.end&&(r.endRe=n(t.end)),r.terminatorEnd=h(t.end)||"",t.endsWithParent&&a.terminatorEnd&&(r.terminatorEnd+=(t.end?"|":"")+a.terminatorEnd)),t.illegal&&(r.illegalRe=n(t.illegal)),t.contains||(t.contains=[]),t.contains=[].concat(...t.contains.map((function(e){return we("self"===e?t:e)}))),t.contains.forEach((function(e){i(e,r)})),t.starts&&i(t.starts,a),r.matcher=o(r),r}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=l(e.classNameAliases||{}),i(e)}function me(e){return!!e&&(e.endsWithParent||me(e.starts))}function we(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return l(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:me(e)?l(e,{starts:e.starts?l(e.starts):null}):Object.isFrozen(e)?l(e):e}var xe="11.1.0";const Ee=r,ye=l,ke=Symbol("nomatch"),_e=7,ve=function(e){const n=Object.create(null),t=Object.create(null),a=[];let r=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function d(e){return c.noHighlightRe.test(e)}function u(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=c.languageDetectRe.exec(n);if(t){const n=S(t[1]);return n||(se(l.replace("{}",t[1])),se("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>d(e)||S(e))}function g(e,n,t){let a="",o="";"object"===typeof n?(a=e,t=n.ignoreIllegals,o=n.language):(ce("10.7.0","highlight(lang, code, ...args) has been deprecated."),ce("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,a=n),void 0===t&&(t=!0);const i={code:a,language:o};C("before:highlight",i);const r=i.result?i.result:h(i.language,i.code,t);return r.code=i.code,C("after:highlight",r),r}function h(e,t,a,o){const s=Object.create(null);function d(e,n){return e.keywords[n]}function u(){if(!j.keywords)return void A.addText(I);let e=0;j.keywordPatternRe.lastIndex=0;let n=j.keywordPatternRe.exec(I),t="";while(n){t+=I.substring(e,n.index);const a=N.case_insensitive?n[0].toLowerCase():n[0],o=d(j,a);if(o){const[e,i]=o;if(A.addText(t),t="",s[a]=(s[a]||0)+1,s[a]<=_e&&(C+=i),e.startsWith("_"))t+=n[0];else{const t=N.classNameAliases[e]||e;A.addKeyword(n[0],t)}}else t+=n[0];e=j.keywordPatternRe.lastIndex,n=j.keywordPatternRe.exec(I)}t+=I.substr(e),A.addText(t)}function g(){if(""===I)return;let e=null;if("string"===typeof j.subLanguage){if(!n[j.subLanguage])return void A.addText(I);e=h(j.subLanguage,I,!0,D[j.subLanguage]),D[j.subLanguage]=e._top}else e=f(I,j.subLanguage.length?j.subLanguage:null);j.relevance>0&&(C+=e.relevance),A.addSublanguage(e._emitter,e.language)}function p(){null!=j.subLanguage?g():u(),I=""}function b(e,n){let t=1;while(void 0!==n[t]){if(!e._emit[t]){t++;continue}const a=N.classNameAliases[e[t]]||e[t],o=n[t];a?A.addKeyword(o,a):(I=o,u(),I=""),t++}}function m(e,n){return e.scope&&"string"===typeof e.scope&&A.openNode(N.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(A.addKeyword(I,N.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),I=""):e.beginScope._multi&&(b(e.beginScope,n),I="")),j=Object.create(e,{parent:{value:j}}),j}function w(e,n,t){let a=E(e.endRe,t);if(a){if(e["on:end"]){const t=new i(e);e["on:end"](n,t),t.isMatchIgnored&&(a=!1)}if(a){while(e.endsParent&&e.parent)e=e.parent;return e}}if(e.endsWithParent)return w(e.parent,n,t)}function x(e){return 0===j.matcher.regexIndex?(I+=e[0],1):(B=!0,0)}function y(e){const n=e[0],t=e.rule,a=new i(t),o=[t.__beforeBegin,t["on:begin"]];for(const i of o)if(i&&(i(e,a),a.isMatchIgnored))return x(n);return t.skip?I+=n:(t.excludeBegin&&(I+=n),p(),t.returnBegin||t.excludeBegin||(I=n)),m(t,e),t.returnBegin?0:n.length}function k(e){const n=e[0],a=t.substr(e.index),o=w(j,e,a);if(!o)return ke;const i=j;j.endScope&&j.endScope._wrap?(p(),A.addKeyword(n,j.endScope._wrap)):j.endScope&&j.endScope._multi?(p(),b(j.endScope,e)):i.skip?I+=n:(i.returnEnd||i.excludeEnd||(I+=n),p(),i.excludeEnd&&(I=n));do{j.scope&&!j.isMultiClass&&A.closeNode(),j.skip||j.subLanguage||(C+=j.relevance),j=j.parent}while(j!==o.parent);return o.starts&&m(o.starts,e),i.returnEnd?0:n.length}function _(){const e=[];for(let n=j;n!==N;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>A.openNode(e))}let v={};function O(n,o){const i=o&&o[0];if(I+=n,null==i)return p(),0;if("begin"===v.type&&"end"===o.type&&v.index===o.index&&""===i){if(I+=t.slice(o.index,o.index+1),!r){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=o,"begin"===o.type)return y(o);if("illegal"===o.type&&!a){const e=new Error('Illegal lexeme "'+i+'" for mode "'+(j.scope||"<unnamed>")+'"');throw e.mode=j,e}if("end"===o.type){const e=k(o);if(e!==ke)return e}if("illegal"===o.type&&""===i)return 1;if(L>1e5&&L>3*o.index){const e=new Error("potential infinite loop, way more iterations than matches");throw e}return I+=i,i.length}const N=S(e);if(!N)throw le(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const M=fe(N);let R="",j=o||M;const D={},A=new c.__emitter(c);_();let I="",C=0,T=0,L=0,B=!1;try{for(j.matcher.considerAll();;){L++,B?B=!1:j.matcher.considerAll(),j.matcher.lastIndex=T;const e=j.matcher.exec(t);if(!e)break;const n=t.substring(T,e.index),a=O(n,e);T=e.index+a}return O(t.substr(T)),A.closeAllNodes(),A.finalize(),R=A.toHTML(),{language:e,value:R,relevance:C,illegal:!1,_emitter:A,_top:j}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:e,value:Ee(t),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:T,context:t.slice(T-100,T+100),mode:P.mode,resultSoFar:R},_emitter:A};if(r)return{language:e,value:Ee(t),illegal:!1,relevance:0,errorRaised:P,_emitter:A,_top:j};throw P}}function b(e){const n={value:Ee(e),illegal:!1,relevance:0,_top:s,_emitter:new c.__emitter(c)};return n._emitter.addText(e),n}function f(e,t){t=t||c.languages||Object.keys(n);const a=b(e),o=t.filter(S).filter(D).map(n=>h(n,e,!1));o.unshift(a);const i=o.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(S(e.language).supersetOf===n.language)return 1;if(S(n.language).supersetOf===e.language)return-1}return 0}),[r,l]=i,s=r;return s.secondBest=l,s}function m(e,n,a){const o=n&&t[n]||a;e.classList.add("hljs"),e.classList.add("language-"+o)}function w(e){let n=null;const t=u(e);if(d(t))return;C("before:highlightElement",{el:e,language:t}),!c.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),n=e;const a=n.textContent,o=t?g(a,{language:t,ignoreIllegals:!0}):f(a);e.innerHTML=o.value,m(e,t,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),C("after:highlightElement",{el:e,result:o,text:a})}function x(e){c=ye(c,e)}const y=()=>{v(),ce("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function k(){v(),ce("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let _=!1;function v(){if("loading"===document.readyState)return void(_=!0);const e=document.querySelectorAll(c.cssSelector);e.forEach(w)}function O(){_&&v()}function N(t,a){let o=null;try{o=a(e)}catch(i){if(le("Language definition for '{}' could not be registered.".replace("{}",t)),!r)throw i;le(i),o=s}o.name||(o.name=t),n[t]=o,o.rawDefinition=a.bind(null,e),o.aliases&&j(o.aliases,{languageName:t})}function M(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]}function R(){return Object.keys(n)}function S(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function j(e,{languageName:n}){"string"===typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function D(e){const n=S(e);return n&&!n.disableAutodetect}function A(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}function I(e){A(e),a.push(e)}function C(e,n){const t=e;a.forEach((function(e){e[t]&&e[t](n)}))}function T(e){return ce("10.7.0","highlightBlock will be removed entirely in v12.0"),ce("10.7.0","Please use highlightElement now."),w(e)}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",O,!1),Object.assign(e,{highlight:g,highlightAuto:f,highlightAll:v,highlightElement:w,highlightBlock:T,configure:x,initHighlighting:y,initHighlightingOnLoad:k,registerLanguage:N,unregisterLanguage:M,listLanguages:R,getLanguage:S,registerAliases:j,autoDetection:D,inherit:ye,addPlugin:I}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=xe;for(const i in F)"object"===typeof F[i]&&o(F[i]);return Object.assign(e,F),e};var Oe=ve({});e.exports=Oe},"1ff7":function(e,n,t){var a={"./input/example/basic/code.js":"82c5","./table/example/basic/code.js":"7a93","./table/example/cell-edit/code.js":"9960","./table/example/custom-cell/code.js":"0243","./table/example/custom-header/code.js":"565c","./table/example/ellipsis/code.js":"c3e7","./table/example/multile-header/code.js":"a234","./table/example/radio/code.js":"4bf7","./table/example/row-span/code.js":"43e9","./table/example/simple-table/code.js":"6e8a","./table/example/table-api/code.js":"48b6","./table/example/table-page/code.js":"d504"};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id="1ff7"},"43e9":function(e,n,t){"use strict";t.r(n),n["default"]={title:"行合并",desc:"",tag:"row-span",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    :colspanOptions=\"{\n      includes: ['country', 'catalog'],\n      parentProp: 'country' ,\n    }\"\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '国籍', prop: 'country' },\n        { label: '生日', prop: 'date' },\n        { label: '舰种', prop: 'catalog' },\n        { label: '姓名', prop: 'name' },\n        { label: '原名', prop: 'originName' },\n        { label: '地址', prop: 'address' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n      ],\n      tableData: basicData,\n    }\n  }\n}\n<\/script>\n  "}},"48b6":function(e,n,t){"use strict";t.r(n),n["default"]={title:"分页表格(接口数据)",desc:"",tag:"table-api",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    pagination\n    :params.sync=\"params\"\n    :api=\"getList\"\n    :custom=\"false\"\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      params: {\n        page: 1,\n        rows: 20,\n      },\n      total: 100,\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height', unit: 'm' },\n        { label: '体重', prop: 'weight', unit: 'kg' },\n      ],\n      tableData: [],\n    }\n  },\n  methods: {\n    getList() {\n      const { rows } = this.params;\n      const data = Mock.mock({\n        [`rows|${rows}`]: [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }]\n      })\n      return Promise.resolve({\n        data: {\n          ...data,\n          total: 100,\n        }\n      })\n    }\n  }\n}\n<\/script>\n  "}},"4bf7":function(e,n,t){"use strict";t.r(n),n["default"]={title:"单选框",desc:"",tag:"radio",code:"\n<template>\n  <section>\n    <el-button @click=\"handleSelect\">选中第一项</el-button>\n    <bc-table\n      ref=\"bcTableRef\"\n      :config=\"tableConfig\"\n      :data=\"tableData\"\n      row-key=\"name\"\n      @radio=\"handleRadio\"\n    >\n    </bc-table>\n  </section>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { type: 'radio', width: 30 },\n        { label: '国籍', prop: 'country' },\n        { label: '生日', prop: 'date' },\n        { label: '舰种', prop: 'catalog' },\n        { label: '姓名', prop: 'name' },\n        { label: '原名', prop: 'originName' },\n        { label: '地址', prop: 'address' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n      ],\n      tableData: basicData,\n      radio: '',\n    }\n  },\n  methods: {\n    handleSelect() {\n      this.$refs.bcTableRef.toggleRadio({ name: '维内托' }, true);\n    },\n    handleRadio(val) {\n      this.radio = val;\n    }\n  }\n}\n<\/script>\n  "}},"565c":function(e,n,t){"use strict";t.r(n),n["default"]={title:"自定义表头",desc:"",tag:"custom-header",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n  >\n    <template #name-header=\"{column}\">\n      <span>custom</span>\n      <span>{{column.label}}</span>\n    </template>\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '姓名', prop: 'name', header: true },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n      ],\n      tableData: Mock.mock({\n        'rows|10': [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }],\n      }).rows\n    }\n  }\n}\n<\/script>\n  "}},"6e8a":function(e,n,t){"use strict";t.r(n),n["default"]={title:"简化表格",desc:"",tag:"simple-table",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    simple\n    pagination\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height', unit: 'm' },\n        { label: '体重', prop: 'weight', unit: 'kg' },\n      ],\n      tableData: basicData,\n    }\n  },\n  created() {\n    this.getList();\n  },\n  methods: {\n    getList() {\n      const data = Mock.mock({\n        [`rows|".concat(100,"`]: [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }]\n      })\n      this.tableData = data.rows;\n    }\n  }\n}\n<\/script>\n  ")}},"7a93":function(e,n,t){"use strict";t.r(n),n["default"]={title:"基本用法",desc:"bcTable的基本用法",tag:"basic-table",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n  />\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height', unit: 'm' },\n        { label: '体重', prop: 'weight', unit: 'kg' },\n      ],\n      tableData: Mock.mock({\n        'rows|10': [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }],\n      }).rows\n    }\n  }\n}\n<\/script>\n  "}},"82c5":function(e,n,t){"use strict";t.r(n),n["default"]={title:"基本用法",desc:"bcInput的基本用法",tag:"basic-input",code:"\n<template>\n  <bc-input v-model=\"text\" />\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      text: '',\n    }\n  }\n}\n<\/script>\n  "}},9960:function(e,n,t){"use strict";t.r(n),n["default"]={title:"行内编辑",desc:"",tag:"cell-edit",code:"\n<template>\n  <bc-table\n    ref=\"bcTableRef\"\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    @save=\"handleSave\"\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      config,\n      tableConfig: [\n        { label: '国籍', prop: 'country' },\n        { label: '生日', prop: 'date' },\n        { label: '舰种', prop: 'catalog' },\n        { label: '姓名', prop: 'name' },\n        { label: '原名', prop: 'originName', editable: true },\n        { label: '地址', prop: 'address' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n      ],\n      tableData: basicData,\n      row: {},\n      cell: '',\n    }\n  },\n  methods: {\n    handleSave(row, cell) {\n      this.row = row;\n      this.cell = cell;\n    }\n  }\n}\n<\/script>\n  "}},a234:function(e,n,t){"use strict";t.r(n),n["default"]={title:"多级表头",desc:"",tag:"multile-header",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        {\n          label: '个人信息',\n          props: 'personal-info',\n          children: [\n            { label: '身高', prop: 'height' },\n            { label: '体重', prop: 'weight' },\n          ]\n        }\n      ],\n      tableData: Mock.mock({\n        'rows|10': [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }],\n      }).rows\n    }\n  }\n}\n<\/script>\n  "}},c3e7:function(e,n,t){"use strict";t.r(n),n["default"]={title:"行内省略",desc:"",tag:"ellipsis",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    show-overflow-tooltip\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      tableConfig: [\n        { label: '国籍', prop: 'country' },\n        { label: '生日', prop: 'date' },\n        { label: '舰种', prop: 'catalog' },\n        { label: '姓名', prop: 'name' },\n        { label: '原名', prop: 'originName', showOverflowTooltip: true },\n        { label: '地址', prop: 'address' },\n        { label: '身高', prop: 'height' },\n        { label: '体重', prop: 'weight' },\n      ],\n      tableData: basicData,\n    }\n  }\n}\n<\/script>\n  "}},d504:function(e,n,t){"use strict";t.r(n),n["default"]={title:"分页表格(自定义数据)",desc:"",tag:"table-page",code:"\n<template>\n  <bc-table\n    :config=\"tableConfig\"\n    :data=\"tableData\"\n    pagination\n    :total=\"total\"\n    :params.sync=\"params\"\n    :api=\"getList\"\n  >\n  </bc-table>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      params: {\n        page: 1,\n        rows: 20,\n      },\n      total: 100,\n      tableConfig: [\n        { label: '姓名', prop: 'name' },\n        { label: '年龄', prop: 'age' },\n        { label: '身高', prop: 'height', unit: 'm' },\n        { label: '体重', prop: 'weight', unit: 'kg' },\n      ],\n      tableData: basicData,\n    }\n  },\n  methods: {\n    getList() {\n      const { rows } = this.params;\n      const data = Mock.mock({\n        [`rows|${rows}`]: [{\n          name: '@cname',\n          age: '@integer(1,100)',\n          height: '@float(100, 180, 2, 2)',\n          weight: '@float(40, 100, 2, 2)'\n        }]\n      })\n      this.tableData = data.rows;\n    }\n  }\n}\n<\/script>\n  "}},db49:function(e,n,t){"use strict";t.d(n,"b",(function(){return s}));var a=t("3835"),o=(t("d81d"),t("d3b7"),t("ddb0"),t("ac1f"),t("4de4"),t("1ff7")),i=function(e){return e.keys().map((function(n){var t=/(?<=\.\/)[a-zA-Z|-]*/,o=t.exec(n),i=Object(a["a"])(o,1),r=i[0];return{module:r,data:e(n)}}))},r=i(o),l=r.reduce((function(e,n){var t=n.module,a=n.data;return e.push({module:t,name:a.default.title,prop:a.default.tag}),e}),[]),s=l.filter((function(e){return"table"===e.module})),c=l.filter((function(e){return"input"===e.module})),d=l.filter((function(e){return"select"===e.module})),u=l.filter((function(e){return"button"===e.module})),g=l.filter((function(e){return"search"===e.module})),p=l.filter((function(e){return"switch"===e.module})),h=[{name:"表格",prop:"table",children:s},{name:"输入框",prop:"input",children:c},{name:"选择框",prop:"select",children:d},{name:"按钮",prop:"button",children:u},{name:"搜索栏",prop:"search",children:g},{name:"开关",prop:"switch",children:p}];n["a"]=h}}]);