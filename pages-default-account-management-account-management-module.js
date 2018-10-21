(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-account-management-account-management-module"],{

/***/ "./src/app/theme/pages/default/account-management/account-management.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/account-management/account-management.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\n\t\t<div class=\"d-flex align-items-center\">\n\t\t\t<div class=\"mr-auto\">\n\t\t\t\t<h3 class=\"display-3\">\n\t\t\t\t\tAccount Management\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"m-content\">\n\t\t<div class=\"m-portlet\">\n\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\n\t\t\t\t\t\t\tAccount Details\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t<app-tabs ulClass=\"clearfix main-tabs p-0 m-0\" liClass=\"main-tab\">\n\t\t\t\t\t<app-tab title=\"Admin Account\" tabClass=\"p-2\">\n\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t\t\t\t\t<div class=\" nagative-marg-2 m-portlet__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tAccount Name:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type account name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"\">\n\t\t\t\t\t\t\t\t\t\t\tAccount Number:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter account number\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"label-text spacing-top\">\n\t\t\t\t\t\t\t\t\t\t\t<b style=\"font-weight: bold; padding-bottom: 15px\">Account Status:</b>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">active</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Suspended</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Locked</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Awaiting verification</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Change Credentials</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tUsername:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"\">\n\t\t\t\t\t\t\t\t\t\t\tPassword:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control m-input\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Logo</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tUpload logo:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"text-align:center; padding: 20px; margin: 10px 0 30px 0; border: 4px solid #efefef\" id=\"m_blockui_1_content\">\n\t\t\t\t\t\t\t\t\t\t\tDrop file here\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Information</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tStart Date:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group date\" id=\"m_datepicker_3\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" readonly=\"\" value=\"DD/MM/YY\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Linked Users</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tFirst Name:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Fist Name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"\">\n\t\t\t\t\t\t\t\t\t\t\tLastnmae:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Last Name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"pad-top\">\n\t\t\t\t\t\t\t\t\t\t\tMobile Number:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Mobile Number\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"pad-top\">\n\t\t\t\t\t\t\t\t\t\t\tEmail Address:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type email Address\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"b-rad-0 spacing-top btn btn-secondary btn-lg m-btn m-btn--custom m-btn--icon\">\n\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Another User\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</app-tab>\n\t\t\t\t\t<app-tab title=\"Billing Details\" tabClass=\"p-2\">\n\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t\t\t\t\t<div class=\" nagative-marg-2 m-portlet__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Bill To</h2>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 spacing-top\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tName:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Contact Person</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\t\t\t\t\t\tTitle\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\tMr\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\tMrs\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\tMiss\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\tDr\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t\tOther\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tUsername:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"\">\n\t\t\t\t\t\t\t\t\t\t\tLast Name\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Last Name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"pad-top\">\n\t\t\t\t\t\t\t\t\t\t\tMobile Number:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type Mobile Number\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"pad-top\">\n\t\t\t\t\t\t\t\t\t\t\tEmail Address:\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type email Address\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"label-text spacing-top\">\n\t\t\t\t\t\t\t\t\t\t\t<b style=\"font-weight: bold; padding-bottom: 15px\">Payment Terms</b>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Annual Upfront Payment</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Monthly</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"BillingMonth\">\n\t\t\t\t\t\t\t\t\t\t\tBilling Month\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t<option selected=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\tJanuary\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\tFebruary\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\tMarch\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\tApril\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t\tMay\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t\tJune\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t\tJuly\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t\tAugust\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\tSeptember\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\">\n\t\t\t\t\t\t\t\t\t\t\t\tOctober\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\tNovember\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\">\n\t\t\t\t\t\t\t\t\t\t\t\tDecember\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</app-tab>\n\t\t\t\t\t<app-tab title=\"My Account\" tabClass=\"p-2\">\n\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t\t\t\t\t<div class=\" nagative-marg-2 m-portlet__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Change password</h2>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 spacing-top\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tNew Password\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" placeholder=\"Type new password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"m-form--group-seperator-dashed\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Profile Picture</h2>\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tUpload Profile Photo\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<p style=\"text-align:center; padding: 20px; margin: 10px 0 30px 0; border: 4px solid #efefef\" id=\"m_blockui_1_content\">\n\t\t\t\t\t\t\t\t\t\t\tDrop file here\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<h2 class=\"col-12 fade-text\">Account Status</h2>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--success\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"label-text-sm\">Active</b>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</app-tab>\n\t\t\t\t</app-tabs>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/account-management/account-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/account-management/account-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AccountManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountManagementComponent", function() { return AccountManagementComponent; });
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


var AccountManagementComponent = /** @class */ (function () {
    function AccountManagementComponent(_script) {
        this._script = _script;
    }
    AccountManagementComponent.prototype.ngOnInit = function () {
    };
    AccountManagementComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    AccountManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
            template: __webpack_require__(/*! ./account-management.component.html */ "./src/app/theme/pages/default/account-management/account-management.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]])
    ], AccountManagementComponent);
    return AccountManagementComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/account-management/account-management.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/pages/default/account-management/account-management.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AccountManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountManagementModule", function() { return AccountManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _account_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-management.component */ "./src/app/theme/pages/default/account-management/account-management.component.ts");
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
                'component': _account_management_component__WEBPACK_IMPORTED_MODULE_5__["AccountManagementComponent"]
            }
        ]
    }
];
var AccountManagementModule = /** @class */ (function () {
    function AccountManagementModule() {
    }
    AccountManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _account_management_component__WEBPACK_IMPORTED_MODULE_5__["AccountManagementComponent"]
            ]
        })
    ], AccountManagementModule);
    return AccountManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-account-management-account-management-module.js.map