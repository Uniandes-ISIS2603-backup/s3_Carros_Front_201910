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
export class PuntoVentaCreateComponent implements OnInit {

  constructor(
       private dp : DatePipe,
        private puntoVentaService: PuntoVentaService,
        private toastrService: ToastrService
  ) { }

  puntoVenta: PuntoVenta;

   @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();
 
  prueba(){
    console.log(this.puntoVenta);
  }
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

  cancelCreation(): void
  {
    this.cancel.emit();
  }
  ngOnInit() 
  {
    this.puntoVenta = new PuntoVenta();
  }

}