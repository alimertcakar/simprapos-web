import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodOrdersComponent } from './fastfood-orders.component';

describe('FastfoodOrdersComponent', () => {
  let component: FastfoodOrdersComponent;
  let fixture: ComponentFixture<FastfoodOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
