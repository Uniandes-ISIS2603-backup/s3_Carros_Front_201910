import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { ModeloService } from '../modelo.service';
import { Modelo } from '../modelo';

@Component({
    selector: 'app-modelo-create',
    templateUrl: './modelo-create.component.html',
    styleUrls: ['./modelo-create.component.css'],
    providers : [DatePipe]
})
export class ModeloCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param modeloService The modelo's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private modeloService: ModeloService,
        private toastrService: ToastrService
      
    ) { }

    /**
    * The new modelo
    */
    modelo: Modelo;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an modelo
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new modelo
    */
    @Output() create = new EventEmitter();


    prueba(){
        console.log(this.modelo);
      }



    /**
    * Creates an modelo
    */
    createModelo(): Modelo {
        console.log(this.modelo);
        this.modeloService.createModelo(this.modelo).subscribe((model)=>
        { 
          this.modelo = model; 
          this.create.emit();
          this.toastrService.success("El modelo fue creado","Creacion Modelo");
    
        });
        return this.modelo; 
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.modelo = new Modelo();
    }

}