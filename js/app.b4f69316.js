(function(e){function t(t){for(var a,o,s=t[0],i=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Admin-FrontEnd/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0086":function(e,t,n){},1100:function(e,t,n){e.exports=n.p+"img/background.201d3e01.jpg"},"2ed5":function(e,t,n){"use strict";n("ce49")},"2fe2":function(e,t,n){"use strict";n("b384")},"50c40":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var s=Object(a["x"])("NavigationBar"),i=Object(a["x"])("router-view"),u=Object(a["x"])("Background");return Object(a["r"])(),Object(a["d"])("div",null,[Object(a["E"])(Object(a["h"])(s,null,null,512),[[a["B"],o.isNotSignInPage]]),(Object(a["r"])(),Object(a["c"])(i,{class:Object(a["n"])({"other-page":o.isNotSignInPage,"sign-in":!o.isNotSignInPage}),key:this.$route.path},null,8,["class"])),Object(a["h"])(u)])}n("b0c0");var c=["src"];function o(e,t,n,r,o,s){return Object(a["r"])(),Object(a["d"])("div",null,[Object(a["e"])("img",{src:o.image,alt:""},null,8,c)])}var s=n("1100"),i=n.n(s),u={name:"Background",data:function(){return{image:i.a}}},l=(n("652a"),n("6b0d")),d=n.n(l);const f=d()(u,[["render",o],["__scopeId","data-v-662121a8"]]);var b=f,p=function(e){return Object(a["u"])("data-v-5543c67e"),e=e(),Object(a["s"])(),e},g={class:"navigation-bar"},m={class:"nav-side"},j=p((function(){return Object(a["e"])("em",{class:"logo-back fas fa-square fa-stack-2x"},null,-1)})),v=p((function(){return Object(a["e"])("em",{class:"logo-front fas fa-compact-disc fa-stack-1x"},null,-1)})),O=[j,v],h=p((function(){return Object(a["e"])("h1",{class:"title"},"MusiX",-1)})),w={class:"nav-side"},k={key:0},I={key:1};function x(e,t,n,r,c,o){return Object(a["r"])(),Object(a["d"])("div",g,[Object(a["e"])("div",m,[Object(a["e"])("span",{class:"logo fa-stack fa-2x",onClick:t[0]||(t[0]=function(e){return o.redirectToPage("/dashboard")})},O),h]),Object(a["e"])("div",w,[o.isUserLoggedIn()?(Object(a["r"])(),Object(a["d"])("div",k,[Object(a["e"])("label",{class:"nav-option",onClick:t[1]||(t[1]=function(e){return o.redirectToPage("/dashboard")})},"Dashboard"),Object(a["e"])("label",{class:"nav-option",onClick:t[2]||(t[2]=function(e){return o.redirectToPage("/users")})},"Users"),Object(a["e"])("label",{class:"nav-option",onClick:t[3]||(t[3]=function(e){return o.handelLogOut()})},"Log Out")])):(Object(a["r"])(),Object(a["d"])("div",I,[Object(a["e"])("label",{class:"nav-option",onClick:t[4]||(t[4]=function(e){return o.redirectToPage("/signin")})},"Sign In")]))])])}var y={name:"NavigationBar",methods:{isUserLoggedIn:function(){return null!==localStorage.getItem("jwt")},handelLogOut:function(){localStorage.removeItem("jwt"),this.$router.push("/signin")},redirectToPage:function(e){this.$router.push(e)}}};n("910e");const S=d()(y,[["render",x],["__scopeId","data-v-5543c67e"]]);var P=S,_={name:"App",components:{Background:b,NavigationBar:P},computed:{isNotSignInPage:function(){return"signin"!==this.$route.name}}};n("2fe2");const A=d()(_,[["render",r]]);var T=A,C=n("1da1"),N=(n("96cf"),n("d3b7"),n("ac1f"),n("1276"),n("5319"),n("a15b"),n("d81d"),n("fb6a"),n("25f0"),n("6c02")),B=function(e){return Object(a["u"])("data-v-82fbde62"),e=e(),Object(a["s"])(),e},E={id:"dashboard"},L=B((function(){return Object(a["e"])("div",{id:"loading"},[Object(a["e"])("em",{class:"icon fas fa-spinner"}),Object(a["g"])("Loading... ")],-1)})),R=[L];function U(e,t,n,r,c,o){return Object(a["r"])(),Object(a["d"])("div",E,R)}var M={data:function(){return{}},components:{},created:function(){},methods:{}};n("af0e");const q=d()(M,[["render",U],["__scopeId","data-v-82fbde62"]]);var D=q,$=function(e){return Object(a["u"])("data-v-dfa517de"),e=e(),Object(a["s"])(),e},F={class:"panel"},J=Object(a["f"])('<div class="top-section" data-v-dfa517de><span class="logo fa-stack fa-2x" data-v-dfa517de><em class="logo-back fas fa-square fa-stack-2x" data-v-dfa517de></em><em class="logo-front fas fa-compact-disc fa-stack-1x" data-v-dfa517de></em></span><h1 class="title" data-v-dfa517de>MusiX</h1></div>',1),V={class:"section"},X={class:"input"},z=$((function(){return Object(a["e"])("em",{class:"icon fas fa-envelope"},null,-1)})),G=$((function(){return Object(a["e"])("div",{class:"line"},null,-1)})),H={class:"input"},K=$((function(){return Object(a["e"])("em",{class:"icon fas fa-lock"},null,-1)})),Q=$((function(){return Object(a["e"])("div",{class:"line"},null,-1)})),W={class:"section"},Y=Object(a["g"])("Forgot Password?");function Z(e,t,n,r,c,o){var s=Object(a["x"])("router-link");return Object(a["r"])(),Object(a["d"])("div",F,[J,Object(a["e"])("div",V,[Object(a["e"])("div",X,[z,G,Object(a["E"])(Object(a["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e}),class:"input-field",placeholder:"Email"},null,512),[[a["A"],c.email]])]),Object(a["e"])("div",H,[K,Q,Object(a["E"])(Object(a["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e}),type:"password",class:"input-field",placeholder:"Password"},null,512),[[a["A"],c.password]])])]),Object(a["e"])("div",W,[Object(a["h"])(s,{to:"signin",class:"existing-account"},{default:Object(a["D"])((function(){return[Y]})),_:1}),Object(a["e"])("button",{class:"btn",onClick:t[2]||(t[2]=function(){return o.handleSignIn&&o.handleSignIn.apply(o,arguments)})},"Sign In")])])}n("498a");var ee=n("bc3a"),te=n.n(ee),ne="http://localhost:8080/api",ae={signIn:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te.a.post("".concat(ne,"/Authentication/admin"),e);case 3:return n=t.sent,t.abrupt("return",{success:n.data["success"],token:n.data["data"]["token"]});case 7:return t.prev=7,t.t0=t["catch"](0),n=t.t0.response,t.abrupt("return",{success:n.data["success"],message:n.data["message"]});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},re={data:function(){return{email:"",password:""}},methods:{handleSignIn:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.email.trim()&&t.password.trim()){n.next=4;break}return alert("All fields need to be filled in."),n.abrupt("return");case 4:return a={email:t.email,password:t.password},n.next=7,ae.signIn(a);case 7:r=n.sent,r.success?(localStorage.setItem("jwt",r.token),t.$router.push("dashboard")):alert(r.message);case 9:case"end":return n.stop()}}),n)})))()}}};n("2ed5");const ce=d()(re,[["render",Z],["__scopeId","data-v-dfa517de"]]);var oe=ce,se=function(e){return Object(a["u"])("data-v-8d2b4e48"),e=e(),Object(a["s"])(),e},ie={id:"user-managment"},ue=se((function(){return Object(a["e"])("div",{id:"loading"},[Object(a["e"])("em",{class:"icon fas fa-spinner"}),Object(a["g"])("Loading... ")],-1)})),le=[ue];function de(e,t,n,r,c,o){return Object(a["r"])(),Object(a["d"])("div",ie,le)}var fe={data:function(){return{}},components:{},created:function(){},methods:{}};n("d1bd");const be=d()(fe,[["render",de],["__scopeId","data-v-8d2b4e48"]]);var pe=be,ge=[{path:"/signin",name:"signin",component:oe,meta:{guest:!0}},{path:"/",alias:"/dashboard",name:"dashboard",component:D,meta:{requiresAuth:!0}},{path:"/users",name:"users",component:pe,meta:{requiresAuth:!0}}],me=Object(N["a"])({history:Object(N["b"])("/Admin-FrontEnd/"),routes:ge});function je(e){var t=e.split(".")[1],n=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(n).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}function ve(e){var t=new Date(1e3*e),n=new Date;return t.getTime()<=n.getTime()}me.beforeEach(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=localStorage.getItem("jwt"))try{r=je(localStorage.getItem("jwt")),c=ve(r["exp"]),c&&localStorage.removeItem("jwt")}catch(n){localStorage.removeItem("jwt")}t.matched.some((function(e){return e.meta.requiresAuth}))?null==localStorage.getItem("jwt")?a({name:"signin",params:{nextUrl:t.fullPath}}):a():t.matched.some((function(e){return e.meta.guest}))?null==localStorage.getItem("jwt")?a():a({name:"dashboard"}):a();case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var Oe=me;Object(a["b"])(T).use(Oe).mount("#app")},"652a":function(e,t,n){"use strict";n("50c40")},"910e":function(e,t,n){"use strict";n("dfae")},af0e:function(e,t,n){"use strict";n("edee")},b384:function(e,t,n){},ce49:function(e,t,n){},d1bd:function(e,t,n){"use strict";n("0086")},dfae:function(e,t,n){},edee:function(e,t,n){}});
//# sourceMappingURL=app.b4f69316.js.map