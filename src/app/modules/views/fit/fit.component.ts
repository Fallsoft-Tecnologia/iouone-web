import { Component } from '@angular/core';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent {
  musicTypes = [
    {
      type: 'Rock',
      cards: [
        { image: 'https://via.placeholder.com/200', title: 'Song 1', artist: 'Artist 1' },
        { image: 'https://via.placeholder.com/200', title: 'Song 2', artist: 'Artist 2' },
        { image: 'https://via.placeholder.com/200', title: 'Song 3', artist: 'Artist 3' }
      ]
    },
    {
      type: 'Pop',
      cards: [
        { image: 'https://via.placeholder.com/200', title: 'Song 4', artist: 'Artist 4' },
        { image: 'https://via.placeholder.com/200', title: 'Song 5', artist: 'Artist 5' },
        { image: 'https://via.placeholder.com/200', title: 'Song 6', artist: 'Artist 6' }
      ]
    }
    // Adicione mais tipos de músicas e seus cards conforme necessário
  ];
}

