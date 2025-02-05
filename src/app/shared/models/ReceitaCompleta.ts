export interface ReceitaCompleta {
    titulo: string;
    descricao: string;
    ingredientes: string[]; 
    preparo: {
        descricao: string[];
    };
}