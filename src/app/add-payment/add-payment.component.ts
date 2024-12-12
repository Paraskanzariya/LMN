import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model'; 

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'] 
})
export class AddPaymentComponent {
  constructor(private paymentService: PaymentService) { }

  submitPayment(paymentForm: NgForm): void {
    if (paymentForm.valid) {
      const { customerName, amount, paymentDate } = paymentForm.value;
      const payment: Payment = { customerName, amount, paymentDate };
      this.paymentService.addPayment(payment).subscribe(
        () => {
          // Handle success
          console.log('Payment added successfully!');
          paymentForm.resetForm();
        },
        (error: any) => {
          // Handle error
          console.error('Error adding payment:', error);
        }
      );
    }
  }
}
