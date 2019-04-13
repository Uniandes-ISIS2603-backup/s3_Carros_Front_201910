import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  @Input() empleados: Empleado[];

  empleado_id : number;

  showCreate: boolean;
  showEdit: boolean;

  selectedEmpleado: EmpleadoDetail;

  getEmpleados(): void{
    this.empleadoService.getEmpleados().subscribe(empleado => this.empleados = empleado);
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  showHideEdit(empleado_id: number): void {
    if (!this.showEdit || (this.showEdit && empleado_id != this.selectedEmpleado.empleadoID)) {
        this.showCreate = false;
        this.showEdit = true;
        this.empleado_id = empleado_id;
        this.selectedEmpleado   = new EmpleadoDetail();
        this.getEmpleadoDetail();
    }
    else {
        this.showEdit = false;
    }
  }

  updateEmpleado(): void {
    this.showEdit = false;
  }

  getEmpleadoDetail(): void {
  this.empleadoService.getEmpleadoDetail(this.empleado_id)
      .subscribe(selectedEmpleado => {
          this.selectedEmpleado = selectedEmpleado;
      });
  }
  ngOnInit() {
    this.showCreate = false;
    this.getEmpleados();
  }

}