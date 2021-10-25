exports.ids = [6];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8b3975a4", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_access_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_access_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_access_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_access_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_access_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-backdrop{background-color:rgba(0,0,0,.5)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/users/change-access.vue?vue&type=template&id=7645917e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-row',[_c('b-col',{attrs:{"col":"sm"}},[_c('b-form-group',{attrs:{"label":"نقش های مورد نظر خود را انتخاب کنید:"}},_vm._l((Object.keys(_vm.roles)),function(role){return _c('b-form-checkbox',{attrs:{"value":true},model:{value:(_vm.roles[role]),callback:function ($$v) {_vm.$set(_vm.roles, role, $$v)},expression:"roles[role]"}},[_vm._v("\n                    "+_vm._s(role)+"\n                ")])}),1)],1),_vm._v(" "),_c('b-col',{attrs:{"col":"sm"}},[_c('b-form-group',{attrs:{"label":"دسترسی های مورد نظر خود را انتخاب کنید:"}},_vm._l((Object.keys(_vm.permissions)),function(permission){return _c('b-form-checkbox',{attrs:{"value":true},model:{value:(_vm.permissions[permission]),callback:function ($$v) {_vm.$set(_vm.permissions, permission, $$v)},expression:"permissions[permission]"}},[_vm._v("\n                    "+_vm._s(permission)+"\n                ")])}),1)],1)],1),_vm._ssrNode(" "),_c('b-form-group',[_c('b-btn',{attrs:{"variant":"success"},on:{"click":_vm.changeAccess}},[_vm._v("تغییر دسترسی ها")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/users/change-access.vue?vue&type=template&id=7645917e&

// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/users/change-access.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var change_accessvue_type_script_lang_js_ = ({props:['permissions','roles','user_id'],name:"change-access",data(){return{selected:[]};},mounted(){for(let permission in Object.keys(this.permissions)){permission=Object.keys(this.permissions)[permission];if(this.permissions[permission]){this.selected.push(permission);}}for(let role in Object.keys(this.roles)){role=Object.keys(this.roles)[role];if(this.roles[role]){this.selected.push(role);}}},methods:{async changeAccess(){let json={};json.roles=this.roles;json.permissions=this.permissions;let res=await api["a" /* default */].post('user/change-access/'+this.user_id,json,this.$cookies.get('token'));alert(res.data.message);}}});
// CONCATENATED MODULE: ./components/users/change-access.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_change_accessvue_type_script_lang_js_ = (change_accessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/users/change-access.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_change_accessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ba5bcd6"
  
)

/* harmony default export */ var change_access = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=users-change-access.js.map