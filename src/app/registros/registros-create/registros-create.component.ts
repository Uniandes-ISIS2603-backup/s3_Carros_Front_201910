import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {RegistrosService } from '../registros.service';
import { Registros } from '../registros';

@Component({
  selector: 'app-registros-create',
  templateUrl: './registros-create.component.html',
  styleUrls: ['./registros-create.component.css'],
  providers: [DatePipe]
})
export class RegistrosCreateComponent implements OnInit {

  constructor(
       private dp : DatePipe,
        private registroService: RegistrosService,
        private toastrService: ToastrService
  ) { }

  registro: Registros;

  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();

  createRegistro(): Registros
  {
    this.registroService.createRegistro(this.registro).subscribe((registro)=>
    { 
      this.registro = registro; 
      this.create.emit();
      this.toastrService.success("El registro de compra fue creado","Creacion Registro");

    });
    return this.registro
  }
  ngOnInit() {
  }

}