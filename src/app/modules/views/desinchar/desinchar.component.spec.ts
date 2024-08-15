import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesincharComponent } from './desinchar.component';

describe('DesincharComponent', () => {
  let component: DesincharComponent;
  let fixture: ComponentFixture<DesincharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesincharComponent]
    });
    fixture = TestBed.createComponent(DesincharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
