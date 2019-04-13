import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './empleado.service';
import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { RouterModule } from '@angular/router';
import { EmpleadoEditComponent } from './empleado-edit/empleado-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoCreateComponent, EmpleadoDetailComponent,  EmpleadoEditComponent],
  exports: [EmpleadoListComponent, EmpleadoCreateComponent, EmpleadoDetailComponent],
  providers: [EmpleadoService]
})
export class EmpleadoModule { }