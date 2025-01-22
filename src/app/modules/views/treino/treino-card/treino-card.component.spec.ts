import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCardComponent } from './treino-card.component';

describe('TreinoCardComponent', () => {
  let component: TreinoCardComponent;
  let fixture: ComponentFixture<TreinoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreinoCardComponent]
    });
    fixture = TestBed.createComponent(TreinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
