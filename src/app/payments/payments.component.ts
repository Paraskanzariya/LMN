import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import jspdf from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['paymentId', 'customerName', 'amount', 'paymentDate'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private router: Router) {
    // Example data, replace with your actual payment data
    const payments = [
      {
        paymentId: 1,
        customerName: 'John Doe',
        amount: 100.00,
        paymentDate: '2024-02-15'
      },
      {
        paymentId: 2,
        customerName: 'Jane Smith',
        amount: 150.00,
        paymentDate: '2024-02-20'
      },
      {
        "paymentId": 3,
        "customerName": "Michael Johnson",
        "amount": 200.00,
        "paymentDate": "2024-02-25"
      },
      {
        "paymentId": 4,
        "customerName": "Emily Brown",
        "amount": 75.00,
        "paymentDate": "2024-02-28"
      },
      {
        "paymentId": 5,
        "customerName": "William Taylor",
        "amount": 120.00,
        "paymentDate": "2024-03-02"
      }
      // Add more payments as needed
    ];

    this.dataSource = new MatTableDataSource(payments);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addPayment(): void {
    this.router.navigate(['add-paymant'])
    // Logic to add a new payment goes here
    console.log('Add new payment');
  }

  downloadAsPDF(): void {
    const doc = new jspdf();
    // Add your logic to generate PDF content here
    // For example, you can loop through the table data and add it to the PDF
    doc.text('Payments Table', 10, 10);
    // Save the PDF file
    doc.save('payments.pdf');
  }
}