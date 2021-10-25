exports.ids = [12];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("78fe891c", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XrecordGetway_vue_vue_type_style_index_0_id_bebbd6b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XrecordGetway_vue_vue_type_style_index_0_id_bebbd6b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XrecordGetway_vue_vue_type_style_index_0_id_bebbd6b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XrecordGetway_vue_vue_type_style_index_0_id_bebbd6b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XrecordGetway_vue_vue_type_style_index_0_id_bebbd6b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-bebbd6b4]{direction:rtl;box-sizing:border-box}body .b-toaster[data-v-bebbd6b4]{text-align:right}body .b-toaster .toast-header[data-v-bebbd6b4]{justify-content:space-between}body .b-toaster .toast-header .close[data-v-bebbd6b4]{width:24px;margin-left:1px!important;float:left;text-align:left}body .modal-content[data-v-bebbd6b4]{padding:20px;direction:rtl;text-align:right}body .modal-content .modal-header .modal-title[data-v-bebbd6b4]{color:#00c1a4}body .modal-content .modal-header .close[data-v-bebbd6b4]{margin:0;padding:0}body .modal-content .modal-footer[data-v-bebbd6b4]{display:none}body #__nuxt[data-v-bebbd6b4]{background-color:#f5f5f5}body #__nuxt h1[data-v-bebbd6b4]{font-size:1.1rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:.95rem}body #__nuxt p[data-v-bebbd6b4],body #__nuxt span[data-v-bebbd6b4],body #__nuxt strong[data-v-bebbd6b4]{font-size:.8rem}body #__nuxt .cursor_pointer[data-v-bebbd6b4]{cursor:pointer}@media(min-width:420px){body #__nuxt h1[data-v-bebbd6b4]{font-size:1.1rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:.95rem}body #__nuxt p[data-v-bebbd6b4],body #__nuxt span[data-v-bebbd6b4],body #__nuxt strong[data-v-bebbd6b4]{font-size:.8rem}}@media(min-width:576px){body #__nuxt h1[data-v-bebbd6b4]{font-size:1.2rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:1.15rem}body #__nuxt p[data-v-bebbd6b4],body #__nuxt span[data-v-bebbd6b4],body #__nuxt strong[data-v-bebbd6b4]{font-size:.9rem}}@media(min-width:768px){body #__nuxt h1[data-v-bebbd6b4]{font-size:1.3rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:1.15rem}body #__nuxt p[data-v-bebbd6b4],body #__nuxt span[data-v-bebbd6b4],body #__nuxt strong[data-v-bebbd6b4]{font-size:1rem}}@media(min-width:992px){body #__nuxt h1[data-v-bebbd6b4]{font-size:1.4rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:1.25rem}}@media(min-width:1200px){body #__nuxt h1[data-v-bebbd6b4]{font-size:1.4rem}body #__nuxt h3[data-v-bebbd6b4]{font-size:1.25rem}}body #__nuxt #panel_admin[data-v-bebbd6b4]{background-color:#333;color:#fff}#record_getway[data-v-bebbd6b4]{min-height:280px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/XrecordGetway.vue?vue&type=template&id=bebbd6b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col w-100",attrs:{"id":"record_getway"}},[_vm._ssrNode("<div class=\"row justify-content-around align-content-center pb-3\" data-v-bebbd6b4>","</div>",[_vm._ssrNode("<div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"title\" placeholder=\"عنوان فارسی\""+(_vm._ssrAttr("value",(_vm.fa_name)))+" class=\"form-control\" data-v-bebbd6b4></div> <div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"name\" placeholder=\"نام انگلیسی\""+(_vm._ssrAttr("value",(_vm.en_name)))+" class=\"form-control\" data-v-bebbd6b4></div> <div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"description\" placeholder=\"توضیحات\""+(_vm._ssrAttr("value",(_vm.description)))+" class=\"form-control\" data-v-bebbd6b4></div> <div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"privance\" placeholder=\"استان\""+(_vm._ssrAttr("value",(_vm.province)))+" class=\"form-control\" data-v-bebbd6b4></div> <div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"city\" placeholder=\"شهر\""+(_vm._ssrAttr("value",(_vm.city)))+" class=\"form-control\" data-v-bebbd6b4></div> <div class=\"col-4 col-md-4 my-2\" data-v-bebbd6b4><input type=\"text\" id=\"phone_number\" placeholder=\"شماره همراه\""+(_vm._ssrAttr("value",(_vm.phone_number)))+" class=\"form-control\" data-v-bebbd6b4></div> "),_vm._ssrNode("<div class=\"col-4 my-2\" data-v-bebbd6b4>","</div>",[_c('b-form-file',{ref:"logo",staticClass:"form-control",attrs:{"id":"logo","placeholder":"لوگو"},model:{value:(_vm.logo),callback:function ($$v) {_vm.logo=$$v},expression:"logo"}}),_vm._ssrNode(" <div class=\"m-auto pt-2 pr-2\" data-v-bebbd6b4><div class=\"w-100 text-right\" data-v-bebbd6b4><input type=\"checkbox\" id=\"show_number\" name=\"show_number\""+(_vm._ssrAttr("checked",Array.isArray(_vm.name_option)?_vm._i(_vm.name_option,null)>-1:(_vm.name_option)))+" data-v-bebbd6b4> <label for=\"show_number\" data-v-bebbd6b4>نمایش شماره موبایل</label></div> <div class=\"w-100 text-right\" data-v-bebbd6b4><input type=\"checkbox\" id=\"show_email\" name=\"show_email\" checked=\"checked\" data-v-bebbd6b4> <label for=\"show_email\" data-v-bebbd6b4>نمایش ایمیل</label></div> <div class=\"w-100 text-right\" data-v-bebbd6b4><input type=\"checkbox\" id=\"show_address\" name=\"show_address\""+(_vm._ssrAttr("checked",Array.isArray(_vm.email_option)?_vm._i(_vm.email_option,null)>-1:(_vm.email_option)))+" data-v-bebbd6b4> <label for=\"show_address\" data-v-bebbd6b4>نمایش آدرس</label></div> <div class=\"w-100 text-right\" data-v-bebbd6b4><input type=\"checkbox\" id=\"show_fullname\" name=\"show_fullname\""+(_vm._ssrAttr("checked",Array.isArray(_vm.phone_option)?_vm._i(_vm.phone_option,null)>-1:(_vm.phone_option)))+" data-v-bebbd6b4> <label for=\"show_fullname\" data-v-bebbd6b4>نمایش نام و نام خانوادگی</label></div></div>")],2),_vm._ssrNode(" <div class=\"col-8 my-2\" data-v-bebbd6b4><textarea rows=\"6\" id=\"lows\" placeholder=\"قوانین و مقررات فروشگاه\" class=\"form-control\" data-v-bebbd6b4>"+_vm._ssrEscape(_vm._s(_vm.shop_terms))+"</textarea></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/XrecordGetway.vue?vue&type=template&id=bebbd6b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/XrecordGetway.vue?vue&type=script&lang=js&
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
/* harmony default export */ var XrecordGetwayvue_type_script_lang_js_ = ({props:{data_store:{type:[String,Array,Object],default:""},setData:{type:Function}},data(){return{fa_name:null,en_name:null,description:null,province:null,city:null,phone_number:null,logo:null,name_option:null,address_option:null,email_option:null,phone_option:null,shop_terms:null};},watch:{logo:function(){this.setLogo();}},methods:{setLogo(){alert(this.logo);this.setData('logo',this.logo);}}});
// CONCATENATED MODULE: ./components/XrecordGetway.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_XrecordGetwayvue_type_script_lang_js_ = (XrecordGetwayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/XrecordGetway.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_XrecordGetwayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bebbd6b4",
  "29c81faa"
  
)

/* harmony default export */ var XrecordGetway = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=xrecord-getway.js.map