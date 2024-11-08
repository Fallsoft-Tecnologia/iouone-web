import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoRoutingModule } from './treino-routing.module';
import { TreinoComponent } from './treino.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TreinoComponent
  ],
  imports: [
    CommonModule,
    TreinoRoutingModule,
    MatCardModule,
  ]
})
export class TreinoModule {}
