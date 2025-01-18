import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css'],
})
export class ExerciciosComponent {
  exercises = [
    {
      src: '../../../../assets/exercicios/abdomen.png',
      label: 'Abdômen',
      link: 'https://www.youtube.com/embed/example1',
    },
    {
      src: '../../../../assets/exercicios/core.png',
      label: 'Core',
      link: 'https://www.youtube.com/embed/example2',
    },
    {
      src: '../../../../assets/exercicios/mobilidade.png',
      label: 'Mobilidade',
      link: 'https://www.youtube.com/embed/example3',
    },
    {
      src: '../../../../assets/exercicios/costas.png',
      label: 'Costas',
      link: 'https://www.youtube.com/embed/example4',
    },
    {
      src: '../../../../assets/exercicios/yoga.png',
      label: 'Yoga',
      link: 'https://www.youtube.com/embed/example5',
    },
  ];

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
}
