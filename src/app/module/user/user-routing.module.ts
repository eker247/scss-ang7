import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FewUsersComponent } from './few-users/few-users.component';

const routes: Routes = [
  { path: '', component: ListUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'few', component: FewUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
