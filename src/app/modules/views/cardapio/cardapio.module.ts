import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DietaCompletaRoutingModule } from 'src/app/shared/components/dieta-completa/dieta-completa-routing.module';



@NgModule({
  declarations: [
    CardapioComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    CardModule,
    DietaCompletaRoutingModule,
  ]
})
export class CardapioModule { }
