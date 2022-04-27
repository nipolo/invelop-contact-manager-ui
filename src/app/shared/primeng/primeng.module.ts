import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    ProgressSpinnerModule,
    PaginatorModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  exports: [
    ToastModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    ProgressSpinnerModule,
    PaginatorModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule,
  ],
})
export class PrimeNGModule {}
