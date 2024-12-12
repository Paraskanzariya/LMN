import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      return true; // Allow access if not authenticated
    } else {
      this.router.navigate(['/']); // Redirect to home if authenticated
      return false;
    }
  }
}
