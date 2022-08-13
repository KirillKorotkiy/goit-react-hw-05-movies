"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{7596:function(n,t,e){e.d(t,{Ai:function(){return h},Io:function(){return p},Mc:function(){return f},bR:function(){return d},bV:function(){return s},wH:function(){return l}});var r=e(5861),a=e(7757),o=e.n(a),c=e(4569),u=e.n(c);u().defaults.baseURL="https://api.themoviedb.org/3";var i="fbc76dc8ab4d0da433d9be06ec2fd63f",s="https://image.tmdb.org/t/p/w300",p=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8802:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,a,o,c,u,i,s,p,f,d,l,h=e(6871),x=e(7596),m=e(168),v=e(6444),b=e(501),g=v.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),Z=(0,v.ZP)(b.rU)(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-basis: 48%;\n  margin-bottom: 15px;\n  cursor: pointer;\n  text-decoration: none;\n  color: #000000;\n  transition-property: background-color, color;\n  transition-duration: 500ms;\n  :hover {\n    background-color: #000000;\n    color: #ffffffff;\n  }\n"]))),y=v.ZP.img(o||(o=(0,m.Z)(["\n  margin-right: 15px;\n"]))),w=v.ZP.h2(c||(c=(0,m.Z)(["\n  margin-bottom: 20px;\n"]))),k=v.ZP.p(u||(u=(0,m.Z)(["\n  font-size: 22px;\n  margin-bottom: 30px;\n"]))),j=v.ZP.p(i||(i=(0,m.Z)(["\n  font-size: 20px;\n"]))),P=v.ZP.div(s||(s=(0,m.Z)(["\n    padding: 10px;\n"]))),_=e(184),S=function(n){var t=n.posts;return(0,_.jsx)(g,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.overview,o=n.release_date;return(0,_.jsxs)(Z,{to:"".concat(t),children:[(0,_.jsx)(y,{src:r?"".concat(x.bV).concat(r):"https://image.shutterstock.com/image-vector/default-avatar-profile-social-media-260nw-1920331226.jpg",alt:e}),(0,_.jsxs)(P,{children:[(0,_.jsx)(w,{children:e}),(0,_.jsx)(k,{children:o}),(0,_.jsx)(j,{children:a})]})]},t)}))})},z=e(885),C=v.ZP.div(p||(p=(0,m.Z)(["\n    display: flex;\n    padding-top: 80px;\n    margin-bottom: 30px;\n"]))),Q=v.ZP.input(f||(f=(0,m.Z)(["\n    width: 300px;\n    height: 35px;\n    font-size: 22px;\n"]))),q=v.ZP.button(d||(d=(0,m.Z)(["\n    width: 100px;\n    height: 35px;\n    color: #ffffff;\n    background-color: #3b4157;\n    font-size: 22px;\n    outline: none;\n    border: none;\n"]))),A=v.ZP.form(l||(l=(0,m.Z)(["\ndisplay: flex;\nalign-items: center;\n"]))),R=e(2791),U=function(n){var t=n.onSubmit,e=n.postQuery,r=(0,R.useState)(e),a=(0,z.Z)(r,2),o=a[0],c=a[1];return(0,_.jsx)(C,{children:(0,_.jsxs)(A,{autoComplete:"off",onSubmit:t,children:[(0,_.jsx)(Q,{type:"search",name:"search",value:o||"",onChange:function(n){c(n.target.value)},placeholder:"Search movies"}),(0,_.jsx)(q,{type:"submit",children:"Search"})]})})},V=function(){var n=function(){var n=(0,R.useState)([]),t=(0,z.Z)(n,2),e=t[0],r=t[1],a=(0,b.lr)(),o=(0,z.Z)(a,2),c=o[0],u=o[1],i=c.get("query");return(0,R.useEffect)((function(){i&&(0,x.Ai)(i).then((function(n){return r(n)}))}),[c]),{posts:e,postQuery:i,handSubmit:function(n){n.preventDefault();var t=n.target.search.value;u({query:t})}}}(),t=n.postQuery,e=n.posts,r=n.handSubmit;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(U,{onSubmit:r,postQuery:t}),(0,_.jsx)(S,{posts:e}),(0,_.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=802.96c8f4ee.chunk.js.map