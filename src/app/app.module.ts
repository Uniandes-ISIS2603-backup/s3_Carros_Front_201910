import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
//Importaciones de modulos carros
import {PuntoVentaModule} from './punto-venta/punto-venta.module';
import {ModeloModule} from './modelo/modelo.module';
import {MarcaModule} from './marca/marca.module';
import {AutomovilModule} from './automovil/automovil.module';
import { QuejasReclamosModule } from './quejasReclamos/quejas-reclamos.module';
import { CompraVentaModule } from './compraVenta/compraVenta.module';
import{FacturaModule} from './factura/factura.module';
import { RegistrosModule } from './registros/registros.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ClienteModule } from './cliente/cliente.module';
import {HomeModule} from './home/home.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HomeModule,
        BrowserModule,
        ClienteModule,
        EmpleadoModule,
        PuntoVentaModule,
        ModeloModule,
        MarcaModule,
        AutomovilModule,
        QuejasReclamosModule,
        CompraVentaModule,
        FacturaModule,
        RegistrosModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
