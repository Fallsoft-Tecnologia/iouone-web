import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPixComponent } from './botao-pix.component';

describe('BotaoPixComponent', () => {
  let component: BotaoPixComponent;
  let fixture: ComponentFixture<BotaoPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoPixComponent]
    });
    fixture = TestBed.createComponent(BotaoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
