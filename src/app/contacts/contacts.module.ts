import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { StoreModule } from '@ngrx/store';
import { contactsFeature } from '@core/store';
import { ContactsListComponent } from './contacts-list';
import { ContactService } from './services';
import { SharedModule } from '@shared/index';
import { AddEditContactComponent } from './add-edit-contact';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    AddEditContactComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    StoreModule.forFeature(contactsFeature),
  ],
  providers: [ContactService],
})
export class ContactsModule {}
