import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistaComponent } from './nutricionista.component';

describe('NutricionistaComponent', () => {
  let component: NutricionistaComponent;
  let fixture: ComponentFixture<NutricionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutricionistaComponent]
    });
    fixture = TestBed.createComponent(NutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
