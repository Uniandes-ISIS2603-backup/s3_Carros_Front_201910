import{ Cliente } from '../cliente/cliente';
import{ Empleado } from '../empleado/empleado';
import{ Automovil } from '../automovil/automovil';
import{ PuntoVenta } from '../punto-venta/punto-venta';
import{ Factura } from '../factura/factura';

export class CompraVenta 
{
    /**
     * El identificador de la compraVenta.
     */
    ventaID: number;

    /**
     * La calificación de la compraVenta.
     */
    calificacionCompra: number; 

    /**
     * La fecha de la compraVenta.
     */
    fecha: String;
 
    /**
     * Indica si la compraVenta fue pagada.
     */
    pagado: boolean;
 
    /**
     * El cliente asociado a la compraVenta.
     */
    cliente: Cliente;

    /**
     * El empleado asociado a la compraVenta.
     */
    empleado: Empleado;

    /**
     * El automovil asociado a la compraVenta.
     */
    automovilFacturado: Automovil;

    /**
     * El punto de venta al que esta asociada la compraVenta.
     */
    puntoVenta: PuntoVenta;

    /**
     * La factura asociada a la compraVenta.
     */
    factura: Factura;
}