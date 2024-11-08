import { Comment } from "./Comment";

export interface Post {
    id: number;
    user: string;
    content: string;
    comments: Comment[];
    newCommentContent: string;
}