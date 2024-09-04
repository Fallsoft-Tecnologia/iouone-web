import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './modules/login/login.component';
// import { CadastroComponent } from './modules/cadastro/cadastro.component';
// import { DadosDoClienteComponent } from './modules/cadastro/dados-do-cliente/dados-do-cliente.component';
// import { DadosCorporalComponent } from './modules/cadastro/dados-corporal/dados-corporal.component';
// import { MeioPagamentoComponent } from './modules/pagamento/meio-pagamento/meio-pagamento.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { NutricionistaComponent } from './modules/views/nutricionista/nutricionista.component';
// import { AppComponent } from './app.component';
// import { DietasComponent } from './modules/views/dietas/dietas.component';
// import { TreinoComponent } from './modules/views/treino/treino.component';
// import { ExerciciosComponent } from './modules/views/exercicios/exercicios.component';
// import { FitComponent } from './modules/views/fit/fit.component';
// import { ChasComponent } from './modules/views/chas/chas.component';
// import { CardapioComponent } from './modules/views/cardapio/cardapio.component';
// import { CalculadoraComponent } from './modules/views/calculadora/calculadora.component';
// import { MarmitaComponent } from './modules/views/marmita/marmita.component';
// import { DetoxComponent } from './modules/views/detox/detox.component';
// import { ProjetoComponent } from './modules/views/projeto/projeto.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CadastroRouterComponent } from './modules/cadastro/cadastro-router/cadastro-router.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/modules/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('./modules/cadastro/cadastro-router/cadastro-router.module').then(
            (m) => m.CadastroRouterModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/views/nutricionista/nutricionista.module').then(
            (m) => m.NutricionistaModule
          ),
      },
      {
        path: 'nutricionista',
        loadChildren: () =>
          import('./modules/views/nutricionista/nutricionista.module').then(
            (m) => m.NutricionistaModule
          ),
      },
      {
        path: 'dietas',
        loadChildren: () =>
          import('./modules/views/dietas/dietas.module').then(
            (m) => m.DietasModule
          ),
      },
      {
        path: 'treino',
        loadChildren: () =>
          import('./modules/views/treino/treino.module').then(
            (m) => m.TreinoModule
          ),
      },
      {
        path: 'exercicios',
        loadChildren: () =>
          import('./modules/views/exercicios/exercicios.module').then(
            (m) => m.ExerciciosModule
          ),
      },
      {
        path: 'fitdance',
        loadChildren: () =>
          import('./modules/views/fit/fit.module').then(
            (m) => m.FitModule
          ),
      },
      {
        path: 'chas',
        loadChildren: () =>
          import('./modules/views/chas/chas.module').then(
            (m) => m.ChasModule
          ),
      },
      {
        path: 'cardapio',
        loadChildren: () =>
          import('./modules/views/cardapio/cardapio.module').then(
            (m) => m.CardapioModule
          ),
      },
      {
        path: 'calculadora',
        loadChildren: () =>
          import('./modules/views/calculadora/calculadora.module').then(
            (m) => m.CalculadoraModule
          ),
      },
      {
        path: 'marmita',
        loadChildren: () =>
          import('./modules/views/marmita/marmita.module').then(
            (m) => m.MarmitaModule
          ),
      },
      {
        path: 'detox',
        loadChildren: () =>
          import('./modules/views/detox/detox.module').then(
            (m) => m.DetoxModule
          ),
      },
      {
        path: 'projeto',
        loadChildren: () =>
          import('./modules/views/projeto/projeto.module').then(
            (m) => m.ProjetoModule
          ),
      },
    ],
  },

  
  // {
  //   path: 'cadastro/dados',
  //   component: DadosDoClienteComponent,
  // },
  // {
  //   path: 'cadastro/dados-corporal',
  //   component: DadosCorporalComponent,
  // },
  // {
  //   path: 'cadastro/pagamento',
  //   component: MeioPagamentoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
