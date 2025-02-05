import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCompletaComponent } from './receita-completa.component';

describe('ReceitaCompletaComponent', () => {
  let component: ReceitaCompletaComponent;
  let fixture: ComponentFixture<ReceitaCompletaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaCompletaComponent]
    });
    fixture = TestBed.createComponent(ReceitaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
