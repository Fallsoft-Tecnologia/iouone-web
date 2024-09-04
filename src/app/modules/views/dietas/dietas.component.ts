import { Component } from '@angular/core';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css'],
})
export class DietasComponent {
  paginaAtual: string = 'router-outlet';
  textTittle: string = 'What is lorem';
  textDescription: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique';
  cardImg: string = '../../../../assets/dieta01.png';
  cardImg2: string = '../../../../assets/dieta02.png';
  cardImg3: string = '../../../../assets/dieta03.png';
  cardImg4: string = '../../../../assets/dieta04.png';
}
