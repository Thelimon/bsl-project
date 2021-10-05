import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {productI} from '../../shared/interfaces';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<productI[]> {
    return this.http.get<productI[]>(`${environment.apiURL}/product`)
      .pipe(
        shareReplay(2)
      )
  }
}
