import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [CommonModule, CalculadoraRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
})
export class CalculadoraModule {}
