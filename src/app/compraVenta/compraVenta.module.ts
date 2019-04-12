import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CompraVentaListComponent } from './compraVenta-list/compraVenta-list.component';
import { CompraVentaDetailComponent } from './compraVenta-detail/compraVenta-detail.component';
import { CompraVentaService } from './compraVenta.service';
import { CompraVentaCreateComponent } from './compraVenta-create/compraVenta-create.component';
import { CompraVentaEditComponent } from './compraVenta-edit/compraVenta-edit.component';
import { QuejasReclamosModule } from '../quejasReclamos/quejas-reclamos.module';
import { ClienteModule } from '../cliente/cliente.module';
import { EmpleadoModule } from '../empleado/empleado.module';
import { AutomovilModule } from '../automovil/automovil.module';
import { FacturaModule } from '../factura/factura.module';

//import { Router, RouterModule} from '@angular/router';

@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgxPermissionsModule,
      CommonModule,
      FormsModule,
      QuejasReclamosModule,
      ClienteModule,
      EmpleadoModule,
      AutomovilModule,
      FacturaModule
  ],
  declarations: [ 
    CompraVentaListComponent, 
    CompraVentaDetailComponent, 
    CompraVentaCreateComponent, 
    CompraVentaEditComponent
  ],
  exports: [CompraVentaListComponent, CompraVentaDetailComponent],
  providers: [CompraVentaService]
})
export class CompraVentaModule { }