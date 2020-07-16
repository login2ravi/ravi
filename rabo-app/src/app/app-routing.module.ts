import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';


const routes: Routes = [
  {path : '', redirectTo:'/user-login',pathMatch:'full'},
  {path : 'user-login', component : UserLoginComponent},
  {path : 'search', component : SearchComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'add-loan', component : AddLoanComponent},
  {path : 'update-loan', component : UpdateLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
