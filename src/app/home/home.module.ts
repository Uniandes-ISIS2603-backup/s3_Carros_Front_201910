
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {HomeComponent} from './home-main/home.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {PuntoVentaModule} from '../punto-venta/punto-venta.module';
import {AutomovilModule} from '../automovil/automovil.module';
import {MarcaModule} from '../marca/marca.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
       PuntoVentaModule,
       AutomovilModule,
       MarcaModule
    ],
    declarations: [
        HomeComponent
    ],
   exports:[HomeComponent],
       bootstrap: [HomeComponent]
})
export class HomeModule {}

