import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { plLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
defineLocale('pl', plLocale);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDatepickerModule,
  ],
  exports: [
    BsDatepickerModule
  ]
})
export class DateInputModule { }
