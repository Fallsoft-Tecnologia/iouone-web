export interface Treino {
  titulo: string;
  objetivo: string;
  aquecimento: {
      tempo: number;
      exercicios: string[];
  };
  treinoPrincipal: {
      tempo: number;
      exercicios: { nome: string; duracao: number }[];
  };
  finalizacao: {
      tempo: number;
      exercicios: string[];
  };
}
