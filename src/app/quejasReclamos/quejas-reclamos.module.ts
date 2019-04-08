import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';
import { QuejasListComponent } from './quejas-list/quejas-list.component';
import { QuejasDetailComponent } from './quejas-detail/quejas-detail.component';
import { QuejasService } from './quejas.service';
import { QuejasCreateComponent } from './quejas-create/quejas-create.component';
import { QuejasEditComponent } from './quejas-edit/quejas-edit.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ QuejasListComponent, QuejasDetailComponent, QuejasCreateComponent, QuejasEditComponent],
  exports: [QuejasListComponent, QuejasDetailComponent],
  providers: [QuejasService]
})
export class QuejasReclamosModule { }