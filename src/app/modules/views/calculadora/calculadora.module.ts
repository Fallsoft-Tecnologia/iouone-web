import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CalculadoraComponent } from './calculadora.component';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule, 
    CalculadoraRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    EnterButtonModule,
  ],
})
export class CalculadoraModule {}
