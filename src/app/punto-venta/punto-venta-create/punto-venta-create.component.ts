import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {PuntoVentaService } from '../punto-venta.service';
import { PuntoVenta } from '../punto-venta';

@Component({
  selector: 'app-punto-venta-create',
  templateUrl: './punto-venta-create.component.html',
  styleUrls: ['./punto-venta-create.component.css'],
  providers: [DatePipe]
})
/**
 * 
 */
export class PuntoVentaCreateComponent implements OnInit {

 /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
       private dp : DatePipe,
        private puntoVentaService: PuntoVentaService,
        private toastrService: ToastrService
  ) { }

  /**
   * El punto de venta
   */
  puntoVenta: PuntoVenta;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
    * The output which tells the parent component
    * that the user created a new author
    */
   @Output() create = new EventEmitter();
 
    /**
     * Crea un punto de venta
     */
  createPuntoVenta(): PuntoVenta
  {
    console.log(this.puntoVenta);
    this.puntoVentaService.createPuntoVenta(this.puntoVenta).subscribe((pVenta)=>
    { 
      this.puntoVenta = pVenta; 
      this.create.emit();
      this.toastrService.success("El punto de venta fue creado","Creacion Punto Venta");

    });
    return this.puntoVenta; 
  }

 /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
  cancelCreation(): void
  {
    this.cancel.emit();
  }

 /**
    * This function will initialize the component
    */
  ngOnInit() 
  {
    this.puntoVenta = new PuntoVenta();
  }

}