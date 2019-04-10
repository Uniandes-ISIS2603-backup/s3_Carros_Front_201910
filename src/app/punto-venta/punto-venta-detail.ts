import{PuntoVenta} from './punto-venta';
import{QuejasReclamos} from '../quejasReclamos/quejas-reclamos';
import {Marca} from'../marca/marca';
import {Registros} from '../registros/registros';
import {Empleado} from '../empleado/empleado';



export class PuntoVentaDetail extends PuntoVenta
{

  clientes: String;

  Empleado: Empleado[]; 

  QuejasReclamos: QuejasReclamos[];

  RegistroCompra: Registros[]; 

  Marcas: Marca[]; 

  Automovil: String; 
}