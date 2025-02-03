export interface TipoFitDance {
    id: number;
    tipoFitDance: string;
}

export interface Fit {
    id: number;
    nome: string;
    urlFitDance: string;
    video: string[];
    contadorVistos: number;
    tipoFitDance: TipoFitDance;
    autor: string;
    foto: Uint8Array;
}