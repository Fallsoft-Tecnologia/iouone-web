import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importação do Router
import { CadastroResponse } from 'src/app/shared/models/CadastroResponse';
import { CadastroService } from 'src/app/shared/services/CadastroService';
import { FluxoService } from 'src/app/shared/services/FluxoService';

@Component({
  selector: 'app-dados-do-cliente',
  templateUrl: './dados-do-cliente.component.html',
  styleUrls: ['./dados-do-cliente.component.css']
})
export class DadosDoClienteComponent {
  dadosForm: FormGroup;
  textButton: string = "Próximo";
  redireciona: string = "/cadastro/endereco";
  isSubmitting: boolean = false;
  isDateFocused: boolean = false;
  fluxoId: string = '';

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private fluxoService: FluxoService, // Serviço compartilhado
    private router: Router
  ) {
    this.dadosForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]]
    });

    this.fluxoId = this.fluxoService.getFluxoId();
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

  formatBirthDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
  
    if (value.length > 2 && value.length <= 4) {
      value = value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
    } else if (value.length > 4) {
      value = value.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
  
    input.value = value;
    this.dadosForm.get('dataNascimento')?.setValue(value, { emitEvent: false });
  }

  onSubmit() {
    if (this.dadosForm.valid) {
      const dadosCliente = {
        nome: this.dadosForm.get('nomeCompleto')?.value,
        dataNascimento: this.dadosForm.get('dataNascimento')?.value,
        celular: this.dadosForm.get('celular')?.value.replace(/\D/g, '')
      };

      this.isSubmitting = true;

      this.cadastroService.cadastrarDadosCliente(dadosCliente, this.fluxoId).subscribe({
        next: (response: CadastroResponse) => {
          if (response.fluxoId) {
            this.fluxoService.setFluxoId(response.fluxoId); // Armazenando fluxoId
          }
          
          console.log('Dados enviados com sucesso:', response);
          this.router.navigate([this.redireciona]);
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
