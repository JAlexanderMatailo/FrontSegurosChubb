import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { SegurosService } from 'src/app/services/seguro.service';
import { RegistrarPolizaComponent } from '../registrar-poliza/registrar-poliza.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent {
  public polizas : any[]  = []
  public codigoSeguro = "";
  public cedulaPersona = "";

  constructor(
    private seguroService : SegurosService,
    private router:Router,
    private matDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getPolizas()
  }

  setPoliza(){
    const dialogRef = this.matDialog.open(RegistrarPolizaComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
    this.getPolizas()
      });
  }

  getPolizas(){
    this.polizas = []
    this.seguroService.getPolizas("","").subscribe(resp=>{
      this.polizas = resp
    });
  }

  buscar(){
      this.polizas = []
        this.seguroService.getPolizas(this.cedulaPersona,this.codigoSeguro).subscribe(resp=>{
          this.polizas = resp
        });
  }
}

