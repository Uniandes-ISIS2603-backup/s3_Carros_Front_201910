import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modelo} from './modelo';
import {Observable} from 'rxjs';

const API_URL = '../../assets/';
const modelos = 'modelos.json';

@Injectable()
export class ModeloService {

  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelo[]>
  {
    return this.http.get<Modelo[]>(API_URL + modelos);
  }

}