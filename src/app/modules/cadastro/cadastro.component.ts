import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  textButton:string = "Próximo";
  redireciona: string = "/auth/cadastro/dados"

}
