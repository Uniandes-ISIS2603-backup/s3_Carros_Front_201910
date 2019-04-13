import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {AutomovilService} from '../automovil.service';
import {Automovil} from '../automovil';


@Component({
  selector: 'app-automovil-edit',
  templateUrl: './automovil-edit.component.html',
  styleUrls: ['./automovil-edit.component.css'],
  providers:[DatePipe]

})
export class AutomovilEditComponent implements OnInit, OnChanges {

  constructor(
    private dp: DatePipe,

       private autoService: AutomovilService,

       private toastrService: ToastrService,
 ) { }

 @Input() auto_id: number;

  @Input() auto: Automovil; 

  @Output() cancel = new EventEmitter();

  /**
    * The output which tells the parent component
    * that the user updated a new author
    */
   @Output() update = new EventEmitter();


   getAutomovil(): void {
    this.autoService.getAutomovilDetail(this.auto_id)
        .subscribe(aut => {
            this.auto = aut;
        });
}

editAutomovil():void
{
  this.autoService.updateAutomovil(this.auto).subscribe(()=> {
    this.toastrService.success("La infromacion del automovil se actualizo ", "Actualizacion de un modelo")
  })
  this.update.emit();
}


cancelEdition(): void {
  this.cancel.emit();
}


ngOnInit() 
{
  this.auto = new Automovil();
      this.getAutomovil();
}


ngOnChanges()
  {
    this.ngOnInit();
  }

}
