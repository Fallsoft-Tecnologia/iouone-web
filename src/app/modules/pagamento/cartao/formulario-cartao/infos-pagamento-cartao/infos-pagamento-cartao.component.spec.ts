import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPagamentoCartaoComponent } from './infos-pagamento-cartao.component';

describe('InfosPagamentoCartaoComponent', () => {
  let component: InfosPagamentoCartaoComponent;
  let fixture: ComponentFixture<InfosPagamentoCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosPagamentoCartaoComponent]
    });
    fixture = TestBed.createComponent(InfosPagamentoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
