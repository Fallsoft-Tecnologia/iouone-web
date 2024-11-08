import { DietasRoutingModule } from './dietas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasComponent } from './dietas.component';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'src/app/shared/components/card/card.module';



@NgModule({
  declarations: [
    DietasComponent
  ],
  imports: [
    CommonModule,
    DietasRoutingModule,
    CardModule,
  ]
})
export class DietasModule { }
