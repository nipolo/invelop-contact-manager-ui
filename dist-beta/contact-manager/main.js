"use strict";
(self["webpackChunkcontact_manager"] = self["webpackChunkcontact_manager"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants */ 7763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        redirectTo: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.base,
        pathMatch: 'full',
    },
    {
        path: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.base,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contacts_contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then((m) => m.ContactsModule),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ 2802);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["position", "bottom-right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "p-toast", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_2__.Toast], styles: ["[_nghost-%COMP%]     {\n  \n}\n[_nghost-%COMP%]     .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #d8dadc;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607d8b;\n}\n[_nghost-%COMP%]     .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXFERSxlQUFBO0FBbkRGO0FBQUk7RUFDRSxpQkFBQTtBQUVOO0FBRUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGdCQUFBO0FBSE47QUFRSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTk47QUFTSTtFQUNFLGFBQUE7QUFQTjtBQVVJO0VBQ0UsZ0JBQUE7QUFSTjtBQVdJO0VBQ0UsWUFBQTtBQVROO0FBWUk7RUFDRSx5QkFBQTtBQVZOO0FBZUU7RUFDRSxhQUFBO0FBYko7QUFpQkE7RUFJUTs7SUFFRSx3QkFBQTtFQWpCUjtFQW9CTTtJQUNFLHVDQUFBO0VBbEJSO0VBb0JRO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQWxCVjtFQW9CVTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxvQ0FBQTtJQUNBLGlCQUFBO0VBbEJaO0VBcUJVO0lBQ0Usa0JBQUE7RUFuQlo7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5wLXBhZ2luYXRvciB7XHJcbiAgICAucC1wYWdpbmF0b3ItY3VycmVudCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnAtcHJvZ3Jlc3NiYXIge1xyXG4gICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYWRjO1xyXG5cclxuICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xyXG4gICAgbWluLXdpZHRoOiAyNXJlbTtcclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIHtcclxuICAgIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucC1wYWdpbmF0b3Ige1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlICovXHJcbiAgLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICA6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgLnAtZGF0YXRhYmxlIHtcclxuICAgICAgJi5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xyXG4gICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXHJcbiAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGF5ZXItMik7XHJcblxyXG4gICAgICAgICAgPiB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xyXG5cclxuICAgICAgICAgICAgLnAtY29sdW1uLXRpdGxlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogLTAuNHJlbSAxcmVtIC0wLjRyZW0gLTAuNHJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnAtcHJvZ3Jlc3NiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ 3825);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ 1679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/store */ 8641);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 5811);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);













const metaReducers = [_core_store__WEBPACK_IMPORTED_MODULE_4__.storageMetaReducer];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _core__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forRoot({}, { metaReducers }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production,
                autoPause: true,
                name: 'Contact Manager',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _core__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 7763:
/*!*****************************************!*\
  !*** ./src/app/core/constants/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegexValidationsConsts": () => (/* reexport safe */ _regex_validations__WEBPACK_IMPORTED_MODULE_2__.RegexValidationsConsts),
/* harmony export */   "absoluteUIUrls": () => (/* reexport safe */ _ui_routes__WEBPACK_IMPORTED_MODULE_1__.absoluteUIUrls),
/* harmony export */   "uiRoutes": () => (/* reexport safe */ _ui_routes__WEBPACK_IMPORTED_MODULE_1__.uiRoutes),
/* harmony export */   "urlRoutes": () => (/* reexport safe */ _url_routes__WEBPACK_IMPORTED_MODULE_0__.urlRoutes)
/* harmony export */ });
/* harmony import */ var _url_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-routes */ 6730);
/* harmony import */ var _ui_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-routes */ 2179);
/* harmony import */ var _regex_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex-validations */ 8234);





/***/ }),

/***/ 8234:
/*!*****************************************************!*\
  !*** ./src/app/core/constants/regex-validations.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegexValidationsConsts": () => (/* binding */ RegexValidationsConsts)
/* harmony export */ });
class RegexValidationsConsts {
}
RegexValidationsConsts.PhoneNumber = '^\\+?[0-9]+(-[0-9]+)*$';
RegexValidationsConsts.IBAN = '^[A-Z]{2}[0-9]{2}(-[0-9A-Z]{1,4})+$';


/***/ }),

/***/ 2179:
/*!*********************************************!*\
  !*** ./src/app/core/constants/ui-routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "absoluteUIUrls": () => (/* binding */ absoluteUIUrls),
/* harmony export */   "uiRoutes": () => (/* binding */ uiRoutes)
/* harmony export */ });
const uiRoutes = {
    contactsModule: {
        base: 'contacts',
        routes: {
            allContacts: 'all',
            addContact: 'add',
            updateContact: { base: 'update', withParams: 'update/:id' },
        },
    },
};
const absoluteUIUrls = {
    allContacts: '/contacts/all',
    addContact: '/contacts/add',
    updateContact: {
        base: '/contacts/update',
        withParams: '/contacts/update/:id',
    },
};


/***/ }),

/***/ 6730:
/*!**********************************************!*\
  !*** ./src/app/core/constants/url-routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlRoutes": () => (/* binding */ urlRoutes)
/* harmony export */ });
const urlRoutes = {
    getGetAllContacts: (pageNum, pageSize) => `contacts/all?pageNum=${pageNum}&pageSize=${pageSize}`,
    postCreateContact: 'contacts',
    putUpdateContact: 'contacts',
    deleteRemoveContact: 'contacts',
};


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _primeng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primeng */ 9789);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule] }); })();


/***/ }),

/***/ 6291:
/*!***************************************************!*\
  !*** ./src/app/core/enums/component-mode.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModeType": () => (/* binding */ ComponentModeType)
/* harmony export */ });
var ComponentModeType;
(function (ComponentModeType) {
    ComponentModeType[ComponentModeType["Add"] = 1] = "Add";
    ComponentModeType[ComponentModeType["Edit"] = 2] = "Edit";
})(ComponentModeType || (ComponentModeType = {}));


/***/ }),

/***/ 9442:
/*!*************************************!*\
  !*** ./src/app/core/enums/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModeType": () => (/* reexport safe */ _component_mode_enum__WEBPACK_IMPORTED_MODULE_0__.ComponentModeType)
/* harmony export */ });
/* harmony import */ var _component_mode_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-mode.enum */ 6291);



/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModeType": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_4__.ComponentModeType),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "NotificationService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.NotificationService),
/* harmony export */   "RegexValidationsConsts": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.RegexValidationsConsts),
/* harmony export */   "UrlGenerationService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.UrlGenerationService),
/* harmony export */   "absoluteUIUrls": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.absoluteUIUrls),
/* harmony export */   "contactsFeature": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.contactsFeature),
/* harmony export */   "initialContactsState": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.initialContactsState),
/* harmony export */   "initialRootState": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.initialRootState),
/* harmony export */   "loadContacts": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.loadContacts),
/* harmony export */   "loadContactsFailure": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.loadContactsFailure),
/* harmony export */   "loadContactsSuccess": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.loadContactsSuccess),
/* harmony export */   "rootReducer": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.rootReducer),
/* harmony export */   "selectContact": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.selectContact),
/* harmony export */   "selectContacts": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.selectContacts),
/* harmony export */   "selectTotalContacts": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.selectTotalContacts),
/* harmony export */   "storageMetaReducer": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_3__.storageMetaReducer),
/* harmony export */   "uiRoutes": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.uiRoutes),
/* harmony export */   "urlRoutes": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.urlRoutes)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8138);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 7763);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ 8641);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ 9442);







/***/ }),

/***/ 9789:
/*!***************************************!*\
  !*** ./src/app/core/primeng/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* reexport safe */ _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule)
/* harmony export */ });
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primeng.module */ 573);



/***/ }),

/***/ 573:
/*!************************************************!*\
  !*** ./src/app/core/primeng/primeng.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* binding */ PrimeNGModule)
/* harmony export */ });
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class PrimeNGModule {
}
PrimeNGModule.ɵfac = function PrimeNGModule_Factory(t) { return new (t || PrimeNGModule)(); };
PrimeNGModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimeNGModule });
PrimeNGModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[primeng_toast__WEBPACK_IMPORTED_MODULE_1__.ToastModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNGModule, { imports: [primeng_toast__WEBPACK_IMPORTED_MODULE_1__.ToastModule] }); })();


/***/ }),

/***/ 8138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_0__.NotificationService),
/* harmony export */   "UrlGenerationService": () => (/* reexport safe */ _url_generation__WEBPACK_IMPORTED_MODULE_1__.UrlGenerationService)
/* harmony export */ });
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ 3214);
/* harmony import */ var _url_generation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-generation */ 73);




/***/ }),

/***/ 3214:
/*!*****************************************************!*\
  !*** ./src/app/core/services/notification/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* reexport safe */ _notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService)
/* harmony export */ });
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ 7020);



/***/ }),

/***/ 7020:
/*!********************************************************************!*\
  !*** ./src/app/core/services/notification/notification.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);


class NotificationService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    info(message) {
        this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: message,
        });
    }
    error(message) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73:
/*!*******************************************************!*\
  !*** ./src/app/core/services/url-generation/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlGenerationService": () => (/* reexport safe */ _url_generation_service__WEBPACK_IMPORTED_MODULE_0__.UrlGenerationService)
/* harmony export */ });
/* harmony import */ var _url_generation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-generation.service */ 3548);



/***/ }),

/***/ 3548:
/*!************************************************************************!*\
  !*** ./src/app/core/services/url-generation/url-generation.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlGenerationService": () => (/* binding */ UrlGenerationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class UrlGenerationService {
    constructor() { }
    getApiEndpointUrl(endpoint) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + endpoint;
    }
}
UrlGenerationService.ɵfac = function UrlGenerationService_Factory(t) { return new (t || UrlGenerationService)(); };
UrlGenerationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UrlGenerationService, factory: UrlGenerationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8943:
/*!*******************************************************!*\
  !*** ./src/app/core/store/actions/contact.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContacts": () => (/* binding */ loadContacts),
/* harmony export */   "loadContactsFailure": () => (/* binding */ loadContactsFailure),
/* harmony export */   "loadContactsSuccess": () => (/* binding */ loadContactsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const loadContacts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Contacts] Load Contacts');
const loadContactsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Contacts] Load Contacts Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadContactsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Contacts] Load Contacts Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 3306:
/*!*********************************************!*\
  !*** ./src/app/core/store/actions/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContacts": () => (/* reexport safe */ _contact_actions__WEBPACK_IMPORTED_MODULE_0__.loadContacts),
/* harmony export */   "loadContactsFailure": () => (/* reexport safe */ _contact_actions__WEBPACK_IMPORTED_MODULE_0__.loadContactsFailure),
/* harmony export */   "loadContactsSuccess": () => (/* reexport safe */ _contact_actions__WEBPACK_IMPORTED_MODULE_0__.loadContactsSuccess)
/* harmony export */ });
/* harmony import */ var _contact_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.actions */ 8943);



/***/ }),

/***/ 8641:
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsFeature": () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_2__.contactsFeature),
/* harmony export */   "initialContactsState": () => (/* reexport safe */ _states__WEBPACK_IMPORTED_MODULE_4__.initialContactsState),
/* harmony export */   "initialRootState": () => (/* reexport safe */ _states__WEBPACK_IMPORTED_MODULE_4__.initialRootState),
/* harmony export */   "loadContacts": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.loadContacts),
/* harmony export */   "loadContactsFailure": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.loadContactsFailure),
/* harmony export */   "loadContactsSuccess": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.loadContactsSuccess),
/* harmony export */   "rootReducer": () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_2__.rootReducer),
/* harmony export */   "selectContact": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_3__.selectContact),
/* harmony export */   "selectContacts": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_3__.selectContacts),
/* harmony export */   "selectTotalContacts": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_3__.selectTotalContacts),
/* harmony export */   "storageMetaReducer": () => (/* reexport safe */ _storage_meta_reducer__WEBPACK_IMPORTED_MODULE_5__.storageMetaReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 3306);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 8390);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ 5645);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ 7971);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states */ 4099);
/* harmony import */ var _storage_meta_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.meta-reducer */ 6944);








/***/ }),

/***/ 4060:
/*!****************************************************!*\
  !*** ./src/app/core/store/models/address.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3122:
/*!****************************************************!*\
  !*** ./src/app/core/store/models/contact.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8390:
/*!********************************************!*\
  !*** ./src/app/core/store/models/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.model */ 3122);
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.model */ 4060);




/***/ }),

/***/ 7103:
/*!*********************************************************!*\
  !*** ./src/app/core/store/reducers/contacts.reducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsFeature": () => (/* binding */ contactsFeature)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 3306);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states */ 4099);



const contactsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeature)({
    name: 'contacts',
    reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_states__WEBPACK_IMPORTED_MODULE_1__.initialContactsState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadContactsSuccess, (state, { contacts, totalContacts }) => (Object.assign(Object.assign({}, state), { contacts,
        totalContacts })))),
});


/***/ }),

/***/ 5645:
/*!**********************************************!*\
  !*** ./src/app/core/store/reducers/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsFeature": () => (/* reexport safe */ _contacts_reducer__WEBPACK_IMPORTED_MODULE_1__.contactsFeature),
/* harmony export */   "rootReducer": () => (/* reexport safe */ _root_reducer__WEBPACK_IMPORTED_MODULE_0__.rootReducer)
/* harmony export */ });
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.reducer */ 4488);
/* harmony import */ var _contacts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.reducer */ 7103);




/***/ }),

/***/ 4488:
/*!*****************************************************!*\
  !*** ./src/app/core/store/reducers/root.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ 4099);


const rootReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(_states__WEBPACK_IMPORTED_MODULE_0__.initialRootState);


/***/ }),

/***/ 7220:
/*!***********************************************************!*\
  !*** ./src/app/core/store/selectors/contact.selectors.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectContact": () => (/* binding */ selectContact),
/* harmony export */   "selectContacts": () => (/* binding */ selectContacts),
/* harmony export */   "selectTotalContacts": () => (/* binding */ selectTotalContacts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const selectContactsFeature = (state) => state.contacts;
const selectContacts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectContactsFeature, (state) => state === null || state === void 0 ? void 0 : state.contacts);
const selectTotalContacts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectContactsFeature, (state) => state === null || state === void 0 ? void 0 : state.totalContacts);
const selectContact = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectContactsFeature, (state) => state.contacts.find((c) => c.id === id));


/***/ }),

/***/ 7971:
/*!***********************************************!*\
  !*** ./src/app/core/store/selectors/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectContact": () => (/* reexport safe */ _contact_selectors__WEBPACK_IMPORTED_MODULE_0__.selectContact),
/* harmony export */   "selectContacts": () => (/* reexport safe */ _contact_selectors__WEBPACK_IMPORTED_MODULE_0__.selectContacts),
/* harmony export */   "selectTotalContacts": () => (/* reexport safe */ _contact_selectors__WEBPACK_IMPORTED_MODULE_0__.selectTotalContacts)
/* harmony export */ });
/* harmony import */ var _contact_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.selectors */ 7220);



/***/ }),

/***/ 8187:
/*!************************************************!*\
  !*** ./src/app/core/store/states/app.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3718:
/*!*****************************************************!*\
  !*** ./src/app/core/store/states/contacts.state.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialContactsState": () => (/* binding */ initialContactsState)
/* harmony export */ });
const initialContactsState = {
    contacts: [],
    totalContacts: 0,
};


/***/ }),

/***/ 4099:
/*!********************************************!*\
  !*** ./src/app/core/store/states/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialContactsState": () => (/* reexport safe */ _contacts_state__WEBPACK_IMPORTED_MODULE_2__.initialContactsState),
/* harmony export */   "initialRootState": () => (/* reexport safe */ _root_state__WEBPACK_IMPORTED_MODULE_0__.initialRootState)
/* harmony export */ });
/* harmony import */ var _root_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.state */ 3084);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.state */ 8187);
/* harmony import */ var _contacts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.state */ 3718);





/***/ }),

/***/ 3084:
/*!*************************************************!*\
  !*** ./src/app/core/store/states/root.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialRootState": () => (/* binding */ initialRootState)
/* harmony export */ });
const initialRootState = {};


/***/ }),

/***/ 6944:
/*!****************************************************!*\
  !*** ./src/app/core/store/storage.meta-reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageMetaReducer": () => (/* binding */ storageMetaReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

function setSavedState(state, localStorageKey) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey) {
    return JSON.parse(localStorage.getItem(localStorageKey) || '{}');
}
const localStorageKey = 'contactManagerState';
function storageMetaReducer(reducer) {
    return function (state, action) {
        if (action.type == _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.INIT) {
            const savedState = getSavedState(localStorageKey);
            return savedState;
        }
        const nextState = reducer(state, action);
        setSavedState(nextState, localStorageKey);
        return nextState;
    };
}


/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* reexport safe */ _primeng__WEBPACK_IMPORTED_MODULE_1__.PrimeNGModule),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 4466);
/* harmony import */ var _primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primeng */ 8110);




/***/ }),

/***/ 8110:
/*!*****************************************!*\
  !*** ./src/app/shared/primeng/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* reexport safe */ _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule)
/* harmony export */ });
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primeng.module */ 8505);



/***/ }),

/***/ 8505:
/*!**************************************************!*\
  !*** ./src/app/shared/primeng/primeng.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimeNGModule": () => (/* binding */ PrimeNGModule)
/* harmony export */ });
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/paginator */ 1066);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);












class PrimeNGModule {
}
PrimeNGModule.ɵfac = function PrimeNGModule_Factory(t) { return new (t || PrimeNGModule)(); };
PrimeNGModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimeNGModule });
PrimeNGModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService], imports: [[
            primeng_toast__WEBPACK_IMPORTED_MODULE_2__.ToastModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule,
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinnerModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule,
        ], primeng_toast__WEBPACK_IMPORTED_MODULE_2__.ToastModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinnerModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNGModule, { imports: [primeng_toast__WEBPACK_IMPORTED_MODULE_2__.ToastModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinnerModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule], exports: [primeng_toast__WEBPACK_IMPORTED_MODULE_2__.ToastModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinnerModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_8__.PaginatorModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule] }); })();


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _primeng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primeng */ 8110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _primeng__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _environment_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.type */ 433);

const environment = {
    name: _environment_type__WEBPACK_IMPORTED_MODULE_0__.EnvironmentType.Beta,
    production: false,
    apiUrl: 'http://172.17.0.1:3001/api/',
};


/***/ }),

/***/ 433:
/*!**********************************************!*\
  !*** ./src/environments/environment.type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvironmentType": () => (/* binding */ EnvironmentType)
/* harmony export */ });
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType[EnvironmentType["Development"] = 1] = "Development";
    EnvironmentType[EnvironmentType["Beta"] = 2] = "Beta";
    EnvironmentType[EnvironmentType["Production"] = 3] = "Production";
})(EnvironmentType || (EnvironmentType = {}));


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map