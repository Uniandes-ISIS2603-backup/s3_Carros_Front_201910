import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { PuntoVenta } from '../../punto-venta/punto-venta';
import { PuntoVentaService } from '../../punto-venta/punto-venta.service';


@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {

  constructor(private puntoVentaService: PuntoVentaService, private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  empleadoNuevo: Empleado;
  puntosVenta: PuntoVenta[];

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  getPuntosVenta(): void{
    this.puntoVentaService.getPuntosVenta().subscribe(pvs => {
      this.puntosVenta = pvs;
    });
  }

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
    this.empleadoNuevo.puntoVenta = new PuntoVenta();
    this.getPuntosVenta();
  }

}