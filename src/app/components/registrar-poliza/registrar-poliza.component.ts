import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Interface/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { SegurosService } from 'src/app/services/seguro.service';
import { MatDialog } from '@angular/material/dialog';
import { ISeguro, Seguro } from 'src/app/Interface/Seguro';
import { Poliza, SetPolizas } from 'src/app/Interface/Poliza';

@Component({
  selector: 'app-registrar-poliza',
  templateUrl: './registrar-poliza.component.html',
  styleUrls: ['./registrar-poliza.component.css']
})
export class RegistrarPolizaComponent {

  public polizas : any[]  = []
  public seguros : any[]  = []
  public personas : Persona [] = []
  public idAsegurados = 0;
  public idSeguro = 0;
  public codigoSeguro = "";
  public cedula = "";


  poliza:Poliza={
    cedula:  "",
    nombreCliente: "",
    codigoSeguro:   "",
    descripcionSeguro: "",
    prima: 0
  }
  
  seguroSelect: Seguro ={
    IdSeguros:0,
    nombreSeguro: "",
    codigo: "",
    sumaAsegurada: 0,
    prima: 0
    
  }
  
  personSelected: Persona = {
    idAsegurados: 0,
    cedula: "",
    nombreCliente: "",
    telefono: "",
    edad : 0
  }

  allSeguros = new FormControl('');
  isChecked: string = "";

  setPolzas: SetPolizas =  {
    idAsegurados : 0,
    seguros: []
  };
  

  displayedColumns: string[] = ['cedula', 'nombre', 'edad','acciones'];
  dataSource = this.personas;

  constructor(
    private seguroService : SegurosService,
    private personaService : PersonaService,
    private router:Router,
    private matDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getPolizas()
  }

  getPersonaByCedula(){
    this.personSelected.cedula = this.cedula;
    this.personaService.getPersonaByCedula(this.personSelected.cedula).subscribe(resp=>{
      this.personSelected = resp;
      this.getSeguros();
    });
  }

  getSeguros(){
    this.seguros = []
    this.seguroService.getSeguros().subscribe(resp=>{
      this.seguros = resp
    });
  }

  getPolizas(){
    this.polizas = []
    this.seguroService.getPolizas("","").subscribe(resp=>{
      this.polizas = resp
    });
}
  setPoliza(){

    if(this.isChecked){
    
      var cadena = this.isChecked.toString().split(",")

      var seguros1 : Seguro [] = [];
      cadena.forEach(item => {
        var seguro : Seguro = {
          IdSeguros : Number.parseInt(item),
          nombreSeguro : "",
          codigo : "",
          sumaAsegurada : 0,
          prima: 0
        };

        seguros1.push(seguro);
      });
      
      var idAsegurados = this.personSelected.idAsegurados.toString()

      this.poliza.seguros = seguros1;

      if (idAsegurados.length > 0 && seguros1.length > 0){

        this.setPolzas.idAsegurados = Number.parseInt(idAsegurados);
        this.setPolzas.seguros = cadena;

        this.seguroService.setPolizas(this.setPolzas).subscribe(resp=>{

           if(resp == true){
            alert("Poliza Registrada");
    
           }else{
             alert("no se pudo Registrar la poliza");

           }
         });
      }
    }else{
      alert("Seleccione al menos un seguro")
    }
    this.matDialog.closeAll();
  }

  dismissModal() {
    this.matDialog.closeAll();
  }

}
