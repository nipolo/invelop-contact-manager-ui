import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from './primeng';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNGModule],
  exports: [CommonModule, ReactiveFormsModule, PrimeNGModule],
})
export class SharedModule {}
