import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherPagamentoButtonComponent } from './escolher-pagamento-button.component';

describe('EscolherPagamentoButtonComponent', () => {
  let component: EscolherPagamentoButtonComponent;
  let fixture: ComponentFixture<EscolherPagamentoButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolherPagamentoButtonComponent]
    });
    fixture = TestBed.createComponent(EscolherPagamentoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
