import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Automovil} from './automovil';
import {Observable} from 'rxjs';



const API_BACK ='http://localhost:8080/s3_carros-api/api';
const resource = '/automoviles';

@Injectable()
export class AutomovilService {

  constructor(private http: HttpClient) { }

  getAutomoviles(): Observable<Automovil[]>
  {
    return this.http.get<Automovil[]>(API_BACK + resource);
  }
      
    createAutomovil(auto): Observable<Automovil>
  {
      return this.http.post<Automovil>(API_BACK + resource, auto);
  }
  
  
  getAutomovilDetail(autoID): Observable<Automovil>
  {
      return this.http.get<Automovil>(API_BACK+ resource+ '/' + autoID);
  }
  
    updateAutomovil(auto): Observable<Automovil> {
        return this.http.put<Automovil>(API_BACK + resource + '/' + auto.autoID, auto);
    } 

}