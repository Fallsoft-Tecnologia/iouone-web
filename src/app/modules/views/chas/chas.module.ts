import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChasRoutingModule } from './chas-routing.module';
import { ChasComponent } from './chas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ReceitaCompletaRoutingModule } from 'src/app/shared/components/receita-completa/receita-completa-routing.module';



@NgModule({
  declarations: [
    ChasComponent
  ],
  imports: [
    CommonModule,
    ChasRoutingModule,
    CardModule,
    ReceitaCompletaRoutingModule
  ]
})
export class ChasModule { }
