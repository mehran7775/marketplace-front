exports.ids = [30];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const portTypes=[{value:'PF',text:'پرداخت یاری'},{value:'Dedicated',text:'اختصاصی'},{value:'IVR',text:'تلفنی'},{value:'Card',text:'کارت به کارت'}];const getType=function(type){return portTypes.find(o=>o.value===type).text;};/* harmony default export */ __webpack_exports__["a"] = ({portTypes,getType});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gatewayStatus=[{text:'فعال',value:1,variant:'success'},{text:'در انتظار تایید',value:2,variant:'warning'},{text:'رد شده',value:3,variant:'danger'},{text:'مسدود',value:4,variant:'danger'}];const getStatus=function(status){return{text:gatewayStatus.find(o=>o.value===status).text,variant:gatewayStatus.find(o=>o.value===status).variant};};/* harmony default export */ __webpack_exports__["a"] = ({gatewayStatus,getStatus});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/gateways/add.vue?vue&type=template&id=5b1df1fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-12 p-5 mt-5\" data-v-5b1df1fc>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-5b1df1fc>","</div>",[_vm._ssrNode("<div class=\"card-body\" data-v-5b1df1fc>","</div>",[_c('b-form',{on:{"submit":_vm.onSubmit}},[_c('b-form-group',{attrs:{"label":"عنوان","label-for":"input-1"}},[_c('b-form-input',{model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"پورت","label-for":"input-1"}},[_c('b-form-select',{staticClass:"form-control",attrs:{"options":_vm.ports},model:{value:(_vm.port),callback:function ($$v) {_vm.port=$$v},expression:"port"}})],1),_vm._v(" "),(_vm.port && _vm.port.type == 'PF')?_c('b-form-group',{attrs:{"label":"شناسه درگاه پرداخت یاری","label-for":"input-1"}},[_c('b-form-input',{model:{value:(_vm.port_config),callback:function ($$v) {_vm.port_config=$$v},expression:"port_config"}})],1):_vm._e(),_vm._v(" "),(_vm.port && _vm.port.type == 'Card')?_c('b-form-group',{attrs:{"label":"توکن درگاه کارت به کارت","label-for":"input-1"}},[_c('b-form-input',{model:{value:(_vm.port_config),callback:function ($$v) {_vm.port_config=$$v},expression:"port_config"}})],1):_vm._e(),_vm._v(" "),(_vm.port && _vm.port.type == 'IVR')?_c('b-form-group',{attrs:{"label":"توکن درگاه تلفنی","label-for":"input-1"}},[_c('b-form-input',{model:{value:(_vm.port_config),callback:function ($$v) {_vm.port_config=$$v},expression:"port_config"}})],1):_vm._e(),_vm._v(" "),(_vm.port && _vm.port.type == 'Dedicated')?_c('b-form-group',{attrs:{"label":"شماره ترمینال درگاه مستقیم","label-for":"input-1"}},[_c('b-form-input',{model:{value:(_vm.port_config),callback:function ($$v) {_vm.port_config=$$v},expression:"port_config"}})],1):_vm._e(),_vm._v(" "),_c('b-form-group',{attrs:{"label":"وضعیت","label-for":"input-1"}},[_c('b-form-select',{staticClass:"form-control",attrs:{"options":_vm.GatewayStatus.gatewayStatus},model:{value:(_vm.form.status),callback:function ($$v) {_vm.$set(_vm.form, "status", $$v)},expression:"form.status"}})],1),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("ثبت پورت")])],1)],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/gateways/add.vue?vue&type=template&id=5b1df1fc&scoped=true&

// EXTERNAL MODULE: ./constants/PortTypes.js
var PortTypes = __webpack_require__(114);

// EXTERNAL MODULE: ./constants/GatewayStatus.js
var GatewayStatus = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/gateways/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var addvue_type_script_lang_js_ = ({name:"add",layout:"main-content",data(){return{PortTypes: PortTypes["a" /* default */],GatewayStatus: GatewayStatus["a" /* default */],port:null,form:{title:'',port_config:null,port_id:null,status:1},ports:[],port_config:null};},watch:{port_config:function(val){if(this.port.type=='PF'){this.form.port_config={sequence:val};}if(this.port.type=='Card'){this.form.port_config={token:val};}if(this.port.type=='IVR'){this.form.port_config={token:val};}if(this.port.type=='Dedicated'){this.form.port_config={terminal_id:val};}}},methods:{async onSubmit(event){try{event.preventDefault();this.form.port_id=this.port.id;let res=await this.$axios.post('gateway/create',this.form);alert(res.data.message);}catch(e){alert(e.message);}},async getPorts(){let res=await this.$axios.get('gateway/get-ports');for(let port in res.data.data.data){port=res.data.data.data[port];console.log(port);if(!port.is_deleted){this.ports.push({text:port.en_name+" "+PortTypes["a" /* default */].getType(port.type),value:port});}}}},mounted(){this.getPorts();}});
// CONCATENATED MODULE: ./pages/admin/gateways/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var gateways_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/gateways/add.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gateways_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b1df1fc",
  "2a16f7f2"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map