import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  logout(): void {
    console.log('Usuário saiu');
    // Adicione a lógica de logout aqui
    // Por exemplo, limpar o token de autenticação e redirecionar para a página de login
  }
}
