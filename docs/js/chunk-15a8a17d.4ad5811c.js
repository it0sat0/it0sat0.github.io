(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15a8a17d"],{"28e8":function(t,e,s){var a=s("7915");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("499e").default;i("b0f553be",a,!0,{sourceMap:!1,shadowMode:!1})},5073:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quest",staticStyle:{"min-height":"85vh"}},[s("div",{attrs:{id:"top"}}),s("div",{staticClass:"sub_menu"},[s("el-row",[s("el-col",{attrs:{span:11}},[s("div",{staticClass:"grid-content"})]),s("el-col",{attrs:{span:2}},[s("div",{staticClass:"grid-content"},[s("el-button",{attrs:{type:"info",round:""},on:{click:t.logout}},[t._v("logout")])],1)]),s("el-col",{attrs:{span:11}},[s("div",{staticClass:"grid-content"})])],1)],1),!0===t.qActive&&!0===t.speedCheck?s("div",{staticClass:"dire-quest"},[s("h1",[t._v("SBSOD")]),s("div",{staticClass:"block"},[t._m(0),s("br"),s("font",{attrs:{size:"1"}},[t._v("かなり当てはまる←--------------------------→全く当てはまらない")]),s("el-rate",{attrs:{"icon-classes":t.iconClasses,"void-icon-class":"el-icon-help",colors:t.colors,max:7},model:{value:t.q1,callback:function(e){t.q1=e},expression:"q1"}})],1),s("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{type:"primary"},on:{click:t.calc}},[t._v("回答")])],1):t._e(),!1===t.speedCheck?s("div",{staticClass:"webSpeed"},[s("h2",[t._v("ネットの速度が遅いです！ほかの環境でお試しください！！")])]):t._e(),!1===t.qActive?s("div",{staticClass:"result"},[s("h2",[t._v("SBSOD 結果はこちら↓")]),t._v(" 数値が4.75を "),t.re>4.75?s("div",[t._v("超えたため、方向音痴ではありません")]):t._e(),t.re<=4.75?s("div",[t._v("以下のため、方向音痴という結果になりました")]):t._e(),s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900",max:7},model:{value:t.re,callback:function(e){t.re=e},expression:"re"}}),s("el-button",{attrs:{type:"primary"},on:{click:t.goToTest}},[t._v("認知症検査に進む")])],1):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"demonstration"},[t._v(" Q1 質問1"),s("br"),t._v(" "),t._v(" I am very good at giving directions. "),s("br"),t._v(" 道順を教えるのが得意だ。")])}],o=s("1da1"),n=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("9861"),s("2591")),c=s("bc3a"),r=s.n(c),l={data:function(){return{qActive:!0,speedCheck:!1,datasize:322e3,ed:0,tm:0,sp:0,st:(new Date).getTime(),q1:null,re:null,colors:{2:"#F7BA2A",4:{value:"#FF9900",excluded:!0},5:"#ff6347",7:"#dc143c"},iconClasses:["el-icon-help","el-icon-help","el-icon-help"]}},methods:{calc:function(){this.re=this.q1,this.qActive=!1},goToTest:function(){this.$router.push("/about").catch((function(){}))},logout:function(){clearTimeout(this.timeoutTimer),this.logouotRequest(this.email),n["a"].auth().signOut(),clearTimeout(this.timeoutTimer),this.$router.push("/")},logouotRequest:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new URLSearchParams,s.append("name",e),t.next=4,r.a.post("http://localhost:8040/logout",s);case 4:alert("ログアウトしました");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){this.ed=(new Date).getTime(),this.tm=(this.ed-this.st)/1e3,this.sp=Math.floor(this.datasize/this.tm),this.sp>5e6?this.speedCheck=!0:(alert("インターネット速度がかなり遅いです。\nほかの環境で再度お試しください"),this.logout())}},u=l,d=(s("9250"),s("2877")),h=Object(d["a"])(u,a,i,!1,null,"af5ebd8a",null);e["default"]=h.exports},7915:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"h1[data-v-af5ebd8a],h2[data-v-af5ebd8a]{font-weight:400}.block[data-v-af5ebd8a]{margin-top:10px}.el-button[data-v-af5ebd8a]{margin-top:20px}.sub_menu[data-v-af5ebd8a]{margin:0}",""]),t.exports=e},9250:function(t,e,s){"use strict";s("28e8")}}]);
//# sourceMappingURL=chunk-15a8a17d.4ad5811c.js.map