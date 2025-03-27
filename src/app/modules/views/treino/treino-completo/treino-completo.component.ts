import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treino } from 'src/app/shared/models/Treino';
import { TreinoService } from 'src/app/shared/services/TreinoService';

@Component({
  selector: 'app-treino-completo',
  templateUrl: './treino-completo.component.html',
  styleUrls: ['./treino-completo.component.css']
})
export class TreinoCompletoComponent {

  @Input() treino: Treino = {
    titulo: '',
    descricao: '',
    itens: [{ tipoTreino: '', treinoCompleto: [] }]
  }; // Variável para armazenar os dados do treino
  isLoading = true; // Indicador de carregamento
  errorMessage: string | null = null; // Mensagem de erro, caso ocorra

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ treinos }) => {
      this.treino = treinos;
      console.log(treinos);
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
