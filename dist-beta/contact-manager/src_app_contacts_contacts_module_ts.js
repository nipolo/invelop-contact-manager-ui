"use strict";
(self["webpackChunkcontact_manager"] = self["webpackChunkcontact_manager"] || []).push([["src_app_contacts_contacts_module_ts"],{

/***/ 8497:
/*!*************************************************************************!*\
  !*** ./src/app/contacts/add-edit-contact/add-edit-contact.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditContactComponent": () => (/* binding */ AddEditContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants */ 7763);
/* harmony import */ var _core_constants_ui_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/ui-routes */ 2179);
/* harmony import */ var _core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/enums */ 9442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ 6109);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ 8138);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 2875);














class AddEditContactComponent {
    constructor(router, route, fb, contactService, notificationService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.contactService = contactService;
        this.notificationService = notificationService;
        this.subscription = [];
        const id = this.route.snapshot.paramMap.get('id');
        if (!id || isNaN(Number(id))) {
            this.id = null;
            this.mode = _core_enums__WEBPACK_IMPORTED_MODULE_2__.ComponentModeType.Add;
        }
        else {
            this.id = Number(id);
            this.mode = _core_enums__WEBPACK_IMPORTED_MODULE_2__.ComponentModeType.Edit;
        }
        this.contactForm = this.fb.group({
            firstName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            surname: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            birthDate: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            line1: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            line2: this.fb.control(''),
            postcode: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            city: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            country: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            phoneNumber: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_core_constants__WEBPACK_IMPORTED_MODULE_0__.RegexValidationsConsts.PhoneNumber),
            ]),
            iban: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_core_constants__WEBPACK_IMPORTED_MODULE_0__.RegexValidationsConsts.IBAN),
            ]),
        });
    }
    get title() {
        if (this.mode == _core_enums__WEBPACK_IMPORTED_MODULE_2__.ComponentModeType.Add) {
            return 'Add contact';
        }
        else {
            return 'Edit contact';
        }
    }
    get isAdd() {
        return this.mode == _core_enums__WEBPACK_IMPORTED_MODULE_2__.ComponentModeType.Add;
    }
    get isUpdate() {
        return this.mode == _core_enums__WEBPACK_IMPORTED_MODULE_2__.ComponentModeType.Edit;
    }
    get isFormValid() {
        return this.contactForm.valid;
    }
    ngOnInit() {
        if (this.isUpdate) {
            this.subscription.push(this.contactService.getContact$(this.id).subscribe((x) => this.contactForm.patchValue(Object.assign(Object.assign(Object.assign({}, x), x.address), { birthDate: new Date(x.birthDate) }))));
        }
    }
    ngOnDestroy() {
        this.subscription.forEach((s) => s.unsubscribe());
    }
    cancel() {
        this.router.navigate([
            _core_constants_ui_routes__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.base,
            _core_constants_ui_routes__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.routes.allContacts,
        ]);
    }
    addEdit() {
        let request$;
        if (this.isAdd) {
            request$ = this.contactService.addContact$(this.contactForm.value.firstName, this.contactForm.value.surname, this.contactForm.value.birthDate, this.contactForm.value.line1, this.contactForm.value.line2, this.contactForm.value.city, this.contactForm.value.postcode, this.contactForm.value.country, this.contactForm.value.phoneNumber, this.contactForm.value.iban);
        }
        else {
            request$ = this.contactService.editContact$(this.id, this.contactForm.value.firstName, this.contactForm.value.surname, this.contactForm.value.birthDate, this.contactForm.value.line1, this.contactForm.value.line2, this.contactForm.value.city, this.contactForm.value.postcode, this.contactForm.value.country, this.contactForm.value.phoneNumber, this.contactForm.value.iban);
        }
        request$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
            next: (_) => {
                this.router.navigate([
                    _core_constants_ui_routes__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.base,
                    _core_constants_ui_routes__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.routes.allContacts,
                ]);
                this.notificationService.info(`Contact successfully ${this.isAdd ? 'created' : 'updated'}`);
            },
            error: (e) => {
                this.notificationService.error(e.message);
            },
        });
    }
}
AddEditContactComponent.ɵfac = function AddEditContactComponent_Factory(t) { return new (t || AddEditContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
AddEditContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AddEditContactComponent, selectors: [["app-add-edit-contact"]], decls: 46, vars: 3, consts: [[3, "formGroup"], [1, "grid", "p-fluid", "lg:col-6", "md:col-12"], [1, "p-col-12", "lg:col-4", "md:col-12"], ["for", "firstName"], ["id", "firstName", "type", "text", "pInputText", "", "formControlName", "firstName"], ["for", "surname"], ["id", "surname", "type", "text", "pInputText", "", "formControlName", "surname"], ["for", "birthDate"], ["inputId", "birthDate", "formControlName", "birthDate"], [1, "p-col-12", "lg:col-6", "md:col-12"], ["for", "line1"], ["id", "line1", "type", "text", "pInputText", "", "formControlName", "line1"], ["for", "line2"], ["id", "line2", "type", "text", "pInputText", "", "formControlName", "line2"], ["for", "postcode"], ["id", "postcode", "type", "text", "pInputText", "", "formControlName", "postcode"], ["for", "city"], ["id", "city", "type", "text", "pInputText", "", "formControlName", "city"], ["for", "country"], ["id", "country", "type", "text", "pInputText", "", "formControlName", "country"], ["for", "phoneNumber"], ["id", "phoneNumber", "type", "text", "pInputText", "", "formControlName", "phoneNumber"], ["for", "iban"], ["id", "iban", "type", "text", "pInputText", "", "formControlName", "iban"], ["pButton", "", "pRipple", "", "id", "add-edit-btn", "label", "Save", "icon", "pi pi-check", 1, "p-button", 3, "disabled", "click"], ["pButton", "", "pRipple", "", "id", "cancel-btn", "label", "Cancel", "icon", "pi pi-times", 1, "p-button", 3, "click"]], template: function AddEditContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 2)(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 2)(13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "BirthDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "p-calendar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Line1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 9)(21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Line2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 2)(25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 2)(29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 2)(33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 2)(37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 2)(41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "IBAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddEditContactComponent_Template_button_click_44_listener() { return ctx.addEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddEditContactComponent_Template_button_click_45_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isFormValid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple], styles: [".p-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1lZGl0LWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 418:
/*!****************************************************!*\
  !*** ./src/app/contacts/add-edit-contact/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditContactComponent": () => (/* reexport safe */ _add_edit_contact_component__WEBPACK_IMPORTED_MODULE_0__.AddEditContactComponent)
/* harmony export */ });
/* harmony import */ var _add_edit_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-contact.component */ 8497);



/***/ }),

/***/ 3630:
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contacts-list/contacts-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsListComponent": () => (/* binding */ ContactsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/store */ 8641);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants */ 7763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 6109);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 8138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 1066);

















function ContactsListComponent_p_progressSpinner_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-progressSpinner");
  }
}

function ContactsListComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsListComponent_ng_template_1_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r6.addNewContact();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ContactsListComponent_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "BirthDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "IBAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ContactsListComponent_ng_template_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsListComponent_ng_template_1_ng_template_6_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const contact_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r9.editContact(contact_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsListComponent_ng_template_1_ng_template_6_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const contact_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r11.deleteProduct(contact_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const contact_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r8.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r8.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 6, contact_r8.birthDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.formatAddress(contact_r8.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r8.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r8.iban);
  }
}

const _c0 = function () {
  return [];
};

const _c1 = function () {
  return [3, 5, 10];
};

function ContactsListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "p-toolbar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ContactsListComponent_ng_template_1_ng_template_2_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ContactsListComponent_ng_template_1_ng_template_5_Template, 14, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ContactsListComponent_ng_template_1_ng_template_6_Template, 17, 9, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p-paginator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function ContactsListComponent_ng_template_1_Template_p_paginator_onPageChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r12.contactsPaginatorChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r2.contacts$) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx_r2.pageSize)("totalRecords", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx_r2.totalRecords$) || 0)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1));
  }
}

class ContactsListComponent {
  constructor(contactService, store, notificationService, router, route, confirmationService) {
    this.contactService = contactService;
    this.store = store;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.confirmationService = confirmationService;
    this.currentPage = 1;
    this.pageSize = 10;
    this.isLoading = false;
    this.contacts$ = this.contactService.selectAllContacts$();
    this.totalRecords$ = this.contactService.selectTotalContacts$();
  }

  ngOnInit() {
    this.isLoading = true;
    this.loadContacts();
  }

  addNewContact() {
    this.router.navigate(['../', _core_constants__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.routes.addContact], {
      relativeTo: this.route
    });
  }

  editContact(contact) {
    this.router.navigate(['../', _core_constants__WEBPACK_IMPORTED_MODULE_1__.uiRoutes.contactsModule.routes.updateContact.base, contact.id], {
      relativeTo: this.route
    });
  }

  deleteProduct(contact) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete "${contact.firstName} ${contact.surname}"contact?`,
      header: 'Delete contact',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contactService.removeContact$(contact.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
          next: _ => {
            this.loadContacts();
            this.notificationService.info('Contact successfully deleted');
          },
          error: e => {
            this.isLoading = false;
            this.notificationService.error(e.message);
          }
        });
      },
      reject: () => {}
    });
  }

  formatAddress(address) {
    let formattedAdress = address.line1;

    if (!!address.line2) {
      formattedAdress += ', ' + address.line2;
    }

    if (!!address.postcode) {
      formattedAdress += ', ' + address.postcode;
    }

    if (!!address.city) {
      formattedAdress += ', ' + address.city;
    }

    if (!!address.country) {
      formattedAdress += ', ' + address.country;
    }

    return formattedAdress;
  }

  contactsPaginatorChanged($event) {
    this.currentPage = $event.page + 1;
    this.pageSize = $event.rows;
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getAllContacts$(this.currentPage, this.pageSize).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
      next: x => {
        var contacts = x.contacts.map(dto => ({
          address: {
            city: dto.address.city,
            country: dto.address.country,
            line1: dto.address.line1,
            line2: dto.address.line2,
            postcode: dto.address.postcode
          },
          birthDate: dto.birthDate,
          firstName: dto.firstName,
          iban: dto.iban,
          id: dto.id,
          surname: dto.surname,
          phoneNumber: dto.phoneNumber
        }));
        this.store.dispatch((0,_core_store__WEBPACK_IMPORTED_MODULE_0__.loadContactsSuccess)({
          contacts,
          totalContacts: x.totalContacts
        }));
        this.isLoading = false;
      },
      error: e => {
        this.isLoading = false;
        this.notificationService.error(e.message);
      }
    });
  }

}

ContactsListComponent.ɵfac = function ContactsListComponent_Factory(t) {
  return new (t || ContactsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService));
};

ContactsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContactsListComponent,
  selectors: [["app-contacts-list"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["tableContent", ""], [1, "card"], ["styleClass", "p-mb-4"], ["pTemplate", "left"], ["styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "rows", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["pButton", "", "pRipple", "", "id", "add-new-contact-btn", "label", "New", "icon", "pi pi-plus", 1, "p-button-success", "p-mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "p-mr-2", "edit-product", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", "delete-product", 3, "click"]],
  template: function ContactsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContactsListComponent_p_progressSpinner_0_Template, 1, 0, "p-progressSpinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ContactsListComponent_ng_template_1_Template, 9, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinner, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.Ripple, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.Paginator],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 4547:
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts-list/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsListComponent": () => (/* reexport safe */ _contacts_list_component__WEBPACK_IMPORTED_MODULE_0__.ContactsListComponent)
/* harmony export */ });
/* harmony import */ var _contacts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-list.component */ 3630);



/***/ }),

/***/ 4773:
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsRoutingModule": () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants */ 7763);
/* harmony import */ var _add_edit_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-contact */ 418);
/* harmony import */ var _contacts_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts-list */ 4547);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.component */ 7331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_3__.ContactsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.routes.allContacts,
            },
            {
                path: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.routes.allContacts,
                pathMatch: 'full',
                component: _contacts_list__WEBPACK_IMPORTED_MODULE_2__.ContactsListComponent,
            },
            {
                path: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.routes.addContact,
                pathMatch: 'full',
                component: _add_edit_contact__WEBPACK_IMPORTED_MODULE_1__.AddEditContactComponent,
            },
            {
                path: _core_constants__WEBPACK_IMPORTED_MODULE_0__.uiRoutes.contactsModule.routes.updateContact.withParams,
                pathMatch: 'full',
                component: _add_edit_contact__WEBPACK_IMPORTED_MODULE_1__.AddEditContactComponent,
            },
        ],
    },
];
class ContactsRoutingModule {
}
ContactsRoutingModule.ɵfac = function ContactsRoutingModule_Factory(t) { return new (t || ContactsRoutingModule)(); };
ContactsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactsRoutingModule });
ContactsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 7331:
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);



const _c0 = function () { return { width: "50vw" }; };
class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 2, vars: 4, consts: [["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "p-confirmDialog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialog], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6808:
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsModule": () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 4773);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component */ 7331);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/store */ 8641);
/* harmony import */ var _contacts_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-list */ 4547);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ 6109);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/index */ 1679);
/* harmony import */ var _add_edit_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-contact */ 418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











class ContactsModule {
}
ContactsModule.ɵfac = function ContactsModule_Factory(t) { return new (t || ContactsModule)(); };
ContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_services__WEBPACK_IMPORTED_MODULE_4__.ContactService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule,
            _shared_index__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forFeature(_core_store__WEBPACK_IMPORTED_MODULE_2__.contactsFeature),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ContactsModule, { declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent,
        _contacts_list__WEBPACK_IMPORTED_MODULE_3__.ContactsListComponent,
        _add_edit_contact__WEBPACK_IMPORTED_MODULE_6__.AddEditContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule,
        _shared_index__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreFeatureModule] }); })();


/***/ }),

/***/ 1412:
/*!******************************************************!*\
  !*** ./src/app/contacts/services/contact.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants */ 7763);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/store */ 8641);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 8138);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5585);







class ContactService {
    constructor(http, urlGenerationService, store) {
        this.http = http;
        this.urlGenerationService = urlGenerationService;
        this.store = store;
    }
    getAllContacts$(pageNum, pageSize) {
        return this.http.get(this.urlGenerationService.getApiEndpointUrl(_core_constants__WEBPACK_IMPORTED_MODULE_0__.urlRoutes.getGetAllContacts(pageNum, pageSize)));
    }
    getContact$(id) {
        return this.store.select((0,_core_store__WEBPACK_IMPORTED_MODULE_1__.selectContact)(id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((x) => !!x), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((x) => x));
    }
    addContact$(firstName, surname, birthDate, line1, line2, city, postcode, country, phoneNumber, iban) {
        var body = {
            firstName,
            address: { city, country, line1, line2, postcode },
            birthDate,
            iban,
            phoneNumber,
            surname,
        };
        return this.http.post(this.urlGenerationService.getApiEndpointUrl(_core_constants__WEBPACK_IMPORTED_MODULE_0__.urlRoutes.postCreateContact), body);
    }
    editContact$(id, firstName, surname, birthDate, line1, line2, city, postcode, country, phoneNumber, iban) {
        var body = {
            id,
            firstName,
            address: { city, country, line1, line2, postcode },
            birthDate,
            iban,
            phoneNumber,
            surname,
        };
        return this.http.put(this.urlGenerationService.getApiEndpointUrl(_core_constants__WEBPACK_IMPORTED_MODULE_0__.urlRoutes.putUpdateContact), body);
    }
    removeContact$(id) {
        var body = { id };
        return this.http.delete(this.urlGenerationService.getApiEndpointUrl(_core_constants__WEBPACK_IMPORTED_MODULE_0__.urlRoutes.deleteRemoveContact), { body });
    }
    selectAllContacts$() {
        return this.store.select(_core_store__WEBPACK_IMPORTED_MODULE_1__.selectContacts);
    }
    selectTotalContacts$() {
        return this.store.select(_core_store__WEBPACK_IMPORTED_MODULE_1__.selectTotalContacts);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.UrlGenerationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: null });


/***/ }),

/***/ 6109:
/*!********************************************!*\
  !*** ./src/app/contacts/services/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* reexport safe */ _contact_service__WEBPACK_IMPORTED_MODULE_0__.ContactService)
/* harmony export */ });
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.service */ 1412);



/***/ })

}]);
//# sourceMappingURL=src_app_contacts_contacts_module_ts.js.map