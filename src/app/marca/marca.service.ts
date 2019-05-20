import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marca} from './marca';
import {Observable} from 'rxjs';
import {MarcaDetail} from './marca-detail';

const API_URL = '../../assets/';
const marcas = 'marcas.json';
const API_BACK ='http://localhost:8080/s3_carros-api/api';
const resource = '/marcas';

@Injectable()
export class MarcaService {

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]>
  {
    return this.http.get<Marca[]>( API_BACK + resource);
  }

  getMarcasDetail(marcaId): Observable<MarcaDetail>
  {
    return this.http.get<MarcaDetail>(API_BACK+ resource+ '/' + marcaId);
  }

  getMarcasPorPuntoVenta(puntoVentaId:string): Observable<Marca[]>
  {
    return this.http.get<Marca[]>(`${API_BACK}/puntosdeVenta/${puntoVentaId}${resource}`);
  }

  createMarca(marca): Observable<Marca>
  {
    return this.http.post<Marca>(API_BACK+ resource, marca);
  }
}