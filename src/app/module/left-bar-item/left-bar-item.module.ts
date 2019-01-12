import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarItemComponent } from './left-bar-item.component';

@NgModule({
  declarations: [LeftBarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LeftBarItemComponent
  ]
})
export class LeftBarItemModule { }
