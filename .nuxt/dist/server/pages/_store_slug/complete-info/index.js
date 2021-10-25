exports.ids = [24,4,7,8];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8dbdc612", content, true, context)
};

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xbutton_vue_vue_type_style_index_0_id_1eab5d64_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body #__nuxt .cursor_pointer[data-v-1eab5d64]{cursor:pointer}button[data-v-1eab5d64]{border-radius:3rem}button svg[data-v-1eab5d64]{color:rgba(0,0,0,.399)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 108:
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
  
  var style0 = __webpack_require__(106)
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4a3bfa2b", content, true, context)
};

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Xform_vue_vue_type_style_index_0_id_32b0879c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body #__nuxt .cursor_pointer[data-v-32b0879c]{cursor:pointer}form legend[data-v-32b0879c]{font-size:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 121:
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
  
  var style0 = __webpack_require__(118)
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

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("29116232", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Xmodal.vue?vue&type=template&id=6d47f8e4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{ref:"modal",staticClass:"text-right",attrs:{"dir":"rtl","centered":"","id":"modal-prevent-closing2","title":_vm.title}},[_vm._t("content-modal")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/molecules/Xmodal.vue?vue&type=template&id=6d47f8e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Xmodal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Xmodalvue_type_script_lang_js_ = ({data(){return{name:"",nameState:null,submittedNames:[]};},props:{title:{type:String}},methods:{}});
// CONCATENATED MODULE: ./components/molecules/Xmodal.vue?vue&type=script&lang=js&
 /* harmony default export */ var molecules_Xmodalvue_type_script_lang_js_ = (Xmodalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/molecules/Xmodal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_Xmodalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d47f8e4",
  "0f29c5cc"
  
)

/* harmony default export */ var Xmodal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f40258c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f40258c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f40258c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f40258c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f40258c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body #__nuxt .cursor_pointer[data-v-0f40258c]{cursor:pointer}h1[data-v-0f40258c]{color:#00c1a4}.naming[data-v-0f40258c]{width:48%}.dash[data-v-0f40258c]{border-top:1px dashed #00c1a4}.getways[data-v-0f40258c]{background-color:#f5f5f5;border-radius:10px;height:50px;margin-bottom:1rem;display:flex;align-items:center}.icon-getway[data-v-0f40258c]{padding-right:6rem;padding-left:6rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_store_slug/complete-info/index.vue?vue&type=template&id=0f40258c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" data-v-0f40258c>","</div>",[_vm._ssrNode("<div class=\"col-10 m-auto col-md-7\" data-v-0f40258c>","</div>",[_vm._ssrNode("<div class=\"row pt-5\" data-v-0f40258c><h1 data-v-0f40258c>تکمیل اطلاعات</h1></div> "),_vm._ssrNode("<div class=\"row text-right\" data-v-0f40258c>","</div>",[_c('Xform',{attrs:{"sub_form":_vm.select_way_payment,"legend":"اطلاعات خودرا وارد کنید"},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"form-group px-3 pt-3"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"d-flex w-100 justify-content-between"},[_c('div',{staticClass:"naming"},[_c('input',{ref:"fname",staticClass:"form-control",attrs:{"type":"text","id":"fname","name":"fname","placeholder":"نام"}})]),_vm._v(" "),_c('div',{staticClass:"naming"},[_c('input',{ref:"lname",staticClass:"form-control",attrs:{"type":"text","id":"lname","name":"lname","placeholder":"نام خانوادگی"}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 mt-2"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"w-100"},[_c('input',{ref:"email",staticClass:"form-control",attrs:{"type":"email","id":"email","name":"email","placeholder":"ایمیل"}})])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 mt-2"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"w-100"},[_c('input',{ref:"phone",staticClass:"form-control",attrs:{"type":"text","id":"phone","name":"phone","placeholder":"موبایل"}})])])]),_vm._v(" "),_c('div',{staticClass:"col-12 mt-2"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"d-flex w-100 justify-content-between"},[_c('div',{staticClass:"naming"},[_c('input',{ref:"province",staticClass:"form-control",attrs:{"type":"text","id":"province","name":"province","placeholder":"استان"}})]),_vm._v(" "),_c('div',{staticClass:"naming"},[_c('input',{ref:"city",staticClass:"form-control",attrs:{"type":"text","id":"city","name":"city","placeholder":"شهر"}})])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 mt-2"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"w-100"},[_c('input',{ref:"address",staticClass:"form-control",attrs:{"type":"text","id":"address","name":"address","placeholder":"آدرس"}})])])])]),_vm._v(" "),_c('div',{staticClass:"row mt-2"},[_c('hr',{staticClass:"dash w-100"})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('Xbutton',{staticClass:"px-5 m-auto",attrs:{"is_submit":"","text":"انتخاب روش پرداخت"}})],1),_vm._v(" "),_c('div'),_vm._v(" "),_c('form',{ref:"PayForm",attrs:{"method":"post","action":'https://coreshop.paystar.ir/api/pay/order/' + _vm.order_id}},[_c('input',{attrs:{"name":"gateway_id","value":"3rdqp"}})])])]},proxy:true}])})],1)],2)]),_vm._ssrNode(" "),[_c('MoleculesXmodal',{attrs:{"title":"انتخاب روش پرداخت"},scopedSlots:_vm._u([{key:"content-modal",fn:function(){return [_c('div',{staticClass:"row"},[_vm._l((_vm.getways),function(getway){return _c('div',{key:getway.id,staticClass:"col-12"},[_c('div',{staticClass:"getways"},[_c('input',{ref:'getway' + getway.id,refInFor:true,staticClass:"mr-4",attrs:{"type":"radio","name":"getway","checked":""},domProps:{"value":'getway' + getway.id}}),_vm._v(" "),_c('span',{staticClass:"mr-3",domProps:{"textContent":_vm._s(getway.title)}})])])}),_vm._v(" "),_c('div',{staticClass:"col-12 text-center"},[_c('Xbutton',{staticClass:"icon-getway",attrs:{"on_click":_vm.do_payment,"text":"پرداخت"}})],1)],2)]},proxy:true}])})]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_store_slug/complete-info/index.vue?vue&type=template&id=0f40258c&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(23);

// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_store_slug/complete-info/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var complete_infovue_type_script_lang_js_ = ({layout:"index",head(){return{title:"صفحه تکمیل اطلاعات"// meta:[
//    {
//        hid:"description",
//        name:"description",
//        content:""
//    }
// ]
};},components:{ValidationProvider: external_vee_validate_["ValidationProvider"]},methods:{select_way_payment(){const data_user={name:this.$refs.fname.value+" "+this.$refs.lname.value,email:this.$refs.email.value,address:{province:this.$refs.province.value,city:this.$refs.city.value,address:this.$refs.address.value},phone:this.$refs.phone.value};const items=JSON.parse(localStorage.getItem("cartItems"));const items_second=[];items.forEach(element=>{items_second.push({id:element.id,quantity:element.count});});const items_end={store_id:this.$store.state.stores.id,products:items_second};this.$store.dispatch('payments/select_way_payment',items_end);},do_payment(){let getway=null;if(this.$refs.getway1.checked){getway=1;}else if(this.$refs.getway2.checked){getway=2;}else if(this.$refs.getway3.checked){getway=3;}else{getway="null";}this.$store.dispatch("payments/do_payment",{getway_id:getway});},getStore(){api["a" /* default */].get(`store/${this.$route.params.store_slug}`).then(res=>{this.store=res.data.data;});}},created(){console.log(this.$store.state.payments);},computed:{getways(){return this.$store.state.payments.getways;}},mounted(){this.getStore();}});
// CONCATENATED MODULE: ./pages/_store_slug/complete-info/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _store_slug_complete_infovue_type_script_lang_js_ = (complete_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_store_slug/complete-info/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _store_slug_complete_infovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f40258c",
  "7c5ea9e4"
  
)

/* harmony default export */ var complete_info = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Xbutton: __webpack_require__(108).default,Xform: __webpack_require__(121).default,MoleculesXmodal: __webpack_require__(160).default})


/***/ })

};;
//# sourceMappingURL=index.js.map