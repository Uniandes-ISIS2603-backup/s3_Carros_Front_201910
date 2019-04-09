import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {PuntoVentaService } from '../punto-venta.service';
import { PuntoVenta } from '../punto-venta';
import {PuntoVentaDetail} from '../punto-venta-detail';

@Component({
  selector: 'app-punto-venta-edit',
  templateUrl: './punto-venta-edit.component.html',
  styleUrls: ['./punto-venta-edit.component.css'],
  providers:[DatePipe]
})
export class PuntoVentaEditComponent implements OnInit, OnChanges
 {

  constructor(
     private dp: DatePipe,
        private puntoVentaService: PuntoVentaService,
        private toastrService: ToastrService,
  ) { }

  @Input() puntoVenta_id: number;

  @Input() puntoVenta: PuntoVentaDetail; 

   @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();

    getPuntoVenta(): void {
        this.puntoVentaService.getPuntoVentaDetail(this.puntoVenta_id)
            .subscribe(puntoVenta => {
                this.puntoVenta = puntoVenta;
            });
    }

  editPuntoVenta():void
  {
    this.puntoVentaService.updatePuntoVenta(this.puntoVenta).subscribe(()=> {
      this.toastrService.success("La infromacion del punto de venta se actualizo ", "Actualizacion de un punto de venta")
    })
    this.update.emit();
  }
  
   cancelEdition(): void {
        this.cancel.emit();
    }

  ngOnInit() 
  {
    this.puntoVenta = new PuntoVentaDetail();
        this.getPuntoVenta();
  }
  ngOnChanges()
  {
    this.ngOnInit();
  }

}