export interface Dieta {
    titulo: string;
    descricao: string;
    itens: { dia: string; descricao: string }[];
}