/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService, private route: ActivatedRoute) { }

  empleadoDetail: EmpleadoDetail;
  empleadoId: number;

  getEmpleadoDetail(): void{
    this.empleadoService.getEmpleadoDetail(this.empleadoId).subscribe(empleadoDetail => {this.empleadoDetail = empleadoDetail});
  }

  ngOnInit() {
    this.empleadoId = +this.route.snapshot.paramMap.get('id');
    this.empleadoDetail = new EmpleadoDetail();
        this.getEmpleadoDetail();
  }

}

