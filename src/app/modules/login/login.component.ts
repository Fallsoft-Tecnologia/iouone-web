import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlataformaService } from 'src/app/shared/services/PlataformaService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  textButton: string = 'Entrar';

  constructor(
    private fb: FormBuilder,
    private plataformaService: PlataformaService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

onSubmit(): void {
    if (this.loginForm.valid) {
      this.plataformaService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('accessToken', response.accessToken);
          this.router.navigate(['/home']); // Redireciona após o login
        },
        error: (err) => {
          if (err.status === 401) {
            alert('Email ou senha incorretos!');
          } else if (err.status === 402) {
            alert('Pagamento pendente. Entre em contato com o suporte.');
          } else {
            alert('Erro inesperado ao fazer login! Tente novamente mais tarde.');
          }
        }
      });
    }
}

}
