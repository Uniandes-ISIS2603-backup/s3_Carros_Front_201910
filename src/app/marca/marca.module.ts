import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca-list/marca-list.component';
import {MarcaService} from './marca.service';

import { FormsModule } from '@angular/forms';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { MarcaCreateComponent } from './marca-create/marca-create.component';
import { MarcaEditComponent } from './marca-edit/marca-edit.component';
import {ModeloModule} from '../modelo/modelo.module';
import{AppRoutingModule} from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ModeloModule,
    AppRoutingModule
  ],
  declarations: [MarcaListComponent, MarcaDetailComponent, MarcaCreateComponent, MarcaEditComponent],
  exports: [MarcaListComponent],
  providers: [MarcaService]
})
export class MarcaModule { }