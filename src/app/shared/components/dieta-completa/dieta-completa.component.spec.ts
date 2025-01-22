import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaCompletaComponent } from './dieta-completa.component';

describe('DietaCompletaComponent', () => {
  let component: DietaCompletaComponent;
  let fixture: ComponentFixture<DietaCompletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietaCompletaComponent]
    });
    fixture = TestBed.createComponent(DietaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
