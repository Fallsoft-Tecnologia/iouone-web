import { Component, OnInit } from '@angular/core';
import { Topicos } from 'src/app/shared/models/Topicos';
import { TreinoService } from 'src/app/shared/services/TreinoService';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit{
  treinos: Topicos[] = [];

  constructor(private treinoService: TreinoService) {}

  ngOnInit(): void {
    this.buscarTreinos();
  }

  buscarTreinos(): void {
    this.treinoService.getTreinos().subscribe({
      next: (data) => (this.treinos = data),
      error: (err) => console.error('Erro ao carregar treinos:', err),
    });
  }
}
