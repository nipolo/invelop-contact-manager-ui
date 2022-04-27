import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlRoutes } from '@core/constants';
import { UrlGenerationService } from '@core/services';
import {
  AppState,
  ContactModel,
  selectContact,
  selectContacts,
  selectTotalContacts,
} from '@core/store';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import {
  AddContactCommand,
  AddressDto,
  RemoveContactCommand,
  UpdateContactCommand,
} from '../commands';
import { AllContactsDto } from '../dtos';

@Injectable({
  providedIn: null,
})
export class ContactService {
  constructor(
    private http: HttpClient,
    private urlGenerationService: UrlGenerationService,
    private store: Store<AppState>
  ) {}

  getAllContacts$(
    pageNum: number,
    pageSize: number
  ): Observable<AllContactsDto> {
    return this.http.get<AllContactsDto>(
      this.urlGenerationService.getApiEndpointUrl(
        urlRoutes.getGetAllContacts(pageNum, pageSize)
      )
    );
  }

  getContact$(id: number): Observable<ContactModel> {
    return this.store.select(selectContact(id)).pipe(
      filter((x) => !!x),
      map((x) => <ContactModel>x)
    );
  }

  addContact$(
    firstName: string,
    surname: string,
    birthDate: Date,
    line1: string,
    line2: string,
    city: string,
    postcode: string,
    country: string,
    phoneNumber: string,
    iban: string
  ): Observable<any> {
    var body = <AddContactCommand>{
      firstName,
      address: <AddressDto>{ city, country, line1, line2, postcode },
      birthDate,
      iban,
      phoneNumber,
      surname,
    };
    return this.http.post(
      this.urlGenerationService.getApiEndpointUrl(urlRoutes.postCreateContact),
      body
    );
  }

  editContact$(
    id: number,
    firstName: string,
    surname: string,
    birthDate: Date,
    line1: string,
    line2: string,
    city: string,
    postcode: string,
    country: string,
    phoneNumber: string,
    iban: string
  ): Observable<any> {
    var body = <UpdateContactCommand>{
      id,
      firstName,
      address: <AddressDto>{ city, country, line1, line2, postcode },
      birthDate,
      iban,
      phoneNumber,
      surname,
    };
    return this.http.put(
      this.urlGenerationService.getApiEndpointUrl(urlRoutes.putUpdateContact),
      body
    );
  }

  removeContact$(id: number): Observable<any> {
    var body = <RemoveContactCommand>{ id };
    return this.http.delete(
      this.urlGenerationService.getApiEndpointUrl(
        urlRoutes.deleteRemoveContact
      ),
      { body }
    );
  }

  selectAllContacts$(): Observable<ContactModel[]> {
    return this.store.select(selectContacts);
  }

  selectTotalContacts$(): Observable<number> {
    return this.store.select(selectTotalContacts);
  }
}
