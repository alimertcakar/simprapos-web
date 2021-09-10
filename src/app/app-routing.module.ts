import { IconsComponent } from './icons/icons.component';
import { PinScreenComponent } from './pin-screen/pin-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PinScreenComponent },
  { path: 'ic', component: IconsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
