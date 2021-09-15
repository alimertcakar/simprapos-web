import { PaymentReceiveKeyboardComponent } from './../payment-receive-keyboard/payment-receive-keyboard.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-receive',
  templateUrl: './payment-receive.component.html',
  styleUrls: ['./payment-receive.component.scss'],
})
export class PaymentReceiveComponent implements OnInit {
  @Input() orders!: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentReceiveKeyboardComponent, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.result = result;
    });
  }

  ngOnInit(): void {}
}
