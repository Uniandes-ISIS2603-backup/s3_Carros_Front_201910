import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {RegistrosService } from '../registros.service';
import { Registros } from '../registros';
import {RegistrosDetail} from '../registros-detail';

@Component({
  selector: 'app-registros-edit',
  templateUrl: './registros-edit.component.html',
  styleUrls: ['./registros-edit.component.css']
})
export class RegistrosEditComponent implements OnInit{

  constructor(
     private dp: DatePipe,
        private registroService: RegistrosService,
        private toastrService: ToastrService,
  ) { }

  @Input() registro_id: number;

  @Input() registro: RegistrosDetail; 

   @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();

    getRegistro(): void {
        this.registroService.getRegistrosDetail(this.registro_id)
            .subscribe(registro => {
                this.registro = registro;
            });
    }

  editRegistro():void
  {
    this.registroService.updateRegistro(this.registro).subscribe(()=> {
      this.toastrService.success("La infromacion del registro se actualizo ", "Actualizacion de un registro")
    })
    this.update.emit();
  }
  
   cancelEdition(): void {
        this.cancel.emit();
    }

  ngOnInit() 
  {
    this.registro = new RegistrosDetail();
        this.getRegistro();
  }
  ngOnChanges()
  {
    this.ngOnInit();
  }

}