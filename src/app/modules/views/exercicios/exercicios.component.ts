import { Component } from '@angular/core';
import { Exercicios } from 'src/app/shared/models/Exercicios';
import { ExerciciosService } from 'src/app/shared/services/ExerciciosService';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css'],
})
export class ExerciciosComponent {
  exercicios: Exercicios[] = [];

  constructor(private exerciciosService: ExerciciosService) {}

  ngOnInit(): void {
    this.carregarExercicios();
  }

  carregarExercicios(): void {
    this.exerciciosService.getExercicios().subscribe({
      next: (data) => (this.exercicios = data),
      error: (err) => console.error('Erro ao carregar exercícios:', err),
    });
  }

  showModal = false; // Estado do modal
  currentVideoLink: string | null = null; // Link do vídeo atual

  // Método para abrir o modal
  openModal(link: string): void {
    this.currentVideoLink = link;
    this.showModal = true;
  }

  // Método para fechar o modal
  closeModal(): void {
    this.showModal = false;
    this.currentVideoLink = null;
  }

  // Método para extrair o ID do vídeo e formatar o link de embed
  getEmbedUrl(shortUrl: string): string {
    const videoId = shortUrl.split('/').pop(); // Extrai o ID do vídeo do link
    return `https://www.youtube.com/embed/${videoId}`; // Formata a URL de embed
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }
}
