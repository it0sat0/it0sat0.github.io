(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2205"],{"237e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stay"},[n("div",[n("el-button",{attrs:{type:"info",round:""},on:{click:e.logout}},[e._v("logout")])],1),n("h1",[e._v("待機室")]),n("br"),e._v(" 現在"+e._s(this.pe)+"人("+e._s(this.time)+"分)待ちです。 "),n("br")])},u=[],s=n("1da1"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("96cf"),n("2591")),o=n("bc3a"),i=n.n(o),c={data:function(){return{username:this.$_getusername(),pe:0,time:0}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address="+e.username+"&num=1");case 2:e.pe=t.sent,e.timeout();case 4:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){this.logouotRequest(this.email),a["a"].auth().signOut(),this.$router.push("/")},logouotRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,i.a.post("http://localhost:8040/logout",n);case 4:alert("ログアウトしました");case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),gasLogout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address="+e.username+"&num=2");case 2:case"end":return t.stop()}}),t)})))()},timeout:function(){var e=this;this.timeoutTimer=setTimeout((function(){clearTimeout(e.timeoutTimer)}),3e4)}}},m=c,h=n("2877"),l=Object(h["a"])(m,r,u,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2205.57a15bc3.js.map