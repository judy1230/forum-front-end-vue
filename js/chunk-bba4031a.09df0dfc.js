(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bba4031a"],{b784:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("small",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.categoryName))]),r("ul",[r("li",[t._v("有"+t._s(t.restaurantComments.length)+"筆評價")]),r("li",[t._v("有"+t._s(t.restaurant.FavoritedUsers)+"人收藏")])])])])},n=[],s=(r("a4d3"),r("e01a"),r("b0c0"),r("5530")),i=(r("96cf"),r("1da1")),o=r("2f62"),c=r("2fa3"),u=r("c4c3"),d={data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1,FavoritedUsers:0},restaurantComments:[]}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("fetchRestaurant id: ",t),r.prev=1,r.next=4,u["a"].getRestaurant({restaurantId:t});case 4:if(a=r.sent,n=a.data,s=a.statusText,"OK"===s){r.next=9;break}throw new Error(s);case 9:e.restaurant={id:n.restaurant.id,name:n.restaurant.name,categoryName:n.restaurant.Category.name,image:n.restaurant.image,openingHours:n.restaurant.opening_hours,tel:n.restaurant.tel,address:n.restaurant.address,description:n.restaurant.description,isFavorited:n.isFavorited,isLiked:n.isLiked,FavoritedUsers:n.restaurant.FavoritedUsers.length},e.restaurantComments=n.restaurant.Comments,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](1),c["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()}},computed:Object(s["a"])({},Object(o["b"])(["currentUser"]))},l=d,m=r("2877"),v=Object(m["a"])(l,a,n,!1,null,null,null);e["default"]=v.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var v=m.prototype=d.prototype;v.constructor=m;var p=v.toString,f="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var r=f?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-bba4031a.09df0dfc.js.map