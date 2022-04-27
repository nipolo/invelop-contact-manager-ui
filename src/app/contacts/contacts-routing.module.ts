import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uiRoutes } from '@core/constants';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
