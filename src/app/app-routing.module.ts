import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbdComponent } from './dashbd/dashbd.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  //path : http://localhost:4200/dashbd
  {
    path:'dashbd', component:DashbdComponent
  },
  // redirect from http://localhost:4200 to http://localhost:4200/dashbd
  {
    path:'',redirectTo:'dashbd',pathMatch:'full'
  },
  {
    path:'employees', component:EmployeesComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'contacts', component:ContactsComponent
  },
  {
    path:'leads', component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
