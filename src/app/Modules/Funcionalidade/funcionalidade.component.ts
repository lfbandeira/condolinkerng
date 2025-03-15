import { Component, OnInit } from '@angular/core';
import { CondominioService } from '../../services/condominio.service';
import { Condominio } from '../../interfaces/Condominio';
import { Funcionalidade } from 'src/app/interfaces/Funcionalidade';
import { FuncionalidadeService } from 'src/app/services/funcionalidade.service';
@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.scss'],
})
export class FuncionalidadeComponent implements OnInit {
  condominioSelecionado: string="";
  condominios:Condominio[] = [];
  funcionalidades:Funcionalidade[]=[];
  constructor( private condominioService: CondominioService, private funcionalidadeService:FuncionalidadeService){
  }
  ngOnInit(): void {
    this.consultaCondominios();
  }

  consultaCondominios():void{
    this.condominioService.buscaCondominios()
    .subscribe({
      next:(response)=>{
      this.condominios = response;

      },
      error:(error)=> {
        console.log(error)
      },
    })
  }

  consultaFuncionalidades():void{
    this.funcionalidadeService.buscaPorCondominio(this.condominioSelecionado)
    .subscribe({
      next:(response)=>{
      console.log(response);

      },
      error:(error)=> {
        console.log(error)
      },
    })
  }

}
