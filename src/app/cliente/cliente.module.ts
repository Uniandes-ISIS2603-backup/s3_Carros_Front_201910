import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent],
  exports: [ClienteListComponent, ClienteDetailComponent],
  providers: [ClienteService]
})
export class ClienteModule { }
