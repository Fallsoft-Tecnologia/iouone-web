import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {

  textButton: string = 'Cartão de crédito ou débito';
  cardLogos: string[] = ['/assets/images/visa.png', '/assets/images/mastercard.png', '/assets/images/amex.png', '/assets/images/elo.png', '/assets/images/hipercard.png'];
  redireciona: string = '';

}
