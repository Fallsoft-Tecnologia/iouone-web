import { Comment } from "./Comment";

export interface Post {
    id: number;
    nomePessoa: string;
    mensagem: string;
    comentariov2DTO: Comment[];
    newCommentContent: string;
}