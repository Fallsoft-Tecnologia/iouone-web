import { Component } from '@angular/core';
import { Marmita } from 'src/app/shared/models/Marmita';
import { MarmitaService } from 'src/app/shared/services/MarmitaService';

@Component({
  selector: 'app-marmita',
  templateUrl: './marmita.component.html',
  styleUrls: ['./marmita.component.css']
})
export class MarmitaComponent {
  marmitas: Marmita[] = [];
  routerDetail: string = '/marmitas';
  linkName: string = 'Ver marmita';

  constructor(private marmitaService: MarmitaService) {}

  ngOnInit(): void {
    this.carregarMarmitas();
    console.log(this.marmitas);
  }

  carregarMarmitas(): void {
    this.marmitaService.getMarmitas().subscribe({
      next: (data) => {this.marmitas = data;},
      error: (err) => console.error('Erro ao carregar as marmitas:', err),
    });
  }

  getImageUrl(byteArray: Uint8Array): string {
    const pathImage = "data:image/webp;base64,";
    return pathImage + byteArray;
  }

}
