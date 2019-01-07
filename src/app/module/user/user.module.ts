import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { PageDivModule } from '../page-div/page-div.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DateInputModule } from '../date-input/date-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUserComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    PageDivModule,
    DateInputModule,
  ]
})
export class UserModule { }
