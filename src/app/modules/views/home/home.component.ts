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
      this.posts = response.content.map((post: Post) => ({
        id: post.id,
        nomePessoa: post.nomePessoa,
        mensagem: post.mensagem,
        // Processando o comentário para adicionar o nome do cliente
        comentariov2DTO: post.comentariov2DTO.map((comment: any) => ({
          id: comment.id,
          nomeCliente: comment.pessoa?.nome,  // Extraindo o nome da pessoa dentro de cada comentário
          mensagemComentario: comment.mensagemComentario
        })),
        newCommentContent: ''
      }));
      console.log(this.posts);
      console.log(response);
    });
  }
  
  

  addPost(): void {
    if (this.newPostContent.trim()) {
      this.postService.createPost(this.newPostContent).subscribe(response => {
        console.log(response);
        this.posts.unshift({
          id: response.id,
          nomePessoa: response.pessoa.nome,
          mensagem: response.mensagem,
          comentariov2DTO: [],
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
        post.comentariov2DTO.push({
          id: response.id,
          nomeCliente: response.nomeCliente,
          mensagemComentario: response.mensagemComentario
        });
        post.newCommentContent = '';
      });
    }
  }
}
