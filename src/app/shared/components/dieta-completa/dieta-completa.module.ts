import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DietaCompletaComponent } from './dieta-completa.component';
import { MatDividerModule } from '@angular/material/divider';
import { DietaCompletaRoutingModule } from './dieta-completa-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DietaCompletaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [
    DietaCompletaComponent
  ]
})
export class DietaCompletaModule { }
