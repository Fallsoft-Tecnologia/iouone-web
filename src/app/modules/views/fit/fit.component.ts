import { Component } from '@angular/core';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent {
  title = "Mais Vistos";

  videos = [
    {
      title: 'Shape of You',
      artists: 'Ed Sheeran',
      imageUrl: '/assets/fit/fit-dance.png',
      link: 'https://www.youtube.com/watch?v=JGwWNGJdvx8'
    },
    {
      title: 'Blinding Lights',
      artists: 'The Weeknd',
      imageUrl: '/assets/fit/fit-dance.png',
      link: 'https://www.youtube.com/watch?v=fHI8X4OXluQ'
    },
    {
      title: 'Levitating',
      artists: 'Dua Lipa feat. DaBaby',
      imageUrl: '/assets/fit/fit-dance.png',
      link: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw'
    },
    {
      title: 'drivers license',
      artists: 'Olivia Rodrigo',
      imageUrl: '/assets/fit/fit-dance.png',
      link: 'https://www.youtube.com/watch?v=ZmDBbnmKpqQ'
    },
  ];

  showModal = false;
  currentVideoLink: string | null = null;

  openModal(videoLink: string): void {
    const videoId = this.extractVideoId(videoLink);
    this.currentVideoLink = `https://www.youtube.com/embed/${videoId}`;
    this.showModal = true;
  }
  
  private extractVideoId(url: string): string {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  closeModal(): void {
    this.showModal = false;
    this.currentVideoLink = null;
  }
}

