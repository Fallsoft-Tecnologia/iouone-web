import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() textTitle: string = '';
  @Input() textDescription: string = '';
  @Input() cardImg: string = '';
  @Input() linkName: string = 'Detalhar';
  @Input() routerDetail: string = '';
  @Input() itemId: number = 0;
}
