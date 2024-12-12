import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment.model'; // Import Payment model if needed

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl: string = 'https://api.example.com/payments'; // Example API URL, replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Fetch payments from the server
  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  // Add a new payment
  addPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  // Update an existing payment
  updatePayment(payment: Payment): Observable<Payment> {
    const url = `${this.apiUrl}/${payment.id}`; // Assuming your API uses a unique identifier for payments
    return this.http.put<Payment>(url, payment);
  }

  // Delete a payment
  deletePayment(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
