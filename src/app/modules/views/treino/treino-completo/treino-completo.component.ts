import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Treino } from 'src/app/shared/models/Treino';
import { TreinoService } from 'src/app/shared/services/TreinoService';

@Component({
  selector: 'app-treino-completo',
  templateUrl: './treino-completo.component.html',
  styleUrls: ['./treino-completo.component.css']
})
export class TreinoCompletoComponent {

  treino!: Treino; // Variável para armazenar os dados do treino
  isLoading = true; // Indicador de carregamento
  errorMessage: string | null = null; // Mensagem de erro, caso ocorra

  constructor(
    private route: ActivatedRoute,
    private treinoService: TreinoService
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    if (id) {
      this.treinoService.getTreinoById(id).subscribe({
        next: (data) => {
          this.treino = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'Erro ao carregar o treino. Tente novamente.';
          this.isLoading = false;
        },
      });
    }
  }

}
