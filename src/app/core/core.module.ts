import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './layout/left-bar/left-bar.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    LeftBarComponent,
    TopBarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
