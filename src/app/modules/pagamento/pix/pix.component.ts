import { Component } from '@angular/core';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent {
  textSpan: string = "Após efetuar o pagamento via Pix, sua assinatura será ativada automaticamente. Certifique-se de concluir a transação antes do prazo de vencimento."
  redireciona: string = '';

}
