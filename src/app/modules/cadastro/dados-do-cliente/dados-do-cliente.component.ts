import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoClientForm } from 'src/app/model/info-client-form.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-dados-do-cliente',
  templateUrl: './dados-do-cliente.component.html',
  styleUrls: ['./dados-do-cliente.component.css'],
})
export class DadosDoClienteComponent implements OnInit {
  InfoClientForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.InfoClientForm = formbuilder.group({
      name: [''],
      date: [''],
      phone: [''],
      cpf: [''],
    });
  }

  ngOnInit(): void {}

  salvaInfoCliente() {
    // Recebe os valores do formulário como um objeto
    const clientData = this.InfoClientForm.getRawValue();
    const client: InfoClientForm = new InfoClientForm(
      clientData.name,
      clientData.date,
      clientData.phone,
      clientData.cpf
    );
    console.log(client);

    this.cadastroService.salvaInfoCliente(client).subscribe(() => {
      this.router.navigate(['/cadastro/dados-corporal']);
    });
  }

  textButton: string = 'Próximo';
}
