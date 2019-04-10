import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CompraVentaService } from '../compraVenta.service';
import { CompraVenta } from '../compraVenta';

@Component({
  selector: 'app-compraVenta-create',
  templateUrl: './compraVenta-create.component.html',
  styleUrls: ['./compraVenta-create.component.css'],
  providers: [DatePipe]
})
export class CompraVentaCreateComponent implements OnInit {

  constructor(
       private dp : DatePipe,
        private compraVentaService: CompraVentaService,
        private toastrService: ToastrService
  ) { }

  compraVenta: CompraVenta;

  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();

  createCompraVenta(): CompraVenta
  {
    this.compraVentaService.createCompraVenta(this.compraVenta).subscribe((pCompraVenta)=>
    { 
      this.compraVenta = pCompraVenta; 
      this.create.emit();
      this.toastrService.success("La compraVenta fue creada","Creacion CompraVenta");

    });
    return this.compraVenta;
  }
  
  cancelCreation(): void
  {
    this.cancel.emit();
  }
  ngOnInit() 
  {
    this.compraVenta = new CompraVenta();
  }

}