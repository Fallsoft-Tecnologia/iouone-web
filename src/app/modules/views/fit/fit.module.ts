import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitRoutingModule } from './fit-routing.module';
import { FitComponent } from './fit.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FitComponent
  ],
  imports: [
    CommonModule,
    FitRoutingModule,
    MatCardModule,
  ]
})
export class FitModule { }
