import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-invoice',
  templateUrl: './add-new-invoice.component.html',
  styleUrl: './add-new-invoice.component.css'
})
export class AddNewInvoiceComponent {

  @Output() addInvoiceEvent = new EventEmitter<any>();
  ngForm!: FormGroup;

  constructor(private router: Router) { }

  addInvoice(form: NgForm): void {
    if (form.valid) {
      this.addInvoiceEvent.emit(form.value);
      form.reset();
    }
    this.router.navigate(['invoices'])
  }

  cancelAddInvoice(): void {
    // this.ngForm.reset()
    this.router.navigate(['invoices'])
  }
}
