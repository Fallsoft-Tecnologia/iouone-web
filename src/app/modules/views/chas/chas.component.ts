import { Component } from '@angular/core';

@Component({
  selector: 'app-chas',
  templateUrl: './chas.component.html',
  styleUrls: ['./chas.component.css']
})
export class ChasComponent {
  chas = [
    {
      id: 1,
      titulo: 'Chá Detox Revitalizante',
      descricao: 'Desintoxique seu corpo e elimine toxinas de forma natural com o Chá Detox Revitalizante. Com uma combinação poderosa de ervas que aceleram o metabolismo e melhoram a digestão, este chá ajuda a reduzir o inchaço, limpar o organismo e deixar sua pele mais radiante. Perfeito para aqueles momentos em que você precisa de um impulso de energia e leveza!',
      imagem: '/assets/dieta/1.png',
    },
    {
      id: 2,
      titulo: 'Chá Diurético de Ervas',
      descricao: 'O Chá Diurético de Ervas é a opção perfeita para quem deseja combater o inchaço e melhorar a retenção de líquidos. Com uma mistura de ervas como dente-de-leão e cavalinha, ele estimula a eliminação de líquidos acumulados, proporcionando sensação de leveza e bem-estar. Beba ao longo do dia e sinta-se mais energizado e desinchado!',
      imagem: '/assets/dieta/2.png',
    },
    {
      id: 3,
      titulo: 'Chá Desinchante de Gengibre',
      descricao: 'Refresque-se e desinche com o Chá Desinchante de Gengibre. Conhecido por suas propriedades anti-inflamatórias e digestivas, o gengibre ajuda a reduzir o inchaço abdominal, melhora a digestão e acelera o metabolismo. Uma opção saborosa e eficaz para quem busca um alívio rápido e natural do inchaço.',
      imagem: '/assets/dieta/3.png',
    },
    {
      id: 4,
      titulo: 'Chá Calmante de Menta e Limão',
      descricao: 'O Chá Calmante de Menta e Limão é a combinação ideal para aliviar o estresse e combater o inchaço. A menta é conhecida por suas propriedades digestivas, enquanto o limão ajuda a desintoxicar o corpo e melhorar a circulação. Juntos, esses ingredientes proporcionam um alívio imediato e uma sensação de frescor e bem-estar.',
      imagem: '/assets/dieta/4.png',
    },
    {
      id: 5,
      titulo: ' Chá de Aloe Vera e Hibisco',
      descricao: 'O Chá de Aloe Vera e Hibisco é a bebida ideal para quem deseja cuidar do corpo de dentro para fora. O hibisco tem propriedades diuréticas que ajudam a combater a retenção de líquidos, enquanto o aloe vera promove a digestão e purificação do organismo. Essa combinação poderosa ajuda a desinchar e proporciona um cuidado completo para sua saúde.',
      imagem: '/assets/dieta/5.png',
    },
  ];
}
