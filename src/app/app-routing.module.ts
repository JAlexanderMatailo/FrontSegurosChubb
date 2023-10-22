import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { RegistrarSeguroComponent } from './components/registrar-seguro/registrar-seguro.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { RegistrarPolizaComponent } from './components/registrar-poliza/registrar-poliza.component';

const routes: Routes = [
  {path: '' , redirectTo: "Polizas", pathMatch:"full"},
  
  {path : "Personas" , component: PersonasComponent},
  {path : "insertPerson" , component: RegistrarPersonaComponent},
  {path : "Seguros" , component: SegurosComponent  },
  {path : "insertSeguros" , component: RegistrarSeguroComponent },
  {path : "Polizas" , component: PolizasComponent  },
  {path : "insertPolizas", component: RegistrarPolizaComponent },
  {path:"**",redirectTo : "allPolizas", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
