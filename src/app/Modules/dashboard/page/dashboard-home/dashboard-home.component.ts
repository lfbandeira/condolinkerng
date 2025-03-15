import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionalidade } from 'src/app/interfaces/Funcionalidade';
import { FuncionalidadeService } from 'src/app/services/funcionalidade.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  funcionalidades:Funcionalidade[] = [];
  constructor(private servico:FuncionalidadeService,private router : Router) {
    this.consultaFuncionalidades();
  }

  redireciona(caminho:string):void{
    this.router.navigate([`/${caminho}`]);
  }

 consultaFuncionalidades():void{
    this.servico.buscaFuncionalidades()
    .subscribe({
      next:(response)=>{
        console.log(response);
      this.funcionalidades = response.funcionalidade;

      },
      error:(error)=> {
        console.log(error)
        this.router.navigate([`/login`]);
      },
    })
  }

  }
