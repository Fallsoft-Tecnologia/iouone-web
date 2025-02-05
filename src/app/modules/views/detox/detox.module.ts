import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetoxRoutingModule } from './detox-routing.module';
import { DetoxComponent } from './detox.component';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ReceitaCompletaRoutingModule } from 'src/app/shared/components/receita-completa/receita-completa-routing.module';



@NgModule({
  declarations: [
    DetoxComponent
  ],
  imports: [
    CommonModule,
    DetoxRoutingModule,
    CardModule,
    ReceitaCompletaRoutingModule,
  ]
})
export class DetoxModule { }
