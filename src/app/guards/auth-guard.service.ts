import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private userService: UsuarioService, private router:Router) { }
  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree{

    if(!this.userService.isLogged()){
      this.router.navigate(['login']);
      return false;
    }
    this.userService.isLogged();
    return true;
  }

}
