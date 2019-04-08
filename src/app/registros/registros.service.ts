import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registros } from './registros';
import { Observable } from 'rxjs';
import { RegistrosDetail } from './registros-detail';


const API = '../../assets/';
const registros = 'registros.json';
@Injectable()
export class RegistrosService {

  constructor(private http: HttpClient) { }

  
  
  getRegistros(): Observable<Registros[]>{
    return this.http.get<Registros[]>(API+registros);
  }

  getRegistrosDetail(registroId): Observable<RegistrosDetail> {
        return this.http.get<RegistrosDetail>(API + "registro-" + registroId+".json");
    }

  createRegistro(registro): Observable<Registros>
  {
    return this.http.post<Registros>(API+registros, registro);
  }

}