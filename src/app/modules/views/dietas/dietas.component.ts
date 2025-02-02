import { Component, OnInit } from '@angular/core';
import { Topicos } from 'src/app/shared/models/Topicos';
import { DietasService } from 'src/app/shared/services/DietasService';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css'],
})
export class DietasComponent implements OnInit{
  paginaAtual: string = 'router-outlet';
  dietas: Topicos[] = [];

  constructor(private dietasService: DietasService) {}

  ngOnInit(): void {
    this.buscarDietas();
  }

  buscarDietas(): void {
    this.dietasService.getDietas().subscribe({
      next: (data) => (this.dietas = data),
      error: (err) => console.error('Erro ao carregar dietas:', err),
    });
  }
}
