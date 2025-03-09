import { Component } from '@angular/core';
import { Funcionalidade } from 'src/app/interfaces/Funcionalidade';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
    funcionalidades:Funcionalidade[] = [
      {
      id:27,
      desc_funcionalidade:"Cadastrar Perfil",
      link_pagina:"PerfilList",
      source_icone:"https://raw.githubusercontent.com/lfbandeira/public/refs/heads/main/Perfil.png"
    },
    {
      id:28,
      desc_funcionalidade:"Atribuir Perfil",
      link_pagina:"AtribuirPerfil",
      source_icone:"https://github.com/lfbandeira/public/blob/main/AtribuirPerfil.png?raw=true"
    },
    {
      id:53,
      desc_funcionalidade:"Noticias",
      link_pagina:"ListaNoticias",
      source_icone:"https://github.com/lfbandeira/public/blob/main/Cadastrar%20Noticias.png?raw=true"
    },
    {
      id:53,
      desc_funcionalidade:"Condomínios",
      link_pagina:"CondominioList",
      source_icone:"https://github.com/lfbandeira/public/blob/main/buildings.png?raw=true"
    },
    {
      id:25,
      desc_funcionalidade:"Funcionalidades",
      link_pagina:"FuncionalidadeList",
      source_icone:"https://github.com/lfbandeira/public/blob/main/Funcionalidade.png?raw=true"
    },

  ]
  }
