import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CondominioService {
  constructor(private http: HttpClient) {}
  buscaCondominios(): Observable<any> {
    return this.http.get(
      'https://kfkap5l9c5.execute-api.sa-east-1.amazonaws.com/dev/condominios/all'
    );
  }
}
