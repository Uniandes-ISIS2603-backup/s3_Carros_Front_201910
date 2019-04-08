import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompraVenta} from './compraVenta';
import {Observable} from 'rxjs';

import {CompraVentaDetail} from './compraVenta-detail';

const API_URL = '../../assets/';
const compraVentas = 'compraVentas.json';

@Injectable()
export class CompraVentaService {

  constructor(private http: HttpClient) { }

  getCompraVentas(): Observable<CompraVenta[]>
  {
    return this.http.get<CompraVenta[]>(API_URL + compraVentas);
  }

}