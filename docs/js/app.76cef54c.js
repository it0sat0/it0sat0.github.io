(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0a262415":"d5f170fc","chunk-1accc0f6":"08e9bd62","chunk-2d0b2205":"eae3d2e0","chunk-2d21a3d2":"d1583e10"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("3ebb")},"3ebb":function(e,t,n){var a=n("e31a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("517436b3",a,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("form",{ref:"contactform",on:{submit:function(t){return t.preventDefault(),e.onFormSubmit()}}},[n("div",{staticClass:"sign"},[n("div",{staticClass:"signin"},[n("h2",[e._v("Sign in")]),n("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.INusername,callback:function(t){e.INusername=t},expression:"INusername"}}),n("el-input",{attrs:{placeholder:"Password"},model:{value:e.INpassword,callback:function(t){e.INpassword=t},expression:"INpassword"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v("login")])],1),n("div",{staticClass:"signup"},[n("h2",[e._v("Sign up")]),n("el-input",{attrs:{placeholder:"Email Adress"},model:{value:e.UPusername,callback:function(t){e.UPusername=t},expression:"UPusername"}}),n("el-input",{attrs:{placeholder:"Password"},model:{value:e.UPpassword,callback:function(t){e.UPpassword=t},expression:"UPpassword"}}),n("el-select",{attrs:{placeholder:"Gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" Age:"),n("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),n("el-button",{attrs:{type:"primary"},on:{click:e.signUp}},[e._v("register")])],1)]),e._m(0)]),n("router-view")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" This site is protected by reCAPTCHA and the Google "),n("a",{attrs:{href:"https://policies.google.com/privacy"}},[e._v("Privacy Policy")]),e._v(" and "),n("a",{attrs:{href:"https://policies.google.com/terms"}},[e._v("Terms of Service")]),e._v(" apply. ")])}],s=n("1da1"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("96cf"),n("2591")),u=n("bc3a"),c=n.n(u),l={name:"HelloWorld",data:function(){return{UPusername:"",UPpassword:"",INusername:"",INpassword:"",message:"",userPageNum:"",logoutText:"",options:[{value:"m",label:"男性(male)"},{value:"f",label:"女性(female)"}],gender:"",age:"",company:""}},methods:{signUp:function(){var e=this;i["a"].auth().createUserWithEmailAndPassword(this.UPusername,this.UPpassword).then((function(t){var n=i["a"].database(),a="userData";n.ref(a).push({email:e.UPusername,gender:e.gender,age:e.age}),alert("Create account: ",t.email),e.INusername=e.UPusername,e.INpassword=e.UPpassword,e.signIn()})).catch((function(e){alert(e.message)}))},signIn:function(){var e=this;i["a"].auth().signInWithEmailAndPassword(this.INusername,this.INpassword).then((function(t){e.$_setuseremail(e.INusername),e.setIdRequest(e.INusername),e.emailRequest(e.INusername),e.INusername="",e.INpassword="",e.UPusername="",e.UPpassword="",e.gender="",e.age="",e.$router.push("/about").catch((function(){})),console.log(t)}),(function(e){alert(e.message)}))},onFormSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$recaptchaLoaded();case 2:return t.next=4,e.$recaptcha("login");case 4:n=t.sent,a=new FormData(e.$refs.contactform),a.append("recaptcha-token",n),c.a.post("/your-form-endpoint",a).then((function(e){alert(e.message)}),(function(e){alert(e.message)}));case 8:case"end":return t.stop()}}),t)})))()},emailRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,c.a.post("http://localhost:8040/postEmail",n);case 4:a=e.sent,this.userPageNum=a.data,"空きがありませんでした"==a.data?this.$router.push("/stay").catch((function(){})):this.$router.push("/about").catch((function(){}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setIdRequest:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new URLSearchParams,n.append("name",t),e.next=4,c.a.post("http://localhost:8040/setIDs",n);case 4:a=e.sent,this.company=a.data,console.log(a.data),this.$_setchannel(a.data.channels),this.$_setusername(a.data.username),this.$_setpassword(a.data.password);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},p=l,d=(n("034f"),n("2877")),f=Object(d["a"])(p,r,o,!1,null,null,null),m=f.exports,h=n("8c4f");a["default"].use(h["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-1accc0f6").then(n.bind(null,"f820"))}},{path:"/stay",name:"Stay",component:function(){return n.e("chunk-2d0b2205").then(n.bind(null,"237e"))}},{path:"/hello",name:"HelloWorld",component:function(){return n.e("chunk-0a262415").then(n.bind(null,"fdab"))}}],v=new h["a"]({routes:g});v.beforeEach((function(e,t,n){var a=e.matched.some((function(e){return e.meta.requiresAuth}));a?i["a"].auth().onAuthStateChanged((function(t){t?n():n({path:"/signin",query:{redirect:e.fullPath}})})):n()}));var b=v,w=n("67b0"),y=n("5c96"),$=n.n(y),P=(n("0fae"),n("c3ff")),_=n.n(P);a["default"].use($.a,{locale:_.a});var x=n("760d");a["default"].config.productionTip=!1,a["default"].use(w["a"]),a["default"].use(x["VueReCaptcha"],{siteKey:"6LcUnyEdAAAAAKRXGR7W6kHSO2JePFoIdGl3NM_a",loaderOptions:{autoHideBadge:!0}});var k={apiKey:"AIzaSyDtlCIqqF6czrMGhi566mCKrbOIxr4gyDk",authDomain:"twitch-mci.firebaseapp.com",databaseURL:"https://twitch-mci-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"twitch-mci",storageBucket:"twitch-mci.appspot.com",messagingSenderId:"155279917408",appId:"1:155279917408:web:155c589c5adc35f3739e05"},I=i["a"].initializeApp(k);console.log(I);var U=new a["default"]({data:{$useremail:"",$channel:"",$username:"",$password:""}});a["default"].mixin({methods:{$_getuseremail:function(){return U.$data.$useremail},$_setuseremail:function(e){U.$data.$useremail=e},$_getchannel:function(){return U.$data.$channel},$_setchannel:function(e){U.$data.$channel=e},$_getusername:function(){return U.$data.$username},$_setusername:function(e){U.$data.$username=e},$_getpassword:function(){return U.$data.$password},$_setpassword:function(e){U.$data.$password=e}}}),new a["default"]({router:b,render:function(e){return e(m)}}).$mount("#app")},e31a:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#42b983}.signin,.signup{margin:20px;flex-flow:column nowrap}.sign,.signin,.signup{display:flex;justify-content:center;align-items:center}input{margin:5px 0;padding:5px}",""]),e.exports=t}});
//# sourceMappingURL=app.76cef54c.js.map