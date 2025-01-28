import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iouone';

  ngOnInit(): void {
    // Adiciona o listener para limpar o localStorage quando a aba for fechada
    window.addEventListener('beforeunload', () => {
      // Checa se a aba está realmente sendo fechada, mas não limpa ao recarregar
      if (!sessionStorage.getItem('reloading')) {
        console.log('Aba fechada, limpando localStorage...');
        localStorage.clear();  // Limpar o localStorage apenas ao fechar a aba/navegador
      }
    });

    // Marca o recarregamento da página
    sessionStorage.setItem('reloading', 'true');
  }
}
