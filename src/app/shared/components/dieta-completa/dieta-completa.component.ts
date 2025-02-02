import { Component, Input } from '@angular/core';
import { DietaCompleta } from '../../models/DietaCompleta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dieta-completa',
  templateUrl: './dieta-completa.component.html',
  styleUrls: ['./dieta-completa.component.css']
})
export class DietaCompletaComponent {
  @Input() dieta: DietaCompleta = {
    titulo: '',
    descricao: '',
    itens: []
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ dieta }) => {
      this.dieta = dieta;
    });
  }

  voltar() {
    this.router.navigate(['/dietas']);
  }
}
