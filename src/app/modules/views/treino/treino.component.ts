import { Component } from '@angular/core';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent {
  treinos = [
    {
      title: 'Leg Press',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/leg-press.png'
    },
    {
      title: 'Agachamento',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/agachamento.png'
    },
    {
      title: 'Rosca',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/rosca.png'
    },
    {
      title: 'Leg Press',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/leg-press.png'
    },
    {
      title: 'Agachamento',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/agachamento.png'
    },
    {
      title: 'Rosca',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book.`,
      imageSrc: '../../../../assets/treino/rosca.png'
    }
  ];
}
