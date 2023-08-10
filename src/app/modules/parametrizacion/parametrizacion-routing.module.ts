import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacionComponent } from './parametrizacion.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {path:'',
  component: ParametrizacionComponent,
  children: [
    { path:'property', component : PropertyComponent }
  ]
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
