import { DietasRoutingModule } from './dietas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasComponent } from './dietas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DietaCompletaRoutingModule } from 'src/app/shared/components/dieta-completa/dieta-completa-routing.module';



@NgModule({
  declarations: [
    DietasComponent
  ],
  imports: [
    CommonModule,
    DietasRoutingModule,
    DietaCompletaRoutingModule,
    CardModule,
  ]
})
export class DietasModule { }
