import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CompraVentaService} from '../compraVenta.service';
import {CompraVenta} from '../compraVenta';
import { PuntoVenta } from '../../punto-venta/punto-venta';
import { PuntoVentaService } from '../../punto-venta/punto-venta.service';
import { EmpleadoService } from '../../empleado/empleado.service';
import { Empleado } from '../../empleado/empleado';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';
import { AutomovilService } from '../../automovil/automovil.service';
import { Automovil } from '../../automovil/automovil';

@Component({
  selector: 'app-compraVenta-create',
  templateUrl: './compraVenta-create.component.html',
  styleUrls: ['./compraVenta-create.component.css']
})
export class CompraVentaCreateComponent implements OnInit {

  /**
   * Constructor for the component
   * @param compraVentaService The compraVenta's services provider
   * @param toastrService The toastr to show messages to the user 
   */
  constructor(
    private compraVentaService: CompraVentaService,
    private toastrService: ToastrService,
    private puntoVentaService: PuntoVentaService,
    private empleadoService: EmpleadoService,
    private clienteService: ClienteService,
    private autoService: AutomovilService
  ) { }

  /**
   * The new compraVenta
   */
  compraVenta: CompraVenta;
  puntosVenta: PuntoVenta[];
  empleados: Empleado[];
  clientes: Cliente[];
  autos: Automovil[];

  getAutos(): void{
    this.autoService.getAutomoviles().subscribe(as => {
      this.autos = as;
    });
  }

  getClientes(): void{
    this.clienteService.getClientes().subscribe(cs => {
      this.clientes = cs;
    });
  }

  getEmpleados(): void{
    this.empleadoService.getEmpleados().subscribe(emps => {
      this.empleados = emps;
    });
  }

  getPuntosVenta(): void{
    this.puntoVentaService.getPuntosVenta().subscribe(pvs => {
      this.puntosVenta = pvs;
    });
  }

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an editorial
   */
  @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
  @Output() create = new EventEmitter();

  /**
   * Creates a new compraVenta
   */
  createCompraVenta(): CompraVenta {
    this.compraVentaService.createCompraVenta(this.compraVenta)
        .subscribe((laCompraVenta) => {
            this.compraVenta = laCompraVenta;
            /**
             * var f = new Date();
            var fechaCompra = f.getFullYear() + "-" + (f.getMonth()+1) + "-" + f.getDate()
            this.compraVenta.fecha = fechaCompra;
             */
            this.create.emit();
            this.toastrService.success("The compraVenta was created", "CompraVenta creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.compraVenta;
  }

  /**
   * Informs the parent component that the user no longer wants to create an compraVenta
   */
  cancelCreation(): void {
    this.cancel.emit();
  }
  
  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.compraVenta = new CompraVenta();
    this.compraVenta.puntoVenta = new PuntoVenta();
    this.compraVenta.empleado = new Empleado();
    this.compraVenta.cliente = new Cliente();
    this.compraVenta.automovilFacturado = new Automovil();
    this.getPuntosVenta();
    this.getEmpleados();
    this.getClientes();
    this.getAutos();

  }

}
