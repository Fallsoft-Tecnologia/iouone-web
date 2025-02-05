import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iouone';

  ngOnInit(): void {
    // Define o tempo de inatividade (30 segundos)
    const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 segundos em milissegundos
    let inactivityTimer: any;
  
    // Função que limpa o localStorage quando não houver interação por um período
    const resetInactivityTimer = () => {
      // Limpa o localStorage após o tempo de inatividade
      console.log('Tempo de inatividade alcançado, limpando localStorage...');
      localStorage.clear();
    };
  
    // Função para reiniciar o timer de inatividade
    const restartInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(resetInactivityTimer, INACTIVITY_TIMEOUT);
    };
  
    // Detecta cliques no documento para reiniciar o timer
    window.addEventListener('click', restartInactivityTimer);
  
    // Também reinicia o timer no carregamento inicial
    restartInactivityTimer();
  }
  
  
  
}
