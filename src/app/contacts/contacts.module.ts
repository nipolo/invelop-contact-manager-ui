import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { StoreModule } from '@ngrx/store';
import { contactsFeature } from '@core/store';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    StoreModule.forFeature(contactsFeature),
  ],
})
export class ContactsModule {}
