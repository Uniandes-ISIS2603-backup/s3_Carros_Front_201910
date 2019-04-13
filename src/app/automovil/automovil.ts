

export class Automovil 
{
 autoID: number;
 
 rutaImagen: String;

 disponible: boolean; 

 tipo: String; 

 referencia: String; 

 anio: Date; 

 recorrido: number; 

 color: String; 

 idChasis: number; 

 matricula: String; 

 ciudadMatricula: String; 

 precioVenta: number; 

 puntoventaID: number;


getAnio(){
    this.anio.getFullYear();
}
}