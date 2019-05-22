import { Modelo } from "../modelo/modelo";
import { Registros } from "../registros/registros";


export class Automovil 
{
 autoId: number;
 
 imagen: String;

 disponible: boolean; 

 tipo: String; 

 referencia: String; 

 anio: number; 

 recorrido: number; 

 color: String; 

 idChasis: number; 

 matrcula: String; 

 cuidadMatricula: String; 

 precioVenta: number; 

 puntoVentaID: number;
 
 modelo: Modelo;

 registroCompra: Registros;
}