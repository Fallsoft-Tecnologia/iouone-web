import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChasRoutingModule } from './chas-routing.module';
import { ChasComponent } from './chas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';



@NgModule({
  declarations: [
    ChasComponent
  ],
  imports: [
    CommonModule,
    ChasRoutingModule,
    CardModule,
  ]
})
export class ChasModule { }
