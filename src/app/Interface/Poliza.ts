import { Persona } from "./Persona";
import { ISeguro, Seguro } from "./Seguro";

export interface Poliza {
    idPoliza?:      number;
    cedula:     string;
    nombreCliente:     string;
    codigoSeguro:      string;
    descripcionSeguro: string;
    prima:             number;

    clientes?: Persona[];
    seguros?: Seguro[];
  }

  export interface SetPolizas{
    idAsegurados: number;
    seguros : string[];
  }

  