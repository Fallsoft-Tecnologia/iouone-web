export interface TipoTreino {
    id: number;
    tipoTreino: string;
  }
  
  export interface Exercicio {
    id: number;
    exercicio: string;
  }
  
  export interface Musculo {
    id: number;
    musculo: string;
  }
  
  export interface TreinoAtualizado {
    id: number;
    nome: string;
    descricao: string;
    foto: string[];
  }
  
  export interface Treino {
    id: number;
    tipoTreino: TipoTreino;
    exercicio: Exercicio;
    musculo: Musculo;
    treinoAtualizado: TreinoAtualizado;
  }
  