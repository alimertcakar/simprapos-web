import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PinPageComponent } from './pin-page/pin-page.component';
import { IconsComponent } from './icons/icons.component';
import { FastFoodOrdersPageComponent } from './fastfood-orders-page/fastfood-orders-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PinPageComponent },
  { path: 'orders', component: FastFoodOrdersPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
