import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiveComponent } from './payment-receive.component';

describe('PaymentReceiveComponent', () => {
  let component: PaymentReceiveComponent;
  let fixture: ComponentFixture<PaymentReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentReceiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
