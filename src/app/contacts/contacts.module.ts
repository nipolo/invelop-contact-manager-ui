import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { StoreModule } from '@ngrx/store';
import { contactsFeature } from '@core/store';
import { ContactsListComponent } from './contacts-list';
import { ContactService } from './services';
import { SharedModule } from '@shared/index';

@NgModule({
  declarations: [ContactsComponent, ContactsListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    StoreModule.forFeature(contactsFeature),
  ],
  providers: [ContactService],
})
export class ContactsModule {}
