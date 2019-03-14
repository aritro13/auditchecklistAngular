import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './component/form/form.component';


const Routes: Routes = [
  {
    path: '',
    component : FormComponent
  },
  {
    path: 'app-form',
    component : FormComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
