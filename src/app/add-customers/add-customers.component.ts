import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table'; // Add this import
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent {
  currentTime = new Date().toLocaleTimeString();

  @Output() addInvoiceEvent = new EventEmitter<any>();
  ngForm!: FormGroup;

  dataSource: MatTableDataSource<any>; // Declare dataSource without initialization

  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    website: [''],
    timeZone: ['']
  });

  constructor(private fb: FormBuilder, private router: Router) {
    this.dataSource = new MatTableDataSource([ // Initialize dataSource here
      { customerId: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', company: 'ABC Inc.', website: 'www.example.com', timeZone: 'GMT-06:00' },
      { customerId: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', company: 'XYZ Corp.', website: 'www.xyzcorp.com', timeZone: 'GMT-08:00' }
      // Add more customer data as needed
    ]);
  }

  displayedColumns: string[] = ['customerId', 'firstName', 'lastName', 'email', 'company', 'website', 'timeZone'];

  // Method to handle the Save Changes button click event
  saveChanges() {
    console.log('Save Changes button clicked');
    // Add logic to save changes here
  }

  // Method to handle the Cancel button click event
  cancel() {
    console.log('Cancel button clicked');
    // Add logic to cancel changes here
  }

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
