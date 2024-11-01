import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navItems = [
    { title: 'Área Nutricionista', link: '/nutricionista' },
    { title: 'Dietas atualizadas todo mês', link: '/dietas' },
    { title: 'Treino atualizado todo mês', link: '/treino' },
    { title: 'Exercícios emagreça em casa', link: '/exercicios' },
    { title: 'Fit dance', link: '/fitdance' },
    { title: 'Chás', link: '/chas' },
    { title: 'Cardápio da semana low carb', link: '/cardapio' },
    { title: 'Calculadora TDEE', link: '/calculadora' },
    { title: 'Marmita fit congelada', link: '/marmita' },
    { title: 'Receita detox', link: '/detox' },
    { title: 'Projeto 30 dias', link: '/projeto' },
  ];

  navigate(link: string): void {
    this.router.navigate([link]);
  }
}
