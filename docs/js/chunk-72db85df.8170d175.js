(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72db85df"],{3345:function(e,t,s){var a=s("d455");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=s("499e").default;n("3621114a",a,!0,{sourceMap:!1,shadowMode:!1})},bb51:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.onFormSubmit()}}},[s("div",{staticClass:"sign",staticStyle:{height:"85vh",display:"grid","place-items":"center"}},[s("div",{staticStyle:{width:"100%"}},[s("el-row",[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"})]),!0===e.sign?s("el-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content"},[s("h1",[e._v("Sign in")])])]):e._e(),!1===e.sign?s("el-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content"},[s("h1",[e._v("Sign up")])])]):e._e(),s("el-col",{attrs:{span:2}},[s("div",{staticClass:"grid-content"})]),!0===e.sign?s("el-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content",staticStyle:{display:"grid"}},[s("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.INusername,callback:function(t){e.INusername=t},expression:"INusername"}}),s("el-input",{attrs:{placeholder:"Password","show-password":""},model:{value:e.INpassword,callback:function(t){e.INpassword=t},expression:"INpassword"}}),s("el-button",{staticStyle:{padding:"12px 16px"},attrs:{type:"primary"},on:{click:e.signIn}},[e._v("login")])],1)]):e._e(),!1===e.sign?s("el-col",{attrs:{span:5}},[s("div",{staticClass:"grid-content",staticStyle:{display:"grid"}},[s("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.UPusername,callback:function(t){e.UPusername=t},expression:"UPusername"}}),s("el-input",{attrs:{placeholder:"Password"},model:{value:e.UPpassword,callback:function(t){e.UPpassword=t},expression:"UPpassword"}}),s("el-select",{attrs:{placeholder:"Gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),s("el-row",[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"},[e._v("Age:")])]),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content"},[s("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1)])],1),s("el-button",{staticStyle:{padding:"12px 8px"},attrs:{type:"primary"},on:{click:e.signUp}},[e._v("register")])],1)]):e._e(),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content"})])],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content"},[s("p",{staticStyle:{"font-size":"small","text-align":"right"}},[e._v(" This site is protected by reCAPTCHA and the Google "),s("a",{attrs:{href:"https://policies.google.com/privacy"}},[e._v("Privacy Policy")]),e._v(" and "),s("a",{attrs:{href:"https://policies.google.com/terms"}},[e._v("Terms of Service")]),e._v(" apply. ")])])])],1),!0===e.sign?s("el-button",{attrs:{type:"success",round:""},on:{click:e.signDiv}},[e._v("sign up")]):e._e(),!1===e.sign?s("el-button",{attrs:{type:"success",round:""},on:{click:e.signDiv}},[e._v("sign in")]):e._e()],1)])])])},n=[],r=s("1da1"),i=(s("d3b7"),s("3ca3"),s("ddb0"),s("9861"),s("96cf"),s("2591")),o=s("bc3a"),c=s.n(o),l={name:"HelloWorld",data:function(){return{sign:!0,UPusername:"",UPpassword:"",INusername:"",INpassword:"",message:"",userPageNum:"",logoutText:"",options:[{value:"m",label:"男性(male)"},{value:"f",label:"女性(female)"}],gender:"",age:"",company:""}},methods:{signDiv:function(){this.sign=!this.sign},signUp:function(){var e=this;i["a"].auth().createUserWithEmailAndPassword(this.UPusername,this.UPpassword).then((function(t){var s=i["a"].database(),a="userData";s.ref(a).push({email:e.UPusername,gender:e.gender,age:e.age}),alert("Create account: ",t.email),e.INusername=e.UPusername,e.INpassword=e.UPpassword,e.signIn()})).catch((function(e){alert(e.message)}))},signIn:function(){var e=this;i["a"].auth().signInWithEmailAndPassword(this.INusername,this.INpassword).then((function(t){e.sendAddress(),e.$_setuseremail(e.INusername),e.setIdRequest(e.INusername),e.emailRequest(e.INusername),e.INusername="",e.INpassword="",e.UPusername="",e.UPpassword="",e.gender="",e.age="",e.$router.push("/stay").catch((function(){})),console.log(t)}),(function(e){alert(e.message)}))},sendAddress:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console,t.next=3,c.a.get("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address="+e.INusername+"&num=0");case 3:console.log("https://script.google.com/macros/s/AKfycbwXs6H8-PbIn-NGqYbYMcqF6I0Omwhq55GWixC-dJuR5uRuF_S9srlCaUXF8vE9UEFSxw/exec?address="+e.INusername+"&num=0");case 4:case"end":return t.stop()}}),t)})))()},onFormSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$recaptchaLoaded();case 2:return t.next=4,e.$recaptcha("login");case 4:s=t.sent,a=new FormData(e.$refs.contactform),a.append("recaptcha-token",s),c.a.post("/your-form-endpoint",a).then((function(e){alert(e.message)}),(function(e){alert(e.message)}));case 8:case"end":return t.stop()}}),t)})))()},emailRequest:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new URLSearchParams,s.append("name",t),e.next=4,c.a.post("http://localhost:8040/postEmail",s);case 4:a=e.sent,this.userPageNum=a.data,"空きがありませんでした"==a.data?this.$router.push("/stay").catch((function(){})):this.$router.push("/quest").catch((function(){}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setIdRequest:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new URLSearchParams,s.append("name",t),e.next=4,c.a.post("http://localhost:8040/setIDs",s);case 4:a=e.sent,this.company=a.data,console.log(a.data),this.$_setchannel(a.data.channels),this.$_setusername(a.data.username),this.$_setpassword(a.data.password);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},u=l,d=(s("cccb"),s("2877")),p=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=p.exports},cccb:function(e,t,s){"use strict";s("3345")},d455:function(e,t,s){var a=s("24fb");t=a(!1),t.push([e.i,"h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#f56691}.el-row{display:flex;justify-content:center;align-items:center}.el-main{background-color:#e9eef3;color:#333}input{margin:5px 0;padding:5px}.el-col{border-radius:4px}.bg-purple-dark{background:#99a9bf}.bg-purple{background:#d3dce6}.bg-purple-light{background:#e5e9f2}.grid-content{border-radius:4px;min-height:36px;display:flex;justify-content:center;align-items:center}.row-bg{padding:10px 0;background-color:#f9fafc}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-72db85df.8170d175.js.map