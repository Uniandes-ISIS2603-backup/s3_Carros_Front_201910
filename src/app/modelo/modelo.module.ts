import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloListComponent } from './modelo-list/modelo-list.component';
import {ModeloService} from './modelo.service';

import { FormsModule } from '@angular/forms';
import { ModeloDetailComponent } from './modelo-detail/modelo-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [ModeloListComponent, ModeloDetailComponent],
  exports: [ModeloListComponent],
  providers: [ModeloService]
})
export class ModeloModule { }