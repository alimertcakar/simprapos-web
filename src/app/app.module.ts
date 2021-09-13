import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FastFoodOrdersPageComponent } from './fastfood-orders-page/fastfood-orders-page.component';
import { HeaderComponent } from './headerr/header/header.component';
import { IconsComponent } from './icons/icons.component';
import { FastfoodOrdersComponent } from './fastfood-orders/fastfood-orders.component';
import { ProductGroupTabComponent } from './fastfood-orders-page/product-group-tab/product-group-tab.component';
import { AppProductGroupTabContentComponent } from './app-product-group-tab-content/app-product-group-tab-content.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PinPageComponent } from './pin-page/pin-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdePopoverModule } from '@material-extended/mde';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FastFoodOrdersPageComponent,
    AppComponent,
    HeaderComponent,
    IconsComponent,
    FastfoodOrdersComponent,
    ProductGroupTabComponent,
    AppProductGroupTabContentComponent,
    OrderSummaryComponent,
    PinPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdePopoverModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
