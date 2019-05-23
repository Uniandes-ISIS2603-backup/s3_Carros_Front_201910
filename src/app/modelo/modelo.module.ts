import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import {ModeloService} from './modelo.service';

import { FormsModule } from '@angular/forms';
import { ModeloDetailComponent } from './modelo-detail/modelo-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';
import {ModeloCreateComponent} from './modelo-create/modelo-create.component';
import { ModeloEditComponent } from './modelo-edit/modelo-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { AutomovilModule } from '../automovil/automovil.module';






@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule,
    AutomovilModule,
    
    NgxPermissionsModule    

  ],
  declarations: [ModeloListComponent, ModeloDetailComponent, ModeloCreateComponent, ModeloEditComponent],
  exports: [ModeloListComponent, ModeloCreateComponent],
  providers: [ModeloService]
})
export class ModeloModule { }