import { Component } from '@angular/core';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Post[] = [
    {
      id: 1,
      user: 'Alice',
      content: 'Estou começando minha jornada de emagrecimento! Alguém mais?',
      comments: [
        { id: 1, user: 'Maria', content: 'Parabéns pela decisão! 💪' },
        { id: 2, user: 'Joana', content: 'Estamos juntas!' }
      ],
      newCommentContent: '' // Adicionando um campo para novo comentário
    },
    {
      id: 2,
      user: 'Bruna',
      content: 'Hoje consegui correr 5km sem parar! 🏃‍♀️',
      comments: [],
      newCommentContent: '' // Adicionando um campo para novo comentário
    }
  ];

  newPostContent = '';

  addPost() {
    if (this.newPostContent.trim()) {
      this.posts.unshift({
        id: Date.now(),
        user: 'Usuário',
        content: this.newPostContent,
        comments: [],
        newCommentContent: '' // Adicionando o campo ao novo post
      });
      this.newPostContent = '';
    }
  }

  addComment(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post && post.newCommentContent.trim()) {
      post.comments.push({
        id: Date.now(),
        user: 'Usuário',
        content: post.newCommentContent // Usando o campo específico do post
      });
      post.newCommentContent = ''; // Limpa o campo específico do post
    }
  }
}
