/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Empleado } from './empleado';
import { CompraVenta } from '../compraVenta/compraVenta';


export class EmpleadoDetail extends Empleado{
  ventas: CompraVenta[];
}

