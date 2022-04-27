import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uiRoutes } from '@core/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: uiRoutes.contactsModule.base,
    pathMatch: 'full',
  },
  {
    path: uiRoutes.contactsModule.base,
    loadChildren: () =>
      import('./contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
