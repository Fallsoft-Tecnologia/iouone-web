import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-cartao',
  templateUrl: './botao-cartao.component.html',
  styleUrls: ['./botao-cartao.component.css']
})
export class BotaoCartaoComponent {

  textButton: string = 'Cartão de crédito';
  cardLogos: string[] = ['/assets/images/visa.png', '/assets/images/mastercard.png', '/assets/images/amex.png', '/assets/images/elo.png', '/assets/images/hipercard.png'];
  redireciona: string = '/cadastro/pagamento/cartao';

}
