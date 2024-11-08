import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enter-button',
  templateUrl: './enter-button.component.html',
  styleUrls: ['./enter-button.component.css']
})
export class EnterButtonComponent {
  @Input() textButton: string = 'Enter';
  @Input() redireciona: string = ''; // URL para o link, caso seja um <a>
  @Input() buttonType: 'button' | 'submit' = 'button'; // Definir se é 'submit' ou 'button'
  @Input() isDisabled: boolean = false; // Controla o estado de desabilitado

  // Checa se deve ser renderizado como um botão ou link
  get isButtonType(): boolean {
    return this.buttonType === 'submit' || this.buttonType === 'button';
  }
}
