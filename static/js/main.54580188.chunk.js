(this.webpackJsonpfuture=this.webpackJsonpfuture||[]).push([[0],{100:function(e,t,a){e.exports=a(129)},105:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(105),a(130)),l=a(170),s=Object(l.a)((function(e){return{header:{marginTop:e.spacing(5)},accentTitle:{textDecoration:"none",color:e.palette.primary.main,fontWeight:"500","&:hover":{textDecoration:"underline"}}}}));function u(){var e=s();return r.a.createElement("header",{className:e.header},r.a.createElement(o.a,{variant:"h2",align:"center"},"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e"," ",r.a.createElement("a",{href:"https://future-group.ru",className:e.accentTitle},"Future")," ","\u270c\ud83c\udffb"),r.a.createElement(o.a,{variant:"subtitle1",gutterBottom:!0,align:"center"},"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"))}var m=a(20),d=a(186),p=a(181),b=a(34),f=a(68),g=a(29),h=a.n(g),v=a(85),E=a(47),j=a(63),x=a(69),O=a.n(x);function w(){return y.apply(this,arguments)}function y(){return(y=Object(E.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://www.filltext.com","/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return N.apply(this,arguments)}function N(){return(N=Object(E.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://www.filltext.com","/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=a(15),R=Object(D.b)().shape({id:Object(D.a)().required(),firstName:Object(D.c)().required(),lastName:Object(D.c)().required(),email:Object(D.c)().email().required(),phone:Object(D.c)().required(),address:Object(D.b)({streetAddress:Object(D.c)(),city:Object(D.c)(),state:Object(D.c)(),zip:Object(D.a)()}),description:Object(D.c)()}),C=Object(j.b)({name:"table",initialState:{loading:!1,data:[],error:null,isBigDataRequired:null},reducers:{getDataStart:function(e){e.loading=!0},getDataFailure:function(e,t){var a=t.payload;e.loading=!1,e.error=a},getDataSuccess:function(e,t){var a=t.payload;e.loading=!1,e.data=a},setIsBigDataRequeired:function(e,t){var a=t.payload;e.isBigDataRequired=a},resetData:function(e){e.data=[]}}}),B=C.actions,S=B.getDataStart,q=B.getDataFailure,I=B.getDataSuccess,T=(B.resetData,B.setIsBigDataRequeired),P=function(e){return function(t){t(T(e))}},z=C.reducer,A=a(3),F=a(10),W=a(184),L=a(185),J=a(177),M=a(183),V=a(175),$=a(189),G=a(176),H=a(190),K=a(178),Q=a(182),U=a(174),X=a(192),Y=a(191),Z=a(90),_=a.n(Z);var ee=Object(l.a)((function(e){return{root:{width:"100%",padding:e.spacing(2)}}}));function te(e){var t=e.selectedItem,a=ee();return t&&r.a.createElement(U.a,{component:"section",className:a.root},r.a.createElement(o.a,{variant:"h3",gutterBottom:!0,align:"center"},"\u0414\u0435\u0442\u0430\u043b\u0438"),r.a.createElement(o.a,{variant:"body1"},r.a.createElement(o.a,{variant:"caption"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440: "),t.id),r.a.createElement(o.a,{variant:"body1"},r.a.createElement(o.a,{variant:"caption"},"\u0424\u0418\u041e: "),[t.firstName,t.lastName].join(" ").trim()),r.a.createElement(o.a,{variant:"body1"},r.a.createElement(o.a,{variant:"caption"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:"," "),t.email),r.a.createElement(o.a,{variant:"body1"},r.a.createElement(o.a,{variant:"caption"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "),t.phone),r.a.createElement(o.a,{variant:"body1"},r.a.createElement(o.a,{variant:"caption"},"\u0410\u0434\u0440\u0435\u0441: "),[t.address.state,t.address.city,t.address.streetAddress,t.address.zip].join(", ").trim()))}function ae(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var ne=[{id:"id",label:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"},{id:"firstName",label:"\u0418\u043c\u044f"},{id:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"},{id:"email",label:"\u041f\u043e\u0447\u0442\u0430"},{id:"phone",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}];function re(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;return r.a.createElement(V.a,null,r.a.createElement(G.a,null,ne.map((function(e){return r.a.createElement(J.a,{key:e.id,align:"center",sortDirection:a===e.id&&t},r.a.createElement(H.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(c=e.id,function(e){n(e,c)})},e.label));var c}))))}var ce=Object(l.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(F.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"},search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(F.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),ie=function(e){var t=e.onFilterChange,a=ce(),c=Object(n.useState)(""),i=Object(b.a)(c,2),l=i[0],s=i[1],u=Object(n.useRef)(function(e,t,a){var n,r,c,i,o;function l(){var s=Date.now()-i;s<t&&s>=0?n=setTimeout(l,t-s):(n=null,a||(o=e.apply(c,r),c=r=null))}null==t&&(t=100);var s=function(){c=this,r=arguments,i=Date.now();var s=a&&!n;return n||(n=setTimeout(l,t)),s&&(o=e.apply(c,r),c=r=null),o};return s.clear=function(){n&&(clearTimeout(n),n=null)},s.flush=function(){n&&(o=e.apply(c,r),c=r=null,clearTimeout(n),n=null)},s}(t,500)).current;Object(n.useEffect)((function(){return function(){u.clear()}}),[]);return r.a.createElement(K.a,{className:Object(A.a)(a.root)},r.a.createElement(o.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \ud83d\ude09"),r.a.createElement(Y.a,{title:"\u041f\u043e\u0438\u0441\u043a"},r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(_.a,null)),r.a.createElement(X.a,{value:l,onChange:function(e){var t=e.target.value;s(t),u(t)},placeholder:"\u041f\u043e\u0438\u0441\u043a\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"\u043f\u043e\u0438\u0441\u043a"}}))))},oe=Object(l.a)((function(e){return{root:{width:"100%",paddingBottom:e.spacing(3)},paper:{width:"100%",marginBottom:e.spacing(3)},table:{minWidth:750}}}));function le(e){var t=e.isBigDataRequired,a=oe(),c=Object(m.b)(),i=Object(n.useState)("asc"),l=Object(b.a)(i,2),s=l[0],u=l[1],d=Object(n.useState)(""),f=Object(b.a)(d,2),g=f[0],j=f[1],x=Object(n.useState)("id"),O=Object(b.a)(x,2),y=O[0],N=O[1],D=Object(n.useState)(0),C=Object(b.a)(D,2),B=C[0],T=C[1],z=Object(n.useState)(null),A=Object(b.a)(z,2),F=A[0],V=A[1],H=Object(m.c)((function(e){return e.table.data}));Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,a(S()),!e){t.next=8;break}return t.next=5,w();case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,k();case 10:t.t0=t.sent;case 11:if(n=t.t0,Array.isArray(n.data)){t.next=14;break}throw new Error(400);case 14:r=Object(v.a)(n.data),t.prev=15,r.s();case 17:if((c=r.n()).done){t.next=25;break}return i=c.value,t.next=21,R.isValid(i);case 21:if(t.sent){t.next=23;break}throw new Error(400);case 23:t.next=17;break;case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(15),r.e(t.t1);case 30:return t.prev=30,r.f(),t.finish(30);case 33:a(I(n.data)),t.next=39;break;case 36:t.prev=36,t.t2=t.catch(0),a(q(t.t2));case 39:case"end":return t.stop()}}),t,null,[[0,36],[15,27,30,33]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]);var K=10-Math.min(10,H.length-10*B);return r.a.createElement(p.a,{className:a.root},r.a.createElement(o.a,{component:"span"},r.a.createElement(Q.a,{onClick:function(e){e.preventDefault(),c(P(null))}},"<- \u042f \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u0430\u043b \ud83d\ude44")),r.a.createElement(U.a,{component:"section",className:a.paper},r.a.createElement(ie,{onFilterChange:function(e){j(e),console.log(e)}}),r.a.createElement(M.a,null,r.a.createElement(W.a,{className:a.table,"aria-labelledby":"tableTitle",size:"small","aria-label":"enhanced table"},r.a.createElement(re,{classes:a,order:s,orderBy:y,onRequestSort:function(e,t){u(y===t&&"asc"===s?"desc":"asc"),N(t)},rowCount:H.length}),r.a.createElement(L.a,null,function(e,t,a){var n=(e=e.filter((function(e){return new RegExp("".concat(t),"im").test(Object.values(e))}))).map((function(e,t){return[e,t]}));return n.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),n.map((function(e){return e[0]}))}(H,g,function(e,t){return"desc"===e?function(e,a){return ae(e,a,t)}:function(e,a){return-ae(e,a,t)}}(s,y)).slice(10*B,10*B+10).map((function(e){return r.a.createElement(G.a,{hover:!0,onClick:function(t){V(e)},role:"checkbox",tabIndex:-1,key:"".concat(e.id,"-").concat(e.email)},r.a.createElement(J.a,{component:"th",align:"center",scope:"row"},e.id),r.a.createElement(J.a,{align:"center"},e.firstName),r.a.createElement(J.a,{align:"center"},e.lastName),r.a.createElement(J.a,{align:"center"},e.email),r.a.createElement(J.a,{align:"center"},e.phone))})),K>0&&r.a.createElement(G.a,{style:{height:33*K}},r.a.createElement(J.a,{colSpan:6}))))),r.a.createElement($.a,{rowsPerPageOptions:[10],component:"div",count:H.length,rowsPerPage:10,page:B,onChangePage:function(e,t){T(t)}})),r.a.createElement(te,{selectedItem:F}))}var se=Object(l.a)((function(e){return{root:{margin:"0 auto",marginTop:e.spacing(15),maxWidth:"600px",display:"flex",justifyContent:"space-between"},button:{borderRadius:0,padding:"12px 30px"}}}));function ue(){var e=se(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.table.isBigDataRequired})),n=function(e){t(P(e))};return null===a?r.a.createElement(p.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{variant:"contained",color:"primary",className:e.button,onClick:function(e){return n(!1)}},"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \ud83d\ude10"),r.a.createElement(d.a,{variant:"contained",color:"secondary",className:e.button,onClick:function(e){return n(!0)}},"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \ud83d\ude40"))):r.a.createElement(le,{isBigDataRequired:a})}var me=a(193),de=a(187),pe=Object(l.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#6ae695"}}}));function be(){var e=pe(),t=Object(m.c)((function(e){return e.table.loading}));return r.a.createElement(me.a,{className:e.backdrop,open:t},r.a.createElement(de.a,{color:"inherit"}))}var fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(ue,null)),r.a.createElement(be,null))},ge=Object(j.a)({reducer:{table:z}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(188),ve=a(91),Ee=Object(ve.a)({palette:{primary:{main:"#0e43fe"},secondary:{main:"#6ae695"}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:ge},r.a.createElement(he.a,{theme:Ee},r.a.createElement(fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.54580188.chunk.js.map