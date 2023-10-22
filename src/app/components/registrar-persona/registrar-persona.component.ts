import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interface/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent {

  codigo: number = 0
  titulo: string = "Ingresar  Persona";

  person: Persona = {
    idAsegurados : 0,
    cedula : '',
    nombreCliente : '',
    telefono : '',
    edad : 0
  }
  expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    telefono: /^\d{10}$/,
    cedula: /^\d{10,10}$/,
    edad: /^\d/,

  }

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private matDialog: MatDialog
  ) {

  }

  ngOnDestroy(): void {
    localStorage.removeItem("usuario")
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  obtenerDatos() {
    if (localStorage.getItem("usuario")) {
      var datos = localStorage.getItem("usuario")
      this.person = JSON.parse(datos!)
      this.titulo = "Editar Persona"
    }
  }

  filtrarNumeros(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
  filtrarLetras(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
  }

  SetPersona() {
    if (this.validarDatos()) {
      if (this.person.idAsegurados === 0) {
        this.personaService.setPersona(this.person).subscribe(resp => {
          if (resp) {
            this.router.navigate(["Personas"]);
            this.matDialog.closeAll();
          }
          else {
            alert("No se pudo registrar la persona");
          }

        });
      } else {
        this.personaService.UpdatePersona(this.person).subscribe(resp => {
          if (resp) {
            this.router.navigate(["Personas"]);
            localStorage.removeItem("usuario");
            this.matDialog.closeAll();
          }
          else {
            alert("No se pudo editar la persona");
          }
        })
      }
    }
    this.matDialog.closeAll();
  }
  validarDatos() {
    if (this.expresiones.cedula.test(this.person.cedula)
      && this.expresiones.nombre.test(this.person.nombreCliente)
      && this.expresiones.telefono.test(this.person.telefono)
      && this.expresiones.edad.test(this.person.edad.toString())
    ) {
      if (this.person.edad > 17 && this.person.edad < 100) {
        return true
      }
      else {
        alert("La edad ingresada no es valida");
        return false;
      }
    }
    else {
      alert("Los datos son incorrectos")
      return false;
    }
  }

  dismissModal() {
    this.matDialog.closeAll();
  }
}
