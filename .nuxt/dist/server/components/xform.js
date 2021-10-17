exports.ids = [8];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4a3bfa2b", content, true, context)
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-32b0879c]{direction:rtl;box-sizing:border-box}body .b-toaster[data-v-32b0879c]{text-align:right}body .b-toaster .toast-header[data-v-32b0879c]{justify-content:space-between}body .b-toaster .toast-header .close[data-v-32b0879c]{width:24px;margin-left:1px!important;float:left;text-align:left}body .modal-content[data-v-32b0879c]{padding:20px;direction:rtl;text-align:right}body .modal-content .modal-header .modal-title[data-v-32b0879c]{color:#00c1a4}body .modal-content .modal-header .close[data-v-32b0879c]{margin:0;padding:0}body .modal-content .modal-footer[data-v-32b0879c]{display:none}body #__nuxt[data-v-32b0879c]{background-color:#f5f5f5}body #__nuxt h1[data-v-32b0879c]{font-size:1.1rem}body #__nuxt h3[data-v-32b0879c]{font-size:.95rem}body #__nuxt p[data-v-32b0879c],body #__nuxt span[data-v-32b0879c],body #__nuxt strong[data-v-32b0879c]{font-size:.8rem}body #__nuxt .cursor_pointer[data-v-32b0879c]{cursor:pointer}@media(min-width:420px){body #__nuxt h1[data-v-32b0879c]{font-size:1.1rem}body #__nuxt h3[data-v-32b0879c]{font-size:.95rem}body #__nuxt p[data-v-32b0879c],body #__nuxt span[data-v-32b0879c],body #__nuxt strong[data-v-32b0879c]{font-size:.8rem}}@media(min-width:576px){body #__nuxt h1[data-v-32b0879c]{font-size:1.2rem}body #__nuxt h3[data-v-32b0879c]{font-size:1.15rem}body #__nuxt p[data-v-32b0879c],body #__nuxt span[data-v-32b0879c],body #__nuxt strong[data-v-32b0879c]{font-size:.9rem}}@media(min-width:768px){body #__nuxt h1[data-v-32b0879c]{font-size:1.3rem}body #__nuxt h3[data-v-32b0879c]{font-size:1.15rem}body #__nuxt p[data-v-32b0879c],body #__nuxt span[data-v-32b0879c],body #__nuxt strong[data-v-32b0879c]{font-size:1rem}}@media(min-width:992px){body #__nuxt h1[data-v-32b0879c]{font-size:1.4rem}body #__nuxt h3[data-v-32b0879c]{font-size:1.25rem}}@media(min-width:1200px){body #__nuxt h1[data-v-32b0879c]{font-size:1.4rem}body #__nuxt h3[data-v-32b0879c]{font-size:1.25rem}}body #__nuxt #panel_admin[data-v-32b0879c]{background-color:#333;color:#fff}form legend[data-v-32b0879c]{font-size:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Xform.vue?vue&type=template&id=32b0879c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"w-100",attrs:{"name":"form"},on:{"submit":function($event){$event.preventDefault();return _vm.sub_form.apply(null, arguments)}}},[_vm._ssrNode("<fieldset data-v-32b0879c>","</fieldset>",[_vm._ssrNode("<legend data-v-32b0879c>"+_vm._ssrEscape(_vm._s(_vm.legend))+"</legend> "),_vm._t("content")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Xform.vue?vue&type=template&id=32b0879c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Xform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Xformvue_type_script_lang_js_ = ({props:{legend:{type:String,default:""},sub_form:{type:Function,default:()=>{}}}});
// CONCATENATED MODULE: ./components/Xform.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Xformvue_type_script_lang_js_ = (Xformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Xform.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Xformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32b0879c",
  "93100838"
  
)

/* harmony default export */ var Xform = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=xform.js.map