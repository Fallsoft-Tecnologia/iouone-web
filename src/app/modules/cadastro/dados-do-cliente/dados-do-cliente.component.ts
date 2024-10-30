import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosDoCliente } from 'src/app/shared/models/DadosDoCliente';
import { CadastroService } from 'src/app/shared/services/CadastroService';

@Component({
  selector: 'app-dados-do-cliente',
  templateUrl: './dados-do-cliente.component.html',
  styleUrls: ['./dados-do-cliente.component.css']
})
export class DadosDoClienteComponent {
  dadosForm: FormGroup;
  textButton: string = "Próximo";
  redireciona: string = "/auth/cadastro/endereco";
  isSubmitting: boolean = false;
  isDateFocused: boolean = false;

  constructor(private fb: FormBuilder, private cadastroService: CadastroService) {
    this.dadosForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]]
    });
  }

  formatCelular(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    } else if (value.length > 5) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    input.value = value;
    this.dadosForm.get('celular')?.setValue(value);
  }

  onSubmit() {
    if (this.dadosForm.valid) {
      const dadosCliente: DadosDoCliente = {
        nomeCompleto: this.dadosForm.get('nomeCompleto')?.value,
        dataNascimento: this.dadosForm.get('dataNascimento')?.value,
        celular: this.dadosForm.get('celular')?.value.replace(/\D/g, '')
      };

      this.isSubmitting = true;

      this.cadastroService.cadastrarDadosCliente(dadosCliente).subscribe({
        next: (response) => {
          console.log('Dados enviados com sucesso:', response);
          // Redirecionar ou fazer outra ação após a submissão bem-sucedida
          // Por exemplo: this.router.navigate([this.redireciona]);
        },
        error: (error) => {
          console.error('Erro ao enviar dados:', error);
          // Tratar erro, exibir mensagem ao usuário, etc.
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
