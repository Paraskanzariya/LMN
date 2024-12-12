import { Component } from '@angular/core';
import { SliderbarService } from '../sliderbar.service';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode: boolean;
  isShowProfile: boolean = false;

  constructor(private sliderBar: SliderbarService, private route: Router,
    private themeService: ThemeService, private authService: AuthService, private router: Router) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  toggleSliderBar() {
    this.sliderBar.toggleSliderBar();
  }

  logout() {
    try {
      localStorage.removeItem('token');
      this.authService.logout(); // Implement the logout method in AuthService
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  openProfile() {
    this.isShowProfile = !this.isShowProfile;
  }

}
