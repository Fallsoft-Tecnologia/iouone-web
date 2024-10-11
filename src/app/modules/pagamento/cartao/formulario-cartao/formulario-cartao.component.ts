import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-cartao',
  templateUrl: './formulario-cartao.component.html',
  styleUrls: ['./formulario-cartao.component.css']
})
export class FormularioCartaoComponent {

  textButton: string = "Iniciar Assinatura";
  textSpan: string = "Cartões que suportam transações de débito e de crédito poderão ser processados de ambas as formas."
}
