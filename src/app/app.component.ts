import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iouone';

  ngOnInit(): void {
    // Limpar o localStorage quando a aba ou navegador for fechado
    window.addEventListener('beforeunload', () => {
      localStorage.clear();
    });
  }
}
