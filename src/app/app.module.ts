import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParametrizacionComponent } from './modules/parametrizacion/parametrizacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    ParametrizacionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
