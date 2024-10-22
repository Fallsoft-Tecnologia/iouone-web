import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroLogin } from 'src/app/shared/models/CadastroLogin';
import { AuthService } from 'src/app/shared/services/AuthService';

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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método para envio do formulário
  onSubmit() {
    if (this.signupForm.valid) {
      this.isSubmitting = true;

      const credentials: CadastroLogin = {
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value
      };

      this.authService.cadastroLogin(credentials).subscribe({
        next: (response) => {
          console.log('Sucesso:', response);
          this.router.navigate([this.redireciona]);
        },
        error: (error) => {
          console.error('Erro:', error);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
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
}
