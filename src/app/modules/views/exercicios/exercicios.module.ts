import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ExerciciosComponent } from './exercicios.component';
import { MatCardModule } from '@angular/material/card';
import { VideoModalModule } from 'src/app/shared/components/video-modal/video-modal.module';

@NgModule({
  declarations: [
    ExerciciosComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ExerciciosRoutingModule,
    MatCardModule,
    VideoModalModule
  ]
})
export class ExerciciosModule { }