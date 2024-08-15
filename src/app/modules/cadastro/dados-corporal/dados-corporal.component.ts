import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-corporal',
  templateUrl: './dados-corporal.component.html',
  styleUrls: ['./dados-corporal.component.css']
})
export class DadosCorporalComponent {

  textButton: string = "Próximo";
  redireciona: string = "/login";

}
