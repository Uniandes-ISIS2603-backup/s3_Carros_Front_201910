import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompraVenta } from './compraVenta';
import { Observable } from 'rxjs';
import { CompraVentaDetail } from './compraVenta-detail';

const API = '../../assets/';
const recurso = 'compraVentas.json';
@Injectable()
export class CompraVentaService 
{
   constructor(private http: HttpClient) { }

  
  
  getCompraVentas(): Observable<CompraVenta[]>{
    return this.http.get<CompraVenta[]>(API + recurso);
  }

 getCompraVentaDetail(compraVentaId): Observable<CompraVentaDetail> {
        return this.http.get<CompraVentaDetail>(API + "compraVenta-" + compraVentaId+".json");
    }

  createCompraVenta(compraVenta): Observable<CompraVenta>
  {
    return this.http.post<CompraVenta>(API+recurso, compraVenta);
  }

  updateCompraVenta(compraVenta): Observable<CompraVentaDetail> {
        return this.http.put<CompraVentaDetail>(API + recurso + '/' + compraVenta.id, compraVenta);
    }
}