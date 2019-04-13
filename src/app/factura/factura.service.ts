import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Factura} from './factura';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const recurso = '/facturas';

/**
* The service provider for everything related to facturas
*/
@Injectable()
export class FacturaService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Returns the Observable object containing the list of facturas retrieved from the API
   * @returns The list of facturas in real time
   */
  getFacturas(): Observable<Factura[]>
  {
    return this.http.get<Factura[]>(API_URL + recurso);
  }

  /**
   * Returns the Observable object with the details of an factura retrieved from the API
   * @returns The factura details
   */
  getFacturaDetail(facturaID): Observable<Factura> {
    return this.http.get<Factura>(API_URL + recurso + '/' + facturaID);
  }

  /**
   * Creates an factura
   * @param factura The new factura
   * @returns The confirmation that the factura was created
   */
  createFactura(factura): Observable<Factura> 
  {
    return this.http.post<Factura>(API_URL + recurso, factura);
  }
}