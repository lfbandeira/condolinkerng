import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {
  token ="";
  constructor(private http: HttpClient,private cookie: CookieService) {

    const aux = JSON.parse(this.cookie.get('USER_INFO'));
    this.token = aux.token;

  }

   buscaFuncionalidades(): Observable<any> {
    return this.http.get('auth/perfilPorId',
      {
        params:{
          id:9
        },
        headers:{
          Authorization: `Bearer ${this.token}`
        }
      }
     );
    }

    buscaPorCondominio(cnpj:string): Observable<any> {
      return this.http.get('auth/funcionalidadescondominio',
        {
          params:{
            cnpj:cnpj
          },
          headers:{
            Authorization: `Bearer ${this.token}`
          }
        }
       );
      }
}
