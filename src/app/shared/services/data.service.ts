import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productI } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiURL: string = 'https://finalprojectbsl.herokuapp.com';
  constructor(private http: HttpClient) {}

  getProduct(): Observable<productI[]> {
    return this.http.get<productI[]>(`${this.apiURL}/product`);
  }
}
