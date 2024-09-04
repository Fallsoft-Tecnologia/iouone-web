import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  textTittle: string = 'What is lorem';
  textDescription: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum quis dolore tempora quibusdam Repudiandae autem error iusto commodi consequatur suscipit ratione beatae sequi rem natus nam vero Impedit earum similique';
  cardImg: string = '../../../../assets/chas/cha-01.png';
  cardImg2: string = '../../../../assets/chas/cha-02.png';
  cardImg3: string = '../../../../assets/chas/cha-03.png';
  cardImg4: string = '../../../../assets/chas/cha-04.png';
}
