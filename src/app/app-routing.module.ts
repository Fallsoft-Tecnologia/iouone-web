  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LoginComponent } from './modules/login/login.component';
  import { CadastroComponent } from './modules/cadastro/cadastro.component';
  import { DadosDoClienteComponent } from './modules/cadastro/dados-do-cliente/dados-do-cliente.component';
  import { DadosCorporalComponent } from './modules/cadastro/dados-corporal/dados-corporal.component';
  import { MeioPagamentoComponent } from './modules/pagamento/meio-pagamento/meio-pagamento.component';
  import { NavbarComponent } from './shared/navbar/navbar.component';
  import { NutricionistaComponent } from './modules/views/nutricionista/nutricionista.component';
  import { AppComponent } from './app.component';
  import { DietasComponent } from './modules/views/dietas/dietas.component';
  import { TreinoComponent } from './modules/views/treino/treino.component';
  import { ExerciciosComponent } from './modules/views/exercicios/exercicios.component';
  import { FitComponent } from './modules/views/fit/fit.component';
  import { DesincharComponent } from './modules/views/desinchar/desinchar.component';
  import { CardapioComponent } from './modules/views/cardapio/cardapio.component';
  import { CalculadoraComponent } from './modules/views/calculadora/calculadora.component';
  import { GorduraComponent } from './modules/views/gordura/gordura.component';
  import { MarmitaComponent } from './modules/views/marmita/marmita.component';
  import { DetoxComponent } from './modules/views/detox/detox.component';

  const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'cadastro',
      component: CadastroComponent,
    },
    {
      path: 'cadastro/dados',
      component: DadosDoClienteComponent,
    },
    {
      path: 'cadastro/dados-corporal',
      component: DadosCorporalComponent,
    },
    {
      path: 'cadastro/pagamento',
      component: MeioPagamentoComponent,
    },
    {
      path: 'nutricionista',
      component: NutricionistaComponent,
    },
    {
      path: 'dietas',
      component: DietasComponent,
    },
    {
      path: 'treino',
      component: TreinoComponent,
    },
    {
      path: 'exercicios',
      component: ExerciciosComponent,
    },
    {
      path: 'fitdance',
      component: FitComponent,
    },
    {
      path: 'desinchar',
      component: DesincharComponent,
    },
    {
      path: 'cardapio',
      component: CardapioComponent,
    },
    {
      path: 'calculadora',
      component: CalculadoraComponent,
    },
    {
      path: 'perder-gordura',
      component: GorduraComponent,
    },
    {
      path: 'marmita',
      component: MarmitaComponent,
    },
    {
      path: 'detox',
      component: DetoxComponent,
    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
