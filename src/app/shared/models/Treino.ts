export interface Treino {
    titulo: string;
    descricao: string;
    itens: { tipoTreino: string; treinoCompleto: string[] }[];
}
