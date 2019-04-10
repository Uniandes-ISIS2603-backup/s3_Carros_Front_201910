/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empleado} from './empleado';
import {Observable} from 'rxjs';
import { EmpleadoDetail } from './empleado-detail';

const API_URL = '../../assets/';
const empleados = 'empleados.json';

@Injectable()
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(API_URL + empleados);
  }

  createEmpleado(empleado): Observable<Empleado>{
    return this.http.post<Empleado>(API_URL + empleados, empleado);
  }

  getEmpleadoDetail(id): Observable<EmpleadoDetail>{
    return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + id);
  }
}

