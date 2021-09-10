import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFoodOrdersPageComponent } from './fastfood-orders-page.component';

describe('FastFoodOrdersPageComponent', () => {
  let component: FastFoodOrdersPageComponent;
  let fixture: ComponentFixture<FastFoodOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastFoodOrdersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastFoodOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
