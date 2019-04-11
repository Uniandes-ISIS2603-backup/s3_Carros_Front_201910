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