import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiveKeyboardComponent } from './payment-receive-keyboard.component';

describe('PaymentReceiveKeyboardComponent', () => {
  let component: PaymentReceiveKeyboardComponent;
  let fixture: ComponentFixture<PaymentReceiveKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentReceiveKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiveKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
