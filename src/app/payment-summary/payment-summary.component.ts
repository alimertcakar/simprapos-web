import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class PaymentSummaryComponent implements OnInit {
  @Output() onAddOrder = new EventEmitter<object>();

  addOrder(order: any) {
    this.onAddOrder.emit(order);
  }

  constructor() {}

  ngOnInit(): void {}
}
