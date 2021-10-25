exports.ids = [41];
exports.modules = {

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/_token.vue?vue&type=template&id=d4cde644&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.$route.params.token)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seller/_token.vue?vue&type=template&id=d4cde644&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/_token.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var _tokenvue_type_script_lang_js_ = ({async mounted(){try{const{data}=await this.$axios.get("/user/current",{headers:{'Authorization':"Bearer "+this.$route.params.token}});if(data.status==="ok"){this.$cookies.set("token",this.$route.params.token);this.$router.push('/seller/stores');}}catch(e){console.log(e);}}});
// CONCATENATED MODULE: ./pages/seller/_token.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_tokenvue_type_script_lang_js_ = (_tokenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/seller/_token.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_tokenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d4cde644",
  "a676cc7e"
  
)

/* harmony default export */ var _token = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_token.js.map