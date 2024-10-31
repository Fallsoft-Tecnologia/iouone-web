import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosEndereco } from 'src/app/shared/models/DadosEndereco';
import { CepService } from 'src/app/shared/services/CepService';
import { catchError, of } from 'rxjs';
import { Endereco } from 'src/app/shared/models/Endereco';
import { CadastroService } from 'src/app/shared/services/CadastroService';

@Component({
  selector: 'app-dados-endereco',
  templateUrl: './dados-endereco.component.html',
  styleUrls: ['./dados-endereco.component.css']
})
export class DadosEnderecoComponent {

  dadosForm: FormGroup;
  textButton: string = "Próximo";
  redireciona: string = "/auth/cadastro/dados-corporal";
  isSubmitting: boolean = false;

  estadosBrasileiros = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
  ];

  constructor(
    private fb: FormBuilder,
    private cepService: CepService,
    private cadastroService: CadastroService
  ) {
    this.dadosForm = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['Brasil', Validators.required]
    });
  }

  onCepInput() {
    const cep = this.dadosForm.get('cep')?.value.replace(/\D/g, '');

    this.formatCep({ target: { value: cep } });

    if (cep.length === 8) {
      this.cepService.getAddressByCep(cep).subscribe({
        next: (address) => {
          if (address && !address.erro) {
            this.setAddressFields(address);
          } else {
            console.error('Endereço não encontrado para o CEP fornecido.');
            this.resetAddressFields();
          }
        },
        error: (err) => {
          console.error('Erro ao buscar o endereço:', err);
          this.resetAddressFields();
        }
      });
    } else {
      this.resetAddressFields();
    }
  }

  setAddressFields(address: Endereco) {
    this.dadosForm.patchValue({
      endereco: address.logradouro,
      cidade: address.localidade,
      estado: address.uf,
      pais: 'Brasil'
    });
  }

  resetAddressFields() {
    this.dadosForm.patchValue({
      endereco: '',
      cidade: '',
      estado: '',
      pais: 'Brasil'
    });
  }

  formatCep(event: any) {
    const input = event.target.value.replace(/\D/g, '');
    let formattedCep = input;

    if (input.length > 5) {
      formattedCep = input.replace(/(\d{5})(\d)/, '$1-$2');
    }

    this.dadosForm.get('cep')?.setValue(formattedCep);
  }

  get cepErrorMessage(): string {
    if (this.dadosForm.get('cep')?.hasError('required')) {
      return 'O CEP é obrigatório.';
    }
    return this.dadosForm.get('cep')?.hasError('pattern') ? 'Formato: XXXXX-XXX' : '';
  }

  get enderecoErrorMessage(): string {
    return this.dadosForm.get('endereco')?.hasError('required') ? 'O endereço é obrigatório.' : '';
  }

  get cidadeErrorMessage(): string {
    return this.dadosForm.get('cidade')?.hasError('required') ? 'A cidade é obrigatória.' : '';
  }

  get estadoErrorMessage(): string {
    return this.dadosForm.get('estado')?.hasError('required') ? 'O estado é obrigatório.' : '';
  }

  get paisErrorMessage(): string {
    return this.dadosForm.get('pais')?.hasError('required') ? 'O país é obrigatório.' : '';
  }

  onSubmit() {
    this.isSubmitting = true;

    if (this.dadosForm.valid) {
      const dadosEndereco: DadosEndereco = {
        cep: this.dadosForm.get('cep')?.value.replace(/-/g, ''),
        endereco: this.dadosForm.get('endereco')?.value,
        cidade: this.dadosForm.get('cidade')?.value,
        estado: this.dadosForm.get('estado')?.value,
        pais: 'BR'
      };

      this.cadastroService.cadastrarDadosEndereco(dadosEndereco).subscribe({
        next: (response) => {
          console.log('Dados de endereço enviados com sucesso:', response);
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Erro ao enviar dados de endereço:', error);
          this.isSubmitting = false;
        }
      });
    } else {
      console.warn('Formulário de endereço inválido.');
      this.isSubmitting = false;
    }
  }
}
