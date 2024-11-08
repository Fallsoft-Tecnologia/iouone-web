import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEnderecoComponent } from './dados-endereco.component';

describe('DadosEnderecoComponent', () => {
  let component: DadosEnderecoComponent;
  let fixture: ComponentFixture<DadosEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosEnderecoComponent]
    });
    fixture = TestBed.createComponent(DadosEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
