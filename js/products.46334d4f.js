(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{"0a53":function(t,e,c){},"167d":function(t,e,c){"use strict";c("78a5")},"4df4":function(t,e,c){"use strict";var r=c("0366"),n=c("7b0b"),o=c("9bdd"),a=c("e95a"),i=c("50c4"),u=c("8418"),s=c("9a1f"),d=c("35a1");t.exports=function(t){var e,c,l,b,f,g,p=n(t),j="function"==typeof this?this:Array,O=arguments.length,m=O>1?arguments[1]:void 0,h=void 0!==m,y=d(p),v=0;if(h&&(m=r(m,O>2?arguments[2]:void 0,2)),void 0==y||j==Array&&a(y))for(e=i(p.length),c=new j(e);e>v;v++)g=h?m(p[v],v):p[v],u(c,v,g);else for(b=s(p,y),f=b.next,c=new j;!(l=f.call(b)).done;v++)g=h?o(b,m,[l.value,v],!0):l.value,u(c,v,g);return c.length=v,c}},"60c3":function(t,e,c){"use strict";c("0a53")},"78a5":function(t,e,c){},"9bdd":function(t,e,c){var r=c("825a"),n=c("2a62");t.exports=function(t,e,c,o){try{return o?e(r(c)[0],c[1]):e(c)}catch(a){n(t,"throw",a)}}},a630:function(t,e,c){var r=c("23e7"),n=c("4df4"),o=c("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:n})},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,o=Function.prototype,a=o.toString,i=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&n(o,u,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},e6dc:function(t,e,c){"use strict";c.r(e);var r=c("7a23"),n={class:"bg-lightgrey py-5"},o={class:"container py-5"},a={class:"row justify-content-center"},i={class:"category-list col-11 col-md-3 mb-5"},u=Object(r["i"])("所有商品 "),s={class:"badge rounded-pill"},d=Object(r["i"])("訂製蛋糕 "),l={class:"badge rounded-pill text-end"},b=Object(r["i"])("杯子蛋糕 🍵 "),f={class:"badge rounded-pill text-end"},g=Object(r["i"])("精緻小點 "),p={class:"badge rounded-pill text-end"},j=Object(r["i"])("經典馬卡龍 "),O={class:"badge rounded-pill text-end"},m=Object(r["i"])("下午茶必備 "),h={class:"badge rounded-pill text-end"},y={class:"col-11 col-md-8"},v={class:"row justify-content-start"};function C(t,e,c,C,w,A){var I=Object(r["A"])("ProductCard");return Object(r["t"])(),Object(r["f"])("div",n,[Object(r["g"])("div",o,[Object(r["g"])("div",a,[Object(r["g"])("div",i,[Object(r["g"])("a",{href:"#",onClick:e[0]||(e[0]=Object(r["I"])((function(t){return A.getAll()}),["prevent"])),class:"list-group-item mb-2"},[u,Object(r["g"])("span",s,Object(r["C"])(this.products.length),1)]),Object(r["g"])("a",{href:"#",onClick:e[1]||(e[1]=Object(r["I"])((function(t){return A.getCategory("訂製蛋糕")}),["prevent"])),class:"list-group-item mb-2"},[d,Object(r["g"])("span",l,Object(r["C"])(this.catNum.cake),1)]),Object(r["g"])("a",{href:"#",onClick:e[2]||(e[2]=Object(r["I"])((function(t){return A.getCategory("杯子蛋糕")}),["prevent"])),class:"list-group-item mb-2"},[b,Object(r["g"])("span",f,Object(r["C"])(this.catNum.cupcake),1)]),Object(r["g"])("a",{href:"#",onClick:e[3]||(e[3]=Object(r["I"])((function(t){return A.getCategory("精緻小點")}),["prevent"])),class:"list-group-item mb-2"},[g,Object(r["g"])("span",p,Object(r["C"])(this.catNum.tiny),1)]),Object(r["g"])("a",{href:"#",onClick:e[4]||(e[4]=Object(r["I"])((function(t){return A.getCategory("馬卡龍")}),["prevent"])),class:"list-group-item mb-2"},[j,Object(r["g"])("span",O,Object(r["C"])(this.catNum.macaron),1)]),Object(r["g"])("a",{href:"#",onClick:e[5]||(e[5]=Object(r["I"])((function(t){return A.getCategory("經典下午茶")}),["prevent"])),class:"list-group-item mb-2"},[m,Object(r["g"])("span",h,Object(r["C"])(this.catNum.tea),1)])]),Object(r["g"])("div",y,[Object(r["g"])("div",v,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(w.categoryFilter,(function(t){return Object(r["t"])(),Object(r["d"])(I,{productInfo:t,key:t.id},null,8,["productInfo"])})),128))])])])])])}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,r=new Array(e);c<e;c++)r[c]=t[c];return r}function A(t){if(Array.isArray(t))return w(t)}c("a4d3"),c("e01a"),c("d3b7"),c("d28b"),c("3ca3"),c("ddb0"),c("a630");function I(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}c("fb6a"),c("b0c0");function k(t,e){if(t){if("string"===typeof t)return w(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?w(t,e):void 0}}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(t){return A(t)||I(t)||k(t)||x()}var P=c("5530"),S=(c("4de4"),c("159b"),c("5502")),V={class:"col-12 col-md-6 col-lg-4 mb-4"},z={class:"products card"},F={key:0,class:"soldOut"},H=Object(r["g"])("span",null,"今日已銷售完畢",-1),M=[H],T=["src"],$={class:"card-body text-start d-flex flex-column justify-content-center align-items-center"},E={class:"card-title"},J={class:"price-box d-flex justify-content-center align-items-center"},q={class:"price fs-5 ms-3 text-red fw-bold"},B={class:"card-bottom d-flex justify-content-center align-items-center justify-content-around mt-2"},D=Object(r["i"])("查看更多"),G=Object(r["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-bag-plus",viewBox:"0 0 16 16"},[Object(r["g"])("path",{"fill-rule":"evenodd",d:"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"}),Object(r["g"])("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})],-1),U=[G];function _(t,e,c,n,o,a){var i=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["f"])("div",V,[Object(r["g"])("div",z,[0==c.productInfo.inventory?(Object(r["t"])(),Object(r["f"])("div",F,M)):Object(r["e"])("",!0),Object(r["g"])("img",{src:c.productInfo.img,class:"card-img-top",alt:"item.title"},null,8,T),Object(r["g"])("div",$,[Object(r["g"])("h5",E,Object(r["C"])(c.productInfo.name),1),Object(r["g"])("div",J,[Object(r["g"])("div",q,"$"+Object(r["C"])(c.productInfo.price)+" NTD",1)])]),Object(r["g"])("div",B,[Object(r["j"])(i,{to:{name:"ProductCard.show",params:{productId:c.productInfo.id}}},{default:Object(r["G"])((function(){return[D]})),_:1},8,["to"]),Object(r["g"])("button",{class:"cartbtn",type:"button",onClick:e[0]||(e[0]=function(t){return a.addProductsToCart(c.productInfo)})},U)])])])}var K={name:"ProductCard",components:{},props:{productInfo:{type:Object,required:!0}},data:function(){return{}},methods:{addProductsToCart:function(t){this.$store.dispatch("cart/addProductsToCart",t)}}};c("60c3");K.render=_;var L=K,Q={name:"Products",components:{ProductCard:L},data:function(){return{categoryFilter:[],catNum:{cake:0,cupcake:0,tiny:0,macaron:0,tea:0}}},methods:Object(P["a"])(Object(P["a"])({},Object(S["b"])("products",["fetchProductInfo"])),{},{getAll:function(){this.categoryFilter=N(this.products)},getCategory:function(t){return this.categoryFilter=this.products.filter((function(e){return e.category===t}))},getCatNum:function(){var t=this;this.products.forEach((function(e){"訂製蛋糕"===e.category&&(t.catNum.cake+=1),"杯子蛋糕"===e.category&&(t.catNum.cupcake+=1),"精緻小點"===e.category&&(t.catNum.tiny+=1),"馬卡龍"===e.category&&(t.catNum.macaron+=1),"經典下午茶"===e.category&&(t.catNum.tea=t.catNum.tea+1)}))}}),computed:Object(P["a"])({},Object(S["d"])({products:function(t){return t.products.products}})),created:function(){this.fetchProductInfo(),this.getAll(),this.getCatNum()}};c("167d");Q.render=C;e["default"]=Q},fb6a:function(t,e,c){"use strict";var r=c("23e7"),n=c("861d"),o=c("e8b5"),a=c("23cb"),i=c("50c4"),u=c("fc6a"),s=c("8418"),d=c("b622"),l=c("1dde"),b=l("slice"),f=d("species"),g=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var c,r,d,l=u(this),b=i(l.length),j=a(t,b),O=a(void 0===e?b:e,b);if(o(l)&&(c=l.constructor,"function"!=typeof c||c!==Array&&!o(c.prototype)?n(c)&&(c=c[f],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return g.call(l,j,O);for(r=new(void 0===c?Array:c)(p(O-j,0)),d=0;j<O;j++,d++)j in l&&s(r,d,l[j]);return r.length=d,r}})}}]);
//# sourceMappingURL=products.46334d4f.js.map