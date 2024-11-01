import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ExerciciosComponent } from './exercicios.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ExerciciosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ExerciciosRoutingModule,
    MatCardModule,
  ]
})
export class ExerciciosModule { }