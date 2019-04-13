import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ModeloService } from '../modelo.service';
import { Modelo } from '../modelo';
import {ModeloDetail} from '../modelo-detail';

@Component({
  selector: 'app-modelo-edit',
  templateUrl: './modelo-edit.component.html', 
  styleUrls: ['./modelo-edit.component.css'],
  providers:[DatePipe]
})
export class ModeloEditComponent implements OnInit, OnChanges
 {

  constructor(
     private dp: DatePipe,
        private modeloService: ModeloService,
        private toastrService: ToastrService,
  ) { }

  @Input() modelo_id: number;

  @Input() modelo: ModeloDetail; 

   @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();

    getModelo(): void {
        this.modeloService.getModeloDetail(this.modelo_id)
            .subscribe(model => {
                this.modelo = model;
            });
    }

  editModelo():void
  {
    this.modeloService.updateModelo(this.modelo).subscribe(()=> {
      this.toastrService.success("La infromacion del modelo se actualizo ", "Actualizacion de un modelo")
    })
    this.update.emit();
  }
  
   cancelEdition(): void {
        this.cancel.emit();
    }

  ngOnInit() 
  {
    this.modelo = new ModeloDetail();
        this.getModelo();
  }
  ngOnChanges()
  {
    this.ngOnInit();
  }

}