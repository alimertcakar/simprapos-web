import { Component, Input, OnInit } from '@angular/core';
import { IProductSubgroupItem } from '../fastfood-orders/fastfood-orders.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  @Input() orders!: IProductSubgroupItem[];

  constructor() {}

  ngOnInit(): void {}
}
