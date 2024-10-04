import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infos-pagamento-cartao',
  templateUrl: './infos-pagamento-cartao.component.html',
  styleUrls: ['./infos-pagamento-cartao.component.css']
})
export class InfosPagamentoCartaoComponent {

  @Input() textSpan: string = '';

}
