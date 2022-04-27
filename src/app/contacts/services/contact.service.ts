import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlRoutes } from '@core/constants';
import { UrlGenerationService } from '@core/services';
import {
  AppState,
  ContactModel,
  selectContacts,
  selectTotalContacts,
} from '@core/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveContactCommand } from '../commands';
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
