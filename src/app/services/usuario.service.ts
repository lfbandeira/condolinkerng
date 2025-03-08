import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  login(cpf: string, senha: string): Observable<any> {
    return this.http.post('auth/loginmaster', {
      "cpf": cpf,
      "senha": senha,
    })
  }

  cadastrarConta(cpf: string, nome: string, senha: string): Observable<any> {

    return this.http.post('auth/registerMaster', {
      "cpf": cpf,
      "nome": nome,
      "senha": senha,
    })
  }

  isLogged():boolean{
    const jwt_token = this.cookie.get('USER_INFO');
    return jwt_token ? true : false;
  }
}
