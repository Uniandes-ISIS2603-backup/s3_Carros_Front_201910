import{ CompraVenta } from "./compraVenta";
import{ QuejasReclamos } from '../quejasReclamos/quejas-reclamos';

/**
 * This class represents an compraventaDetail. 
 * It contains all the information relevant to the compraVenta.
 */
export class CompraVentaDetail extends CompraVenta
{
    /**
     * Las quejas de la compraVenta.
     */
    quejas: QuejasReclamos[];
}