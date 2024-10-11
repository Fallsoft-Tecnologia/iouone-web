import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-do-cliente',
  templateUrl: './dados-do-cliente.component.html',
  styleUrls: ['./dados-do-cliente.component.css']
})
export class DadosDoClienteComponent {

  textButton: string = "Próximo";
  redireciona: string = "/auth/cadastro/endereco";

}
