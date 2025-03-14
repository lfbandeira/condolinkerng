import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { FuncionalidadeComponent } from './funcionalidade.component';


@NgModule({
  declarations: [
    FuncionalidadeComponent
  ],
  imports: [
    CommonModule,MatTableModule
  ]
})
export class FuncionalidadeModule { }
