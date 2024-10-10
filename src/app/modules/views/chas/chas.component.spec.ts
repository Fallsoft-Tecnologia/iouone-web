import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasComponent } from './chas.component';

describe('ChasComponent', () => {
  let component: ChasComponent;
  let fixture: ComponentFixture<ChasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChasComponent]
    });
    fixture = TestBed.createComponent(ChasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
