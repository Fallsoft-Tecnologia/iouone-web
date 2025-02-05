import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      const token = localStorage.getItem('accessToken');
  
      // Verifica se o usuário está tentando acessar login ou cadastro
      if (
        next.url[0].path === 'login' ||
        next.url[0].path === 'cadastro'
      ) {
        return true; // Permite acesso ao login e cadastro sem token
      }
  
      // Verifica se o token existe
      if (token) {
        return true; // Permite acesso às rotas protegidas
      } else {
        this.router.navigate(['/login']); // Redireciona para login
        return false; // Bloqueia o acesso
      }
    }
  }
  
  