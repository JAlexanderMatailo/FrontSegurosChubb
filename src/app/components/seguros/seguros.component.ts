import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SegurosService } from 'src/app/services/seguro.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarSeguroComponent } from '../registrar-seguro/registrar-seguro.component';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent {
  public seguros : any[]  = []
  constructor(
    private seguroService: SegurosService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.obtenerSeguros()
  }

  obtenerSeguros(){
    this.seguros = []
    this.seguroService.getSeguros().subscribe(resp => {
      this.seguros = resp
    });
  }

  setSeguro(){
    const dialogRef = this.matDialog.open(RegistrarSeguroComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
    this.obtenerSeguros()
      });
  }

  editarSeguro(seguro:any){
    localStorage.setItem("seguro",JSON.stringify(seguro));
    const dialogRef = this.matDialog.open(RegistrarSeguroComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.obtenerSeguros()
        });
  }

}
