import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinScreenComponent } from './pin-screen.component';

describe('PinScreenComponent', () => {
  let component: PinScreenComponent;
  let fixture: ComponentFixture<PinScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
