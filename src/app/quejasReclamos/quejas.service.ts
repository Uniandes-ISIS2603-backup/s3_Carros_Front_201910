import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuejasReclamos } from './quejas-reclamos';
import { Observable } from 'rxjs';
import { QuejasDetail } from './quejas-detail';

const API_BACK ='http://localhost:8080/s3_carros-api/api';
const resource = '/quejasReclamos';
const API = '../../assets/';
const quejas = 'quejas.json';
@Injectable()
export class QuejasService {

   constructor(private http: HttpClient) { }

  
  
  getQuejas(): Observable<QuejasReclamos[]>{
    return this.http.get<QuejasReclamos[]>(API_BACK + resource);
  }

  getQuejasDetail(quejaId): Observable<QuejasDetail> {
        return this.http.get<QuejasDetail>(API_BACK + resource + '/' + quejaId);
    }

  createQueja(queja): Observable<QuejasReclamos>
  {
    return this.http.post<QuejasReclamos>(API_BACK + resource, queja);
  }

  updateQueja(queja): Observable<QuejasDetail> {
        return this.http.put<QuejasDetail>(API_BACK + resource + '/' + queja.id, queja);
    }

  

  
}