import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoVentaListComponent } from './punto-venta-list/punto-venta-list.component';
import { PuntoVentaService} from './punto-venta.service';

import { FormsModule } from '@angular/forms';
import { PuntoVentaDetailComponent } from './punto-venta-detail/punto-venta-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';
import { PuntoVentaCreateComponent } from './punto-venta-create/punto-venta-create.component';
import { PuntoVentaEditComponent } from './punto-venta-edit/punto-venta-edit.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [PuntoVentaListComponent, PuntoVentaDetailComponent, PuntoVentaCreateComponent, PuntoVentaEditComponent],
  exports: [PuntoVentaListComponent, PuntoVentaCreateComponent],
  providers: [PuntoVentaService]
})
export class PuntoVentaModule { }