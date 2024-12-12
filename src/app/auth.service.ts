// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  constructor() { }

  login(username: string, password: string) {
    // Perform authentication logic here (e.g., API call)
    // Set isAuthenticated and isAdmin based on authentication result
    // For demonstration purposes, hardcoding values
    this.isAuthenticated = true;
    this.isAdmin = (username === 'admin'); // Assume admin username
  }

  logout() {
    // Perform logout logic here
    this.isAuthenticated = false;
    this.isAdmin = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
