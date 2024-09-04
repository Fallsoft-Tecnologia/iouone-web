import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRouterComponent } from './cadastro-router.component';

describe('CadastroRouterComponent', () => {
  let component: CadastroRouterComponent;
  let fixture: ComponentFixture<CadastroRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroRouterComponent]
    });
    fixture = TestBed.createComponent(CadastroRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
