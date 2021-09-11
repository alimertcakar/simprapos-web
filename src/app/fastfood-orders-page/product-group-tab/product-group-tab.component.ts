import { Component, OnInit, Input } from '@angular/core';
import { IProductGroup } from 'src/app/fastfood-orders/fastfood-orders.component';

@Component({
  selector: 'app-product-group-tab',
  templateUrl: './product-group-tab.component.html',
  styleUrls: ['./product-group-tab.component.scss'],
})
export class ProductGroupTabComponent implements OnInit {
  @Input() productGroup: IProductGroup;

  constructor() {}

  ngOnInit(): void {}
}
