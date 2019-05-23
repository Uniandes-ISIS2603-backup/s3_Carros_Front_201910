

export class Automovil 
{
 autoId: number;
 
 disponible: boolean; 

 tipo: String; 

 referencia: String; 

 anio: Date; 

 recorrido: number; 

 color: String; 

 idChasis: number; 

 matrcula: String; 

 ciudadMatricula: String; 

 precioVenta: number; 

 puntoVentaID: number;

 imagen: String;


getAnio(){
    this.anio.getFullYear();
}
}