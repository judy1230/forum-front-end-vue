(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4acb9970"],{5745:function(t,e,r){"use strict";var a=r("a36a"),n=r.n(a);n.a},"590f":function(t,e,r){},a36a:function(t,e,r){},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},n=[],s=(r("a4d3"),r("e01a"),r("4de4"),r("b0c0"),r("5530")),i=(r("96cf"),r("1da1")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.categoryName))])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-info btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger favorite mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(e)}}},[t._v("移除最愛")]):r("button",{staticClass:"btn btn-pprimary favorite mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(e)}}},[t._v("加到最愛")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(e)}}},[t._v("Unlike")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(e)}}},[t._v("Like")])],1)])},u=[],c={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(t){this.restaurant=Object(s["a"])({},this.restaurant,{},t)}},methods:{addFavorite:function(){this.restaurant=Object(s["a"])({},this.restaurant,{isFavorited:!0})},deleteFavorite:function(){this.restaurant=Object(s["a"])({},this.restaurant,{isFavorited:!1})},addLike:function(){this.restaurant=Object(s["a"])({},this.restaurant,{isLiked:!0})},deleteLike:function(){this.restaurant=Object(s["a"])({},this.restaurant,{isLiked:!1})}}},l=c,d=(r("f0e2"),r("2877")),m=Object(d["a"])(l,o,u,!1,null,"1eadd402",null),f=m.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v(" 所有評論： ")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.User.name)+" ")])]),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},v=[],b=r("2708"),h=r("2f62"),g={mixins:[b["b"]],props:{restaurantComments:{type:Array,required:!0}},methods:{handleDeleteButtonClick:function(t){console.log("handleDeleteButtonClick",t),this.$emit("after-delete-comment",t)}},computed:Object(s["a"])({},Object(h["b"])(["currentUser"]))},C=g,_=(r("f641"),Object(d["a"])(C,p,v,!1,null,"04f19b8e",null)),k=_.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])}],w=(r("a9e3"),r("4cce")),O=r("2fa3"),R={props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return O["a"].fire({type:"warning",title:"您尚未填寫任何評論"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,w["a"].comments.create({restaurantId:t.restaurantId,text:t.text});case 7:if(r=e.sent,a=r.data,n=r.statusText,"OK"===n&&"success"===a.status){e.next=12;break}throw new Error(n);case 12:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),t.isProcessing=!1,t.text="",e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),t.isProcessing=!1,O["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}},j=R,D=(r("5745"),Object(d["a"])(j,x,y,!1,null,"5df5ae18",null)),I=D.exports,L=r("c4c3"),P={components:{RestaurantDetail:f,RestaurantComments:k,CreateComment:I},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},beforRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("fetchRestaurant id: ",t),r.prev=1,r.next=4,L["a"].getRestaurant({restaurantId:t});case 4:if(a=r.sent,n=a.data,s=a.statusText,"OK"===s){r.next=9;break}throw new Error(s);case 9:e.restaurant={id:n.restaurant.id,name:n.restaurant.name,categoryName:n.restaurant.Category.name,image:n.restaurant.image,openingHours:n.restaurant.opening_hours,tel:n.restaurant.tel,address:n.restaurant.address,description:n.restaurant.description,isFavorited:n.isFavorited,isLiked:n.isLiked},e.restaurantComments=n.restaurant.Comments,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](1),O["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}},computed:Object(s["a"])({},Object(h["b"])(["currentUser"]))},S=P,F=Object(d["a"])(S,a,n,!1,null,null,null);e["default"]=F.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),u=r("9bf2").f,c=r("e893"),l=s.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};c(m,l);var f=m.prototype=l.prototype;f.constructor=m;var p=f.toString,v="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;u(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},f0e2:function(t,e,r){"use strict";var a=r("590f"),n=r.n(a);n.a},f4bb:function(t,e,r){},f641:function(t,e,r){"use strict";var a=r("f4bb"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-4acb9970.c3ebc72a.js.map