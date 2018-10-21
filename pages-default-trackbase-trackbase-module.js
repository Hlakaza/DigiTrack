(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-trackbase-trackbase-module"],{

/***/ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/active-track/active-track.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marg-top-1rem\">\n  <h3 class=\"display-inline-block text-bold marg-right-1rem\">\n    Sequence ActiveTrack Name\n  </h3>\n  <span class=\"cursor-pointer m-badge m-badge-large--success m-badge--wide\">\n    Edit\n  </span>\n</div>\n<div class=\"spacing-top\"></div>\n<app-tabs ulClass=\"clearfix main-tabs p-0 m-0 \" liClass=\"main-tab\">\n  <app-tab title=\"Track Item Details\" tabClass=\"p-2\">\n    <div class=\"row border-bot-dot pad-tb\">\n      <div class=\"col-sm-6 spacing-top\">\n        Trackitem Name<br>\n        <span class=\"bold\">Trackitem Name</span>\n      </div>\n      <div class=\"col-sm-6 spacing-top\">\n        Trackitem Type<br>\n        <span class=\"bold\">Trackitem Type</span>\n      </div>\n      <div class=\"col-sm-6 spacing-top\">\n        Running time<br>\n        <span class=\"bold\">Running time</span>\n      </div>\n      <div class=\"col-sm-6 spacing-top\">\n        End game<br>\n        <span class=\"bold\">End Game</span>\n      </div>\n    </div>\n  </app-tab>\n  <app-tab title=\"Progress\" tabClass=\"p-2\">\n\n  </app-tab>\n  <app-tab title=\"History\" tabClass=\"p-2\">\n\n  </app-tab>\n  <app-tab title=\"Actions\" tabClass=\"p-2\">\n\n  </app-tab>\n</app-tabs>"

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/active-track/active-track.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/active-track/active-track.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ActiveTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveTrackComponent", function() { return ActiveTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActiveTrackComponent = /** @class */ (function () {
    function ActiveTrackComponent() {
    }
    ActiveTrackComponent.prototype.ngOnInit = function () {
    };
    ActiveTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-track',
            template: __webpack_require__(/*! ./active-track.component.html */ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.html"),
            styles: [__webpack_require__(/*! ./active-track.component.scss */ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveTrackComponent);
    return ActiveTrackComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/step-form/step-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/step-form/step-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <form class=\"trackit-form spacing-top\">\n            <h4 class=\"bold\">Activity 01</h4>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                  <label>TrackPoint</label>\n                  <div class=\"row border-area\">\n                    <div class=\"col-lg-6\">\n                      <select class=\"custom-select\">\n                        <option disabled selected>Select Node</option>\n                        <option value=\"1\">Node 1o1</option>\n                      </select>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <select class=\"custom-select\">\n                        <option disabled selected>Policy Owner: Select from employee list</option>\n                        <option value=\"\">Jabulani khumalo</option>\n                      </select>\n                    </div>\n\n                  </div>  \n              </div>\n              <div class=\"col-sm-6\">\n                <label class=\"spacing-top\">Policy Name</label>\n                <input type=\"text\" name=\"PolicyName\" class=\"form-control m-input\" placeholder=\"Type Policy Name\">\n              </div>\n              <div class=\"col-sm-6\">\n                <label class=\"spacing-top\">Policy description</label>\n                <input type=\"text\" name=\"StepDescription\" class=\"form-control m-input\" placeholder=\"Type Policy description\">\n              </div>\n              <div class=\"col-sm-12\">\n                  <label class=\"spacing-top\">Ownership</label>\n                  <select class=\"custom-select\" >\n                      <option disabled selected>Select Ownership</option>\n                      <option value=\"01\">Owned by</option>\n                  </select>\n                <h4 class=\"bold spacing-top\">Track Setup</h4>\n                <label>Trackbase Type</label>\n                <div class=\"row border-area\">\n                  <div class=\"col-sm-6\">\n                    <select class=\"custom-select\" >\n                        <option disabled selected>Select from list</option>\n                        <option value=\"01\">test 111</option>\n\n                    </select>\n                  </div>\n                  <div class=\"col-sm-6\">\n                      <select class=\"custom-select\" >\n                          <option disabled selected>Create New</option>\n                      </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                  <label class=\"spacing-top\">End Game</label>\n                  <select class=\"custom-select\" >\n                      <option >Select from list</option>\n                      <option >End game process</option>\n                  </select>\n                </div>\n            </div>\n            <div class=\"text-center\">\n                <button type=\"button\" class=\"spacing-top btn m-btn--pill btn-lg btn-primary\">\n                   Save\n                </button>\n            </div>\n          </form>"

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/step-form/step-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/step-form/step-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: StepFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFormComponent", function() { return StepFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepFormComponent = /** @class */ (function () {
    function StepFormComponent() {
    }
    StepFormComponent.prototype.ngOnInit = function () {
    };
    StepFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step-form',
            template: __webpack_require__(/*! ./step-form.component.html */ "./src/app/theme/pages/default/trackbase/step-form/step-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StepFormComponent);
    return StepFormComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"SequenceDashboard\">\n  <div class=\"sequence-dashboard\">\n    <div class=\"flex-box-2 grey\">\n      <div class=\"flex-box-body\">\n        <span class=\"number purple-color diaaplay-inline-block\">6</span> <span class=\"graph-line\">--------</span>\n      </div>\n      <div class=\"flex-box-footer\">\n        <span class=\"text text-black diaaplay-inline-block\">Number of sequences</span> <button type=\"button\" class=\"btn m-btn--pill m-btn--air btn-outline-brand m-btn m-btn--outline-2x \">\n          View\n        </button>\n      </div>\n    </div>\n    <div class=\"flex-box-2 green\">\n      <div class=\"flex-box-body\">\n        <span class=\"number green-color diaaplay-inline-block\">24</span> <span class=\"graph-line\">--------</span>\n      </div>\n      <div class=\"flex-box-footer\">\n        <span class=\"text text-black diaaplay-inline-block\">Active tracks</span> <button type=\"button\" class=\"btn m-btn--pill m-btn--air btn-outline-success m-btn m-btn--outline-2x \">\n          View\n        </button>\n      </div>\n    </div>\n    <div class=\"flex-box-2 yellow\">\n      <div class=\"flex-box-body\">\n        <span class=\"number yellow-color diaaplay-inline-block\">7</span> <span class=\"graph-line\">--------</span>\n      </div>\n      <div class=\"flex-box-footer\">\n        <span class=\"text text-black display-inline-block\">Completed</span> <button type=\"button\" class=\"btn m-btn--pill m-btn--air btn-outline-primary m-btn m-btn--outline-2x \">\n          View\n        </button>\n      </div>\n    </div>\n    <div class=\"flex-box-2 blue\">\n      <div class=\"flex-box-body\">\n        <span class=\"number blue-color diaaplay-inline-block\">6</span> <span class=\"graph-line\">--------</span>\n      </div>\n      <div class=\"flex-box-footer\">\n        <span class=\"text text-black diaaplay-inline-block\">Most used sequence</span> <button type=\"button\" class=\"btn m-btn--pill m-btn--air btn-outline-info m-btn m-btn--outline-2x \">\n          View\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TrackbaseDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackbaseDashboardComponent", function() { return TrackbaseDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackbaseDashboardComponent = /** @class */ (function () {
    function TrackbaseDashboardComponent() {
    }
    TrackbaseDashboardComponent.prototype.ngOnInit = function () {
    };
    TrackbaseDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trackbase-dashboard',
            template: __webpack_require__(/*! ./trackbase-dashboard.component.html */ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./trackbase-dashboard.component.scss */ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackbaseDashboardComponent);
    return TrackbaseDashboardComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase.component.html":
/*!************************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Begin: Subheader -->\n\t<div class=\"m-subheader \">\n\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t  <div class=\"mr-auto\">\n\t\t\t\t<h3 class=\"display-3\">\n\t\t\t\t  Trackbase\n\t\t\t\t</h3>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <!-- END: Subheader -->\n\t\t  <div class=\"m-content\">\n\t\t\t<div class=\"m-portlet\">\n\t\t\t  <div class=\"m-portlet__body\">\n\t\t\t\t  <app-tabs ulClass=\"clearfix main-tabs p-0 m-0\" liClass=\"main-tab\">\n\t\t\t\t\t  <app-tab title=\"Sequence Dashboard\" tabClass=\"p-2\">\n\t\t\t\t\t\t <app-trackbase-dashboard></app-trackbase-dashboard>\n\t\t\t\t\t  </app-tab>\n\t\t\t\t\t  <app-tab title=\"Workflow Designer\" tabClass=\"p-2\">\n\t\t\t\t\t\t  <div class=\"tab-pane\" id=\"WorkflowDesigner\">\n\t\t\t\t\t\t\t  <div class=\"toggle-sequence\">\n\t\t\t\t\t\t\t\t<div class=\"marg-top-1rem\">\n\t\t\t\t\t\t\t\t  <h3 class=\"display-inline-block text-bold marg-right-1rem\">Sequence List</h3> <span (click)=\"show=!show\"\n\t\t\t\t\t\t\t\t   class=\"cursor-pointer m-badge m-badge-large--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\tDesign New sequence\n\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"marg-top-1rem\" *ngIf=\"!show\">\n\t\t\t\t\t\t\t\t  <table class=\"\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<th title=\"Field #1\">No</th>\n\t\t\t\t\t\t\t\t\t\t<th data-sort=\"asc\" title=\"Field #2\">Sequence Name</th>\n\t\t\t\t\t\t\t\t\t\t<th title=\"Field #3\">Sequence Type</th>\n\t\t\t\t\t\t\t\t\t\t<th title=\"Field #4\">Process Owner</th>\n\t\t\t\t\t\t\t\t\t\t<th title=\"Field #5\">Sequence Manager</th>\n\t\t\t\t\t\t\t\t\t\t<th title=\"Field #6\">Actions</th>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t  <tr *ngFor=\"let item of sList\">\n\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\n\t\t\t\t\t\t\t\t\t\t<td><b>{{item.sName}}</b></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.sType}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.owner}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.manager}}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"table-buttons\">\n\t\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn m-btn--square  btn-outline-metal m-btn m-btn--outline-2x \">View</button>\n\t\t\t\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn m-btn--square  btn-outline-primary m-btn m-btn--outline-2x \">Edit</button>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\n\t\t\t\t\t\t\t  <div *ngIf=\"show\" class=\"marg-top-1rem new-sequence-form\">\n\t\t\t\t\t\t\t\t<div class=\"marg-top-1rem\">\n\t\t\t\t\t\t\t\t  <h3 class=\"display-inline-block text-bold marg-right-1rem\">New Sequence</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"sequence-tab reg-tab-boder\">\n\t\t\t\t\t\t\t\t  <ul class=\"reg-tabs reg-tab-boder no-marg-bot nav nav-tabs nav-fill\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#CreateSequence\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t\t\t\tCreate Sequence\n\t\t\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#CreateSteps\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\tCreate Steps</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t  <div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t<div  class=\"tab-pane active\" id=\"CreateSequence\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t  <form class=\"create-sequence--form spacing-top\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sequence Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Sequence Name\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sequence Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Sequence type\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-sm-12 spacing-top\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Process Owner</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row border-area\">\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create from employee list</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">John Doe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create New (New Registration)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">Jabulani khumalo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"spacing-top\">Process Manager</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row border-area\">\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create from employee list</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">John Doe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create New (New Registration)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">Jabulani khumalo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6 spacing-top\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"display-inline-block\">Set time from time picker</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input style=\"width: auto\" class=\"form-control m-input display-inline-block\" type=\"time\" value=\"13:45:00\">\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t  <label class=\"col-12 spacing-top\">Sequence Start Point</label>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Specify Node\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Specify Role\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t  <button (click)=\"show=!show\" type=\"button\" data-toggle=\"tab\" class=\"spacing-top btn m-btn--pill btn-lg btn-primary\">\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t  </form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div  class=\"tab-pane\" id=\"CreateSteps\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t  <form class=\"create-steps--form spacing-top\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"StepName\" class=\"form-control m-input\" placeholder=\"Type Step Name\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step description</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"StepDescription\" class=\"form-control m-input\" placeholder=\"Type Step description\">\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-sm-12 spacing-top\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step Owner</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row border-area\">\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create from employee list</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">John Doe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Create New (New Registration)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"1\">Jabulani khumalo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"spacing-top\">Create Activities for this step</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row border-area\">\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\" >\n\t\t\t\t\t\t\t\t\t\t\t\t  <option disabled selected>Add Activity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"modalOpen('newActivity')\" type=\"button\" href=\"#\" class=\"b-rad-0 spacing-top btn btn-secondary btn-lg m-btn m-btn--custom m-btn--icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"fa fa-plus-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t  <span>\n\t\t\t\t\t\t\t\t\t\t\t\t     \tAdd Another Step\n\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t  </form>\n\t\t\t\t\t\t\t\t\t  <div class=\"spacing-top text-center\">\n\t\t\t\t\t\t\t\t\t\t  <button type=\"button\" data-toggle=\"tab\" class=\"spacing-top btn m-btn--pill btn-lg btn-primary\">\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  </app-tab>\n\t\t\t\t\t  <app-tab title=\"Sequence Active Tracks\"  tabClass=\"p-2\">\n\t\t\t\t\t\t\t<app-active-track></app-active-track>\n\t\t\t\t\t  </app-tab>\n\t\t\t\t\t</app-tabs>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>"

/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrackbaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackbaseComponent", function() { return TrackbaseComponent; });
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


var TrackbaseComponent = /** @class */ (function () {
    function TrackbaseComponent(_script) {
        this._script = _script;
        this.sList = [
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
    TrackbaseComponent.prototype.ngOnInit = function () {
    };
    TrackbaseComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    TrackbaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
            template: __webpack_require__(/*! ./trackbase.component.html */ "./src/app/theme/pages/default/trackbase/trackbase.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], TrackbaseComponent);
    return TrackbaseComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/trackbase/trackbase.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pages/default/trackbase/trackbase.module.ts ***!
  \*******************************************************************/
/*! exports provided: TrackbaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackbaseModule", function() { return TrackbaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _trackbase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trackbase.component */ "./src/app/theme/pages/default/trackbase/trackbase.component.ts");
/* harmony import */ var _active_track_active_track_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active-track/active-track.component */ "./src/app/theme/pages/default/trackbase/active-track/active-track.component.ts");
/* harmony import */ var _step_form_step_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step-form/step-form.component */ "./src/app/theme/pages/default/trackbase/step-form/step-form.component.ts");
/* harmony import */ var _trackbase_dashboard_trackbase_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trackbase-dashboard/trackbase-dashboard.component */ "./src/app/theme/pages/default/trackbase/trackbase-dashboard/trackbase-dashboard.component.ts");
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
                'component': _trackbase_component__WEBPACK_IMPORTED_MODULE_5__["TrackbaseComponent"]
            }
        ]
    }
];
var TrackbaseModule = /** @class */ (function () {
    function TrackbaseModule() {
    }
    TrackbaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _active_track_active_track_component__WEBPACK_IMPORTED_MODULE_6__["ActiveTrackComponent"],
                _step_form_step_form_component__WEBPACK_IMPORTED_MODULE_7__["StepFormComponent"],
                _trackbase_dashboard_trackbase_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["TrackbaseDashboardComponent"]
            ], declarations: [
                _trackbase_component__WEBPACK_IMPORTED_MODULE_5__["TrackbaseComponent"],
                _active_track_active_track_component__WEBPACK_IMPORTED_MODULE_6__["ActiveTrackComponent"],
                _step_form_step_form_component__WEBPACK_IMPORTED_MODULE_7__["StepFormComponent"],
                _trackbase_dashboard_trackbase_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["TrackbaseDashboardComponent"]
            ]
        })
    ], TrackbaseModule);
    return TrackbaseModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-trackbase-trackbase-module.js.map