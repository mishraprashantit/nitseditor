(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tab-type-8",
  props: ['title', 'description']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "m-portlet" }, [
    _c("div", { staticClass: "m-portlet__head" }, [
      _c("div", { staticClass: "m-portlet__head-caption" }, [
        _c("div", { staticClass: "m-portlet__head-title" }, [
          _c("h3", { staticClass: "m-portlet__head-text" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.title) +
                "\n                "
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "m-portlet__body" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content" }, [
        _c(
          "div",
          {
            staticClass: "tab-pane active",
            attrs: { id: "m_tabs_6_1", role: "tabpanel" }
          },
          [
            _vm._v(
              "\n                " + _vm._s(_vm.description) + "\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane",
            attrs: { id: "m_tabs_6_2", role: "tabpanel" }
          },
          [
            _vm._v(
              "\n                " + _vm._s(_vm.description) + "\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane",
            attrs: { id: "m_tabs_6_3", role: "tabpanel" }
          },
          [
            _vm._v(
              "\n                " + _vm._s(_vm.description) + "\n            "
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs  m-tabs-line", attrs: { role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item m-tabs__item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link m-tabs__link active",
              attrs: { "data-toggle": "tab", href: "#m_tabs_6_1", role: "tab" }
            },
            [_vm._v("\n                    Messages\n                ")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item dropdown m-tabs__item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link m-tabs__link dropdown-toggle",
              attrs: {
                "data-toggle": "dropdown",
                href: "#",
                role: "button",
                "aria-haspopup": "true",
                "aria-expanded": "false"
              }
            },
            [_vm._v("\n                    Settings\n                ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { "data-toggle": "tab", href: "#m_tabs_6_2" }
              },
              [_vm._v("\n                        Action\n                    ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { "data-toggle": "tab", href: "#m_tabs_6_2" }
              },
              [
                _vm._v(
                  "\n                        Another action\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { "data-toggle": "tab", href: "#m_tabs_6_2" }
              },
              [
                _vm._v(
                  "\n                        Something else here\n                    "
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { "data-toggle": "tab", href: "#m_tabs_6_2" }
              },
              [
                _vm._v(
                  "\n                        Separated link\n                    "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item m-tabs__item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link m-tabs__link",
              attrs: { "data-toggle": "tab", href: "#m_tabs_6_3", role: "tab" }
            },
            [_vm._v("\n                    Logs\n                ")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue":
/*!*************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true&");
/* harmony import */ var _tab_type_8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tab-type-8.vue?vue&type=script&lang=js& */ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tab_type_8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ee2bb4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_type_8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./_tab-type-8.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_type_8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/nitseditor/framework/src/Frontend/Admin/components/Elements/Tabs/_tab-type-8.vue?vue&type=template&id=2ee2bb4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_type_8_vue_vue_type_template_id_2ee2bb4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);