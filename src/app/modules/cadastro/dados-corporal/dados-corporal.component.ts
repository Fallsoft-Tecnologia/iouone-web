import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosCorporal } from 'src/app/shared/models/DadosCorporal';
import { CadastroService } from 'src/app/shared/services/CadastroService';
import { FluxoService } from 'src/app/shared/services/FluxoService';

@Component({
  selector: 'app-dados-corporal',
  templateUrl: './dados-corporal.component.html',
  styleUrls: ['./dados-corporal.component.css']
})
export class DadosCorporalComponent {
  corporalForm: FormGroup;
  textButton: string = "Enviar";
  isSubmitting: boolean = false;
  redireciona: string = "/cadastro/pagamento";
  fluxoId: string = '';

  constructor(
    private fb: FormBuilder, 
    private cadastroService: CadastroService,
    private fluxoService: FluxoService,
    private router: Router
  ) {
    this.corporalForm = this.fb.group({
      pesoIdeal: ['', [Validators.required, Validators.min(30)]],
      nivelAtividade: ['', Validators.required],
      altura: ['', [Validators.required, Validators.min(100)]],
      pesoAtual: ['', [Validators.required, Validators.min(30)]],
    });

    this.fluxoId = this.fluxoService.getFluxoId();
  }

  get pesoIdealErrorMessage(): string {
    if (this.corporalForm.get('pesoIdeal')?.hasError('required')) {
      return 'O peso ideal é obrigatório.';
    }
    return this.corporalForm.get('pesoIdeal')?.hasError('min') ? 'O peso mínimo é 30kg.' : '';
  }

  get nivelAtividadeErrorMessage(): string {
    return this.corporalForm.get('nivelAtividade')?.hasError('required') ? 'O nível de atividade é obrigatório.' : '';
  }

  get alturaErrorMessage(): string {
    if (this.corporalForm.get('altura')?.hasError('required')) {
      return 'A altura é obrigatória.';
    }
    return this.corporalForm.get('altura')?.hasError('min') ? 'A altura mínima é 100cm.' : '';
  }

  get pesoAtualErrorMessage(): string {
    if (this.corporalForm.get('pesoAtual')?.hasError('required')) {
      return 'O peso atual é obrigatório.';
    }
    return this.corporalForm.get('pesoAtual')?.hasError('min') ? 'O peso mínimo é 30kg.' : '';
  }

  onSubmit(): void {
    this.isSubmitting = true;
  
    if (this.corporalForm.valid) {
      const dadosCorporal: DadosCorporal = {
        pesoIdeal: this.corporalForm.get('pesoIdeal')?.value,
        atividadeFisica: this.corporalForm.get('nivelAtividade')?.value,
        altura: this.corporalForm.get('altura')?.value,
        pesoAtual: this.corporalForm.get('pesoAtual')?.value,
      };
  
      this.cadastroService.cadastrarDadosCorporal(dadosCorporal, this.fluxoId).subscribe({
        next: (response) => {
          if (response.fluxoId) {
            this.fluxoService.setFluxoId(response.fluxoId);
          }
          
          console.log('Dados enviados com sucesso:', response);
          this.router.navigate([this.redireciona]);
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Erro ao enviar dados corporais:', error);
          this.isSubmitting = false;
        }
      });
    } else {
      console.warn('Formulário inválido.');
      this.isSubmitting = false;
    }
  }
}
