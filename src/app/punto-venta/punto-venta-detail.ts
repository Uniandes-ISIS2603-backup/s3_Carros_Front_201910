import{PuntoVenta} from './punto-venta';
import{QuejasReclamos} from '../quejasReclamos/quejas-reclamos';
import {Marca} from'../marca/marca';
import {Registros} from '../registros/registros';



export class PuntoVentaDetail extends PuntoVenta
{

  clientes: String;

  Empleado: String; 

  QuejasReclamos: QuejasReclamos[];

  RegistroCompra: Registros[]; 

  CompraVenta: Marca[]; 

  Automovil: String; 
}