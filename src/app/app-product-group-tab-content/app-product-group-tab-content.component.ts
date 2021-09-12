import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  IProductGroup,
  IProductSubgroupItem,
} from 'src/app/fastfood-orders/fastfood-orders.component';
import { formatMoney } from 'src/util';

@Component({
  selector: 'app-product-group-tab-content',
  templateUrl: './app-product-group-tab-content.component.html',
  styleUrls: ['./app-product-group-tab-content.component.scss'],
})
export class AppProductGroupTabContentComponent implements OnInit {
  @Input() productGroup!: IProductGroup;
  @Input() index!: number;
  @Input() activeIndex!: number;
  activeSubgroup: number = 0;
  @Output() onAddOrder = new EventEmitter<object>();
  formatMoney: (money: string | number) => string;

  setActiveSubgroup(index: number) {
    this.activeSubgroup = index;
  }

  constructor() {
    this.formatMoney = formatMoney;
  }

  addOrder(order: IProductSubgroupItem) {
    this.onAddOrder.emit(order);
  }

  ngOnInit(): void {
    console.log(this.productGroup, 'productGroup');
  }
}
