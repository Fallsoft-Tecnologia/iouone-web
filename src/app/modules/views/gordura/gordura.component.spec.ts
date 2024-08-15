import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorduraComponent } from './gordura.component';

describe('GorduraComponent', () => {
  let component: GorduraComponent;
  let fixture: ComponentFixture<GorduraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GorduraComponent]
    });
    fixture = TestBed.createComponent(GorduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
