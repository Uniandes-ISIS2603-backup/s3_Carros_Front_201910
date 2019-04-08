import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosListComponent } from './registros-list/registros.component';
import { RegistrosService } from '../registros/registros.service';
import { RegistrosDetailComponent } from './registros-detail/registros-detail.component';
import { Router, RouterModule} from '@angular/router';
import { RegistrosCreateComponent } from './registros-create/registros-create.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [RegistrosListComponent, RegistrosDetailComponent, RegistrosCreateComponent],
  exports: [RegistrosListComponent, RegistrosDetailComponent],
  providers: [RegistrosService]
})
export class RegistrosModule { }