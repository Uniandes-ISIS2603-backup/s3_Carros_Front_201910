import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registros } from './registros';
import { Observable } from 'rxjs';
import { RegistrosDetail } from './registros-detail';


const API = '../../assets/';
const registros = 'registros.json';
const API_BACK ='http://localhost:8080/s3_carros-api/api';
const resource = '/puntosdeVenta';

@Injectable()
export class RegistrosService {

  constructor(private http: HttpClient) { }

  
  
  getRegistros(): Observable<Registros[]>{
    return this.http.get<Registros[]>(API_BACK + resource);
  }

  getRegistrosDetail(registroId): Observable<RegistrosDetail> {
    return this.http.get<RegistrosDetail>(API_BACK + resource + '/' + registroId);
  }

  createRegistro(registro): Observable<Registros>
  {
    return this.http.post<Registros>(API_BACK+resource, registro);
  }

  updateRegistro(registro): Observable<RegistrosDetail> {
        return this.http.put<RegistrosDetail>(API_BACK + resource + '/' + registro.id, registro);
  }

}