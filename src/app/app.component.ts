import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simpra';

  showNav: boolean = false;
  navlessPages = ['/login', '/register'];

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (this.navlessPages.includes(event['url'])) {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      }
    });
  }
}
