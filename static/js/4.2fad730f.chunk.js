(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2XEOR",dialogsItems:"Dialogs_dialogsItems__2hkke",active:"Dialogs_active__1c_U9",messages:"Dialogs_messages__3R_rb",message:"Dialogs_message__3pHwL"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(97),o=t(293),r=t.n(o),c=t(291),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.a,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.dialog},e.message)},u=t(289),d=t(84),g=t(120),b=t(28),f=t(81),E=Object(f.a)(50),p=Object(g.a)({form:"dialog-add-message-form"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[f.b,E],placeholder:"Enter your message",name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send222")))}),v=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=a.messages.map(function(e){return s.a.createElement(m,{message:e.message,key:e.id})});a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n)),s.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},_=t(11),h=t(31),O=t(32),j=t(34),w=t(33),y=t(35),k=function(e){return{isAuth:e.auth.isAuth}},D=t(6);a.default=Object(D.d)(Object(_.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(h.a)(this,t),Object(j.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(y.a)(t,a),Object(O.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),t}(s.a.Component);return Object(_.b)(k)(a)})(v)}}]);
//# sourceMappingURL=4.2fad730f.chunk.js.map