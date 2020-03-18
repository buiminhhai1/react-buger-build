(this["webpackJsonpreact-buger-build"]=this["webpackJsonpreact-buger-build"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"o",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"q",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return l})),n.d(t,"k",(function(){return s})),n.d(t,"n",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return _})),n.d(t,"p",(function(){return E}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="INIT_INGREDIENTS_START",i="SET_INGREDIENTS",c="FETCH_INGREDIENTS_FAILED",u="PURCHASE_BURGER_START",l="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",p="FETCH_ORDERS_START",h="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",f="AUTH_START",g="AUTH_SUCCESS",b="AUTH_FAIL",_="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(23),a=function(e,t){return Object(r.a)({},e,{},t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,function(e,t,n){"use strict";var r=n(1),a=n(19),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.o,ingredientName:e}},c=function(){return function(e){e({type:r.j}),a.a.get("https://react-my-burger-8c0f0.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.q,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(23),l=function(e,t){return function(n){n({type:r.l}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.m,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.k,error:e}}(e))}))}},s=function(){return{type:r.n}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},p=n(32),h=n.n(p),m=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(f())}),1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLscfXgc8FjXgGQjIgeveMpAcRa_YHY6s";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLscfXgc8FjXgGQjIgeveMpAcRa_YHY6s"),h.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(m(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},_=function(e){return{type:r.p,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userId");e(m(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return _})),n.d(t,"c",(function(){return E}))},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3k0FK",BreadTop:"BurgerIngredient_BreadTop__3FWYi",Seeds1:"BurgerIngredient_Seeds1__3h3A1",Seeds2:"BurgerIngredient_Seeds2__WvdSG",Meat:"BurgerIngredient_Meat__2eTRX",Cheese:"BurgerIngredient_Cheese__35hcd",Salad:"BurgerIngredient_Salad__3b-u2",Bacon:"BurgerIngredient_Bacon__3VqyL"}},,function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-my-burger-8c0f0.firebaseio.com/"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1rKBm",Open:"SideDrawer_Open__33bw3",Close:"SideDrawer_Close__31fEs",Logo:"SideDrawer_Logo__1XvPE"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__KkeU9",Label:"BuildControl_Label__3bzr4",Less:"BuildControl_Less__29AAt",More:"BuildControl_More__1zRGt"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(64),d=n.n(s),p=n(11),h=n(30),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},className:d.a.Modal},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__26VVk",Logo:"Toolbar_Logo__2e4g2",DesktopOnly:"Toolbar_DesktopOnly__2jlMw"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3LwlS",active:"NavigationItem_active__FhvHt"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2dXAU",OrderButton:"BuildControls_OrderButton__2D3ow",enable:"BuildControls_enable__1_pgQ"}},function(e,t,n){e.exports={Button:"Button_Button__3Wfrg",Success:"Button_Success__20yaO",Danger:"Button_Danger__2Z9N_"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(65),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(11),d=n(31);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(d.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(63),c=n.n(i),u=n(4),l=n(5),s=n(7),d=n(6),p=n(8),h=n(17),m=n.n(h),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(f,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={Content:"Layout_Content__3Yelk"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3Oom4"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3usJB"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__S6QQq"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__39KmC"}},function(e,t,n){e.exports={Burger:"Burger_Burger__33XqB"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2AYqF"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__27FZu",load3:"Spinner_load3__dCCpB"}},,,function(e,t,n){e.exports=n(96)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=(n(73),n(4)),u=n(5),l=n(7),s=n(6),d=n(8),p=n(18),h=n(14),m=n(56),f=n.n(m),g=n(33),b=n.n(g),_=n(57),E=n.n(_),v=n(58),O=n.n(v),j=function(e){return a.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:O.a,alt:"MyBurger"}))},y=n(59),k=n.n(y),C=n(37),I=n.n(C),S=n(21),B=function(e){return a.a.createElement("li",{className:I.a.NavigationItem},a.a.createElement(S.b,{to:e.link,exact:!0,activeClassName:I.a.active},e.children))},w=function(e){return a.a.createElement("ul",{className:k.a.NavigationItems},a.a.createElement(B,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(B,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(B,{link:"/logout"},"Log out"):a.a.createElement(B,{link:"/auth"},"Authenticate"))},N=n(61),T=n.n(N),A=function(e){return a.a.createElement("div",{className:T.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},D=function(e){return a.a.createElement("header",{className:b.a.Toolbar},a.a.createElement(A,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:b.a.Logo},a.a.createElement(j,null)),a.a.createElement("nav",{className:b.a.DesktopOnly},a.a.createElement(w,{isAuthenticated:e.isAuth})))},R=n(24),L=n.n(R),x=n(11),H=n(30),P=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),a.a.createElement(x.a,null,a.a.createElement(H.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:L.a.Logo},a.a.createElement(j,null)),a.a.createElement("nav",null,a.a.createElement(w,{isAuthenticated:e.isAuth}))))},U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerCloseHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(x.a,null,a.a.createElement(D,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(P,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),a.a.createElement("main",{className:f.a.Content},this.props.children))}}]),t}(r.Component),M=Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(U),F=n(23),G=n(54),q=n(40),z=n.n(q),X=n(27),Y=n.n(X),W=function(e){return a.a.createElement("div",{className:Y.a.BuildControl},a.a.createElement("div",{className:Y.a.Label},e.label),a.a.createElement("button",{className:Y.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:Y.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:z.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2)," $")),$.map((function(t){return a.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},V=n(31),K=n(34),J=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(x.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,"Total Price: ",a.a.createElement("strong",null,this.props.price.toFixed(2)," $")),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(K.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(K.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),Z=n(19),ee=n(42),te=n(43),ne=n(15),re=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).updatePurchaseBurger=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){return n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n.state={purchasing:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(F.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null," Ingredients can't be loaded!"):a.a.createElement(ee.a,null);return this.props.ings&&!this.props.initloading&&(r=a.a.createElement(x.a,null,a.a.createElement(G.a,{ingredients:this.props.ings}),a.a.createElement(Q,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchaseable:this.updatePurchaseBurger(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(J,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(x.a,null,a.a.createElement(V.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),ae=Object(h.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,initloading:e.burgerBuilder.initloading,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ne.a(t))},onIngredientRemoved:function(t){return e(ne.i(t))},onInitIngredients:function(){return e(ne.e())},onInitPurchase:function(){return e(ne.h())},onSetAuthRedirectPath:function(t){return e(ne.j(t))}}}))(Object(te.a)(re,Z.a)),oe=function(e){return function(t){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},ie=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),t}(r.Component),ce=Object(h.b)(null,(function(e){return{onLogout:function(){return e(ne.f())}}}))(ie),ue=oe((function(){return n.e(5).then(n.bind(null,105))})),le=oe((function(){return n.e(3).then(n.bind(null,104))})),se=oe((function(){return n.e(4).then(n.bind(null,103))})),de=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/auth",component:se}),a.a.createElement(p.b,{path:"/",exact:!0,component:ae}),a.a.createElement(p.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/checkout",component:le}),a.a.createElement(p.b,{path:"/orders",component:ue}),a.a.createElement(p.b,{path:"/auth",component:se}),a.a.createElement(p.b,{path:"/logout",component:ce}),a.a.createElement(p.b,{path:"/",exact:!0,component:ae}),a.a.createElement(p.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(M,null,e))}}]),t}(r.Component),pe=Object(p.g)(Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ne.c())}}}))(de));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(66),me=n(20),fe=n(25),ge=n(1),be=n(3),_e={ingredients:null,totalPrice:4,error:!1,initloading:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},ve=function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)},Oe=function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice-Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)},je=function(e,t){return Object(be.b)(e,{initloading:!0})},ye=function(e,t){return Object(be.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,initloading:!1,building:!1})},ke=function(e,t){return Object(be.b)(e,{error:!0,initloading:!1})},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return ve(e,t);case ge.o:return Oe(e,t);case ge.q:return ye(e,t);case ge.j:return je(e);case ge.f:return ke(e)}return e},Ie={orders:[],loading:!1,purchased:!1},Se=function(e,t){return Object(be.b)(e,{purchased:!1})},Be=function(e,t){return Object(be.b)(e,{loading:!0})},we=function(e,t){var n=Object(be.b)(t.orderData,{id:t.orderId});return Object(be.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Ne=function(e,t){return Object(be.b)(e,{loading:!1})},Te=function(e,t){return Object(be.b)(e,{loading:!0})},Ae=function(e,t){return Object(be.b)(e,{orders:t.orders,loading:!1})},De=function(e,t){return Object(be.b)(e,{loading:!1})},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.n:return Se(e);case ge.l:return Be(e);case ge.m:return we(e,t);case ge.k:return Ne(e);case ge.h:return Te(e);case ge.i:return Ae(e,t);case ge.g:return De(e)}return e},Le={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},xe=function(e,t){return Object(be.b)(e,{error:null,loading:!0})},He=function(e,t){return Object(be.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Pe=function(e,t){return Object(be.b)(e,{error:t.error,loading:!1})},Ue=function(e,t){return Object(be.b)(e,{token:null,userId:null})},Me=function(e,t){return Object(be.b)(e,{authRedirectPath:t.path})},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.d:return xe(e);case ge.e:return He(e,t);case ge.b:return Pe(e,t);case ge.c:return Ue(e);case ge.p:return Me(e,t)}return e},Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,qe=Object(me.c)({burgerBuilder:Ce,order:Re,auth:Fe}),ze=Object(me.e)(qe,Ge(Object(me.a)(he.a)));i.a.render(a.a.createElement(h.a,{store:ze},a.a.createElement(S.a,null,a.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[68,1,2]]]);
//# sourceMappingURL=main.b455f675.chunk.js.map