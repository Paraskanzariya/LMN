import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['loanId', 'customerName', 'loanType', 'loanAmount', 'interestRate', 'term', 'issuedDate', 'dueDate', 'status']; // Add more columns as needed
  reportData: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    // Initialize data source
    this.dataSource = new MatTableDataSource(this.reportData);
    this.dataSource.paginator = this.paginator;
  }

  generateReport(): void {
    // Call API or perform necessary actions to generate report data
    // Replace this with actual logic to fetch report data
    this.reportData = [
      {
        "loanId": 101,
        "customerName": "John Doe",
        "loanType": "Personal Loan",
        "loanAmount": 5000,
        "interestRate": 8.5,
        "term": 12,
        "issuedDate": "2023-01-15",
        "dueDate": "2023-02-15",
        "status": "Active",
        "payments": [
          {
            "paymentId": 1,
            "amount": 430,
            "paymentDate": "2023-01-15",
            "status": "Paid"
          },
          {
            "paymentId": 2,
            "amount": 430,
            "paymentDate": "2023-02-15",
            "status": "Pending"
          },
          {
            "paymentId": 3,
            "amount": 430,
            "paymentDate": "2023-03-15",
            "status": "Pending"
          }
        ]
      },
      {
        "loanId": 102,
        "customerName": "Jane Smith",
        "loanType": "Home Loan",
        "loanAmount": 10000,
        "interestRate": 7.75,
        "term": 24,
        "issuedDate": "2023-02-01",
        "dueDate": "2023-03-01",
        "status": "Active",
        "payments": [
          {
            "paymentId": 4,
            "amount": 780,
            "paymentDate": "2023-02-01",
            "status": "Paid"
          },
          {
            "paymentId": 5,
            "amount": 780,
            "paymentDate": "2023-03-01",
            "status": "Pending"
          }
        ]
      },
      {
        "loanId": 103,
        "customerName": "Alice Johnson",
        "loanType": "Car Loan",
        "loanAmount": 8000,
        "interestRate": 6.75,
        "term": 36,
        "issuedDate": "2023-03-10",
        "dueDate": "2023-04-10",
        "status": "Active",
        "payments": [
          {
            "paymentId": 6,
            "amount": 300,
            "paymentDate": "2023-03-10",
            "status": "Paid"
          },
          {
            "paymentId": 7,
            "amount": 300,
            "paymentDate": "2023-04-10",
            "status": "Pending"
          },
          {
            "paymentId": 8,
            "amount": 300,
            "paymentDate": "2023-05-10",
            "status": "Pending"
          }
        ]
      },
      {
        "loanId": 104,
        "customerName": "Bob Williams",
        "loanType": "Business Loan",
        "loanAmount": 15000,
        "interestRate": 9.25,
        "term": 48,
        "issuedDate": "2023-04-05",
        "dueDate": "2023-05-05",
        "status": "Risk",
        "payments": [
          {
            "paymentId": 9,
            "amount": 600,
            "paymentDate": "2023-04-05",
            "status": "Paid"
          },
          {
            "paymentId": 10,
            "amount": 600,
            "paymentDate": "2023-05-05",
            "status": "Pending"
          }
        ]
      },
      {
        "loanId": 105,
        "customerName": "Eva Brown",
        "loanType": "Education Loan",
        "loanAmount": 12000,
        "interestRate": 5.5,
        "term": 60,
        "issuedDate": "2023-05-20",
        "dueDate": "2023-06-20",
        "status": "Inactive",
        "payments": []
      }
    ]

    // Update data source
    this.dataSource.data = this.reportData;
    this.dataSource._updateChangeSubscription();
  }

  downloadPDF() {
    const doc = new jsPDF();
    // Add your logic to generate PDF content here
    // For example, you can loop through the table data and add it to the PDF
    doc.text('Payments Table', 10, 10);
    // Save the PDF file
    doc.save('payments.pdf');
  }

}
