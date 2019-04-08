import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import {PuntoVentaListComponent} from '../punto-venta/punto-venta-list/punto-venta-list.component';
import {PuntoVentaDetailComponent} from '../punto-venta/punto-venta-detail/punto-venta-detail.component';

import {ModeloListComponent} from '../modelo/modelo-list/modelo-list.component';
import {ModeloDetailComponent} from '../modelo/modelo-detail/modelo-detail.component';

import {MarcaListComponent} from '../marca/marca-list/marca-list.component';
import {MarcaDetailComponent} from '../marca/marca-detail/marca-detail.component';

import {AutomovilListComponent} from '../automovil/automovil-list/automovil-list.component';
import {AutomovilDetailComponent} from '../automovil/automovil-detail/automovil-detail.component';

import {CompraVentaDetailComponent} from '../compraVenta/compraVenta-detail/compraVenta-detail.component';
import {CompraVentaListComponent} from '../compraVenta/compraVenta-list/compraVenta-list.component';

import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import {FacturaListComponent} from '../factura/factura-list/factura-list.component';

const routes: Routes = [

    {
    path: 'punto-venta',
    children:[
      {
        path: 'list',
        component: PuntoVentaListComponent
      },
       {
        path: ':id',
        component: PuntoVentaDetailComponent,
        
      }
    ]
  },
    {
    path: 'modelo',
    children:[
      {
        path: 'list',
        component: ModeloListComponent
      },
       {
        path: ':id',
        component: ModeloDetailComponent 
      }
    ]
  },
    {
    path: 'marca',
    children:[
      {
        path: 'list',
        component: MarcaListComponent
      },
       {
        path: ':id',
        component: MarcaDetailComponent 
      }
    ]
  },
    {
    path: 'automovil',
    children:[
      {
        path: 'list',
        component: AutomovilListComponent
      },
       {
        path: ':id',
        component: AutomovilDetailComponent 
      }
    ]
  },
    {
    path: 'compraVenta',
    children:
    [
      {
        path: 'list',
        component: CompraVentaListComponent
      },
       {
        path: ':id',
        component: CompraVentaDetailComponent 
      }
    ]
    },
    {
    path: 'factura',
    children:[
      {
        path: 'list',
        component: FacturaListComponent
      },
       {
        path: ':id',
        component: FacturaDetailComponent 
      }
    ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
