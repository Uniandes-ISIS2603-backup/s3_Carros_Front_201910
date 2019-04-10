import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import {ModeloService} from './modelo.service';

import { FormsModule } from '@angular/forms';
import { ModeloDetailComponent } from './modelo-detail/modelo-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';
import {ModeloCreateComponent} from './modelo-create/modelo-create.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ModeloListComponent, ModeloDetailComponent, ModeloCreateComponent],
  exports: [ModeloListComponent, ModeloCreateComponent],
  providers: [ModeloService]
})
export class ModeloModule { }