import { Cliente } from "./cliente";
import { PuntoVenta } from "../punto-venta/punto-venta";
//import { CompraVenta } from '../../compraVenta';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 export class ClienteDetail extends Cliente{
    //compras: CompraVenta[];
    puntosVenta: PuntoVenta[];
}

