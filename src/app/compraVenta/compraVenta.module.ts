import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraVentaListComponent } from './compraVenta-list/compraVenta-list.component';
import {CompraVentaService} from './compraVenta.service';

import { FormsModule } from '@angular/forms';
import { CompraVentaDetailComponent } from './compraVenta-detail/compraVenta-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [CompraVentaListComponent, CompraVentaDetailComponent],
  exports: [CompraVentaListComponent],
  providers: [CompraVentaService]
})
export class CompraVentaModule { }