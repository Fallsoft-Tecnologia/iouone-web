import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
  {
    path: '',
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
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/views/home/home.module').then(
            (m) => m.HomeModule
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
        path: 'treinos',
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
