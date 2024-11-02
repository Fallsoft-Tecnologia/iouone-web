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
    { title: 'Home', link: '/home', icon: 'fa-solid fa-house' },
    { title: 'Área Nutricionista', link: '/nutricionista', icon: 'fa-solid fa-user-md' },
    { title: 'Dietas atualizadas todo mês', link: '/dietas', icon: 'fa-solid fa-apple-alt' },
    { title: 'Treino atualizado todo mês', link: '/treino', icon: 'fa-solid fa-dumbbell' },
    { title: 'Exercícios emagreça em casa', link: '/exercicios', icon: 'fa-solid fa-home' },
    { title: 'Fit dance', link: '/fitdance', icon: 'fa-solid fa-music' },
    { title: 'Chás', link: '/chas', icon: 'fa-solid fa-mug-hot' },
    { title: 'Cardápio da semana low carb', link: '/cardapio', icon: 'fa-solid fa-clipboard-list' },
    { title: 'Calculadora TDEE', link: '/calculadora', icon: 'fa-solid fa-calculator' },
    { title: 'Marmita fit congelada', link: '/marmita', icon: 'fa-solid fa-box' },
    { title: 'Receita detox', link: '/detox', icon: 'fa-solid fa-leaf' },
    { title: 'Projeto 30 dias', link: '/projeto', icon: 'fa-solid fa-calendar-day' },
  ];

  navigate(link: string): void {
    this.router.navigate([link]);
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }
}
