import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})

export class EmpleadoEditComponent implements OnInit, OnChanges {

  constructor(private empleadoService: EmpleadoService,
    private toastrService: ToastrService) { }

  @Input() empleado: EmpleadoDetail;
  @Input() empleado_id: number;
  
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();


  editEmpleado(): void {
    this.empleadoService.updateEmpleado(this.empleado)
        .subscribe(() => {
            this.toastrService.success("La información del empleado fue actualizada", "Edición de Empleado");
        });
    this.update.emit();
  }
    
  getEmpleado(): void {
    this.empleadoService.getEmpleadoDetail(this.empleado_id)
        .subscribe(empleado => {
            this.empleado = empleado;
        });
  }

  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
    this.empleado = new EmpleadoDetail();
    this.getEmpleado();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
