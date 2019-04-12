import{PuntoVenta} from './punto-venta';
import{QuejasReclamos} from '../quejasReclamos/quejas-reclamos';
import {Marca} from'../marca/marca';
import {Registros} from '../registros/registros';
import {CompraVenta} from '../compraVenta/compraVenta';
import {Empleado} from '../empleado/empleado';
import {Cliente} from '../cliente/cliente';



/**
 * Clase que representa el detalle de los puntos de venta, con sus recursos asiciados
 */
export class PuntoVentaDetail extends PuntoVenta
{

  /**
   * Clientes de un punto de venta
   */
  clientes: Cliente[];

  /**
   * Empleados de un punto de venta
   */
  empleados: Empleado[]; 


  /**
   * Quejas de un punto de venta
   */
  QuejasReclamos: QuejasReclamos[];

  /**
   * Compras de un punto de venta
   */
  RegistroCompra: Registros[]; 

  /**
   * Marcas de un punto de venta
   */
  marcas: Marca[]; 

  /**
   * Ventas de un punto de venta
   */
  CompraVenta: CompraVenta[];

  
}