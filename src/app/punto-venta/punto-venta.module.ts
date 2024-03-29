import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoVentaListComponent } from './punto-venta-list/punto-venta-list.component';
import { PuntoVentaService} from './punto-venta.service';

import { FormsModule } from '@angular/forms';
import { PuntoVentaDetailComponent } from './punto-venta-detail/punto-venta-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';
import { PuntoVentaCreateComponent } from './punto-venta-create/punto-venta-create.component';
import { PuntoVentaEditComponent } from './punto-venta-edit/punto-venta-edit.component';

import {ClienteModule} from '../cliente/cliente.module';
import {EmpleadoModule} from '../empleado/empleado.module';
import {CompraVentaModule} from '../compraVenta/compraVenta.module';
import {RegistrosModule} from '../registros/registros.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {MarcaModule} from '../marca/marca.module';

/**
 * Devlaraciones sobre el modulo
 */
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule, 
    MarcaModule,
    ClienteModule,
    EmpleadoModule,
    CompraVentaModule,
    RegistrosModule, 
    NgxPermissionsModule
  ],
  declarations: [PuntoVentaListComponent, PuntoVentaDetailComponent, PuntoVentaCreateComponent, PuntoVentaEditComponent],
  exports: [PuntoVentaListComponent, PuntoVentaCreateComponent],
  providers: [PuntoVentaService]
})
/**
 * Clase del modulo punto de venta
 */
export class PuntoVentaModule { }