import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Seguro } from 'src/app/Interface/Seguro';
import { SegurosService } from 'src/app/services/seguro.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar-seguro',
  templateUrl: './registrar-seguro.component.html',
  styleUrls: ['./registrar-seguro.component.css']
})
export class RegistrarSeguroComponent {
  
  titulo: string = "Ingresar Seguro";
   seguro: Seguro = {
    IdSeguros: 0,
    codigo: "",
    nombreSeguro: "",
    sumaAsegurada: 0,
    prima: 0
  }

  expresiones = {
    texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    valor: /^\d/,
  }

  constructor(
    private segurosService: SegurosService,
    private router: Router,
    private matDialog : MatDialog

  ) { }

  ngOnDestroy(): void {
    localStorage.removeItem("seguro")
  }

  ngOnInit(): void {
    this.getAllSeguro();
  }

  getAllSeguro() {
    if (localStorage.getItem("seguro")) {
      this.seguro = JSON.parse(localStorage.getItem("seguro")!)
      this.titulo = "Editar Seguro"
    }
  }
  
  setSeguro() {
    if (this.seguro.IdSeguros === 0) {
      this.segurosService.postSeguro(this.seguro).subscribe(resp => {
        if (resp)
        this.seguro.nombreSeguro = ''
        this.seguro.codigo = ''
        this.seguro.prima = 0
        this.seguro.sumaAsegurada = 0
        this.router.navigate(["Seguros"])
      });
    }
    else{
      this.segurosService.putSeguro(this.seguro).subscribe(resp => {
        if (resp)
        this.seguro.nombreSeguro = ''
        this.seguro.codigo = ''
        this.seguro.prima = 0
        this.seguro.sumaAsegurada = 0

        localStorage.removeItem("seguro")
        this.router.navigate(["Seguros"])
      });
    }
    this.matDialog.closeAll();
  }
  validarDatos() {
    if (this.expresiones.valor.test(this.seguro.sumaAsegurada.toString())
      && this.expresiones.valor.test(this.seguro.prima.toString())
      && this.expresiones.texto.test(this.seguro.nombreSeguro)
      && this.expresiones.valor.test(this.seguro.codigo)
    ) {
      if (this.seguro.sumaAsegurada > 0) {
        return true
      }
      else if(this.seguro.sumaAsegurada < 0) {
        alert("valor asegurado debe ser mayor de 0");
        return false;
      }
      if (this.seguro.prima > 0) {
        return true
      }
      else {
        alert("prima debe ser mayor de 0");
        return false;
      }
    }
    else {
      alert("Los datos son incorrectos")
      return false;
    }
  }

  filtrarLetras(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
  }

  dismissModal() {
    this.matDialog.closeAll();
  }
}
