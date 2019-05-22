import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomovilListComponent } from './automovil-list/automovil-list.component';
import {AutomovilService} from './automovil.service';

import { FormsModule } from '@angular/forms';
import { AutomovilDetailComponent } from './automovil-detail/automovil-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';
import { AutomovilCreateComponent } from './automovil-create/automovil-create.component';
import { AutomovilEditComponent } from './automovil-edit/automovil-edit.component';
import { CompraVentaModule } from '../compraVenta/compraVenta.module';




@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule,
    CompraVentaModule
  ],
  declarations: [AutomovilListComponent, AutomovilDetailComponent, AutomovilCreateComponent, AutomovilEditComponent ],
    exports: [AutomovilListComponent, AutomovilCreateComponent],
  providers: [AutomovilService]
})
export class AutomovilModule { }