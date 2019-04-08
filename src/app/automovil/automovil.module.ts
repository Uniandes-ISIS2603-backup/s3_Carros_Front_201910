import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomovilListComponent } from './automovil-list/automovil-list.component';
import {AutomovilService} from './automovil.service';

import { FormsModule } from '@angular/forms';
import { AutomovilDetailComponent } from './automovil-detail/automovil-detail.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [AutomovilListComponent, AutomovilDetailComponent],
  exports: [AutomovilListComponent],
  providers: [AutomovilService]
})
export class AutomovilModule { }