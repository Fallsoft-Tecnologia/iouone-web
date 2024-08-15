import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasComponent } from './dietas.component';

describe('DietasComponent', () => {
  let component: DietasComponent;
  let fixture: ComponentFixture<DietasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietasComponent]
    });
    fixture = TestBed.createComponent(DietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
