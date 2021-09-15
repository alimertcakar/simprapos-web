import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-receive',
  templateUrl: './payment-receive.component.html',
  styleUrls: ['./payment-receive.component.scss'],
})
export class PaymentReceiveComponent implements OnInit {
  @Input() orders!: any;

  constructor() {}

  ngOnInit(): void {}
}
