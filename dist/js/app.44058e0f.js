(function(t){function e(e){for(var a,c,o=e[0],i=e[1],u=e[2],h=0,v=[];h<o.length;h++)c=o[h],r[c]&&v.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(v.length)v.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"011a":function(t,e,n){},"013a":function(t,e,n){"use strict";var a=n("afd2"),r=n.n(a);r.a},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0fe4":function(t,e,n){"use strict";var a=n("277e"),r=n.n(a);r.a},1611:function(t,e,n){"use strict";var a=n("812f"),r=n.n(a);r.a},"1f03":function(t,e,n){},"1fb8":function(t,e,n){"use strict";var a=n("508c"),r=n.n(a);r.a},"203a":function(t,e,n){},2132:function(t,e,n){"use strict";var a=n("8832"),r=n.n(a);r.a},"25a3":function(t,e,n){"use strict";var a=n("947e"),r=n.n(a);r.a},"277e":function(t,e,n){},"32c2":function(t,e,n){},"508c":function(t,e,n){},"50a0":function(t,e,n){"use strict";var a=n("d9b2"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("59ca"),s=n.n(r),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[],i={name:"app",components:{},data:function(){return{}},methods:{}},u=i,l=(n("034f"),n("2877")),h=Object(l["a"])(u,c,o,!1,null,null,null),v=h.exports,m=n("8c4f"),f=(n("ea7b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginWrapper"},[n("form",[n("Logo"),n("div",{staticClass:"inputLogin"},[n("UserIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.id,expression:"student.id"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.student.id},on:{input:function(e){e.target.composing||t.$set(t.student,"id",e.target.value)}}})],1),n("div",{staticClass:"inputLogin"},[n("KeyIcon"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.pass,expression:"student.pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.student.pass},on:{input:function(e){e.target.composing||t.$set(t.student,"pass",e.target.value)}}})],1),n("button",{staticClass:"login",on:{click:function(e){return e.preventDefault(),t.logIn(e)}}},[t._v("Submit")]),n("h2",[t._v("Forget Password ?")]),n("button",{on:{click:function(e){return e.preventDefault(),t.createAccount(e)}}},[t._v("Create Account")]),n("h2",[t._v("Fraincais")])],1)])}),p=[],d=(n("a481"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"logoWrapper"},[n("div",{staticClass:"logo"})]),n("div",{staticClass:"title"},[n("h1",[t._v("VOX")]),n("span",[t._v("For Students")])])])}],g={},b=g,w=(n("013a"),Object(l["a"])(b,d,_,!1,null,"7bcb0b75",null)),x=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}})])},z=[],$={},C=$,M=Object(l["a"])(C,O,z,!1,null,null,null),N=M.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}})])},j=[],I={},y=I,S=Object(l["a"])(y,E,j,!1,null,null,null),A=S.exports,L={props:{fill:String},components:{Logo:x,KeyIcon:A,UserIcon:N},data:function(){return{userFound:!1,student:{id:"",pass:""}}},methods:{logIn:function(){var t=this;s.a.auth().signInWithEmailAndPassword(this.student.id,this.student.pass).then(function(){return t.$router.replace("home")},function(t){return alert(t.message)}),this.student.id="",this.student.pass=""},createAccount:function(){var t=this;s.a.auth().createUserWithEmailAndPassword(this.student.id,this.student.pass).then(function(){return t.$router.replace("home")},function(t){return alert(t.message)}),this.student.id="",this.student.pass=""}}},H=L,B=(n("1611"),Object(l["a"])(H,f,p,!1,null,"effbc3ee",null)),P=B.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homePageWrapper"},[t.$store.state.navOpened?n("div",{staticClass:"overlay",on:{click:function(e){t.$store.state.navOpened=!1}}}):t._e(),n("SideNav",{attrs:{navOpen:t.$store.state.navOpened}}),n("Header"),n("SearchBar",{on:{menuClicked:function(e){return t.$emit("menuClicked")}}}),n("router-view"),n("NavBar")],1)},k=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("Logo")],1)},W=[],q={components:{Logo:x},methods:{}},F=q,U=(n("1fb8"),Object(l["a"])(F,D,W,!1,null,"6fd5a9ab",null)),T=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("NavMenu")],1)},J=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-menu"},t._l(t.menu,function(t){return n("router-link",{key:t,attrs:{"active-class":"menu-active",to:{name:t}}},[n("MenuItem",{attrs:{itemName:t}})],1)}),1)},X=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},["Mio"===t.itemName?n("MioIcon"):"News"===t.itemName?n("NewsIcon"):"About"===t.itemName?n("AboutIcon"):"Lea"===t.itemName?n("LeaIcon"):n("ServiceIcon"),n("span",[t._v(t._s(t.itemName))])],1)},Q=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}})])])},Y=[],tt={},et=tt,nt=Object(l["a"])(et,Z,Y,!1,null,null,null),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zM4 20c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zM3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])])},st=[],ct={},ot=ct,it=Object(l["a"])(ot,rt,st,!1,null,null,null),ut=it.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}})])])},ht=[],vt={},mt=vt,ft=Object(l["a"])(mt,lt,ht,!1,null,null,null),pt=ft.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"}})])])},_t=[],gt={},bt=gt,wt=Object(l["a"])(bt,dt,_t,!1,null,null,null),xt=wt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}})])])},zt=[],$t={},Ct=$t,Mt=Object(l["a"])(Ct,Ot,zt,!1,null,null,null),Nt=Mt.exports,Et={props:{itemName:String},components:{MioIcon:at,NewsIcon:ut,AboutIcon:pt,LeaIcon:xt,ServiceIcon:Nt},methods:{}},jt=Et,It=(n("7105"),Object(l["a"])(jt,G,Q,!1,null,"12f3c1b6",null)),yt=It.exports,St={components:{MenuItem:yt},data:function(){return{menu:["News","Mio","Lea","Services","About"]}},methods:{}},At=St,Lt=(n("25a3"),Object(l["a"])(At,R,X,!1,null,"a577db70",null)),Ht=Lt.exports,Bt={components:{NavMenu:Ht},methods:{}},Pt=Bt,Vt=(n("7544"),Object(l["a"])(Pt,K,J,!1,null,"f3c1b0d8",null)),kt=Vt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar-wrapper",class:{navOpened:1==t.$store.state.navOpened}},[n("h1",[t._v("sidebar")])])},Wt=[],qt={props:{navOpen:Boolean},data:function(){return{}}},Ft=qt,Ut=(n("e8ce"),Object(l["a"])(Ft,Dt,Wt,!1,null,"6e587bf7",null)),Tt=Ut.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchWrapper"},[n("div",{staticClass:"searchBar"},[n("MenuIcon",{nativeOn:{click:function(e){t.$store.state.navOpened=!0}}}),n("input",{attrs:{type:"text",placeholder:"Search"}}),n("SearchIcon")],1)])},Jt=[],Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])},Xt=[],Gt={},Qt=Gt,Zt=(n("697c"),Object(l["a"])(Qt,Rt,Xt,!1,null,"6f509dac",null)),Yt=Zt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}})])},ee=[],ne={},ae=ne,re=(n("0fe4"),Object(l["a"])(ae,te,ee,!1,null,"4a8e9c13",null)),se=re.exports,ce={components:{SearchIcon:Yt,MenuIcon:se}},oe=ce,ie=(n("2132"),Object(l["a"])(oe,Kt,Jt,!1,null,"acae0672",null)),ue=ie.exports,le={components:{Header:T,NavBar:kt,SearchBar:ue,SideNav:Tt}},he=le,ve=(n("f08b"),Object(l["a"])(he,V,k,!1,null,"30e6f540",null)),me=ve.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"lea-grid"},[n("button",{on:{click:t.logOut}},[t._v("Logout")]),t._l(t.courseData,function(t){return n("LeaCard",{key:t.courseNo,attrs:{card:t}})})],2)},pe=[],de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h3",[t._v(t._s(t.card.courseNo))]),n("h2",[t._v(t._s(t.card.courseName))]),n("br"),n("h4",[t._v("Courses:-")]),n("br"),t._m(0)])},_e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Documents")]),n("li",[t._v("Assignments")]),n("li",[t._v("Class Forums")]),n("li",[t._v("Announcements")])])}],ge={props:{card:Object}},be=ge,we=(n("f399"),Object(l["a"])(be,de,_e,!1,null,"0ab0b64a",null)),xe=we.exports,Oe=n("d93e"),ze={components:{LeaCard:xe},data:function(){return{courseData:Oe}},methods:{logOut:function(){var t=this;s.a.auth().signOut().then(function(){return t.$router.replace("login")})}}},$e=ze,Ce=(n("50a0"),Object(l["a"])($e,fe,pe,!1,null,"633acb70",null)),Me=Ce.exports,Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ee=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("mio page")])])}],je={components:{}},Ie=je,ye=Object(l["a"])(Ie,Ne,Ee,!1,null,null,null),Se=ye.exports,Ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Le=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("news")])])}],He={components:{}},Be=He,Pe=Object(l["a"])(Be,Ae,Le,!1,null,null,null),Ve=Pe.exports,ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},De=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("service")])])}],We={components:{}},qe=We,Fe=Object(l["a"])(qe,ke,De,!1,null,null,null),Ue=Fe.exports,Te=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ke=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",{staticClass:"heading"},[t._v("about")])])}],Je={components:{}},Re=Je,Xe=Object(l["a"])(Re,Te,Ke,!1,null,null,null),Ge=Xe.exports;a["a"].use(m["a"]);var Qe=new m["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:P},{path:"/home",name:"Home",redirect:"/home/lea",component:me,meta:{requiresAuth:!0},children:[{path:"lea",name:"Lea",component:Me,meta:{requiresAuth:!0}},{path:"mio",name:"Mio",component:Se,meta:{requiresAuth:!0}},{path:"news",name:"News",component:Ve,meta:{requiresAuth:!0}},{path:"service",name:"Services",component:Ue,meta:{requiresAuth:!0}},{path:"about",name:"About",component:Ge,meta:{requiresAuth:!0}}]}]});Qe.beforeEach(function(t,e,n){var a=s.a.auth().currentUser,r=t.matched.some(function(t){return t.meta.requiresAuth});r&&!a?n("login"):!r&&a?n("home"):n()});var Ze=Qe,Ye=n("2f62");a["a"].use(Ye["a"]);var tn=new Ye["a"].Store({state:{navOpened:!1}});a["a"].config.productionTip=!1;var en="",nn={apiKey:"AIzaSyCaz2oF2wLxARhmBsw9XQh1OGZT3sUwVLI",authDomain:"myomnivox.firebaseapp.com",databaseURL:"https://myomnivox.firebaseio.com",projectId:"myomnivox",storageBucket:"",messagingSenderId:"535661388551",appId:"1:535661388551:web:b8416dead5e5b9ea"};s.a.initializeApp(nn),s.a.auth().onAuthStateChanged(function(){en||(en=new a["a"]({render:function(t){return t(v)},router:Ze,store:tn}).$mount("#app"))})},"64a9":function(t,e,n){},"697c":function(t,e,n){"use strict";var a=n("1f03"),r=n.n(a);r.a},7105:function(t,e,n){"use strict";var a=n("e17e"),r=n.n(a);r.a},7544:function(t,e,n){"use strict";var a=n("011a"),r=n.n(a);r.a},"812f":function(t,e,n){},8832:function(t,e,n){},"89df":function(t,e,n){},"947e":function(t,e,n){},afd2:function(t,e,n){},d93e:function(t){t.exports=[{courseNo:"1",courseName:"Object Oriented"},{courseNo:"2",courseName:"Database - II"},{courseNo:"3",courseName:"Python"},{courseNo:"4",courseName:"EcmaScript"},{courseNo:"5",courseName:"Web Development"},{courseNo:"6",courseName:"Python - II"},{courseNo:"7",courseName:"EcmaScript - II"},{courseNo:"8",courseName:"Web Development - II"}]},d9b2:function(t,e,n){},e17e:function(t,e,n){},e8ce:function(t,e,n){"use strict";var a=n("89df"),r=n.n(a);r.a},f08b:function(t,e,n){"use strict";var a=n("203a"),r=n.n(a);r.a},f399:function(t,e,n){"use strict";var a=n("32c2"),r=n.n(a);r.a}});
//# sourceMappingURL=app.44058e0f.js.map