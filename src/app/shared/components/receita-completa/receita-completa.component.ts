import { Component, OnInit } from '@angular/core';
import { ReceitaCompleta } from '../../models/ReceitaCompleta';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaCompletaService } from '../../services/ReceitaCompletaService';

@Component({
  selector: 'app-receita-completa',
  templateUrl: './receita-completa.component.html',
  styleUrls: ['./receita-completa.component.css']
})
export class ReceitaCompletaComponent implements OnInit {
  receita: ReceitaCompleta = {
    titulo: '',
    descricao: '',
    ingredientes: [],
    preparo: {
        descricao: []
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitaCompletaService
  ) {}

  ngOnInit(): void {
    const urlSegments = this.route.snapshot.url.map(segment => segment.path);
    
    if (urlSegments.length >= 2) {
      const tipo = urlSegments[0];
      const id = urlSegments[1];

      this.receitaService.getReceita(tipo, id).subscribe(receita => {
        this.receita = receita;
      });
    }
  }

  voltar() {
    const urlSegments = this.route.snapshot.url.map(segment => segment.path);
    if (urlSegments.length > 1) {
      urlSegments.pop();
    }
    const backUrl = `/${urlSegments.join('/')}`;
    this.router.navigate([backUrl]);
  }
}
