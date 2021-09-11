import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductGroup } from 'src/app/fastfood-orders/fastfood-orders.component';

@Component({
  selector: 'app-product-group-tab',
  templateUrl: './product-group-tab.component.html',
  styleUrls: ['./product-group-tab.component.scss'],
})
export class ProductGroupTabComponent implements OnInit {
  @Input() productGroup!: IProductGroup;
  @Input() index!: number;
  @Input() activeIndex!: number;
  @Output() onActiveIndexChange = new EventEmitter<number>();

  constructor() {}

  setActiveIndex(index: number) {
    this.onActiveIndexChange.emit(index);
  }

  ngOnInit(): void {}
}
