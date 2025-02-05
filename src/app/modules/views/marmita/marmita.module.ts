import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarmitaRoutingModule } from './marmita-routing.module';
import { MarmitaComponent } from './marmita.component';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ReceitaCompletaRoutingModule } from 'src/app/shared/components/receita-completa/receita-completa-routing.module';



@NgModule({
  declarations: [
    MarmitaComponent
  ],
  imports: [
    CommonModule,
    MarmitaRoutingModule,
    CardModule,
    ReceitaCompletaRoutingModule
  ]
})
export class MarmitaModule { }
