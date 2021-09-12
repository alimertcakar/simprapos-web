import { Component, Input, OnInit } from '@angular/core';
import { IProductSubgroupItem } from '../fastfood-orders/fastfood-orders.component';
import { formatMoney } from 'src/util';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  @Input() orders!: IProductSubgroupItem[];
  @Input() editMode!: boolean;
  @Input() toggleEditMode!: () => void;
  formatMoney: (money: string | number) => string;

  constructor() {
    this.formatMoney = formatMoney;
  }

  ngOnInit(): void {}
}
