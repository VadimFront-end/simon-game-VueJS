(function(t){function n(n){for(var o,a,u=n[0],s=n[1],l=n[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,u=1;u<e.length;u++){var s=e[u];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/simon-game-VueJS/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"1de2":function(t,n,e){"use strict";e("4d85")},2065:function(t,n,e){var o={"./1.ogg":"4fe8","./2.ogg":"a84a","./3.ogg":"6f0d","./4.ogg":"49de"};function r(t){var n=i(t);return e(n)}function i(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="2065"},"49de":function(t,n,e){t.exports=e.p+"media/4.ab928396.ogg"},"4d85":function(t,n,e){},"4fe8":function(t,n,e){t.exports=e.p+"media/1.76fd3fb8.ogg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[n._v("Раунд: "+n._s(n.way.length))]),o("div",{staticClass:"field"},[o("div",{directives:[{name:"show",rawName:"v-show",value:n.block,expression:"block"}],staticClass:"block"},[o("h1",{directives:[{name:"show",rawName:"v-show",value:n.isShowEnd,expression:"isShowEnd"}],staticStyle:{background:"wheat",padding:"5px"}},[o("div",[n._v("Вы ощиблись :(")]),o("button",{staticStyle:{display:"block",margin:"auto"},on:{click:n.startGame}},[n._v("Заново?")])])]),o("GamesButton",{attrs:{now:n.now,bgColor:"blue",music:1},on:{toNaN:function(){return t.now=NaN}},nativeOn:{click:function(t){return n.setResult(1)}}}),o("GamesButton",{attrs:{now:n.now,bgColor:"red",music:2},on:{toNaN:function(){return t.now=NaN}},nativeOn:{click:function(t){return n.setResult(2)}}}),o("GamesButton",{attrs:{now:n.now,bgColor:"yellow",music:3},on:{toNaN:function(){return t.now=NaN}},nativeOn:{click:function(t){return n.setResult(3)}}}),o("GamesButton",{attrs:{now:n.now,bgColor:"green",music:4},on:{toNaN:function(){return t.now=NaN}},nativeOn:{click:function(t){return n.setResult(4)}}})],1),o("button",{on:{click:n.startGame}},[n._v("Start")]),o("div",[o("h1",[n._v("Выбор сложности:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:n.lvl,expression:"lvl"}],attrs:{name:"lvl",type:"radio"},domProps:{value:1,checked:n._q(n.lvl,1)},on:{change:function(t){n.lvl=1}}}),n._v(" Легкий "),o("input",{directives:[{name:"model",rawName:"v-model",value:n.lvl,expression:"lvl"}],attrs:{name:"lvl",type:"radio"},domProps:{value:2,checked:n._q(n.lvl,2)},on:{change:function(t){n.lvl=2}}}),n._v(" Средний "),o("input",{directives:[{name:"model",rawName:"v-model",value:n.lvl,expression:"lvl"}],attrs:{name:"lvl",type:"radio"},domProps:{value:3,checked:n._q(n.lvl,3)},on:{change:function(t){n.lvl=3}}}),n._v(" Сложный ")])])},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"games-button",style:{background:t.bgColor,opacity:t.changeColor?"1":""},on:{click:t.clickThisButton}})},u=[],s=(e("a9e3"),{name:"GamesButton",props:{bgColor:{type:String,default:function(){return""}},music:{type:Number,default:function(){return NaN}},now:{type:Number,default:function(){return NaN}}},data:function(){return{audio:new Audio,changeColor:!1}},methods:{clickThisButton:function(){var t=this;this.audio.src=e("2065")("./"+this.music+".ogg"),this.audio.play(),this.changeColor=!0,setTimeout((function(){return t.changeColor=!1}),200)}},watch:{now:function(){this.now===this.music&&(this.clickThisButton(),this.$emit("toNaN"))}},mounted:function(){this.audio.src=e("2065")("./"+this.music+".ogg")}}),l=s,c=(e("1de2"),e("2877")),d=Object(c["a"])(l,a,u,!1,null,null,null),f=d.exports,h={name:"App",components:{GamesButton:f},data:function(){return{way:[],now:NaN,result:[],block:!0,isShowEnd:!1,lvl:1}},methods:{startGame:function(){this.way=[],this.now=NaN,this.isShowEnd=!1,this.startRound()},startRound:function(){var t=this,n=this.lvl;this.way.push(Math.round(1+3*Math.random()));var e=0,o=setInterval((function(){n!==t.lvl&&clearInterval(o),t.now=t.way[e],e++,e===t.way.length&&(t.block=!1,t.result=[],clearInterval(o))}),1===this.lvl?1500:2===this.lvl?1e3:400)},setResult:function(t){var n=this;this.way[this.result.length]===t?(this.result.push(t),this.way.length===this.result.length&&(this.block=!0,setTimeout((function(){return n.startRound()}),1e3))):(this.way=[],this.now=NaN,this.result=[],this.block=!0,this.isShowEnd=!0)}},watch:{lvl:function(){this.way=[],this.now=NaN,this.result=[],this.block=!0}}},v=h,p=(e("034f"),Object(c["a"])(v,r,i,!1,null,null,null)),m=p.exports;o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({render:function(t){return t(m)}}).$mount("#app")},"6f0d":function(t,n,e){t.exports=e.p+"media/3.7d29331d.ogg"},"85ec":function(t,n,e){},a84a:function(t,n,e){t.exports=e.p+"media/2.63d780a9.ogg"}});
//# sourceMappingURL=app.290c9e03.js.map