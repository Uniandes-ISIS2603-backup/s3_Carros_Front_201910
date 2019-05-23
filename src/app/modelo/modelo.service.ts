import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modelo} from './modelo';
import {Observable} from 'rxjs';
import {ModeloDetail} from './modelo-detail';

const API_BACK = 'http://localhost:8080/s3_carros-api/api';



const resource = '/modelos';

@Injectable()
export class ModeloService {

  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelo[]>
  {
    return this.http.get<Modelo[]>(API_BACK + resource);
  }

  getModelosPorMarca(marca:string): Observable<Modelo[]>
  {
    return this.http.get<Modelo[]>(`${API_BACK}/marcas/${marca}${resource}`);
  }


  getModeloDetail(modeloId): Observable<ModeloDetail>
  {
    return this.http.get<ModeloDetail>(API_BACK+ resource+ '/' + modeloId);
  }
  
  createModelo(modelo, marcaid: string): Observable<Modelo>
  {
      return this.http.post<Modelo>(`${API_BACK}/marcas/${marcaid}${resource}`, modelo);
  }
  
  asignarMarca()
  {
    
  }
    updateModelo(modelo): Observable<ModeloDetail> {
        return this.http.put<ModeloDetail>(API_BACK + resource + '/' + modelo.modeloId, modelo);
    } 
}