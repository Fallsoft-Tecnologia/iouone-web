import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treino-card',
  templateUrl: './treino-card.component.html',
  styleUrls: ['./treino-card.component.css']
})
export class TreinoCardComponent {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() description!: string;
}
