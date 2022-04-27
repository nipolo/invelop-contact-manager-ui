import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uiRoutes } from '@core/constants';
import { AddEditContactComponent } from './add-edit-contact';
import { ContactsListComponent } from './contacts-list';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: uiRoutes.contactsModule.routes.allContacts,
      },
      {
        path: uiRoutes.contactsModule.routes.allContacts,
        pathMatch: 'full',
        component: ContactsListComponent,
      },
      {
        path: uiRoutes.contactsModule.routes.addContact,
        pathMatch: 'full',
        component: AddEditContactComponent,
      },
      {
        path: uiRoutes.contactsModule.routes.updateContact.withParams,
        pathMatch: 'full',
        component: AddEditContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
