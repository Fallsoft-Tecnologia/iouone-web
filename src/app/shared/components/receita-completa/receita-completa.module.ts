import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitaCompletaComponent } from './receita-completa.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReceitaCompletaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [
    ReceitaCompletaComponent
  ]
})
export class ReceitaCompletaModule { }
