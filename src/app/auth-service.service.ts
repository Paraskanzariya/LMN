import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:3000';
  private loginUrl = '/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    console.log("Sending login request with data:", loginData); // Log request payload
    return this.http.post<any>(`${this.apiUrl}${this.loginUrl}`, loginData).pipe(
      tap(response => {
        console.log('Response from server:', response); // Log server response
        localStorage.setItem('token', response.token); // Store token in local storage upon successful login
        console.log("Token stored in local storage!");
      }),
      catchError(this.handleError)
    );
  }

  signUp(signUpData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signUp`, signUpData);
  }

  // forgotPassword(email: any) {
  //   const payload = { email }
  //   return this.http.post<any>(`${this.apiUrl}/forgot-pass`, payload).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('Logged out successfully');
  }

}