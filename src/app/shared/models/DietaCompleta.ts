export interface DietaCompleta {
    titulo: string;
    descricao: string;
    itens: { refeicao: string; descricao: string }[];
}