import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [
    PropertyComponent,

  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule,
  ]
})
export class ParametrizacionModule {
}
