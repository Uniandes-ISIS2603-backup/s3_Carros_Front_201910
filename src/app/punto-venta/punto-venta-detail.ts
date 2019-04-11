import{PuntoVenta} from './punto-venta';
import{QuejasReclamos} from '../quejasReclamos/quejas-reclamos';
import {Marca} from'../marca/marca';
import {Registros} from '../registros/registros';
import {CompraVenta} from '../compraVenta/compraVenta';
import {Empleado} from '../empleado/empleado';
import {Cliente} from '../cliente/cliente';




export class PuntoVentaDetail extends PuntoVenta
{

  clientes: Cliente[];

  empleados: Empleado[]; 

  QuejasReclamos: QuejasReclamos[];

  RegistroCompra: Registros[]; 

  marcas: Marca[]; 

  CompraVenta: CompraVenta[];

  
}