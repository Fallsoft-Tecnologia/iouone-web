import { Component, OnInit } from '@angular/core';
import { Topicos } from 'src/app/shared/models/Topicos';
import { ChasService } from 'src/app/shared/services/ChasService';

@Component({
  selector: 'app-chas',
  templateUrl: './chas.component.html',
  styleUrls: ['./chas.component.css']
})
export class ChasComponent implements OnInit{
   chas: Topicos[] = [];
  
    constructor(private chasService: ChasService) {}
  
    ngOnInit(): void {
      this.buscarChas();
    }
  
    buscarChas(): void {
      this.chasService.getChas().subscribe({
        next: (data) => (this.chas = data),
        error: (err) => console.error('Erro ao carregar chas:', err),
      });
    }
  
    getImageUrl(byteArray: Uint8Array): string {
      const pathImage = "data:image/webp;base64,";
      return pathImage + byteArray;
    }
}
