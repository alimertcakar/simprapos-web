import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class PaymentSummaryComponent implements OnInit {
  @Input() orders!: any;

  constructor() {}

  ngOnInit(): void {}
}
