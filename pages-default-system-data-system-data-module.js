(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-system-data-system-data-module"],{

/***/ "./src/app/theme/pages/default/system-data/system-data.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/pages/default/system-data/system-data.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-auto\">\n        <h3 class=\"display-3\">\n            System Data\n        </h3>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"m-content\">\n    <div class=\"m-portlet\">\n      <div class=\"m-portlet__body\">\n \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/system-data/system-data.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/pages/default/system-data/system-data.component.ts ***!
  \**************************************************************************/
/*! exports provided: SystemDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemDataComponent", function() { return SystemDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemDataComponent = /** @class */ (function () {
    function SystemDataComponent(_script) {
        this._script = _script;
    }
    SystemDataComponent.prototype.ngOnInit = function () { };
    SystemDataComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    SystemDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
            template: __webpack_require__(/*! ./system-data.component.html */ "./src/app/theme/pages/default/system-data/system-data.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], SystemDataComponent);
    return SystemDataComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/system-data/system-data.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/pages/default/system-data/system-data.module.ts ***!
  \***********************************************************************/
/*! exports provided: SystemDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemDataModule", function() { return SystemDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _system_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-data.component */ "./src/app/theme/pages/default/system-data/system-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        'path': '',
        'component': _default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
        'children': [
            {
                'path': '',
                'component': _system_data_component__WEBPACK_IMPORTED_MODULE_5__["SystemDataComponent"]
            }
        ]
    }
];
var SystemDataModule = /** @class */ (function () {
    function SystemDataModule() {
    }
    SystemDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _system_data_component__WEBPACK_IMPORTED_MODULE_5__["SystemDataComponent"]
            ]
        })
    ], SystemDataModule);
    return SystemDataModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-system-data-system-data-module.js.map