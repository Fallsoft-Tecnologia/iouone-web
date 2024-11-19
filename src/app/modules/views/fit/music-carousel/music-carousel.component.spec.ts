import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCarouselComponent } from './music-carousel.component';

describe('MusicCarouselComponent', () => {
  let component: MusicCarouselComponent;
  let fixture: ComponentFixture<MusicCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicCarouselComponent]
    });
    fixture = TestBed.createComponent(MusicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
