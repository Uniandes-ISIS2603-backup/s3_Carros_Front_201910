import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';
import { CompraVentaListComponent } from './compraVenta-list/compraVenta-list.component';
import { CompraVentaDetailComponent } from './compraVenta-detail/compraVenta-detail.component';
import { CompraVentaService } from './compraVenta.service';
import { CompraVentaCreateComponent } from './compraVenta-create/compraVenta-create.component';
//import { CompraVentaEditComponent } from './compraVenta-edit/compraVenta-edit.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ CompraVentaListComponent, CompraVentaDetailComponent, CompraVentaCreateComponent],
  exports: [CompraVentaListComponent, CompraVentaDetailComponent],
  providers: [CompraVentaService]
})
export class CompraVentaModule { }