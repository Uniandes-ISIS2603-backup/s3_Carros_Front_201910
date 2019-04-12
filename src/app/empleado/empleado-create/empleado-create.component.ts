import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  empleadoNuevo: Empleado;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  createEmpleado(): Empleado{
    console.log(this.empleadoNuevo);
    this.empleadoService.createEmpleado(this.empleadoNuevo).subscribe((empleado) => {
        this.empleadoNuevo = empleado;
        this.create.emit();
        this.toastrService.success("El empleado fue creado", "Creación Empleado");
      });
    return this.empleadoNuevo;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.empleadoNuevo = new Empleado();
  }

}