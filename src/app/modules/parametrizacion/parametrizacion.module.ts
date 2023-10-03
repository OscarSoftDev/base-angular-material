import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { PropertyComponent } from './property/property.component';
import { MaterialModule } from 'src/app/material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    PropertyComponent,
    InicioComponent,
    UsuariosComponent,


  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule,
    MaterialModule,
  
  ]
})
export class ParametrizacionModule {
}
