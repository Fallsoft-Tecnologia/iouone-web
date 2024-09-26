import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Router } from '@angular/router';
import { LeadClientForm } from 'src/app/model/lead-client-form.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  clientForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.clientForm = formbuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  salvaLeadCliente() {
    // Recebe os valores do formulário como um objeto
    const clientData = this.clientForm.getRawValue();
    const client: LeadClientForm = new LeadClientForm(clientData.email, clientData.password);
    console.log(client);

    this.cadastroService.salvaLeadCliente(client).subscribe(() => {
      this.router.navigate(['/cadastro/dados']);
    });
  }

  textButton: string = 'Próximo';
}
