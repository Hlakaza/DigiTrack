(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-components-forms-widgets-widgets-bootstrap-switch-widgets-bootstrap-switch-module"],{

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\n\t\t\t\tBootstrap Switch\n\t\t\t</h3>\n\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\n\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\n\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__separator\">\n\t\t\t\t\t-\n\t\t\t\t</li>\n\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\tSwitch\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\n\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\n\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\n\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\n\t\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--begin::Portlet-->\n\t<div class=\"m-portlet\">\n\t\t<div class=\"m-portlet__head\">\n\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\tBootstrap Switch Examples\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--begin::Form-->\n\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tBasic Example\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" id=\"m_switch_1\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" id=\"m_switch_1\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tState Colors\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'success'\" data-off-color=\"warning\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'brand'\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'danger'\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'info'\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tCustom Label\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'True'\" data-handle-width=\"50\" data-off-text=\"False\" [attr.data-on-color]=\"'success'\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'1'\" data-handle-width=\"30\" data-off-text=\"0\" [attr.data-on-color]=\"'info'\" >\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'Enabled'\" data-handle-width=\"70\" data-off-text=\"Disabled\" [attr.data-on-color]=\"'brand'\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tDisabled State\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" disabled>\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" disabled>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSizing\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<input data-switch=\"true\" data-size=\"small\" type=\"checkbox\" checked=\"checked\" >\n\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" >\n\t\t\t\t\t\t<input data-switch=\"true\" data-size=\"large\" type=\"checkbox\" checked=\"checked\" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tPill Style\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'success'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'brand'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tAir Style\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill m-bootstrap-switch--air\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'danger'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill m-bootstrap-switch--air\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'primary'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--pill m-bootstrap-switch--air\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'info'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tSquare Style\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--square\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'success'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--square\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'warning'\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-bootstrap-switch m-bootstrap-switch--square\">\n\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" [attr.data-on-color]=\"'brand'\" data-off-color=\"metal\" checked=\"checked\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\tModal Demos\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t<a href=\"\" class=\"btn btn-outline-danger success m-btn m-btn--pill\" data-toggle=\"modal\" data-target=\"#m_switch_modal\">\n\t\t\t\t\t\t\tLaunch switches on modal\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t<div class=\"m-form__actions m-form__actions\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--end::Form-->\n\t</div>\n\t<!--end::Portlet-->  <!--begin::Modal-->\n\t<div class=\"modal fade\" id=\"m_switch_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog modal-lg\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"\">\n\t\t\t\t\t\tBootstrap Switch Examples\n\t\t\t\t\t</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t<span aria-hidden=\"true\" class=\"la la-remove\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--margin-top-20\">\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\tBasic Example\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" id=\"m_switch_1\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" id=\"m_switch_1\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\tState Colors\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'success'\" data-off-color=\"warning\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'brand'\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'danger'\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-color]=\"'info'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\tCustom Label\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'True'\" data-off-text=\"False\" [attr.data-on-color]=\"'success'\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'1'\" data-off-text=\"0\" [attr.data-on-color]=\"'info'\" >\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" [attr.data-on-text]=\"'Enabled'\" data-off-text=\"Disabled\" [attr.data-on-color]=\"'brand'\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group m-form__group row m--margin-bottom-20\">\n\t\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\n\t\t\t\t\t\t\t\tDisabled State\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-9 col-sm-12\">\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" checked=\"checked\" disabled>\n\t\t\t\t\t\t\t\t<input data-switch=\"true\" type=\"checkbox\" disabled>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-brand m-btn\" data-dismiss=\"modal\">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary m-btn\">\n\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--end::Modal-->\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: WidgetsBootstrapSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapSwitchComponent", function() { return WidgetsBootstrapSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsBootstrapSwitchComponent = /** @class */ (function () {
    function WidgetsBootstrapSwitchComponent(_script) {
        this._script = _script;
    }
    WidgetsBootstrapSwitchComponent.prototype.ngOnInit = function () {
    };
    WidgetsBootstrapSwitchComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js');
    };
    WidgetsBootstrapSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__(/*! ./widgets-bootstrap-switch.component.html */ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], WidgetsBootstrapSwitchComponent);
    return WidgetsBootstrapSwitchComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: WidgetsBootstrapSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBootstrapSwitchModule", function() { return WidgetsBootstrapSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widgets_bootstrap_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets-bootstrap-switch.component */ "./src/app/theme/pages/default/components/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../default.component */ "./src/app/theme/pages/default/default.component.ts");
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
                "component": _widgets_bootstrap_switch_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsBootstrapSwitchComponent"]
            }
        ]
    }
];
var WidgetsBootstrapSwitchModule = /** @class */ (function () {
    function WidgetsBootstrapSwitchModule() {
    }
    WidgetsBootstrapSwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _widgets_bootstrap_switch_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsBootstrapSwitchComponent"]
            ]
        })
    ], WidgetsBootstrapSwitchModule);
    return WidgetsBootstrapSwitchModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-components-forms-widgets-widgets-bootstrap-switch-widgets-bootstrap-switch-module.js.map