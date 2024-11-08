import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoCartaoComponent } from './botao-cartao.component';

describe('BotaoCartaoComponent', () => {
  let component: BotaoCartaoComponent;
  let fixture: ComponentFixture<BotaoCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoCartaoComponent]
    });
    fixture = TestBed.createComponent(BotaoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
