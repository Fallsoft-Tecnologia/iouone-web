import { Component, Input } from '@angular/core';
import { Dieta } from '../../models/Dieta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dieta-completa',
  templateUrl: './dieta-completa.component.html',
  styleUrls: ['./dieta-completa.component.css']
})
export class DietaCompletaComponent {
  @Input() dieta: Dieta = {
    titulo: '',
    descricao: '',
    itens: []
  };

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/dietas']);
  }
}
