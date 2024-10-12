import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroRouterComponent } from './cadastro-router.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroRouterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../cadastro.module').then(m => m.CadastroModule)
      },
      {
        path: 'dados',
        loadChildren: () => import('../dados-do-cliente/dados-do-cliente.module').then(m => m.DadosDoClienteModule)
      },
      {
        path: 'endereco',
        loadChildren: () => import('../dados-endereco/dados-endereco.module').then(m => m.DadosEnderecoModule)
      },
      {
        path: 'dados-corporal',
        loadChildren: () => import('../dados-corporal/dados-corporal.module').then(m => m.DadosCorporalModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('../../pagamento/pagamento.module').then(m => m.PagamentoModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRouterRoutingModule { }
