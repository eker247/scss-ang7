import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './layout/left-bar/left-bar.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LeftBarItemModule } from '../module/left-bar-item/left-bar-item.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './service/breadcrumb.service';
import { InterfaceService } from './service/interface.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    LeftBarComponent,
    TopBarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LeftBarItemModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    BreadcrumbService,
    InterfaceService
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
