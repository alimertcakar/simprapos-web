import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupTabComponent } from './product-group-tab.component';

describe('ProductGroupTabComponent', () => {
  let component: ProductGroupTabComponent;
  let fixture: ComponentFixture<ProductGroupTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
