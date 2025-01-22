import { Component } from '@angular/core';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css'],
})
export class DietasComponent {
  paginaAtual: string = 'router-outlet';

  dietas = [
    {
      id: 1,
      titulo: 'Plano Nutrição Balanceada',
      descricao: 'Uma solução para quem busca simplicidade e saúde duradoura. Este plano reúne o melhor dos nutrientes essenciais para garantir energia, disposição e bem-estar. Com receitas práticas e adaptáveis ao seu cotidiano, ele se concentra em uma alimentação variada e equilibrada, ajudando a construir hábitos saudáveis que transformam sua relação com a comida.ø',
      imagem: '/assets/dieta/1.png',
    },
    {
      id: 2,
      titulo: 'Dieta Integrativa',
      descricao: 'Mais do que uma dieta, um estilo de vida que une ciência e práticas holísticas. Focada em alimentos naturais, antioxidantes e anti-inflamatórios, a Dieta Integrativa considera seu corpo como um todo, equilibrando o físico e o emocional. Ideal para quem deseja não apenas emagrecer, mas também melhorar a saúde geral e reduzir o estresse.',
      imagem: '/assets/dieta/2.png',
    },
    {
      id: 3,
      titulo: 'Programa Metabolismo Ótimo',
      descricao: 'Transforme seu corpo ativando o metabolismo de forma eficaz! Este programa combina estratégias como jejum intermitente, alimentos termogênicos e treinos específicos para aumentar a queima de calorias mesmo em repouso. Com acompanhamento detalhado, é possível alcançar resultados expressivos sem abrir mão de uma alimentação gostosa.',
      imagem: '/assets/dieta/3.png',
    },
    {
      id: 4,
      titulo: 'Dieta de Transformação Corporal',
      descricao: 'Perfeita para quem quer uma mudança visível e acelerada! Essa dieta alia um plano alimentar personalizado, focado em queima de gordura e definição muscular, a um cronograma estratégico de exercícios. A promessa é transformar não só seu corpo, mas também sua confiança e disposição.',
      imagem: '/assets/dieta/4.png',
    },
    {
      id: 5,
      titulo: 'Plano Alimentar Premium',
      descricao: 'Um programa voltado para quem valoriza sofisticação e exclusividade. Este plano inclui alimentos de alta qualidade, receitas gourmet e um acompanhamento personalizado, tornando a experiência de emagrecimento algo prazeroso e eficaz. O foco está em oferecer resultados consistentes sem abrir mão do sabor e da variedade.',
      imagem: '/assets/dieta/5.png',
    },
  ];
}
