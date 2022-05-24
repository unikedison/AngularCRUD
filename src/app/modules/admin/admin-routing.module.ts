import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {path: "", component: DashboardComponent,
   children: [
     {path: "home", component:HomeComponent},
     {path: "create-employee", component: CreateEmployeeComponent},
     {path: "update-employee/:id", component: UpdateEmployeeComponent},
     {path: "", redirectTo: "/admin/home", pathMatch: "full"}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
