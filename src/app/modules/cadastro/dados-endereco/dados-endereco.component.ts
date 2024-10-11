import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-endereco',
  templateUrl: './dados-endereco.component.html',
  styleUrls: ['./dados-endereco.component.css']
})
export class DadosEnderecoComponent {
  
  textButton: string = "Próximo";
  redireciona: string = "/auth/cadastro/dados-corporal";

}
