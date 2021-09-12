import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-page',
  templateUrl: './pin-page.component.html',
  styleUrls: ['./pin-page.component.scss'],
})
export class PinPageComponent implements OnInit {
  constructor(private router: Router) {}

  goOrders() {
    this.router.navigate(['/orders']);
  }

  ngOnInit(): void {}
}
