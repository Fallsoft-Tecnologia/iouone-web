import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoRoutingModule } from './treino-routing.module';
import { TreinoComponent } from './treino.component';
import { MatCardModule } from '@angular/material/card';
import { TreinoCardComponent } from './treino-card/treino-card.component';
import { TreinoCompletoComponent } from './treino-completo/treino-completo.component';
import { TreinoCompletoRoutingModule } from './treino-completo/treino-completo-routing.module';

@NgModule({
  declarations: [
    TreinoComponent,
    TreinoCardComponent,
    TreinoCompletoComponent
  ],
  imports: [
    CommonModule,
    TreinoRoutingModule,
    MatCardModule,
    TreinoCompletoRoutingModule,
  ]
})
export class TreinoModule {}
