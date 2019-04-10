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

import {RegistrosListComponent} from '../registros/registros-list/registros.component';
import {RegistrosDetailComponent} from '../registros/registros-detail/registros-detail.component';

import {QuejasListComponent} from '../quejasReclamos/quejas-list/quejas-list.component';
import {QuejasDetailComponent} from '../quejasReclamos/quejas-detail/quejas-detail.component';

import { EmpleadoListComponent } from '../empleado/empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from '../empleado/empleado-detail/empleado-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';

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
    path: 'registros',
    children:[
      {
        path: 'list',
        component: RegistrosListComponent
      },
      {
        path: ':id',
        component: RegistrosDetailComponent
      }
    ]
  },
  {
    path: 'quejasReclamos',
    children:[
      {
        path: 'list',
        component: QuejasListComponent
      },
      {
        path: ':id',
        component: QuejasDetailComponent
      }
    ]
  },
  {
    path: 'empleados',
    children:[
      {
        path: 'list',
        component: EmpleadoListComponent
      },
      {
        path: ':id',
        component: EmpleadoDetailComponent
      }
    ]
  },
  {
    path: 'clientes',
    children:[
      {
        path: 'list',
        component: ClienteListComponent
      },
      {
        path: ':id',
        component: ClienteDetailComponent
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
