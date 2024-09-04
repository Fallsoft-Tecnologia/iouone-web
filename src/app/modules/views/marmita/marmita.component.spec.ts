import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmitaComponent } from './marmita.component';

describe('MarmitaComponent', () => {
  let component: MarmitaComponent;
  let fixture: ComponentFixture<MarmitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarmitaComponent]
    });
    fixture = TestBed.createComponent(MarmitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
