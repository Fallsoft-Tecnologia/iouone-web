import { Component } from '@angular/core';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css'],
})
export class DietasComponent {
  paginaAtual: string = 'router-outlet';
  textTitle: string = 'What is lorem';
  textDescription: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique';
  cardImg: string = '../../../../assets/dieta/dieta01.png';
  cardImg2: string = '../../../../assets/dieta/dieta02.png';
  cardImg3: string = '../../../../assets/dieta/dieta03.png';
  cardImg4: string = '../../../../assets/dieta/dieta04.png';

  dietas = [
    { id: 1, titulo: 'Dieta Low Carb', descricao: 'Uma dieta com poucos carboidratos' },
    { id: 2, titulo: 'Dieta Keto', descricao: 'Uma dieta cetogênica clássica' }
  ];
}
