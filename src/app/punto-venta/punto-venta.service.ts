import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PuntoVenta} from './punto-venta';
import {Observable} from 'rxjs';
import {PuntoVentaDetail} from './punto-venta-detail';
const API_URL = '../../assets/';
const puntosVenta = 'puntos-venta.json';

@Injectable()
export class PuntoVentaService {

  constructor(private http: HttpClient) { }

  getPuntosVenta(): Observable<PuntoVenta[]>
  {
    return this.http.get<PuntoVenta[]>(API_URL + puntosVenta);
  }
  getPuntoVentaDetail(puntoVentaId): Observable<PuntoVentaDetail>
  {
  return this.http.get<PuntoVentaDetail>(API_URL+ "punto-venta-"+ puntoVentaId+ ".json"); 
  }

  createPuntoVenta(puntoVenta): Observable<PuntoVenta>
  {
    return this.http.post<PuntoVenta>(API_URL+puntosVenta, puntoVenta);
  }
}