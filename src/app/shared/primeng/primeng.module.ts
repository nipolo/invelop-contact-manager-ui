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
  ],
  providers: [],
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
  ],
})
export class PrimeNGModule {}
