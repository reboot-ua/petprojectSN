(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2wfXf"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1JlKN",posts:"MyPosts_posts__30uMy"}},296:function(e,t,a){e.exports={item:"Post_item__23Xrm"}},297:function(e,t,a){"use strict";a.r(t);var s=a(31),n=a(32),o=a(34),r=a(33),u=a(35),l=a(0),c=a.n(l),i=a(294),p=a.n(i),m=a(59),d=a(121),f=function(e){var t=Object(l.useState)(!1),a=Object(d.a)(t,2),s=a[0],n=a[1],o=Object(l.useState)(e.status),r=Object(d.a)(o,2),u=r[0],i=r[1];Object(l.useEffect)(function(){i(e.status)},[e.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"-------")),s&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(u)},value:u})))},b=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return t?c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large}),c.a.createElement(f,{status:a,updateStatus:s}))):c.a.createElement(m.a,null)},E=a(91),h=a(295),v=a.n(h),g=a(296),P=a.n(g),j=function(e){return c.a.createElement("div",{className:P.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},O=a(84),k=a(120),S=a(81),w=a(28),_=Object(S.a)(10),y=Object(k.a)({form:"ProfileAddNewPostForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(O.a,{name:"newPostText",component:w.b,placeholder:"Post message",validate:[S.b,_]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))}),x=function(e){var t=e.posts.map(function(e){return c.a.createElement(j,{message:e.message,likesCount:e.likesCount})});c.a.createRef();return c.a.createElement("div",{className:v.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:v.a.posts},t))},B=a(11),C=Object(B.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(E.a)(t))}}})(x),N=function(e){return c.a.createElement("div",null,c.a.createElement(b,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(C,null))},I=a(292),M=a(6),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(c.a.Component);t.default=Object(M.d)(Object(B.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),I.a)(T)}}]);
//# sourceMappingURL=3.adff7ca1.chunk.js.map