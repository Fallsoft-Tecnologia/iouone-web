import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor(private router: Router){}

  logout(): void {
    console.log('Usuário saiu');
      localStorage.clear();
  
    this.router.navigate(['/login'])
  }
}
