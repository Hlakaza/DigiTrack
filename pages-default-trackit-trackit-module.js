(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-trackit-trackit-module"],{

/***/ "./src/app/theme/pages/default/trackit/trackit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/pages/default/trackit/trackit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-auto\">\n        <h3 class=\"display-3\">\n          Trackit\n        </h3>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"m-content\">\n    <div class=\"m-portlet\">\n      <div class=\"m-portlet__body\">\n            <div class=\"marg-top-1rem\">\n              <h3 class=\"display-inline-block text-bold marg-right-1rem\">\n                  <span *ngIf=\"show\" >New</span>  Policy <span *ngIf=\"!show\" >List</span>\n              </h3> \n              <span *ngIf=\"!show\" (click)=\"show=!show\" class=\"cursor-pointer m-badge m-badge-large--success m-badge--wide\">\n                  CREATE NEW POLICY\n              </span>\n            </div>\n            <div class=\"marg-top-1rem\" *ngIf=\"!show\">\n              <table class=\"\" width=\"100%\">\n                <thead>\n                  <tr>\n                    <th title=\"Field #1\">No</th>\n                    <th data-sort=\"asc\" title=\"Field #2\">Policy Name</th>\n                    <th title=\"Field #3\">Policy Description</th>\n                    <th title=\"Field #4\">Process Owner</th>\n                    <th title=\"Field #5\">Trackbase Type</th>\n                    <th title=\"Field #6\">Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of trackingList\">\n                    <td>{{item.id}}</td>\n                    <td><b>{{item.sName}}</b></td>\n                    <td>{{item.description}}</td>\n                    <td>{{item.owner}}</td>\n                    <td>{{item.sType}}</td>\n                    <td class=\"table-buttons\">\n                      <button type=\"button\" class=\"btn m-btn--square  btn-outline-metal m-btn m-btn--outline-2x \">View</button>\n                      <button type=\"button\" class=\"btn m-btn--square  btn-outline-primary m-btn m-btn--outline-2x \">Edit</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <form *ngIf=\"show\" class=\"trackit-form spacing-top\">\n                <h4 class=\"bold\">Create New</h4>\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                      <label>TrackPoint</label>\n                      <div class=\"row border-area\">\n                        <div class=\"col-lg-6\">\n                          <select class=\"custom-select\">\n                            <option disabled selected>Select Node</option>\n                            <option value=\"1\">Node 1o1</option>\n                          </select>\n                        </div>\n                        <div class=\"col-lg-6\">\n                          <select class=\"custom-select\">\n                            <option disabled selected>Policy Owner: Select from employee list</option>\n                            <option value=\"\">Jabulani khumalo</option>\n                          </select>\n                        </div>\n  \n                      </div>  \n                  </div>\n                  <div class=\"col-sm-6\">\n                    <label class=\"spacing-top\">Policy Name</label>\n                    <input type=\"text\" name=\"PolicyName\" class=\"form-control m-input\" placeholder=\"Type Policy Name\">\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <label class=\"spacing-top\">Policy description</label>\n                    <input type=\"text\" name=\"StepDescription\" class=\"form-control m-input\" placeholder=\"Type Policy description\">\n                  </div>\n                  <div class=\"col-sm-12\">\n                      <label class=\"spacing-top\">Ownership</label>\n                      <select class=\"custom-select\" >\n                          <option disabled selected>Select Ownership</option>\n                          <option value=\"01\">Owned by</option>\n                      </select>\n                    <h4 class=\"bold spacing-top\">Track Setup</h4>\n                    <label>Trackbase Type</label>\n                    <div class=\"row border-area\">\n                      <div class=\"col-sm-6\">\n                        <select class=\"custom-select\" >\n                            <option disabled selected>Select from list</option>\n                            <option value=\"01\">test 111</option>\n\n                        </select>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <select class=\"custom-select\" >\n                              <option disabled selected>Create New</option>\n                          </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12\">\n                      <label class=\"spacing-top\">End Game</label>\n                      <select class=\"custom-select\" >\n                          <option >Select from list</option>\n                          <option >End game process</option>\n                      </select>\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" (click)=\"show=!show\" class=\"spacing-top btn m-btn--pill btn-lg btn-primary\">\n                       Save\n                    </button>\n                </div>\n              </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/trackit/trackit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/pages/default/trackit/trackit.component.ts ***!
  \******************************************************************/
/*! exports provided: TrackitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackitComponent", function() { return TrackitComponent; });
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


var TrackitComponent = /** @class */ (function () {
    function TrackitComponent(_script) {
        this._script = _script;
        this.trackingList = [
            {
                'id': 1,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            },
            {
                'id': 2,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            },
            {
                'id': 3,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            },
            {
                'id': 4,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            },
            {
                'id': 5,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            },
            {
                'id': 6,
                'sName': 'liquam tincidunt mauris eu risus',
                'sType': 'Donsectetur adipisci',
                'owner': 'Donsectetur adipisci',
                'manager': 'Donsectetur adipisci',
                'link': '',
            }
        ];
    }
    TrackitComponent.prototype.ngOnInit = function () {
    };
    TrackitComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    TrackitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
            template: __webpack_require__(/*! ./trackit.component.html */ "./src/app/theme/pages/default/trackit/trackit.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], TrackitComponent);
    return TrackitComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/trackit/trackit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pages/default/trackit/trackit.module.ts ***!
  \***************************************************************/
/*! exports provided: TrackitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackitModule", function() { return TrackitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _trackit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trackit.component */ "./src/app/theme/pages/default/trackit/trackit.component.ts");
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
                'component': _trackit_component__WEBPACK_IMPORTED_MODULE_5__["TrackitComponent"]
            }
        ]
    }
];
var TrackitModule = /** @class */ (function () {
    function TrackitModule() {
    }
    TrackitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _trackit_component__WEBPACK_IMPORTED_MODULE_5__["TrackitComponent"]
            ]
        })
    ], TrackitModule);
    return TrackitModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-trackit-trackit-module.js.map