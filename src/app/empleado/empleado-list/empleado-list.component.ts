/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  empleados: Empleado[];

  showCreate: boolean;

  getEmpleados(): void{
    this.empleadoService.getEmpleados().subscribe(empleado => this.empleados = empleado);
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  ngOnInit() {
    this.showCreate = false;
    this.getEmpleados();
  }

}

