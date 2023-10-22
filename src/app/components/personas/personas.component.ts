import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarPersonaComponent } from '../registrar-persona/registrar-persona.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  public personas : any[]  = []

  constructor(
    private personaService: PersonaService,
    private router : Router,
    private matDialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.getPersonas()
  }  

  getPersonas(){
    this.personas = []
    this.personaService.getAllPersonas().subscribe(resp=>{
      console.log(resp)
      this.personas = resp
    });
  }

  setSeguro(){
    const dialogRef = this.matDialog.open(RegistrarPersonaComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getPersonas()
        });
  }

  editar( person: any){
    localStorage.setItem("usuario",JSON.stringify(person));
    const dialogRef = this.matDialog.open(RegistrarPersonaComponent, {
      width: '580px',
      height:'450px',
      panelClass: 'fondo',
      data: null
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getPersonas()
        });
  
  }
  eliminarPersona(person : any){
    alert(person.idAsegurados)
    this.personaService.deletePersona(person).subscribe(resp=>{
      
      if(resp){
        alert("Se elmino correctamente");
        this.ngOnInit();
      }else{
        alert("No se pudo eliminar la persona")
      }
    });
  }

  selectedFileContent: string = "";
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileContent = e.target.result.split(',')[1];
        this.personaService.SetExcel(this.selectedFileContent).subscribe(resp=>{
          if(resp){
            alert("Se envio correctamente");
            this.ngOnInit();
          }else{
            alert("No se pudo enviar la persona")
          }
        });
        
      };
      reader.readAsDataURL(file);
    }
    
  }
}
