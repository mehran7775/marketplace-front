exports.ids = [47,2,7];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8dbdc612", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-1eab5d64]{direction:rtl;box-sizing:border-box}body .b-toaster[data-v-1eab5d64]{text-align:right}body .b-toaster .toast-header[data-v-1eab5d64]{justify-content:space-between}body .b-toaster .toast-header .close[data-v-1eab5d64]{width:24px;margin-left:1px!important;float:left;text-align:left}body .modal-content[data-v-1eab5d64]{padding:20px;direction:rtl;text-align:right}body .modal-content .modal-header .modal-title[data-v-1eab5d64]{color:#00c1a4}body .modal-content .modal-header .close[data-v-1eab5d64]{margin:0;padding:0}body .modal-content .modal-footer[data-v-1eab5d64]{display:none}body #__nuxt[data-v-1eab5d64]{background-color:#f5f5f5}body #__nuxt h1[data-v-1eab5d64]{font-size:1.1rem}body #__nuxt h3[data-v-1eab5d64]{font-size:.95rem}body #__nuxt p[data-v-1eab5d64],body #__nuxt span[data-v-1eab5d64],body #__nuxt strong[data-v-1eab5d64]{font-size:.8rem}body #__nuxt .cursor_pointer[data-v-1eab5d64]{cursor:pointer}@media(min-width:420px){body #__nuxt h1[data-v-1eab5d64]{font-size:1.1rem}body #__nuxt h3[data-v-1eab5d64]{font-size:.95rem}body #__nuxt p[data-v-1eab5d64],body #__nuxt span[data-v-1eab5d64],body #__nuxt strong[data-v-1eab5d64]{font-size:.8rem}}@media(min-width:576px){body #__nuxt h1[data-v-1eab5d64]{font-size:1.2rem}body #__nuxt h3[data-v-1eab5d64]{font-size:1.15rem}body #__nuxt p[data-v-1eab5d64],body #__nuxt span[data-v-1eab5d64],body #__nuxt strong[data-v-1eab5d64]{font-size:.9rem}}@media(min-width:768px){body #__nuxt h1[data-v-1eab5d64]{font-size:1.3rem}body #__nuxt h3[data-v-1eab5d64]{font-size:1.15rem}body #__nuxt p[data-v-1eab5d64],body #__nuxt span[data-v-1eab5d64],body #__nuxt strong[data-v-1eab5d64]{font-size:1rem}}@media(min-width:992px){body #__nuxt h1[data-v-1eab5d64]{font-size:1.4rem}body #__nuxt h3[data-v-1eab5d64]{font-size:1.25rem}}@media(min-width:1200px){body #__nuxt h1[data-v-1eab5d64]{font-size:1.4rem}body #__nuxt h3[data-v-1eab5d64]{font-size:1.25rem}}body #__nuxt #panel_admin[data-v-1eab5d64]{background-color:#333;color:#fff}button[data-v-1eab5d64]{border-radius:3rem}button svg[data-v-1eab5d64]{color:rgba(0,0,0,.399)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Xbutton.vue?vue&type=template&id=1eab5d64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:("mx-1 btn btn-" + _vm.variant),attrs:{"type":_vm.is_submit ? 'submit' : 'button'},on:{"click":_vm.on_click}},[_vm._ssrNode("<div class=\"row mx-1\" data-v-1eab5d64>","</div>",[_vm._ssrNode(((_vm.text != '')?("<div class=\"px-2\" data-v-1eab5d64><span data-v-1eab5d64>"+_vm._ssrEscape(_vm._s(_vm.text))+"</span></div>"):"<!---->")+" "),(_vm.icon != '')?_vm._ssrNode("<div class=\"px-1\" data-v-1eab5d64>","</div>",[_c('fa',{attrs:{"icon":_vm.icon}})],1):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Xbutton.vue?vue&type=template&id=1eab5d64&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Xbutton.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Xbuttonvue_type_script_lang_js_ = ({props:{icon:{type:String,default:""},text:{type:String,default:""},variant:{type:String,default:"success"},is_submit:{type:Boolean,default:false},on_click:{type:Function,default:()=>{}}}});
// CONCATENATED MODULE: ./components/Xbutton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Xbuttonvue_type_script_lang_js_ = (Xbuttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Xbutton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(103)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Xbuttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eab5d64",
  "5145ad52"
  
)

/* harmony default export */ var Xbutton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1b6f3b9d", content, true, context)
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XcardStore_vue_vue_type_style_index_0_id_9f72d88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XcardStore_vue_vue_type_style_index_0_id_9f72d88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XcardStore_vue_vue_type_style_index_0_id_9f72d88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XcardStore_vue_vue_type_style_index_0_id_9f72d88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XcardStore_vue_vue_type_style_index_0_id_9f72d88a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-9f72d88a]{direction:rtl;box-sizing:border-box}body .b-toaster[data-v-9f72d88a]{text-align:right}body .b-toaster .toast-header[data-v-9f72d88a]{justify-content:space-between}body .b-toaster .toast-header .close[data-v-9f72d88a]{width:24px;margin-left:1px!important;float:left;text-align:left}body .modal-content[data-v-9f72d88a]{padding:20px;direction:rtl;text-align:right}body .modal-content .modal-header .modal-title[data-v-9f72d88a]{color:#00c1a4}body .modal-content .modal-header .close[data-v-9f72d88a]{margin:0;padding:0}body .modal-content .modal-footer[data-v-9f72d88a]{display:none}body #__nuxt[data-v-9f72d88a]{background-color:#f5f5f5}body #__nuxt h1[data-v-9f72d88a]{font-size:1.1rem}body #__nuxt h3[data-v-9f72d88a]{font-size:.95rem}body #__nuxt p[data-v-9f72d88a],body #__nuxt span[data-v-9f72d88a],body #__nuxt strong[data-v-9f72d88a]{font-size:.8rem}body #__nuxt .cursor_pointer[data-v-9f72d88a]{cursor:pointer}@media(min-width:420px){body #__nuxt h1[data-v-9f72d88a]{font-size:1.1rem}body #__nuxt h3[data-v-9f72d88a]{font-size:.95rem}body #__nuxt p[data-v-9f72d88a],body #__nuxt span[data-v-9f72d88a],body #__nuxt strong[data-v-9f72d88a]{font-size:.8rem}}@media(min-width:576px){body #__nuxt h1[data-v-9f72d88a]{font-size:1.2rem}body #__nuxt h3[data-v-9f72d88a]{font-size:1.15rem}body #__nuxt p[data-v-9f72d88a],body #__nuxt span[data-v-9f72d88a],body #__nuxt strong[data-v-9f72d88a]{font-size:.9rem}}@media(min-width:768px){body #__nuxt h1[data-v-9f72d88a]{font-size:1.3rem}body #__nuxt h3[data-v-9f72d88a]{font-size:1.15rem}body #__nuxt p[data-v-9f72d88a],body #__nuxt span[data-v-9f72d88a],body #__nuxt strong[data-v-9f72d88a]{font-size:1rem}}@media(min-width:992px){body #__nuxt h1[data-v-9f72d88a]{font-size:1.4rem}body #__nuxt h3[data-v-9f72d88a]{font-size:1.25rem}}@media(min-width:1200px){body #__nuxt h1[data-v-9f72d88a]{font-size:1.4rem}body #__nuxt h3[data-v-9f72d88a]{font-size:1.25rem}}body #__nuxt #panel_admin[data-v-9f72d88a]{background-color:#333;color:#fff}.card_store[data-v-9f72d88a]{max-width:320px;flex-direction:column;align-items:center;margin:auto;border-radius:10px;padding:15px;text-align:right;border:1px solid rgba(0,0,0,.399)}.card_store[data-v-9f72d88a],.card_store .head[data-v-9f72d88a]{display:flex}.card_store .head .profile[data-v-9f72d88a]{width:140px;height:80px;border:1px solid rgba(0,193,164,.32157);border-radius:100%;padding:1px}.card_store .head .profile img[data-v-9f72d88a]{width:100%;height:100%;border-radius:100%}.card_store .detail_store[data-v-9f72d88a]{width:100%}.card_store .detail_store .pair[data-v-9f72d88a]{display:flex;flex-wrap:nowrap}.card_store .detail_store .pair div[data-v-9f72d88a]{width:50%;border:1px solid rgba(0,193,164,.32157);padding:5px 0;text-align:center}.card_store .detail_store .pair .radius-r[data-v-9f72d88a]{border-top-right-radius:10px}.card_store .detail_store .pair .radius-l[data-v-9f72d88a]{border-top-left-radius:10px}.card_store .detail_store .pair .radius-r2[data-v-9f72d88a]{border-bottom-right-radius:10px}.card_store .detail_store .pair .radius-l2[data-v-9f72d88a]{border-bottom-left-radius:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/XcardStore.vue?vue&type=template&id=9f72d88a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card_store"},[_vm._ssrNode("<div class=\"head\" data-v-9f72d88a><div class=\"profile\" data-v-9f72d88a><img src=\"/images/apple-iphone-12-r1.jpg\" alt=\"عکس پروفایل\" data-v-9f72d88a></div> <div class=\"title mr-3 mt-1\" data-v-9f72d88a><span class=\"font-weight-bold\" data-v-9f72d88a>عنوان فروشگاه</span> <br data-v-9f72d88a> <div class=\"pt-2\" data-v-9f72d88a><small data-v-9f72d88a>Lorem ipsum dolor sit, amet consectetur elit. Saepe ab vero.</small></div></div></div> "),_vm._ssrNode("<div class=\"detail_store my-4\" data-v-9f72d88a>","</div>",[_vm._ssrNode("<div class=\"pair\" data-v-9f72d88a>","</div>",[_vm._ssrNode("<div class=\"radius-r\" data-v-9f72d88a>","</div>",[_vm._ssrNode("<span data-v-9f72d88a>فروش</span> "),_c('spann',[_vm._v("125")])],2),_vm._ssrNode(" <div class=\"radius-l\" data-v-9f72d88a><span data-v-9f72d88a>محصول</span> <span data-v-9f72d88a>1000</span></div>")],2),_vm._ssrNode(" <div class=\"pair\" data-v-9f72d88a><div class=\"radius-r2\" data-v-9f72d88a><span data-v-9f72d88a>خرید</span> <span data-v-9f72d88a>235</span></div> <div class=\"radius-l2\" data-v-9f72d88a><span data-v-9f72d88a>تومان</span> <span data-v-9f72d88a>1250000</span></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex\" data-v-9f72d88a>","</div>",[_c('Xbutton',{staticClass:"px-4 py-1",attrs:{"text":"ویرایش"}}),_vm._ssrNode(" "),_c('Xbutton',{staticClass:"px-4 py-1",attrs:{"text":"مشاهده"}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/XcardStore.vue?vue&type=template&id=9f72d88a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/XcardStore.vue?vue&type=script&lang=js&
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
/* harmony default export */ var XcardStorevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/molecules/XcardStore.vue?vue&type=script&lang=js&
 /* harmony default export */ var molecules_XcardStorevue_type_script_lang_js_ = (XcardStorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/molecules/XcardStore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_XcardStorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f72d88a",
  "1fda7560"
  
)

/* harmony default export */ var XcardStore = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Xbutton: __webpack_require__(105).default})


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test/index.vue?vue&type=template&id=2bca370d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("\n    for test of components\n    "),_c('MoleculesXcardStore')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test/index.vue?vue&type=template&id=2bca370d&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/test/index.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f338e2e"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MoleculesXcardStore: __webpack_require__(150).default})


/***/ })

};;
//# sourceMappingURL=index.js.map