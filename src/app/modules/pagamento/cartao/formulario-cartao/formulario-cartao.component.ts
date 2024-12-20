import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosCartao } from 'src/app/shared/models/DadosCartao';
import { PagamentoService } from 'src/app/shared/services/PagamentoService';

@Component({
  selector: 'app-formulario-cartao',
  templateUrl: './formulario-cartao.component.html',
  styleUrls: ['./formulario-cartao.component.css']
})
export class FormularioCartaoComponent {
  textButton: string = "Iniciar Assinatura";
  textSpan: string = "Cartões que suportam transações de débito e de crédito poderão ser processados de ambas as formas.";

  isDateFocused: boolean = false;
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private pagamentoService: PagamentoService) {
    this.cardForm = this.fb.group({
      numeroCartao: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      dataValidade: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      nomeCartao: ['', Validators.required],
      formaPagamento: ['', Validators.required]
    });
  }

  formatExpirationDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length >= 3) {
      value = value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
    }

    input.value = value;
    this.cardForm.get('dataValidade')?.setValue(value, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const formData: DadosCartao = this.cardForm.value;

      this.pagamentoService.enviarDadosCartao(formData).subscribe({
        next: response => {
          console.log('Pagamento enviado com sucesso:', response);
        },
        error: err => {
          console.error('Erro ao enviar o pagamento:', err);
        }
      });
    }
  }
}
