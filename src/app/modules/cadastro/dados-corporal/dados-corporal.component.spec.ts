import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCorporalComponent } from './dados-corporal.component';

describe('DadosCorporalComponent', () => {
  let component: DadosCorporalComponent;
  let fixture: ComponentFixture<DadosCorporalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosCorporalComponent]
    });
    fixture = TestBed.createComponent(DadosCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
