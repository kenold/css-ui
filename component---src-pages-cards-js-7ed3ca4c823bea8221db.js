(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),c=(t(75),t(213)),i=function(){return l.a.createElement("section",{className:"l-cards container"},l.a.createElement("div",{className:"l-cards__heading"},l.a.createElement("h4",null,"Cards + Blog Posts ")),l.a.createElement("div",{className:"cards cards--blog"},c.map((function(e){return l.a.createElement("article",{key:e.id,className:"card grid-4"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",{className:"card__media"},l.a.createElement("img",{src:"/blog/"+e.id+".jpg",alt:e.title,className:"card__image"})),l.a.createElement("div",{className:"card__body"},l.a.createElement("div",{className:"card__category"},e.category),l.a.createElement("div",{className:"card__title",title:e.title},l.a.createElement("span",null,e.title))),l.a.createElement("div",{className:"card__footer"},l.a.createElement("div",{className:"card__author"},e.author),l.a.createElement("div",{className:"card__date"},"5 hours ago"))))}))),l.a.createElement("div",{className:"code"}))},n=function(){return l.a.createElement("section",{className:"l-cards container"},l.a.createElement("div",{className:"l-cards__heading"},l.a.createElement("h4",null,"Cards + Blog Posts Wide ")),l.a.createElement("div",{className:"cards cards--blog"},c.map((function(e){return l.a.createElement("article",{key:e.id,className:"card card--wide"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",{className:"card__media"},l.a.createElement("img",{src:"/blog/"+e.id+".jpg",alt:e.title,className:"card__image"})),l.a.createElement("div",{className:"card__body"},l.a.createElement("div",{className:"card__category"},e.category),l.a.createElement("div",{className:"card__title",title:e.title},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"card__text"},e.excerpt))))}))))},s=(t(28),t(38),t(21),t(17),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),m=r.createContext&&r.createContext(s),d=function(){return(d=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var l in a=arguments[t])Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);return e}).apply(this,arguments)},o=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)a.indexOf(r[l])<0&&(t[r[l]]=e[r[l]])}return t};function u(e){return function(a){return r.createElement(p,d({attr:d({},e.attr)},a),function e(a){return a&&a.map((function(a,t){return r.createElement(a.tag,d({key:t},a.attr),e(a.child))}))}(e.child))}}function p(e){var a=function(a){var t,l=e.size||a.size||"1em";a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className);var c=e.attr,i=e.title,n=o(e,["attr","title"]);return r.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,n,{className:t,style:d({color:e.color||a.color},a.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==m?r.createElement(m.Consumer,null,(function(e){return a(e)})):a(s)}var E=function(e){return u({tag:"svg",attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}}]})(e)};E.displayName="FaEllipsisV";var g=function(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)};g.displayName="FaHeart";var _=function(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)};_.displayName="FaPlay";var v=t(214),N=function(){return l.a.createElement("section",{className:"l-cards container"},l.a.createElement("div",{className:"l-cards__heading"},l.a.createElement("h4",null,"Cards Overlay + Movies")),l.a.createElement("div",{className:"cards"},v.map((function(e){return l.a.createElement("article",{key:e.id,className:"card card--overlay grid-3"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",{className:"card__media"},l.a.createElement("img",{src:"/movies/"+e.id+".jpg",alt:"movie.title",className:"card__image"})),l.a.createElement("div",{className:"darken"})),l.a.createElement("div",{className:"card__body"},l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"card__title",title:e.title},e.title),l.a.createElement("div",{className:"card__text"},e.excerpt),l.a.createElement("ul",{className:"card__actions cta"},l.a.createElement("li",{className:"cta__play"},l.a.createElement("a",{href:"#"},l.a.createElement(_,null)," Play")),l.a.createElement("li",{className:"cta__favorite"},l.a.createElement("a",{href:"#"},l.a.createElement(g,null)," Favorite")),l.a.createElement("li",{className:"cta__more"},l.a.createElement("a",{href:"#"},l.a.createElement(E,null))))))}))))},h=t(215),f=function(){return l.a.createElement("section",{className:"l-cards container"},l.a.createElement("div",{className:"l-cards__heading"},l.a.createElement("h4",null,"Cards Overlay + Icon/Product")),l.a.createElement("div",{className:"cards"},h.map((function(e){return l.a.createElement("article",{key:e.id,className:"card card--overlay-icon grid-4"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",{className:"card__media"},l.a.createElement("img",{src:"/products/"+e.id+".jpg",alt:e.title,className:"card__image"})),l.a.createElement("div",{className:"card__icon"},l.a.createElement(g,null)),l.a.createElement("div",{className:"card__body"},l.a.createElement("div",{className:"card__category"},e.category),l.a.createElement("div",{className:"card__title",title:"{product.title}"},l.a.createElement("span",null,e.title))),l.a.createElement("div",{className:"card__footer"},"$",e.price)))}))))},y=t(216),b=function(){return l.a.createElement("section",{className:"l-cards container"},l.a.createElement("div",{className:"l-cards__heading"},l.a.createElement("h4",null,"Cards + Video")),y.map((function(e){return l.a.createElement("article",{key:e.id,className:"card card--video"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",{className:"card__media"},l.a.createElement("img",{src:"/videos/"+e.id+".jpg",alt:e.title,className:"card__image"}),l.a.createElement("div",{className:"card__label"},e.duration)),l.a.createElement("div",{className:"card__icon"},l.a.createElement(_,null)),l.a.createElement("div",{className:"card__body"},l.a.createElement("div",{className:"card__title",title:e.title},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"card__subtitle"},e.artist))))})))},x=(t(217),t(209)),w=t(208);a.default=function(){return l.a.createElement(x.a,null,l.a.createElement(w.a,{title:"Cards"}),l.a.createElement("h1",null,"Cards"),l.a.createElement(i,null),l.a.createElement(N,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(n,null))}},213:function(e){e.exports=JSON.parse('[{"id":1,"title":"All of Those Products Are Making Your Skin Worse","date":"5/30/2019","category":"Health","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","author":"Jane Doe"},{"id":2,"title":"Young Women Are Leading The Global Climate Strike","date":"8/3/2019","category":"Culture","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","author":"Jean E. Gustave"},{"id":3,"title":"People Are Going to Save Us All From Office Life","date":"5/27/2019","category":"Science","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","author":"Kenold Beauplan"},{"id":4,"title":"The Top Milan Street Style Trends, From Leather To Mixed Prints","date":"4/3/2019","category":"Fashion","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.","author":"John Smith"}]')},214:function(e){e.exports=JSON.parse('[{"id":1,"title":"Dumb and Dummer","excerpt":"Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."},{"id":2,"title":"Shaft","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien."},{"id":3,"title":"Criminal Mind","excerpt":"Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien."}]')},215:function(e){e.exports=JSON.parse('[{"id":1,"title":"Strike Cobra 3d Legging","date":"3/14/2019","category":"Lingerie","excerpt":"Praesent id massa id nisl venenatis lacinia.","price":83.81,"sale_price":41.29},{"id":2,"title":"AE Denim Tie Front Crop Top","date":"2/28/2019","category":"Beauty","excerpt":"Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","price":96.92,"sale_price":30.94},{"id":3,"title":"Invisible Shield","date":"12/6/2018","category":"Men","excerpt":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.","price":83.84,"sale_price":29.4},{"id":4,"title":"Generation G","date":"9/22/2018","category":"Women","excerpt":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.","price":40.1,"sale_price":33.02}]')},216:function(e){e.exports=JSON.parse('[{"id":1,"title":"Swish Swish ft. Nicki Minaj","duration":"6:24","artist":"Katy Perry"},{"id":2,"title":"This Is What You Came For","duration":"3:59","artist":"Rihanna"},{"id":3,"title":"Blank Space","duration":"4:32","artist":"Taylor Swift"},{"id":4,"title":"This Is America","duration":"4:04","artist":"Childish Gambino"}]')}}]);
//# sourceMappingURL=component---src-pages-cards-js-7ed3ca4c823bea8221db.js.map