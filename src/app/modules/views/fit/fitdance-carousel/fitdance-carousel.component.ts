import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fitdance-carousel',
  templateUrl: './fitdance-carousel.component.html',
  styleUrls: ['./fitdance-carousel.component.css']
})
export class FitdanceCarouselComponent {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;

  private currentScrollPosition = 0;

  scroll(direction: number): void {
    const wrapper = this.carouselWrapper.nativeElement;
    const cardWidth = wrapper.offsetWidth / 3; // Adjust based on visible items
    this.currentScrollPosition += direction * cardWidth;

    wrapper.scrollTo({
      left: this.currentScrollPosition,
      behavior: 'smooth',
    });
  }
}
