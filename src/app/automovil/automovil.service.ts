import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Automovil} from './automovil';
import {Observable} from 'rxjs';

const API_URL = '../../assets/';
const automoviles = 'automoviles.json';

@Injectable()
export class AutomovilService {

  constructor(private http: HttpClient) { }

  getAutomoviles(): Observable<Automovil[]>
  {
    return this.http.get<Automovil[]>(API_URL + automoviles);
  }

}