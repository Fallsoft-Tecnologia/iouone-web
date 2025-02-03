import { Component } from '@angular/core';
import { Topicos } from 'src/app/shared/models/Topicos';
import { CardapioService } from 'src/app/shared/services/CardapioService';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  cardapios: Topicos[] = [];

  constructor(private cardapioService: CardapioService) {}

  ngOnInit(): void {
    this.carregarCardapios();
  }

  carregarCardapios(): void {
    this.cardapioService.getCardapios().subscribe({
      next: (data) => (this.cardapios = data),
      error: (err) => console.error('Erro ao carregar os cardápios:', err),
    });
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }
}
