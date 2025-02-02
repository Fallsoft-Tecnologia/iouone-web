import { Component } from '@angular/core';
import { Fit, TipoFitDance } from 'src/app/shared/models/Fit';
import { FitService } from 'src/app/shared/services/FitService';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent {
  tiposFitDance: TipoFitDance[] = [];
  fitDancesPorTipo: { [key: number]: Fit[] } = {};

  constructor(
    private fitService: FitService
  ) {}

  ngOnInit(): void {
    this.carregarTipos();
  }

  carregarTipos(): void {
    this.fitService.getTipos().subscribe({
      next: (tipos) => {
        this.tiposFitDance = tipos;
        this.carregarFitDances();
      },
      error: (err) => console.error('Erro ao carregar tipos de Fit Dance:', err),
    });
  }

  carregarFitDances(): void {
    this.fitService.getFitDance().subscribe({
      next: (videos) => {
        this.fitDancesPorTipo = {};
        this.tiposFitDance.forEach(tipo => {
          this.fitDancesPorTipo[tipo.id] = videos.filter(video => video.tipoFitDance.id === tipo.id);
        });
      },
      error: (err) => console.error('Erro ao carregar Fit Dance:', err),
    });
  }


  showModal = false;
  currentVideoLink: string | null = null;

  openModal(videoLink: string): void {
    const videoId = this.extractVideoId(videoLink);
    this.currentVideoLink = `https://www.youtube.com/embed/${videoId}`;
    this.showModal = true;
  }

  private extractVideoId(url: string): string {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  closeModal(): void {
    this.showModal = false;
    this.currentVideoLink = null;
  }
}

