(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-self-layout-blank-snippets-pages-errors-errors-error-4-errors-error-4-module"],{

/***/ "./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-error-4\" style=\"background-image: url(./assets/app/media/img//error/bg4.jpg);\" appunwraptag=\"\">\n\t<div class=\"m-error_container\">\n\t\t<h1 class=\"m-error_number\">\n\t\t\t404\n\t\t</h1>\n\t\t<p class=\"m-error_title\">\n\t\t\tERROR\n\t\t</p>\n\t\t<p class=\"m-error_description\">\n\t\t\tNothing left to do here.\n\t\t</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ErrorsError4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsError4Component", function() { return ErrorsError4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorsError4Component = /** @class */ (function () {
    function ErrorsError4Component() {
    }
    ErrorsError4Component.prototype.ngOnInit = function () {
    };
    ErrorsError4Component.prototype.ngAfterViewInit = function () {
        _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');
    };
    ErrorsError4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./errors-error-4.component.html */ "./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsError4Component);
    return ErrorsError4Component;
}());



/***/ }),

/***/ "./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ErrorsError4Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsError4Module", function() { return ErrorsError4Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _errors_error_4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors-error-4.component */ "./src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        "path": "",
        "component": _errors_error_4_component__WEBPACK_IMPORTED_MODULE_3__["ErrorsError4Component"]
    }
];
var ErrorsError4Module = /** @class */ (function () {
    function ErrorsError4Module() {
    }
    ErrorsError4Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _errors_error_4_component__WEBPACK_IMPORTED_MODULE_3__["ErrorsError4Component"]
            ]
        })
    ], ErrorsError4Module);
    return ErrorsError4Module;
}());



/***/ })

}]);
//# sourceMappingURL=pages-self-layout-blank-snippets-pages-errors-errors-error-4-errors-error-4-module.js.map