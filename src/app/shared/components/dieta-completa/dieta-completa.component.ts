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
    itens: [{ refeicao: '', descricao: '' }]
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ dietas }) => {
      this.dieta = dietas;
      console.log(dietas);
    });
  }

  voltar() {
    const urlSegments = this.route.snapshot.url.map(segment => segment.path);
    if (urlSegments.length > 1) {
      urlSegments.pop();
    }
    const backUrl = `/${this.route.snapshot.parent?.url[0]?.path ?? ''}`;
    console.log(backUrl)
    this.router.navigate([backUrl]);
  }
}
