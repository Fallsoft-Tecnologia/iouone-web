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
  routerDetail:string = '/dietas';
  linkName:string = 'Ver dieta';

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

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }
}
