import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixQrcodeComponent } from './pix-qrcode.component';

describe('PixQrcodeComponent', () => {
  let component: PixQrcodeComponent;
  let fixture: ComponentFixture<PixQrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixQrcodeComponent]
    });
    fixture = TestBed.createComponent(PixQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
