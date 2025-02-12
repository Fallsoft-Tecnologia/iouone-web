import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/Comment';
import { Post } from 'src/app/shared/models/Post';
import { PostService } from 'src/app/shared/services/PostService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  newPostContent = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(page: number = 0, size: number = 10): void {
    this.postService.getPosts(page, size).subscribe(response => {
      console.log(response);
      this.posts = response.content.map((post: Post) => ({
        id: post.id,
        nomePessoa: post.nomePessoa,
        mensagem: post.mensagem,
        comments: [],
        newCommentContent: ''

        
      }));
      console.log(this.posts);
      this.loadCommentsForPosts();
    });
  }

  loadCommentsForPosts(): void {
    this.posts.forEach(post => {
      this.postService.getComments(post.id).subscribe(response => {
        console.log('Resposta dos comentários:', response); // Adicionando log para ver a resposta
        if (response && response.content) {
          post.comments = response.content.map((comment: Comment) => ({
            id: comment.id,
            nomeCliente: comment.nomeCliente,
            mensagemComentario: comment.mensagemComentario
          }));
        } else {
          console.log(`Nenhum comentário encontrado para o post ${post.id}`);
          post.comments = []; // Garantir que o campo de comentários seja um array vazio se não houver dados
        }
      });
    });
  }
  

  addPost(): void {
    if (this.newPostContent.trim()) {
      this.postService.createPost(this.newPostContent).subscribe(response => {
        this.posts.unshift({
          id: response.id,
          nomePessoa: response.user,
          mensagem: response.mensagem,
          comments: [],
          newCommentContent: ''
        });
        this.newPostContent = '';
      });
    }
  }

  addComment(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post && post.newCommentContent.trim()) {
      this.postService.createComment(postId, post.newCommentContent).subscribe(response => {
        post.comments.push({
          id: response.id,
          nomeCliente: response.user,
          mensagemComentario: response.mensagemComentario
        });
        post.newCommentContent = '';
      });
    }
  }
}
