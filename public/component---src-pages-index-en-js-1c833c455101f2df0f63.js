(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OGtf:function(e,t,a){var l=a("XKFU"),n=a("eeVq"),r=a("vhPU"),m=/"/g,c=function(e,t,a,l){var n=String(r(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(l).replace(m,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),l(l.P+l.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},hcT5:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=(a("wcMv"),a("Wbzz")),m=a("JwsL"),c=a("ku9C"),o=a.n(c);var s=function(e){var t,a;function l(){return e.apply(this,arguments)||this}return a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,l.prototype.render=function(){return n.a.createElement("header",{id:"header"},n.a.createElement("div",{className:"inner"},n.a.createElement(r.Link,{to:"/index-en",className:"image avatar"},n.a.createElement("img",{src:o.a,alt:""})),n.a.createElement("h1",null,n.a.createElement("strong",null,"I am Shunya"),", it's my portfolio site.",n.a.createElement("br",null),"It contains my blog.",n.a.createElement("br",null)),n.a.createElement("div",{className:"mx-auto"},n.a.createElement("span",null,n.a.createElement(r.Link,{activeStyle:{display:"none"},to:"/"},"日本語へ")))),n.a.createElement(m.a,null))},l}(n.a.Component);var i=function(e){var t,a;function l(){return e.apply(this,arguments)||this}return a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,l.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",null,n.a.createElement(s,null),e)},l}(n.a.Component);t.a=i},t4D2:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("TJpk"),m=a.n(r),c=a("Wbzz"),o=a("6xyR"),s=function(e){return n.a.createElement(o.a,{className:"col-3 pl-0 px-2 pt-2 mx-4 mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement(o.a.Img,{variant:"top",src:e.image,className:"col-12",style:{height:"10rem"}}),n.a.createElement(o.a.Body,null,n.a.createElement(o.a.Title,{className:"mt-2 mx-auto",style:{height:"3rem",overflow:"scroll"}},e.title),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement(c.Link,{to:e.readMore,className:"button"},"Read More"))))))},i=a("hcT5"),u=(a("tUrg"),function(e){return n.a.createElement(o.a,{className:"col-5 pl-0 px-2 pt-2 mx-4 mb-5"},n.a.createElement("div",{className:"row"},n.a.createElement("a",{href:e.link},n.a.createElement(o.a.Img,{variant:"top",src:e.image,className:"col-12",style:{height:"10rem",width:"100%"}})),n.a.createElement(o.a.Body,null,n.a.createElement(o.a.Title,{className:"mt-2 ml-2",style:{height:"2rem"}},e.title))))});a.d(t,"query",(function(){return p}));t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement("title",null,"ShunyaEndoh - HOME"),n.a.createElement("meta",{name:"description",content:"This is Home page!"})),n.a.createElement("div",{id:"main"},n.a.createElement("section",{id:"one"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Hi, There. This is Shunya Endoh.")),n.a.createElement("p",null,"I'm a 22-year-old Japanese. From Tokyo-Japan.",n.a.createElement("br",null)," My interests are mainly about programming.",n.a.createElement("br",null)," Now, I'm into Gatsby.js. That's why I created this web site.",n.a.createElement("br",null),"If you want to see the details about me, click the button below."),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement(c.Link,{to:"/about-en",className:"button"},"More Info")))),n.a.createElement("section",{id:"two"},n.a.createElement("h2",null,"Blog Posts ( Written in Japanese )"),n.a.createElement("div",{className:"row",style:{overflow:"scroll",height:"20.2rem"}},t.allMarkdownRemark.nodes.map((function(e){return n.a.createElement(s,{image:e.frontmatter.image,title:e.frontmatter.title,excerpt:e.excerpt,readMore:e.fields.slug})})))),n.a.createElement("section",{id:"three"},n.a.createElement("h2",null,"Work"),n.a.createElement("div",{className:"row",style:{overflow:"scroll",height:"15.2rem"}},n.a.createElement(u,{link:"https://vue-slack-prod-da6b0.web.app/",image:"https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg",title:"Real time chat tool (Vue.js)"}),n.a.createElement(u,{link:"https://www.ideathon.site/",image:"https://xzxzyzyz.com/img/feature/laravel-57-released.png",title:"Matching service (Laravel)"}),n.a.createElement(u,{link:"https://shunyaendoh1215.github.io/Portfolio-vue/",image:"https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg",title:"Portfolio (Vue.js)"}),n.a.createElement(u,{link:"https://shunyaendoh1215.github.io/Portfolio-vue/",image:"https://secure.meetupstatic.com/photos/event/5/d/4/d/600_478883885.jpeg",title:"Portfolio + Blog (Gatsby.js)"}))),n.a.createElement("section",{id:"four"},n.a.createElement("h2",null,"Get In Touch"),n.a.createElement("p",null,"If you want to contact me, please feel free to send a message."),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"8u 12u$(small)"},n.a.createElement("form",{method:"post",action:"#"},n.a.createElement("div",{className:"row uniform 50%"},n.a.createElement("div",{className:"6u 12u$(xsmall)"},n.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),n.a.createElement("div",{className:"6u 12u$(xsmall)"},n.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),n.a.createElement("div",{className:"12u"},n.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement("input",{type:"submit",value:"Send Message"})))),n.a.createElement("div",{className:"4u 12u$(small)"},n.a.createElement("ul",{className:"labeled-icons"},n.a.createElement("li",null,n.a.createElement("h3",{className:"icon fa-home"},n.a.createElement("span",{className:"label"},"Address")),"Tokyo,Nishi-Tokyo-shi"),n.a.createElement("li",null,n.a.createElement("h3",{className:"icon fa-search"},n.a.createElement("span",{className:"label"},"Qiita")),"shunyaendoh"),n.a.createElement("li",null,n.a.createElement("h3",{className:"icon fa-envelope-o"},n.a.createElement("span",{className:"label"},"Email")),n.a.createElement("a",{href:"mailto:shunya.endoh@gmail.com"},"shunya.endoh@gmail.com"))))))))};var p="3783418864"},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-en-js-1c833c455101f2df0f63.js.map