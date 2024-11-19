import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroLogin } from 'src/app/shared/models/CadastroLogin';
import { CadastroService } from 'src/app/shared/services/CadastroService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  signupForm: FormGroup;
  textButton: string = "Próximo";
  redireciona: string = "/auth/cadastro/dados";
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private cadastroService: CadastroService, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isSubmitting = true;
  
      const credentials: CadastroLogin = {
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
        cpf: this.signupForm.get('cpf')?.value.replace(/\D/g, '')
      };
  
      this.cadastroService.cadastroLogin(credentials).subscribe({
        next: (response) => {
          console.log('Sucesso:', response.message);
          this.router.navigate([this.redireciona]);
        },
        error: (error) => {
          console.error('Erro:', error);
          alert('Erro ao realizar o cadastro. Verifique os dados e tente novamente.');
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }

  formatCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 3 && value.length <= 6) {
      value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length > 6 && value.length <= 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else if (value.length > 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
    }

    input.value = value;
    this.signupForm.get('cpf')?.setValue(value);
  }

  getEmailErrorMessage() {
    if (this.signupForm.get('email')?.hasError('required')) {
      return 'Você deve inserir um e-mail';
    }
    return this.signupForm.get('email')?.hasError('email') ? 'E-mail inválido' : '';
  }

  getPasswordErrorMessage() {
    if (this.signupForm.get('password')?.hasError('required')) {
      return 'Você deve inserir uma senha';
    }
    return this.signupForm.get('password')?.hasError('minlength') ? 'A senha deve ter no mínimo 6 caracteres' : '';
  }

  getCpfErrorMessage() {
    if (this.signupForm.get('cpf')?.hasError('required')) {
      return 'Você deve inserir um CPF';
    }
    return this.signupForm.get('cpf')?.hasError('pattern') ? 'CPF inválido' : '';
  }
}
