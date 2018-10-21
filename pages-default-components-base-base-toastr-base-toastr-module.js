(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-components-base-base-toastr-base-toastr-module"],{

/***/ "./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tToastr\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tBase\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tToastr\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tToastr Notifications Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label  for=\"title\">\n\t\t\t\t\t\t\t\tTitle\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Enter a title ...\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label  for=\"message\">\n\t\t\t\t\t\t\t\tMessage\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"message\" rows=\"3\" placeholder=\"Enter a message ...\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"closeButton\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tClose Button\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"addBehaviorOnToastClick\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tAdd behavior on toast click\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"debugInfo\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tDebug\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"progressBar\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tProgress Bar\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"preventDuplicates\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tPrevent Duplicates\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"addClear\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tAdd button to force clearing a toast, ignoring focus\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\n\t\t\t\t\t\t\t\t\t<input id=\"newestOnTop\" type=\"checkbox\" value=\"checked\"  />\n\t\t\t\t\t\t\t\t\tNewest on top\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tToast Type\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-radio-list\" id=\"toastTypeGroup\">\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"toasts\" checked value=\"success\"  />\n\t\t\t\t\t\t\t\t\tSuccess\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"toasts\" value=\"info\"  />\n\t\t\t\t\t\t\t\t\tInfo\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"toasts\" value=\"warning\"  />\n\t\t\t\t\t\t\t\t\tWarning\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"toasts\" value=\"error\"  />\n\t\t\t\t\t\t\t\t\tError\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tPosition\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"m-radio-list\" id=\"positionGroup\">\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-top-right\" checked />\n\t\t\t\t\t\t\t\t\tTop Right\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-bottom-right\" />\n\t\t\t\t\t\t\t\t\tBottom Right\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-bottom-left\" />\n\t\t\t\t\t\t\t\t\tBottom Left\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-top-left\" />\n\t\t\t\t\t\t\t\t\tTop Left\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-top-full-width\" />\n\t\t\t\t\t\t\t\t\tTop Full Width\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-bottom-full-width\" />\n\t\t\t\t\t\t\t\t\tBottom Full Width\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-top-center\" />\n\t\t\t\t\t\t\t\t\tTop Center\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"positions\" value=\"toast-bottom-center\" />\n\t\t\t\t\t\t\t\t\tBottom Center\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label for=\"showEasing\">\n\t\t\t\t\t\t\t\tShow Easing\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"showEasing\" type=\"text\" class=\"form-control\" placeholder=\"swing, linear\"  value=\"swing\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label  for=\"hideEasing\">\n\t\t\t\t\t\t\t\tHide Easing\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"hideEasing\" type=\"text\" class=\"form-control\" placeholder=\"swing, linear\"  value=\"linear\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label  for=\"showMethod\">\n\t\t\t\t\t\t\t\tShow Method\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"showMethod\" type=\"text\" class=\"form-control\" placeholder=\"show, fadeIn, slideDown\"  value=\"fadeIn\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<label  for=\"hideMethod\">\n\t\t\t\t\t\t\t\tHide Method\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"hideMethod\" type=\"text\" class=\"form-control\" placeholder=\"hide, fadeOut, slideUp\"  value=\"fadeOut\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t<div class=\"form-group m-form__grou\">\n\t\t\t\t\t\t\t<label  for=\"showDuration\">\n\t\t\t\t\t\t\t\tShow Duration\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"showDuration\" type=\"text\" class=\"form-control\" placeholder=\"ms\"  value=\"300\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__grou\">\n\t\t\t\t\t\t\t<label  for=\"hideDuration\">\n\t\t\t\t\t\t\t\tHide Duration\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"hideDuration\" type=\"text\" class=\"form-control\" placeholder=\"ms\"  value=\"1000\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__grou\">\n\t\t\t\t\t\t\t<label  for=\"timeOut\">\n\t\t\t\t\t\t\t\tTime out\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"timeOut\" type=\"text\" class=\"form-control\" placeholder=\"ms\"  value=\"5000\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__grou\">\n\t\t\t\t\t\t\t<label  for=\"extendedTimeOut\">\n\t\t\t\t\t\t\t\tExtended time out\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"extendedTimeOut\" class=\"form-control\" type=\"text\" placeholder=\"ms\"  value=\"1000\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t<pre id='toastrOptions' style=\"border:4px solid #efefef;padding:15px; margin:20px 0;\">\n\t\t\t\t\t\t\t\tOutput:\n\t\t\t\t\t\t\t</pre>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-8 offset-lg-4\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\"  class=\"btn btn-primary\" id=\"showtoast\">\n\t\t\t\t\t\t\t\tShow Toast\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:;\"  class=\"btn btn-danger\"  id=\"cleartoasts\">\n\t\t\t\t\t\t\t\tClear Toasts\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:;\"  class=\"btn btn-danger\"  id=\"clearlasttoast\">\n\t\t\t\t\t\t\t\tClear Last Toast\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BaseToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseToastrComponent", function() { return BaseToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseToastrComponent = /** @class */ (function () {
    function BaseToastrComponent(_script) {
        this._script = _script;
    }
    BaseToastrComponent.prototype.ngOnInit = function () {
    };
    BaseToastrComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/components/base/toastr.js');
    };
    BaseToastrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__(/*! ./base-toastr.component.html */ "./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], BaseToastrComponent);
    return BaseToastrComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/components/base/base-toastr/base-toastr.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/base/base-toastr/base-toastr.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BaseToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseToastrModule", function() { return BaseToastrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-toastr.component */ "./src/app/theme/pages/default/components/base/base-toastr/base-toastr.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../default.component */ "./src/app/theme/pages/default/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _base_toastr_component__WEBPACK_IMPORTED_MODULE_3__["BaseToastrComponent"]
            }
        ]
    }
];
var BaseToastrModule = /** @class */ (function () {
    function BaseToastrModule() {
    }
    BaseToastrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _base_toastr_component__WEBPACK_IMPORTED_MODULE_3__["BaseToastrComponent"]
            ]
        })
    ], BaseToastrModule);
    return BaseToastrModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-components-base-base-toastr-base-toastr-module.js.map