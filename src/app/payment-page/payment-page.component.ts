import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
})
export class PaymentPageComponent implements OnInit {
  orders: any[] = [];
  addOrder(order: any) {
    console.log(this.orders);
    this.orders.push(order);
  }
  constructor() {}

  ngOnInit(): void {}
}
