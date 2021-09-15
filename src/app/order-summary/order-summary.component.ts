import { Component, Input, OnInit } from '@angular/core';
import { IProductSubgroupItem } from '../fastfood-orders/fastfood-orders.component';
import { formatMoney } from 'src/util';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.formatMoney = formatMoney;
  }

  goPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit(): void {}
}
