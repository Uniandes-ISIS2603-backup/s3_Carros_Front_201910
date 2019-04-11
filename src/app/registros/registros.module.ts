import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosListComponent } from './registros-list/registros.component';
import { RegistrosService } from '../registros/registros.service';
import { RegistrosDetailComponent } from './registros-detail/registros-detail.component';
import { Router, RouterModule} from '@angular/router';
import { RegistrosCreateComponent } from './registros-create/registros-create.component';
import { RegistrosEditComponent } from './registros-edit/registros-edit.component';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,RouterModule, FormsModule, ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        })
  ],
  declarations: [RegistrosListComponent, RegistrosDetailComponent, RegistrosCreateComponent, RegistrosEditComponent],
  exports: [RegistrosListComponent, RegistrosDetailComponent],
  providers: [RegistrosService]
})
export class RegistrosModule { }