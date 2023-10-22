import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Poliza, SetPolizas } from '../Interface/Poliza';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  urlBase = environment.urlBase
  controladorSeguro = 'Seguro/'

  constructor(
    private httpclient : HttpClient
  ) { 

  }
  getSeguros(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.httpclient.get<any>(this.urlBase + this.controladorSeguro + 'GetAllSeguro');
  }
  postSeguro(datosSeguro: any) {

    return this.httpclient.post<any>(this.urlBase + this.controladorSeguro + 'SetSeguro', datosSeguro);
  }
  putSeguro(datosSeguro: any) {

    return this.httpclient.post<any>(this.urlBase + this.controladorSeguro + 'UpdateSeguro', datosSeguro);
  }
  getPolizas(cedulaPersona: string, codigoSeguro: string): Observable<any> {
    const poliza = {
      cedulaPersona,
      codigoSeguro
    }
    let params = new HttpParams()
      .append("cedula", poliza.cedulaPersona.toString())
      .append("Codigo", poliza.codigoSeguro.toString())

    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpclient.post<any>(this.urlBase + this.controladorSeguro + 'GetAllPolizas', poliza, { headers, params });
  }

  setPolizas(poliza : SetPolizas): Observable<any>{
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpclient.post<any>(this.urlBase + this.controladorSeguro + 'SetPoliza', poliza);
  }

  getExcel(): Observable<any> {   
   
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.httpclient.get<string>(this.urlBase + this.controladorSeguro + 'GetFormato');
  }
}
