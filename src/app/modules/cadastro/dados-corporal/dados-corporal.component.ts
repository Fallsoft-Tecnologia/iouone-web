import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoBodyForm } from 'src/app/model/info-body-form';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-dados-corporal',
  templateUrl: './dados-corporal.component.html',
  styleUrls: ['./dados-corporal.component.css'],
})
export class DadosCorporalComponent implements OnInit {
  InfoClientForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.InfoClientForm = formbuilder.group({
      idealWeight: [],
      level: [''],
      height: [],
      weight: [],
    });
  }

  ngOnInit(): void {}

  salvaBodyCliente() {
    // Recebe os valores do formulário como um objeto
    const clientData = this.InfoClientForm.getRawValue();
    const client: InfoBodyForm = new InfoBodyForm(
      clientData.idealWeight,
      clientData.level,
      clientData.height,
      clientData.weight
    );
    console.log(client);

    this.cadastroService.salvaBodyCliente(client).subscribe(() => {
      this.router.navigate(['/cadastro/pagamento']);
    });
  }

  textButton: string = 'Próximo';
}
