(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94f0aa5a"],{"05de":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#42b983}.el-row{margin-bottom:20px;&:last-child{margin-bottom:0}}.el-col,.grid-content{border-radius:4px}.grid-content{min-height:36px}.signin,.signup{margin:20px;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center}input{margin:5px 3px;padding:5px}button{margin:5px;padding:5px}.space{margin:40px}.controller{display:flex;justify-content:center;align-items:center}.twitcharea{position:relative;height:567px}.twitchchnnel{position:absolute;left:50%;margin-right:-50%;transform:translate(-50%)}.sub_menu{margin:1em}.twitcharea_bf{display:flex;justify-content:center}.wasd{margin:10px}.wasd-list,.wasd-text{display:flex;justify-content:center}.wasd-text{width:5em;flex-direction:column}.chest,.wasd-text{align-items:center}.chest{margin:10px;justify-content:center}",""]),t.exports=e},"1f1b":function(t,e,n){"use strict";n("b7aae")},b7aae:function(t,e,n){var a=n("05de");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("38dbbac0",a,!0,{sourceMap:!1,shadowMode:!1})},f4db:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"sub_menu"},[n("el-button",{attrs:{type:"success",round:""},on:{click:t.gotoBefore}},[t._v("新システム版")]),n("el-button",{attrs:{type:"info",round:""},on:{click:t.logout}},[t._v("logout")])],1),n("div",{staticClass:"space"}),n("div",[n("div",{staticClass:"twitcharea_bf"},[n("iframe",{attrs:{src:"https://player.twitch.tv/?channel=it0sat0&parent=it0sat0.github.io",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"567",width:"930"}}),n("div",[n("iframe",{attrs:{id:"chat_embed",src:"https://www.twitch.tv/embed/it0sat0/chat?parent=it0sat0.github.io",height:"500",width:"300"}}),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-input",{attrs:{placeholder:"Input command"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.post.apply(null,arguments)}},model:{value:t.command,callback:function(e){t.command=e},expression:"command"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.post},slot:"append"},[t._v("Chat")])],1)],1)],1)],1)]),n("p",[t._v(t._s(t.command))])])])},i=[],o=n("1da1"),s=(n("96cf"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("2591")),c=n("bc3a"),r=n.n(c),l=n("3cba"),u=n.n(l),m={data:function(){return{channelName:this.$_getchannel(),username:this.$_getusername(),password:this.$_getpassword(),channelURL:"",email:this.$_getuseremail(),ChatCommand:"",command:"",timeoutTimer:""}},created:function(){this.channelURL="https://player.twitch.tv/?channel=".concat(this.channelName,"&parent=it0sat0.github.io"),console.log("channelURL:"+this.channelURL)},mounted:function(){var t=document.getElementById("ifr");t.removeAttribute("src"),document.getElementById("ifr").src=this.channelURL,this.timeout()},methods:{gotoBefore:function(){this.$router.push("/about")},post:function(){clearTimeout(this.timeoutTimer),console.log("OK command:"+this.command),this.sendCommand(this.command)},sendCommand:function(t){var e={channels:["it0sat0"],identity:{username:"it0sat0sub",password:"oauth:3rl5k8t3wz5q4brrex0alg0efbr1h2"}},n=new u.a.client(e);function a(e,a){console.log("* Connected to ".concat(e,":").concat(a)),n.say("it0sat0","".concat(t))}n.connect(),n.on("connected",a),this.command="",this.timeout()},func:function(){console.log(this.channelURL)},timeout:function(){var t=this;this.timeoutTimer=setTimeout((function(){alert("一定時間操作がなかったため、ログアウトします"),clearTimeout(t.timeoutTimer),t.logout()}),6e5)},check:function(){console.log(this.channelURL);var t=document.getElementById("ifr");t.removeAttribute("src"),document.getElementById("ifr").src=this.channelURL},logout:function(){clearTimeout(this.timeoutTimer),this.logouotRequest(this.email),s["a"].auth().signOut(),clearTimeout(this.timeoutTimer),this.$router.push("/")},logouotRequest:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new URLSearchParams,n.append("name",e),t.next=4,r.a.post("http://localhost:8040/logout",n);case 4:alert("ログアウトしました");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},h=m,d=(n("1f1b"),n("2877")),p=Object(d["a"])(h,a,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-94f0aa5a.4b31988a.js.map