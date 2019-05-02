import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {PuntoVentaService } from '../punto-venta.service';
import { PuntoVenta } from '../punto-venta';
import {PuntoVentaDetail} from '../punto-venta-detail';

/**
 * 
 */
@Component({
  selector: 'app-punto-venta-edit',
  templateUrl: './punto-venta-edit.component.html', 
  styleUrls: ['./punto-venta-edit.component.css'],
  providers:[DatePipe]
})
export class PuntoVentaEditComponent implements OnInit, OnChanges
 {
   /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
     private dp: DatePipe,
        private puntoVentaService: PuntoVentaService,
        private toastrService: ToastrService,
  ) { }

  /**
   * 
   */
  @Input() puntoVenta_id: number;

 /**
    * The puntoVenta id as received from the parent component
    */
  @Input() puntoVenta: PuntoVentaDetail; 

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();

    /**
     * Retorna el punto de venta a editar
     */
  getPuntoVenta(): void {
        this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id)
            .subscribe(puntoVenta => {
                this.puntoVenta = puntoVenta;
            });
    }
  
    /**
     * Actualiza la informacion del punto de venta
     */
  editPuntoVenta():void
  {
    this.puntoVentaService.updatePuntoVenta(this.puntoVenta).subscribe(()=> {
      this.toastrService.success("La infromacion del punto de venta se actualizo ", "Actualizacion de un punto de venta")
    })
    this.update.emit();
  }
  
  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
        this.cancel.emit();
    }

      /**
    * This function will initialize the component
    */
  ngOnInit() 
  {
    this.puntoVenta = new PuntoVentaDetail();
        this.getPuntoVenta();
  }

   /**
    * This function will be called when the user chooses another author to edit
    */
  ngOnChanges()
  {
    this.ngOnInit();
  }

}