export interface DietaCompleta {
    titulo: string;
    descricao: string;
    itens: { dia: string; descricao: string }[];
}