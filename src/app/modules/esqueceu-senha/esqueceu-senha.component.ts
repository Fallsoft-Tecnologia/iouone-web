import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/shared/services/ContaService';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent {
  redefinirSenhaForm: FormGroup;
  textButton: string = 'Redefinir Senha';

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router
  ) {
    this.redefinirSenhaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.redefinirSenhaForm.valid) {
      this.contaService.redefinirSenha(this.redefinirSenhaForm.value).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.status === 401) {
            alert('Email ou senha incorretos!');
          } else {
            alert('Erro inesperado ao redefinir senha! Tente novamente mais tarde.');
          }
        }
      });
    }
  }
}
