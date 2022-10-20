import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './class/employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:"",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"empUpdate/:id",component:EmpUpdateComponent},
   {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
