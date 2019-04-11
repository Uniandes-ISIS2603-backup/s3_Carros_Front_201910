import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from '../../app.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { RegistrosService } from '../registros.service';
import { Router, RouterLink } from '@angular/router';
import { Registros } from '../registros';
import { RegistrosDetail } from '../registros-detail';
import { RegistrosCreateComponent } from '../registros-create/registros-create.component';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
  providers: [DatePipe]
})
export class RegistrosListComponent implements OnInit {

  constructor(private registrosService: RegistrosService, private router: Router) { }


  showCreate: boolean;
  showEdit: boolean;
  showView: boolean;
  @Input() registros: Registros[];
  registro_id: number;
  selectedRegistro: RegistrosDetail;

  getRegistroDetail(): void
  {
    this.registrosService.getRegistrosDetail(this.registro_id).subscribe(selectedRegistro => { this.selectedRegistro = selectedRegistro});
  }

  onSelected(registro_id: number): void {
    this.registro_id = registro_id;
    this.selectedRegistro = new RegistrosDetail();
    this.registrosService.getRegistrosDetail(registro_id).subscribe(o => this.selectedRegistro = o);
  }
  
  getRegistros(): void{
    this.registrosService.getRegistros().subscribe(registros => this.registros = registros);
  }

  showHideCreate(): void {
        if (this.selectedRegistro) {
            this.selectedRegistro = undefined;
            this.registro_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

  showHideEdit(registro_id: number): void {
        if (!this.showEdit || (this.showEdit && registro_id != this.selectedRegistro.CompraID)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.registro_id = registro_id;
            this.selectedRegistro = new RegistrosDetail();
            this.getRegistroDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }
  
  ngOnInit() {
    this.showCreate = false;
    this.selectedRegistro = undefined;
    this.registro_id = undefined;
    this.getRegistros();
  }

}