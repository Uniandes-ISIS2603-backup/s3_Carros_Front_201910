import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaListComponent } from './marca-list/marca-list.component';
import {MarcaService} from './marca.service';

import { FormsModule } from '@angular/forms';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [MarcaListComponent, MarcaDetailComponent],
  exports: [MarcaListComponent],
  providers: [MarcaService]
})
export class MarcaModule { }