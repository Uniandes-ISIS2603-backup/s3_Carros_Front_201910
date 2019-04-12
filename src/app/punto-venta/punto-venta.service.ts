import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PuntoVenta} from './punto-venta';
import {Observable} from 'rxjs';
import {PuntoVentaDetail} from './punto-venta-detail';

const API_URL = '../../assets/';
const puntosVenta = 'puntos-venta.json';
/**
 * API DEL BACK
 */
const API_BACK ='http://localhost:8080/s3_carros-api/api';
/**
 * Recurso punto de venta
 */
const resource = '/puntosdeVenta';

/**
 * Clase que relacina el modulo con el back de la aplicacion
 */
@Injectable()
export class PuntoVentaService 
{

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

  /**
   * Metodo que llama todos los puntos de venta en la aplicacion
   */
  getPuntosVenta(): Observable<PuntoVenta[]>
  {
      return this.http.get<PuntoVenta[]>(API_BACK + resource);
  }

  /**
   * Retorna el punto de venta con el id que entra por parametro 
   * @param puntoVentaId  del punto de venta a buscar
   */
  getPuntoVentaDetail(puntoVentaId): Observable<PuntoVentaDetail>
  {
    console.log(API_URL+ "punto-venta-"+ puntoVentaId+ ".json"); 
  return this.http.get<PuntoVentaDetail>(API_BACK + resource + '/' + puntoVentaId); 
  }

  /**
   * Metodo que crea un punto de venta y retorna el observable del punto de venta
   * @param puntoVenta 
   */
  createPuntoVenta(puntoVenta): Observable<PuntoVenta>
  {
      return this.http.post<PuntoVenta>(API_BACK + resource, puntoVenta);
  }
  
  /**
   * Metodo que actualiza un punto de venta
   * @param puntoVenta 
   */
  updatePuntoVenta(puntoVenta): Observable<PuntoVentaDetail> {
        return this.http.put<PuntoVentaDetail>(API_BACK + resource + '/' + puntoVenta.id, puntoVenta);
    }
}