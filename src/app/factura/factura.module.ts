import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import {FacturaService} from './factura.service';

import { FormsModule } from '@angular/forms';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent],
  exports: [FacturaListComponent],
  providers: [FacturaService]
})
export class FacturaModule { }