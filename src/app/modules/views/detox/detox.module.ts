import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetoxRoutingModule } from './detox-routing.module';
import { DetoxComponent } from './detox.component';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'src/app/shared/components/card/card.module';



@NgModule({
  declarations: [
    DetoxComponent
  ],
  imports: [
    CommonModule,
    DetoxRoutingModule,
    CardModule,
  ]
})
export class DetoxModule { }
