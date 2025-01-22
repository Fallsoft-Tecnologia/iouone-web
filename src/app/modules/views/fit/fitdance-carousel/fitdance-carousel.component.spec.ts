import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitdanceCarouselComponent } from './fitdance-carousel.component';

describe('FitdanceCarouselComponent', () => {
  let component: FitdanceCarouselComponent;
  let fixture: ComponentFixture<FitdanceCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitdanceCarouselComponent]
    });
    fixture = TestBed.createComponent(FitdanceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
