import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCompletoComponent } from './treino-completo.component';

describe('TreinoCompletoComponent', () => {
  let component: TreinoCompletoComponent;
  let fixture: ComponentFixture<TreinoCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreinoCompletoComponent]
    });
    fixture = TestBed.createComponent(TreinoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
