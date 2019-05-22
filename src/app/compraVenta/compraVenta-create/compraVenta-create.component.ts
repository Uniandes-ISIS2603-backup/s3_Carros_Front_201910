import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CompraVentaService} from '../compraVenta.service';
import {CompraVenta} from '../compraVenta';

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
    private toastrService: ToastrService
  ) { }

  /**
   * The new compraVenta
   */
  @Input() compraVenta: CompraVenta;

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
            var f = new Date();
            var fechaCompra = f.getFullYear() + "-" + (f.getMonth()+1) + "-" + f.getDate()
            this.compraVenta.fecha = fechaCompra;
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
  }

}
