import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storageMetaReducer } from '@core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
      name: 'Contact Manager',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
