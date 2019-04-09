import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PuntoVenta} from './punto-venta';
import {Observable} from 'rxjs';
import {PuntoVentaDetail} from './punto-venta-detail';
const API_URL = '../../assets/';
const puntosVenta = 'puntos-venta.json';

const API_BACK ='http://localhost:8080/s3_carros-api/api';
const resource = '/puntosdeVenta';

@Injectable()
export class PuntoVentaService {

  constructor(private http: HttpClient) { }

  getPuntosVenta(): Observable<PuntoVenta[]>
  {
      return this.http.get<PuntoVenta[]>(API_BACK + resource);
  }
  getPuntoVentaDetail(puntoVentaId): Observable<PuntoVentaDetail>
  {
    console.log(API_URL+ "punto-venta-"+ puntoVentaId+ ".json"); 
  return this.http.get<PuntoVentaDetail>(API_BACK + resource + '/' + puntoVentaId); 
  }

  createPuntoVenta(puntoVenta): Observable<PuntoVenta>
  {
      return this.http.post<PuntoVenta>(API_BACK + resource, puntoVenta);
  }
}