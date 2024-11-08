import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';
import { TreinoModule } from './treino/treino.module';
import { ProjetoModule } from './projeto/projeto.module';
import { NutricionistaModule } from './nutricionista/nutricionista.module';
import { MarmitaModule } from './marmita/marmita.module';
import { FitModule } from './fit/fit.module';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { DietasModule } from './dietas/dietas.module';
import { DetoxModule } from './detox/detox.module';
import { ChasModule } from './chas/chas.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { CalculadoraModule } from './calculadora/calculadora.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    TreinoModule,
    ProjetoModule,
    NutricionistaModule,
    MarmitaModule,
    FitModule,
    ExerciciosModule,
    DietasModule,
    DetoxModule,
    ChasModule,
    CardapioModule,
    CalculadoraModule,
  ]
})
export class ViewsModule { }
