(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-setup-setup-module"],{

/***/ "./src/app/theme/pages/default/setup/setup.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/pages/default/setup/setup.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-auto\">\n        <h3 class=\"display-3\">\n          Setup\n        </h3>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"m-content\">\n    <div class=\"m-portlet\">\n      <div class=\"m-portlet__body\">\n \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/setup/setup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/pages/default/setup/setup.component.ts ***!
  \**************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
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


var SetupComponent = /** @class */ (function () {
    function SetupComponent(_script) {
        this._script = _script;
    }
    SetupComponent.prototype.ngOnInit = function () { };
    SetupComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/theme/pages/default/setup/setup.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/setup/setup.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pages/default/setup/setup.module.ts ***!
  \***********************************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup.component */ "./src/app/theme/pages/default/setup/setup.component.ts");
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
                'component': _setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"]
            }
        ]
    }
];
var SetupModule = /** @class */ (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"]
            ]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-setup-setup-module.js.map