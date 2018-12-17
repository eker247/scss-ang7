import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
