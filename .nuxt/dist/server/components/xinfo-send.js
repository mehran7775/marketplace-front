exports.ids = [10];
exports.modules = {

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cf779374", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XinfoSend_vue_vue_type_style_index_0_id_67ad775b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XinfoSend_vue_vue_type_style_index_0_id_67ad775b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XinfoSend_vue_vue_type_style_index_0_id_67ad775b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XinfoSend_vue_vue_type_style_index_0_id_67ad775b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XinfoSend_vue_vue_type_style_index_0_id_67ad775b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body #__nuxt .cursor_pointer[data-v-67ad775b]{cursor:pointer}#info_send[data-v-67ad775b]{min-height:280px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/XinfoSend.vue?vue&type=template&id=67ad775b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col w-100",attrs:{"id":"info_send"}},[_vm._ssrNode("<div class=\"row pb-3\" data-v-67ad775b><div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"region_send\" placeholder=\"منطقه ارسال\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"time_send_self\" placeholder=\"زمان ارسال شهر خود\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"time_send_others\" placeholder=\"زمان ارسال سایر شهرها\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"payment_method_self\" placeholder=\"شیوه پرداخت شهر خود\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"cost_send_self\" placeholder=\"هزینه ارسال شهر خود\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 col-md-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"cost_send_others\" placeholder=\"هزینه ارسال سایر شهرها\" class=\"form-control\" data-v-67ad775b></div> <div class=\"col-4 my-2\" data-v-67ad775b><input type=\"text\" id=\"payment_method_othrs\" placeholder=\"شیوه پرداخت سایر شهرها\" class=\"form-control\" data-v-67ad775b></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/XinfoSend.vue?vue&type=template&id=67ad775b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/XinfoSend.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var XinfoSendvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/XinfoSend.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_XinfoSendvue_type_script_lang_js_ = (XinfoSendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/XinfoSend.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_XinfoSendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67ad775b",
  "2c2f7376"
  
)

/* harmony default export */ var XinfoSend = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=xinfo-send.js.map