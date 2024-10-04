import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-pix',
  templateUrl: './botao-pix.component.html',
  styleUrls: ['./botao-pix.component.css']
})
export class BotaoPixComponent {

  textButton: string = 'Pix';
  cardLogos: string[] = ['/assets/images/pix.png'];
  redireciona: string = '/auth/cadastro/pagamento/pix';

}
