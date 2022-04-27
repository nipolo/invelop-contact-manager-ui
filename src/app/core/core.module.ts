import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGModule } from './primeng';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, PrimeNGModule],
  providers: [MessageService],
})
export class CoreModule {}
