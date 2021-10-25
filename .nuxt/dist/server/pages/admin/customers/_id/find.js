exports.ids = [27];
exports.modules = {

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customers/_id/find.vue?vue&type=template&id=15cdc658&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-12 p-5\" data-v-15cdc658>","</div>",[_vm._ssrNode("<div class=\"card mt-5\" data-v-15cdc658>","</div>",[(_vm.user)?_vm._ssrNode("<div class=\"card-body\" data-v-15cdc658>","</div>",[_c('b-form-row',[_c('b-col',{attrs:{"col":"sm"}},[_c('b-form-group',{attrs:{"label":"نام"}},[_c('b-form-input',{attrs:{"disabled":"","value":_vm.user.first_name}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"col":"sm"}},[_c('b-form-group',{attrs:{"label":"نام خانوادگی"}},[_c('b-form-input',{attrs:{"disabled":"","value":_vm.user.last_name}})],1)],1)],1),_vm._ssrNode(" "),_c('b-form-row',[_c('b-col',{attrs:{"cols":"sm"}},[_c('b-form-group',{attrs:{"label":"شناسه"}},[_c('b-form-input',{attrs:{"disabled":"","value":_vm.user.id}})],1)],1)],1),_vm._ssrNode(" "),_c('b-form-row',[_c('b-col',{attrs:{"col":"sm"}},[_c('b-form-group',{attrs:{"label":"ایمیل"}},[_c('b-form-input',{attrs:{"disabled":"","value":_vm.user.email}})],1)],1)],1),_vm._ssrNode(" "),_c('b-form-row',[_c('b-col',{attrs:{"cols":"sm"}},[_c('b-form-group',{attrs:{"label":"شماره همراه"}},[_c('b-form-input',{attrs:{"disabled":"","value":_vm.user.phone}})],1)],1)],1)],2):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/customers/_id/find.vue?vue&type=template&id=15cdc658&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/customers/_id/find.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var findvue_type_script_lang_js_ = ({name:"find",layout:"main-content",data(){return{user:null};},async mounted(){let res=await this.$axios.get('customer/find/'+this.$route.params.id);this.user=res.data.data;}});
// CONCATENATED MODULE: ./pages/admin/customers/_id/find.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_findvue_type_script_lang_js_ = (findvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/customers/_id/find.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_findvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15cdc658",
  "19c5f915"
  
)

/* harmony default export */ var find = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=find.js.map