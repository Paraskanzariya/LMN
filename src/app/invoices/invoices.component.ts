import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['invoiceId', 'customerName', 'amount', 'dueDate', 'status'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private router: Router) {
    // Example data, replace with your actual invoice data
    // Example invoice data
    const invoices = [
      {
        invoiceId: 1,
        customerName: 'John Doe',
        amount: 100.00,
        dueDate: '2024-02-15',
        status: 'Paid'
      },
      {
        invoiceId: 2,
        customerName: 'Jane Smith',
        amount: 150.00,
        dueDate: '2024-02-20',
        status: 'Pending'
      },
      {
        invoiceId: 3,
        customerName: 'Bob Johnson',
        amount: 200.00,
        dueDate: '2024-02-25',
        status: 'Pending'
      },
      // Add more invoices as needed
    ];

    this.dataSource = new MatTableDataSource(invoices);
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.invoices);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addInvoice(): void {
    this.router.navigate(['add-new-invoice'])
  //   // Generate a new invoice ID (Replace this with your actual logic to generate the ID)
  //   const newInvoiceId = this.dataSource.data.length + 1;

  //   // Create a new invoice object
  //   const newInvoice = {
  //     invoiceId: newInvoiceId,
  //     // Add more properties as needed
  //   };

  //   // Add the new invoice to the data source
  //   this.dataSource.data.push(newInvoice);

  //   // Refresh the data source to reflect the changes
  //   this.dataSource._updateChangeSubscription();
  }

  deleteInvoice(invoice: any): void {
    // Your logic to delete an invoice goes here
    // Example:
    const index = this.dataSource.data.indexOf(invoice);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

}
