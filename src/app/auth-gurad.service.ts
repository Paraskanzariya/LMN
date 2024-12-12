import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router,
    private http: HttpClient) { }


  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }


  logout(): void {
    localStorage.removeItem('token');
    console.log("LoggedOut!");
    this.authService.logout();
  }
}


