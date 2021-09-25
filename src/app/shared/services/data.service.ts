import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productI } from '../interfaces';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<productI[]> {
    return this.http.get<productI[]>(`${environment.apiURL}/product`);
  }
}
