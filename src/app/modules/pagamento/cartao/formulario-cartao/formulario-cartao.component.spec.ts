import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCartaoComponent } from './formulario-cartao.component';

describe('FormularioCartaoComponent', () => {
  let component: FormularioCartaoComponent;
  let fixture: ComponentFixture<FormularioCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCartaoComponent]
    });
    fixture = TestBed.createComponent(FormularioCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
