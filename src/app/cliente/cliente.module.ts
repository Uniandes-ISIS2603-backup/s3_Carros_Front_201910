import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  }) 
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  exports: [ClienteListComponent, ClienteDetailComponent],
  providers: [ClienteService]
})
export class ClienteModule { }
