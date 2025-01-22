import { Component } from '@angular/core';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent {
  treinos = [
    {
      title: 'Treino para Emagrecimento Acelerado',
      description: `Focado na perda de peso rápida e sustentável, combina exercícios aeróbicos de alta intensidade e circuitos metabólicos. Ideal para queima de gordura e preservação muscular, melhora a saúde cardiovascular e a resistência física.`,
      imageSrc: '/assets/treino/1.png'
    },
    {
      title: 'Treino de Hipertrofia Muscular',
      description: `Para quem busca ganho de massa muscular e força, inclui levantamento de peso e exercícios de resistência. Estimula o crescimento muscular, melhora a densidade óssea e acelera o metabolismo.`,
      imageSrc: '/assets/treino/2.png'
    },
    {
      title: 'Treino de Força e Resistência',
      description: `Mistura levantamento de peso e circuitos para aumentar força e resistência. Trabalha múltiplos grupos musculares, otimizando desempenho esportivo e treinos intensos.`,
      imageSrc: '/assets/treino/3.png'
    },
    {
      title: 'Treino Funcional para Queima de Gordura',
      description: `Combina força, agilidade e equilíbrio para melhorar performance e queimar gordura. Trabalha vários grupos musculares, promovendo mobilidade e postura.`,
      imageSrc: '/assets/treino/4.png'
    },
    {
      title: 'Agachamento',
      description: `Maximiza o desempenho atlético com foco em força, resistência, velocidade e agilidade. Ideal para atletas, inclui pliometria, sprints e treinos explosivos.`,
      imageSrc: '/assets/treino/5.png'
    },
    {
      title: 'Treino para Definição Muscular',
      description: `Combina resistência e exercícios cardiovasculares para reduzir gordura e aumentar definição muscular. Perfeito para quem quer um corpo enxuto e bem definido.`,
      imageSrc: '/assets/treino/6.png'
    }
  ];
}
