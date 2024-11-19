import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-carousel',
  templateUrl: './music-carousel.component.html',
  styleUrls: ['./music-carousel.component.css']
})
export class MusicCarouselComponent {
  @Input() musicCards: any[] = []; // Recebe os cards de música do componente pai
}
