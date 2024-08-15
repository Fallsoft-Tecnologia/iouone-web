import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.css']
})
export class EnterButtonComponent {

  @Input() textButton: string = '';
  @Input() redireciona: string = '';

}
