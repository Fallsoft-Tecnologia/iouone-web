import { Component } from '@angular/core';
import { Exercise } from 'src/app/shared/models/Exercise';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  exercises: Exercise[] = [
    { src: '../../../../assets/exercicios/abdomen.png', label: 'Abdômen' },
    { src: '../../../../assets/exercicios/core.png', label: 'Core' },
    { src: '../../../../assets/exercicios/mobilidade.png', label: 'Mobilidade' },
    { src: '../../../../assets/exercicios/costas.png', label: 'Costas' },
    { src: '../../../../assets/exercicios/yoga.png', label: 'Yoga' },
  ];
}
