import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutricionistaRoutingModule } from './nutricionista-routing.module';
import { NutricionistaComponent } from './nutricionista.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    NutricionistaComponent
  ],
  imports: [
    CommonModule,
    NutricionistaRoutingModule,
  ]
})
export class NutricionistaModule { }
