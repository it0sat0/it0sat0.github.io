(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2205"],{"237e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stay"},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:e.logout}},[e._v("logout")])],1),n("h1",[e._v("待機室")]),n("br"),e._v(" 現在(0)"+e._s(this.pe)+"人待ちです。 "),n("br")])},s=[],c=n("1da1"),a=(n("96cf"),n("bc3a")),u=n.n(a),o={data:function(){return{username:this.$_getuserID(),pe:0}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return null==e.$_getuserID&&(alert("ホーム画面から再度お試しください"),e.$router.push("/").catch((function(){}))),t.next=3,u.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address=test@test.com&num=1").data.i;case 3:e.pe=t.sent;case 4:case"end":return t.stop()}}),t)})))()},methods:{gasUpdate:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address=test@test.com&num=1").data.i;case 2:e.pe=t.sent;case 3:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address=test@test.com&num=2");case 2:e.$router.push("/").catch((function(){}));case 3:case"end":return t.stop()}}),t)})))()}}},i=o,p=n("2877"),m=Object(p["a"])(i,r,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0b2205.39f1f8d3.js.map