(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2749faa1"],{"34de":function(e,t,a){"use strict";var r=a("d1fe"),n=a.n(r);n.a},5652:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:e.newCategoryName},on:{input:function(t){t.target.composing||(e.newCategoryName=t.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.createCategory(t)}}},[e._v(e._s(e.isProcessing?"處理中...":"新增"))])])])]),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.categories,(function(t){return a("tr",{key:t.id},[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[e._v(e._s(t.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.handleCancel(t.id)}}},[e._v("✕")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleIsEditing(t.id)}}},[e._v("Edit")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.updateCategory({categoryId:t.id,name:t.name})}}},[e._v("Save")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteCategory(t.id)}}},[e._v("Delete")])])])})),0)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[e._v("Action")])])])}],s=(a("4de4"),a("d81d"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("e04c"),c=a("be6c"),u=a("2fa3"),d={components:{AdminNav:o["a"]},data:function(){return{newCategoryName:"",categories:[],isProcessing:!1}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].categories.get();case 3:if(a=t.sent,r=a.data,n=a.statusText,"OK"===n){t.next=8;break}throw new Error(n);case 8:e.categories=r.categories.map((function(e){return Object(s["a"])({},e,{isEditing:!1})})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),u["a"].fire({type:"error",title:"無法顯示餐廳類別總類, 請稍後"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},createCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isProcessing=!0,e.newCategoryName){t.next=5;break}return u["a"].fire({type:"warning",title:"請填寫餐廳類別"}),t.abrupt("return");case 5:return t.next=7,c["a"].categories.create({name:e.newCategoryName});case 7:if(a=t.sent,r=a.data,"success"===r.status){t.next=11;break}throw new Error(r.status);case 11:e.newCategorName="",e.isProcessing=!1,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),e.isProcessing=!1,u["a"].fire({type:"error",titile:"無法建立餐廳，請稍後再試"});case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},deleteCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete({categoryId:e});case 3:if(r=a.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){a.next=8;break}throw new Error(n.status);case 8:t.categories=t.categories.filter((function(t){return t.id!==e})),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),u["a"].fire({type:"error",titile:"無法刪除餐廳，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},toggleIsEditing:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:try{t.categories=t.categories.map((function(t){return t.id!==e?t:Object(s["a"])({},t,{nameCached:t.name,isEditing:!t.isEditing})}))}catch(r){u["a"].fire({type:"error",titile:"無法編輯餐廳，請稍後再試"})}case 1:case"end":return a.stop()}}),a)})))()},updateCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.categoryId,n=e.name,a.prev=1,console.log("categoryId",r),console.log("updatedName",n),a.next=6,c["a"].categories.update({categoryId:r,name:n});case 6:if(s=a.sent,i=s.data,o=s.statusText,t.toggleIsEditing(r),"OK"===o&&"success"===i.status){a.next=12;break}throw new Error(o);case 12:a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](1),u["a"].fire({type:"error",title:"暫時無法更新類別,請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[1,14]])})))()},handleCancel:function(e){console.log("categoryId:",e),this.categories=this.categories.map((function(t){return t.id!==e?t:Object(s["a"])({},t,{name:t.nameCached})})),this.toggleIsEditing(e)}}},l=d,g=(a("34de"),a("2877")),m=Object(g["a"])(l,r,n,!1,null,"0ef4ad1e",null);t["default"]=m.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.categoryId,a=e.name;return console.log("getToken()",n()),r["b"].put("/admin/categories/".concat(t),{name:a},{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t,{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a,{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(e){var t=e.restaurantId;return console.log("getToken()",n()),r["b"].delete("/admin/restaurants/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})}}}},d1fe:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=a("ae40"),o=s("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h1",[e._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[e._v("Restaurants")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[e._v("Categories")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[e._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-2749faa1.e8374996.js.map