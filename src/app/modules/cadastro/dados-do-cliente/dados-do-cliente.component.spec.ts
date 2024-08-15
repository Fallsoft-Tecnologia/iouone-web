import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoClienteComponent } from './dados-do-cliente.component';

describe('DadosDoClienteComponent', () => {
  let component: DadosDoClienteComponent;
  let fixture: ComponentFixture<DadosDoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosDoClienteComponent]
    });
    fixture = TestBed.createComponent(DadosDoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
