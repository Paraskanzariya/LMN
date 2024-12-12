import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['customerId', 'customerName', 'email', 'phone', 'address', 'action']; // Add more columns as needed

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private route: Router) {
    // Example data, replace with your actual customer data
    const customer = [
      { customerId: 1, customerName: 'Alice Johnson', email: 'alice@example.com', phone: '+1234567890', address: '123 Main St' },
      { customerId: 2, customerName: 'Bob Smith', email: 'bob@example.com', phone: '+9876543210', address: '456 Elm St' },
      { customerId: 3, customerName: 'Charlie Brown', email: 'charlie@example.com', phone: '+1357924680', address: '789 Oak St' },
      { customerId: 4, customerName: 'Diana Miller', email: 'diana@example.com', phone: '+2468013579', address: '321 Maple St' },
      { customerId: 5, customerName: 'Eva Davis', email: 'eva@example.com', phone: '+3692581470', address: '654 Pine St' },
      { customerId: 6, customerName: 'Frank Wilson', email: 'frank@example.com', phone: '+7539514682', address: '987 Cedar St' },
      { customerId: 7, customerName: 'Grace Taylor', email: 'grace@example.com', phone: '+8642097531', address: '147 Birch St' },
      { customerId: 8, customerName: 'Henry Lee', email: 'henry@example.com', phone: '+2583691470', address: '258 Walnut St' },
      { customerId: 9, customerName: 'Ivy Clark', email: 'ivy@example.com', phone: '+4712583690', address: '369 Ash St' },
      { customerId: 10, customerName: 'Jack Turner', email: 'jack@example.com', phone: '+9517538462', address: '456 Poplar St' }
    ];

    this.dataSource = new MatTableDataSource(customer);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addcustomer() {
    this.route.navigate(['add-customers']);
  }

  deleteCustomer(customer: any): void {
    const index = this.dataSource.data.indexOf(customer);
    if (index > -1) {
      // Show confirmation dialog
      const isConfirmed = window.confirm('Are you sure you want to delete this customer?');
      if (isConfirmed) {
        // Delete the customer if confirmed
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
      }
    }
}


}
