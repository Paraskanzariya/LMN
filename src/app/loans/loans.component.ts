import { Component, OnInit } from '@angular/core';
import { Loan } from '../dashboard/dashboard.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['loanId', 'customerName', 'loanType', 'lastPayment', 'paymentDue', 'loanStatus'];
  // dataSource: Loan[] = [
  //   { loanId: 101, customerName: 'John Doe', loanType: 'Personal Loan', lastPayment: '2023-01-15', paymentDue: '2023-02-15', loanStatus: 'Active' },
  //   { loanId: 102, customerName: 'Jane Smith', loanType: 'Home Loan', lastPayment: '2023-02-01', paymentDue: '2023-03-01', loanStatus: 'Active' },
  //   // Add more loans as needed
  // ];

  ngOnInit(): void {
    // Initialize your data source
    this.dataSource.data = [
      { loanId: 101, customerName: 'John Doe', loanType: 'Standard Personal Loan', lastPayment: '2023-01-15', paymentDue: '2023-02-15', loanStatus: 'Active' },
      { loanId: 102, customerName: 'Jane Smith', loanType: 'Home Mortgage', lastPayment: '2023-02-01', paymentDue: '2023-03-01', loanStatus: 'Active' },
      { loanId: 103, customerName: 'Alice Johnson', loanType: 'Auto Loan', lastPayment: '2023-02-10', paymentDue: '2023-03-10', loanStatus: 'Risk' },
      { loanId: 104, customerName: 'Bob Williams', loanType: 'Business Loan', lastPayment: '2023-01-20', paymentDue: '2023-02-20', loanStatus: 'Active' },
      { loanId: 105, customerName: 'Emily Brown', loanType: 'Student Loan', lastPayment: '2023-02-05', paymentDue: '2023-03-05', loanStatus: 'Inactive' },
    ];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
