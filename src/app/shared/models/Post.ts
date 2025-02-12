import { Comment } from "./Comment";

export interface Post {
    id: number;
    nomePessoa: string;
    mensagem: string;
    comments: Comment[];
    newCommentContent: string;
}