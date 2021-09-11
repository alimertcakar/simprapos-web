import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductGroup } from 'src/app/fastfood-orders/fastfood-orders.component';

@Component({
  selector: 'app-app-product-group-tab-content',
  templateUrl: './app-product-group-tab-content.component.html',
  styleUrls: ['./app-product-group-tab-content.component.scss'],
})
export class AppProductGroupTabContentComponent implements OnInit {
  @Input() productGroup!: IProductGroup;
  @Input() index!: number;
  @Input() activeIndex!: number;

  constructor() {}

  ngOnInit(): void {}
}
