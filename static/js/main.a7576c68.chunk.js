(this["webpackJsonpstare-memy"]=this["webpackJsonpstare-memy"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(19),s=n.n(a),o=(n(26),n(21)),d=n(7),j=n(9),l=n(2),r=(n(27),n(0));var m=function(e){var t=e.date.toLocaleString("PL",{month:"long"}),n=e.date.toLocaleString("PL",{day:"2-digit"}),c=e.date.getFullYear();return Object(r.jsxs)("div",{className:"meme-date",children:[Object(r.jsx)("div",{className:"meme-date__month",children:t}),Object(r.jsx)("div",{className:"meme-date__year",children:c}),Object(r.jsx)("div",{className:"meme-date__day",children:n})]})};n(29);var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},p=(n(30),n(31),function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,1)[0];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("button",{className:"like"===n?"btnlike active":"btnlike",onClick:function(){e.updateMemeVotes(e.id,"upvote")},children:["Like",Object(r.jsx)("span",{children:e.upvotes})]}),Object(r.jsxs)("button",{className:"dislike"===n?"btnlike active":"btndislike",onClick:function(){e.updateMemeVotes(e.id,"downvote")},children:["Dislike",Object(r.jsx)("span",{children:e.downvotes})]})]})}),O=(n(32),function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e.img,alt:""})})}),b=function(e){return Object(r.jsxs)(u,{className:"meme",children:[Object(r.jsx)(m,{date:e.date}),Object(r.jsxs)("div",{className:"meme__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)(O,{img:e.img})]}),Object(r.jsx)(p,{date:e.date,id:e.id,upvotes:e.upvotes,downvotes:e.downvotes,updateMemeVotes:e.updateMemeVotes},e.id)]})},A=(n(33),n(34),function(e){return Object(r.jsx)("div",{className:"meme-filter",children:Object(r.jsxs)("div",{className:"meme-filter__control",children:[Object(r.jsx)("label",{children:"Filtruj po dacie dodania"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{_any:!0,children:"Wszystko"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"})]})]})})}),x=function(e){var t=Object(c.useState)("2021"),n=Object(d.a)(t,2),i=n[0],a=n[1],s=e.isHot,o=function(e){a(e)},j=e.items.filter((function(e){return e.date.getFullYear().toString()===i&&e.upvotes-e.downvotes>-1})),l=e.items.filter((function(e){return e.date.getFullYear().toString()===i&&e.upvotes-e.downvotes<=-1}));return s?Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"memes",children:[Object(r.jsx)(A,{selected:j,onChangeFilter:o}),j.map((function(t){return Object(r.jsx)(b,{id:t.id,title:t.title,img:t.img,date:t.date,upvotes:t.upvotes,downvotes:t.downvotes,updateMemeVotes:e.updateMemeVotes},t.id)}))]})}):Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"memes",children:[Object(r.jsx)(A,{selected:l,onChangeFilter:o}),l.map((function(t){return Object(r.jsx)(b,{id:t.id,title:t.title,img:t.img,date:t.date,upvotes:t.upvotes,downvotes:t.downvotes,updateMemeVotes:e.updateMemeVotes},t.id)}))]})})},h=n(17),g=(n(35),function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),j=o[0],l=o[1],m=Object(c.useState)(""),u=Object(d.a)(m,2),p=u[0],O=u[1],b=Object(c.useState)(""),A=Object(d.a)(b,2),x=A[0],h=A[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:i,img:p,date:new Date(x),upvotes:0,downvotes:0};e.onSaveMemeData(n),a(""),O(""),h("")},children:[Object(r.jsxs)("div",{className:"new-meme__controls",children:[Object(r.jsxs)("div",{className:"new-meme__control",children:[Object(r.jsx)("label",{children:"Tytu\u0142"}),Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){a(e.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",onChange:function(e){return l(e.target.files[0])}})})}),Object(r.jsxs)("div",{className:"new-meme__control",children:[Object(r.jsx)("label",{children:"Data dodania"}),Object(r.jsx)("input",{type:"date",min:"2000-01-01",max:"2025-12-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-meme_actions",children:Object(r.jsx)("button",{type:"submit",onClick:function(){var e=new FormData;e.append("file",j),e.append("upload_preset","starememy"),e.append("cloud_name","starememy"),fetch("https://api.cloudinary.com/v1_1/starememy/image/upload",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){O(e.url)})).catch((function(e){return console.log(e)}))},children:"Dodaj Meme"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:p,alt:""})})]})}),v=(n(36),function(e){return Object(r.jsx)("div",{className:"new-meme",children:Object(r.jsx)(g,{onSaveMemeData:function(t){var n=Object(h.a)(Object(h.a)({},t),{},{id:Math.random().toString()});e.onAddMeme(n)}})})});n(37);function N(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Error 404"}),Object(r.jsx)("h2",{children:"Strona nie zosta\u0142a znaleziona!"})]})}n(38);var k=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"\xa9WSB Wroclaw 2021/Rafa\u0142 Okonski"})}),Object(r.jsxs)("div",{class:"media",children:[Object(r.jsx)("a",{href:"https://www.facebook.com",children:Object(r.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/facebook-new.png",alt:"facebook"})}),Object(r.jsx)("a",{href:"https://www.twitter.com",children:Object(r.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/twitter--v1.png",alt:"twitter"})}),Object(r.jsx)("a",{href:"https://www.instagram.com",children:Object(r.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/instagram-new.png",alt:"instagram"})}),Object(r.jsx)("a",{href:"https://www.reddit.com",children:Object(r.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/reddit--v4.png",alt:"reddit"})})]})]})},w=n.p+"static/media/problemy.dc83f124.jpg",D=n.p+"static/media/foreveralone.51b2cc25.jpg",T=n.p+"static/media/kredki.d4fab131.jpg",Q=n.p+"static/media/grumpy.f9a0523c.jpg",S=n.p+"static/media/zakupy.29fc14e6.jpg",B=n.p+"static/media/troll.8ad16324.jpg",K=n.p+"static/media/xibit.5dd44e24.jpg",G=n.p+"static/media/bob.eeca13b1.jpg",R=n.p+"static/media/kid.e3268460.jpg",y=[{id:"e1",title:"Polonez",img:"data:image/jpeg;base64,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",date:new Date(2020,7,14),upvotes:7,downvotes:2},{id:"e2",title:"Problemy pierwszego \u015bwiata",img:w,date:new Date(2021,2,12),upvotes:2,downvotes:2},{id:"e3",title:"Forever Alone",img:D,date:new Date(2021,2,28),upvotes:4,downvotes:2},{id:"e4",title:"Kredki",img:T,date:new Date(2021,5,12),upvotes:10,downvotes:4},{id:"e5",title:"Smutna prawda",img:Q,date:new Date(2021,5,12),upvotes:3,downvotes:6},{id:"e6",title:"Zakupy",img:S,date:new Date(2021,5,12),upvotes:5,downvotes:5},{id:"e7",title:"Troll",img:B,date:new Date(2021,5,12),upvotes:8,downvotes:4},{id:"e8",title:"Proste rozwi\u0105zanie",img:K,date:new Date(2021,5,12),upvotes:10,downvotes:6},{id:"e9",title:"Bob budowniczy",img:G,date:new Date(2021,5,12),upvotes:12,downvotes:7},{id:"e10",title:"Zmiana statusu",img:R,date:new Date(2021,5,12),upvotes:4,downvotes:7}],E=n.p+"static/media/logo.bb752805.png",H=(n(39),function(){return Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:E,alt:""})})}),f=(n(40),function(){var e=Object(c.useState)(y),t=Object(d.a)(e,2),n=t[0],i=t[1],a=function(e,t){var c=n.map((function(n){return n.id===e&&("upvote"===t?n.upvotes=n.upvotes+1:n.downvotes=n.downvotes+1),n}));i(c)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.b,{to:"/",children:Object(r.jsx)(H,{})}),Object(r.jsx)("div",{className:"MenuBar",children:Object(r.jsxs)("ul",{className:"NavBar",children:[Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{className:"Link",activeClassName:"selected",to:"/natopie",children:"NA TOPIE"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{className:"Link",activeClassName:"selected",to:"/regular",children:"BEZ SZA\u0141U"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{className:"Link",activeClassName:"selected",to:"/new",children:"DODAJ STAREGO MEMA"})})]})}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(x,{items:n,isHot:!0,updateMemeVotes:a,render:Object(r.jsx)("div",{className:"naTopieMemes"})})}),Object(r.jsx)(l.a,{exact:!0,path:"/natopie",children:Object(r.jsx)(x,{items:n,isHot:!0,updateMemeVotes:a,render:Object(r.jsx)("div",{className:"naTopieMemes"})})}),Object(r.jsx)(l.a,{exact:!0,path:"/regular",children:Object(r.jsx)(x,{items:n,isHot:!1,updateMemeVotes:a,render:Object(r.jsx)("div",{className:"bezSzaluMemes"})})}),Object(r.jsx)(l.a,{exact:!0,path:"/new",children:Object(r.jsx)(v,{onAddMeme:function(e){i((function(t){return[e].concat(Object(o.a)(t))}))}})}),Object(r.jsx)(l.a,{component:N})]})]}),Object(r.jsx)(k,{})]})}),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),Y()}},[[46,1,2]]]);
//# sourceMappingURL=main.a7576c68.chunk.js.map