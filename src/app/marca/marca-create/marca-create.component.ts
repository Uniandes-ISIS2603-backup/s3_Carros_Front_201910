import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {MarcaService} from '../marca.service';
import {Marca} from '../marca';


@Component({
  selector: 'app-marca-create',
  templateUrl: './marca-create.component.html',
  styleUrls: ['./marca-create.component.css'],
  providers:[DatePipe]
})
export class MarcaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe, 
    private marcaService: MarcaService,
    private toastrService: ToastrService
  ) { }

  marca: Marca;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();
 
  createMarca(): Marca
  {
    
    this.marcaService.createMarca(this.marca).subscribe((marc)=>
    { 
      this.marca = marc; 
      this.create.emit();
      this.toastrService.success("La marca fue agragada","Nueva marca");

    });
    return this.marca; 
  }

  cancelCreation(): void
  {
    this.cancel.emit();
  }
  ngOnInit() 
  {
    this.marca = new Marca();
  }
}