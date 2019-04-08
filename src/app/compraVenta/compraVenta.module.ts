import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraVentaListComponent } from './compraVenta-list/compraVenta-list.component';
import {CompraVentaService} from './compraVenta.service';

import { FormsModule } from '@angular/forms';
import { CompraVentaDetailComponent } from './compraVenta-detail/compraVenta-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [CompraVentaListComponent, CompraVentaDetailComponent],
  exports: [CompraVentaListComponent],
  providers: [CompraVentaService]
})
export class CompraVentaModule { }