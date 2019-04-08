import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuejasReclamos } from './quejas-reclamos';
import { Observable } from 'rxjs';
import { QuejasDetail } from './quejas-detail';

const API = '../../assets/';
const quejas = 'quejas.json';
@Injectable()
export class QuejasService {

   constructor(private http: HttpClient) { }

  
  
  getQuejas(): Observable<QuejasReclamos[]>{
    return this.http.get<QuejasReclamos[]>(API+quejas);
  }

  getQuejasDetail(quejaId): Observable<QuejasDetail> {
        return this.http.get<QuejasDetail>(API + "queja-" + quejaId+".json");
    }

  createQueja(queja): Observable<QuejasReclamos>
  {
    return this.http.post<QuejasReclamos>(API+quejas, queja);
  }

  updateQueja(queja): Observable<QuejasDetail> {
        return this.http.put<QuejasDetail>(API + quejas + '/' + queja.id, queja);
    }

  
}