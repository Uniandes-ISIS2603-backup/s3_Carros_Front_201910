import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AppRoutingModule} from '../app-routing/app-routing.module';


import { FacturaService } from './factura.service';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    FacturaDetailComponent, 
    FacturaListComponent, 
    FacturaCreateComponent
  ],
  providers: [FacturaService]
})
export class FacturaModule { }
