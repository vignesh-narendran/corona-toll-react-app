(this["webpackJsonpcode-todolist-react-app"]=this["webpackJsonpcode-todolist-react-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/loader.93e2c2db.gif"},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(27),a(11)),i=a.n(l),s=a(9),u=a(18),m=a(14);function p(e){var t=["Confirmed","Recovered","Deaths","Safety Tips"];return r.a.createElement("div",{key:e.id,className:"grid-content cards-container"},r.a.createElement("p",null,t[e.number]),r.a.createElement("p",{id:t[e.number],className:"count"},e.item))}var d=a(4),h=a(19),f=a.n(h);var v=function(){return r.a.createElement("div",null,r.a.createElement("img",{height:"100px",src:f.a,alt:"Loading..."}))};function E(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),h=l[0],f=l[1];return Object(n.useEffect)((function(){f(!0),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://covid19.mathdro.id/api").then((function(e){return e.json()})).then((function(e){o((function(t){return[].concat(Object(s.a)(t),[e.confirmed.value])})),o((function(t){return[].concat(Object(s.a)(t),[e.recovered.value])})),o((function(t){return[].concat(Object(s.a)(t),[e.deaths.value])})),f(!1)})).catch((function(e){return console.log("Error occured: "+e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),h?r.a.createElement(v,null):r.a.createElement("div",{id:"home-container"},r.a.createElement("div",{className:"grid-container"},a.map((function(e){return r.a.createElement(p,{key:e.index,item:e,number:a.indexOf(e)})}))),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.b,{to:"/corona-toll-react-app/tips"},"Safety tips")))}var b=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("p",null,"This web app was developed in React JS and it follows a particular design pattern called Neumorphism."),r.a.createElement("p",null,"The purpose of this app is to get real-time data on the deadly Novel Corona Virus codenamed COVID-19."),r.a.createElement("p",null,"This project is developed by Vignesh Narendran and the source code is available in this ",r.a.createElement("a",{style:{textDecoration:"underline"},href:"https://github.com/vignesh-narendran/corona-toll-react-app"},"github repository")),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.b,{to:"/corona-toll-react-app"},"Go back")))};var g=function(){return r.a.createElement("div",{className:"tips-container"},r.a.createElement("p",null,r.a.createElement("strong",null,"Wash you hands with soap")," - Soap removes the fat that holds the virus and it's protiens together. Once the grease is removed, the virus disconnects from it's protien and dies."),r.a.createElement("p",null,r.a.createElement("strong",null,"Do not touch your face")," - The virus that is present on the surface of your hands could get into your nose, eyes and mouth."),r.a.createElement("p",null,r.a.createElement("strong",null,"Keep safe distance")," - The primary mode of transport of this virus is through droplets from the infected patient. So keep safe distance from people."),r.a.createElement("p",null,r.a.createElement("strong",null,"Stay at home")," - This helps both you and your community stop spreading the virus."),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.b,{to:"/corona-toll-react-app"},"Go back")))};function y(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("h2",null,"The Novel Corona Virus Toll"),r.a.createElement("div",{className:"button-container"},r.a.createElement(d.b,{to:"/corona-toll-react-app/about"},"About")))}a(34);var N=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(d.a,null,r.a.createElement(y,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/corona-toll-react-app",component:E}),r.a.createElement(N.a,{exact:!0,path:"/corona-toll-react-app/about",component:b}),r.a.createElement(N.a,{exact:!0,path:"/corona-toll-react-app/tips",component:g}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.405d77fb.chunk.js.map