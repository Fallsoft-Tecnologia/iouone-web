import { Component, Input } from '@angular/core';
import { ReceitaCompleta } from '../../models/ReceitaCompleta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receita-completa',
  templateUrl: './receita-completa.component.html',
  styleUrls: ['./receita-completa.component.css']
})
export class ReceitaCompletaComponent {
  @Input() receita: ReceitaCompleta = {
    titulo: '',
    descricao: '',
    ingredientes: [],
    preparo: {
        descricao: []
    }
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ receita }) => {
      this.receita = receita;
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
