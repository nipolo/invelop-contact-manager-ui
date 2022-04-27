import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    DialogModule,
    ProgressSpinnerModule,
    PaginatorModule,
  ],
  providers: [],
  exports: [
    ToastModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    DialogModule,
    ProgressSpinnerModule,
    PaginatorModule,
  ],
})
export class PrimeNGModule {}
