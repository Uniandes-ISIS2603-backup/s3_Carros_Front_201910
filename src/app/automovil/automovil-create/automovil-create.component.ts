import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { AutomovilService } from '../automovil.service';
import { Automovil } from '../automovil';

@Component({
    selector: 'app-automovil-create',
    templateUrl: './automovil-create.component.html',
    styleUrls: ['./automovil-create.component.css'],
    providers : [DatePipe]
})
export class AutomovilCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param autoService The auto's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private autoService: AutomovilService,
        private toastrService: ToastrService
      
    ) { }

    /**
    * The new automovil
    */
    auto: Automovil;

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
        console.log(this.auto);
      }



    /**
    * Creates an modelo
    */
    createAutomovil(): Automovil {
        console.log(this.auto);
        this.autoService.createAutomovil(this.auto).subscribe((aut)=>
        { 
          this.auto = aut; 
          this.create.emit();
          this.toastrService.success("El automovil fue creado","Creacion Automovil");
    
        });
        return this.auto; 
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
        this.auto = new Automovil();
    }

}