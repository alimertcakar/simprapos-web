import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductGroupTabContentComponent } from './app-product-group-tab-content.component';

describe('AppProductGroupTabContentComponent', () => {
  let component: AppProductGroupTabContentComponent;
  let fixture: ComponentFixture<AppProductGroupTabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductGroupTabContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductGroupTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
