import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DietaCompletaComponent } from './dieta-completa.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DietaCompletaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    DietaCompletaComponent
  ]
})
export class DietaCompletaModule { }
