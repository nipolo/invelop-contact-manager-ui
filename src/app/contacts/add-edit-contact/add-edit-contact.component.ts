import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegexValidationsConsts } from '@core/constants';
import { uiRoutes } from '@core/constants/ui-routes';
import { ComponentModeType } from '@core/enums';
import { NotificationService } from '@core/services';
import { Observable, Subscription, take } from 'rxjs';
import { ContactService } from '../services';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss'],
})
export class AddEditContactComponent implements OnInit, OnDestroy {
  id: number | null;
  mode: ComponentModeType;
  contactForm: FormGroup;
  subscription: Subscription[] = [];

  get title(): string {
    if (this.mode == ComponentModeType.Add) {
      return 'Add contact';
    } else {
      return 'Edit contact';
    }
  }

  get isAdd(): boolean {
    return this.mode == ComponentModeType.Add;
  }

  get isUpdate(): boolean {
    return this.mode == ComponentModeType.Edit;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || isNaN(Number(id))) {
      this.id = null;
      this.mode = ComponentModeType.Add;
    } else {
      this.id = Number(id);
      this.mode = ComponentModeType.Edit;
    }

    this.contactForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      surname: this.fb.control('', [Validators.required]),
      birthDate: this.fb.control('', [Validators.required]),
      line1: this.fb.control('', [Validators.required]),
      line2: this.fb.control(''),
      postcode: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      country: this.fb.control('', [Validators.required]),
      phoneNumber: this.fb.control('', [
        Validators.required,
        Validators.pattern(RegexValidationsConsts.PhoneNumber),
      ]),
      iban: this.fb.control('', [
        Validators.required,
        Validators.pattern(RegexValidationsConsts.IBAN),
      ]),
    });
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      this.subscription.push(
        this.contactService.getContact$(<number>this.id).subscribe((x) =>
          this.contactForm.patchValue({
            ...x,
            ...x.address,
            birthDate: new Date(x.birthDate),
          })
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }

  cancel() {
    this.router.navigate([
      uiRoutes.contactsModule.base,
      uiRoutes.contactsModule.routes.allContacts,
    ]);
  }

  addEdit() {
    let request$: Observable<any>;

    if (this.isAdd) {
      request$ = this.contactService.addContact$(
        this.contactForm.value.firstName,
        this.contactForm.value.surname,
        this.contactForm.value.birthDate,
        this.contactForm.value.line1,
        this.contactForm.value.line2,
        this.contactForm.value.city,
        this.contactForm.value.postcode,
        this.contactForm.value.country,
        this.contactForm.value.phoneNumber,
        this.contactForm.value.iban
      );
    } else {
      request$ = this.contactService.editContact$(
        <number>this.id,
        this.contactForm.value.firstName,
        this.contactForm.value.surname,
        this.contactForm.value.birthDate,
        this.contactForm.value.line1,
        this.contactForm.value.line2,
        this.contactForm.value.city,
        this.contactForm.value.postcode,
        this.contactForm.value.country,
        this.contactForm.value.phoneNumber,
        this.contactForm.value.iban
      );
    }
    request$.pipe(take(1)).subscribe({
      next: (_) => {
        this.router.navigate([
          uiRoutes.contactsModule.base,
          uiRoutes.contactsModule.routes.allContacts,
        ]);
        this.notificationService.info(
          `Contact successfully ${this.isAdd ? 'created' : 'updated'}`
        );
      },
      error: (e) => {
        this.notificationService.error(e.message);
      },
    });
  }
}
