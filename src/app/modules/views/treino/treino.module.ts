import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoRoutingModule } from './treino-routing.module';
import { TreinoComponent } from './treino.component';
import { MatCardModule } from '@angular/material/card';
import { TreinoCardComponent } from './treino-card/treino-card.component';

@NgModule({
  declarations: [
    TreinoComponent,
    TreinoCardComponent
  ],
  imports: [
    CommonModule,
    TreinoRoutingModule,
    MatCardModule,
  ]
})
export class TreinoModule {}
