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

  treino: Treino = {
    titulo: 'Treino para Emagrecimento Acelerado',
    objetivo: 'Reduzir o percentual de gordura corporal rapidamente, melhorando a condição cardiovascular.',
    aquecimento: {
        tempo: 10,
        exercicios: ['2 minutos de polichinelos', '3 minutos de corda', '5 minutos de corrida leve'],
    },
    treinoPrincipal: {
        tempo: 30,
        exercicios: [
            { nome: 'Burpees', duracao: 40 },
            { nome: 'Agachamento com salto', duracao: 40 },
            { nome: 'Mountain climbers', duracao: 40 },
            { nome: 'Flexão de braços no joelho', duracao: 40 },
            { nome: 'Corrida estacionária de alta intensidade', duracao: 40 },
        ],
    },
    finalizacao: {
        tempo: 5,
        exercicios: ['Prancha abdominal (3 x 45 segundos)', 'Abdominal bicicleta (3 x 30 repetições)'],
    },
}; // Variável para armazenar os dados do treino
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
