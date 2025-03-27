import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treino-card',
  templateUrl: './treino-card.component.html',
  styleUrls: ['./treino-card.component.css']
})
export class TreinoCardComponent {
  @Input() textTitle: string = '';
  @Input() textDescription: string = '';
  @Input() cardImg: string = '';
  @Input() linkName: string = 'Detalhar';
  @Input() routerDetail: string = '';
  @Input() itemId: number = 0;
}
