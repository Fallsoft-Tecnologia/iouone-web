import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() textTittle: string = '';
  @Input() textDescription: string = '';
  @Input() cardImg: string = '';
}
