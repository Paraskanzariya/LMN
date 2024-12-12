import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LMN';

  showSliderBar: boolean = true;
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check current route and hide slider bar and header if navigating to login page
        this.showSliderBar = !this.router.url.includes('login') && !this.router.url.includes('signup')
          && !this.router.url.includes('forgot-password') && !this.router.url.includes('reset-password');
        this.showHeader = !this.router.url.includes('login') && !this.router.url.includes('signup')
          && !this.router.url.includes('forgot-password') && !this.router.url.includes('reset-password');

      }
    });
  }
}
