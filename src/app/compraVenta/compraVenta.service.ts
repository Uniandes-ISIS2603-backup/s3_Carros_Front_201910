import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CompraVenta } from './compraVenta';
import { CompraVentaDetail } from './compraVenta-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const recurso = '/compraVentas';

/**
* The service provider for everything related to compraVentas
*/
@Injectable()
export class CompraVentaService 
{
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of compraVentas retrieved from the API
    * @returns The list of quejas in real time
    */
   getCompraVentas(): Observable<CompraVenta[]>{
    return this.http.get<CompraVenta[]>(API_URL + recurso);
  }

    /**
    * Returns the Observable object containing the compraVenta retrieved from the API
    * @returns The compraVenta
    */
   getCompraVentaDetail(compraVentaId): Observable<CompraVentaDetail> {
        return this.http.get<CompraVentaDetail>(API_URL + recurso + '/' + compraVentaId);
    }

    /**
    * Creates an compraVenta
    * @param compraVenta The compraVenta which will be created
    * @returns The confirmation of the compraVenta's creation
    */
   createCompraVenta(compraVenta): Observable<CompraVenta>
  {
    return this.http.post<CompraVenta>(API_URL + recurso, compraVenta);
  }

    /**
    * Updates an compraVenta
    * @param compraVenta The compraVenta which will be update
    * @returns The confirmation of the compraVenta's update
    */
   updateCompraVenta(compraVenta): Observable<CompraVentaDetail> {
        return this.http.put<CompraVentaDetail>(API_URL + recurso + '/' + compraVenta.id, compraVenta);
    }
}