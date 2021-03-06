import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { ContactService } from '../services';
import { AddressModel, ContactModel, loadContactsSuccess } from '@core/store';
import { NotificationService } from '@core/services';
import { ActivatedRoute, Router } from '@angular/router';
import { uiRoutes } from '@core/constants';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  currentPage = 1;
  pageSize = 10;
  contacts$: Observable<ContactModel[]>;
  totalRecords$: Observable<number>;
  isLoading = false;
  rowsPerPageOptions = [3, 5, 10];

  constructor(
    private contactService: ContactService,
    private store: Store,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {
    this.contacts$ = this.contactService.selectAllContacts$();
    this.totalRecords$ = this.contactService.selectTotalContacts$();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadContacts();
  }

  addNewContact() {
    this.router.navigate(['../', uiRoutes.contactsModule.routes.addContact], {
      relativeTo: this.route,
    });
  }

  editContact(contact: ContactModel) {
    this.router.navigate(
      ['../', uiRoutes.contactsModule.routes.updateContact.base, contact.id],
      {
        relativeTo: this.route,
      }
    );
  }

  deleteProduct(contact: ContactModel) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete "${contact.firstName} ${contact.surname}"contact?`,
      header: 'Delete contact',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contactService
          .removeContact$(contact.id)
          .pipe(take(1))
          .subscribe({
            next: (_) => {
              this.loadContacts();
              this.notificationService.info('Contact successfully deleted');
            },
            error: (e) => {
              this.isLoading = false;
              this.notificationService.error(e.message);
            },
          });
      },
      reject: () => {},
    });
  }

  formatAddress(address: AddressModel): string {
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

  contactsPaginatorChanged($event: any) {
    this.currentPage = $event.page + 1;
    this.pageSize = $event.rows;
    this.loadContacts();
  }

  private loadContacts() {
    this.contactService
      .getAllContacts$(this.currentPage, this.pageSize)
      .pipe(take(1))
      .subscribe({
        next: (x) => {
          var contacts = x.contacts.map(
            (dto) =>
              <ContactModel>{
                address: <AddressModel>{
                  city: dto.address.city,
                  country: dto.address.country,
                  line1: dto.address.line1,
                  line2: dto.address.line2,
                  postcode: dto.address.postcode,
                },
                birthDate: dto.birthDate,
                firstName: dto.firstName,
                iban: dto.iban,
                id: dto.id,
                surname: dto.surname,
                phoneNumber: dto.phoneNumber,
              }
          );
          this.store.dispatch(
            loadContactsSuccess({ contacts, totalContacts: x.totalContacts })
          );
          this.isLoading = false;
        },
        error: (e) => {
          this.isLoading = false;
          this.notificationService.error(e.message);
        },
      });
  }
}
