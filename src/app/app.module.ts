import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
import { RegistrarSeguroComponent } from './components/registrar-seguro/registrar-seguro.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarPolizaComponent } from './components/registrar-poliza/registrar-poliza.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule}from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PolizasComponent,
    SegurosComponent,
    RegistrarPersonaComponent,
    RegistrarSeguroComponent,
    MenuComponent,
    RegistrarPolizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
