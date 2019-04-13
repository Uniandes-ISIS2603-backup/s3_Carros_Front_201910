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
      
    createAutomovil(auto): Observable<Automovil>
  {
      return this.http.post<Automovil>(API_URL + automoviles, auto);
  }
  
  
  getAutomovilDetail(autoID): Observable<Automovil>
  {
      return this.http.get<Automovil>(API_URL+ automoviles+ '/' + autoID);
  }
  
    updateAutomovil(auto): Observable<Automovil> {
        return this.http.put<Automovil>(API_URL + automoviles + '/' + auto.autoID, auto);
    } 

}