import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArchivoExcel } from '../Interface/ArchivoExcel';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlBase= environment.urlBase
  controladorPersona = 'Persona/'
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPersonas(): Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.httpClient.get<any>(this.urlBase+this.controladorPersona+'GetAllPersona');
  }
  getPersonaByCedula(cedula: string|any):Observable<any>{
    const params = new HttpParams().append('cedula', cedula.toString());
    let headers = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.httpClient.get<any>(this.urlBase+this.controladorPersona+'GetPersonaByCedula', { params });
  }
  setPersona(datosCliente:any){

    return this.httpClient.post<any>(this.urlBase+this.controladorPersona+'SetPersona',datosCliente);
  }
  UpdatePersona(datosCliente:any){

    return this.httpClient.post<any>(this.urlBase+this.controladorPersona+'UpdatePersona',datosCliente);
  }
  deletePersona(datosCliente:any){
    return this.httpClient.post<any>(this.urlBase+this.controladorPersona+'DeletePersona',datosCliente);
  }

  SetExcel(ArchivoExcel:string){
    var  arch: ArchivoExcel= {
      file: ArchivoExcel
    }
    return this.httpClient.post<any>(this.urlBase+this.controladorPersona+'SetExcel',arch);
  }
  
}
