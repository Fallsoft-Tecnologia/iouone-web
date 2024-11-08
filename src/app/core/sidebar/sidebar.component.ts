import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile$: Observable<boolean>;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    // Observa quando a tela é menor que 770px
    this.isMobile$ = this.breakpointObserver.observe([`(max-width: 770px)`])
      .pipe(map(result => result.matches));
  }

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

  ngOnInit(): void {
    // Inscreve-se nas mudanças do tamanho da tela e ajusta o modo do sidenav
    this.isMobile$.subscribe(isMobile => {
      this.sidenav.mode = isMobile ? 'over' : 'side';
      this.sidenav.opened = !isMobile; // Fecha o sidenav em telas menores
    });
  }

  navigate(link: string): void {
    this.router.navigate([link]);
    if (this.sidenav.mode === 'over') {
      this.sidenav.close(); // Fecha o sidenav ao navegar, caso esteja no modo modal
    }
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  toggleSidebar(): void {
    this.sidenav.toggle();
  }
}
