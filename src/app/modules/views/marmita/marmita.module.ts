import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarmitaRoutingModule } from './marmita-routing.module';
import { MarmitaComponent } from './marmita.component';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'src/app/shared/components/card/card.module';



@NgModule({
  declarations: [
    MarmitaComponent
  ],
  imports: [
    CommonModule,
    MarmitaRoutingModule,
    CardModule,
  ]
})
export class MarmitaModule { }
