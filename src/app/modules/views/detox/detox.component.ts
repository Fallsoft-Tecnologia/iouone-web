import { Component } from '@angular/core';
import { Detox } from 'src/app/shared/models/Detox';
import { DetoxService } from 'src/app/shared/services/DetoxService';

@Component({
  selector: 'app-detox',
  templateUrl: './detox.component.html',
  styleUrls: ['./detox.component.css']
})
export class DetoxComponent {
  detoxList: Detox[] = [];
  routerDetail: string = '/sucos';
  linkName: string = 'Ver suco';

  constructor(private detoxService: DetoxService) {}

  ngOnInit(): void {
    this.carregarDetox();
  }

  carregarDetox(): void {
    this.detoxService.getDetox().subscribe({
      next: (data) => (this.detoxList = data),
      error: (err) => console.error('Erro ao carregar os detox:', err),
    });
  }

  
  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }


}
