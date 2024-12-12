import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Loan {
  loanId: number;
  customerName: string;
  loanType: string;
  lastPayment: string;
  paymentDue: string;
  loanStatus: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dashboardItems: { value: number, label: string }[] = [
    { value: 68, label: 'Customers' },
    { value: 34, label: 'Total Loans' },
    { value: 23, label: 'Approved Loans' },
    { value: 78, label: 'Pending Loans' },
    { value: 56, label: 'Risk Loans' },
    { value: 76, label: 'Total Receivables' }
  ];

  displayedColumns: string[] = ['loanId', 'customerName', 'loanType', 'lastPayment', 'paymentDue', 'loanStatus'];
  dataSource: MatTableDataSource<Loan>;

  constructor() {
    const loans: Loan[] = [
      { loanId: 101, customerName: 'John Doe', loanType: 'Personal Loan', lastPayment: '2023-01-15', paymentDue: '2023-02-15', loanStatus: 'Active' },
      { loanId: 102, customerName: 'Jane Smith', loanType: 'Home Loan', lastPayment: '2023-02-01', paymentDue: '2023-03-01', loanStatus: 'Active' },
      { loanId: 103, customerName: 'Alice Johnson', loanType: 'Auto Loan', lastPayment: '2023-02-10', paymentDue: '2023-03-10', loanStatus: 'Risk' },
      { loanId: 104, customerName: 'Bob Williams', loanType: 'Business Loan', lastPayment: '2023-01-20', paymentDue: '2023-02-20', loanStatus: 'Inactive' },
      { loanId: 105, customerName: 'Emily Brown', loanType: 'Student Loan', lastPayment: '2023-02-05', paymentDue: '2023-03-05', loanStatus: 'Active' },
      { loanId: 106, customerName: 'David Jones', loanType: 'Car Loan', lastPayment: '2023-02-15', paymentDue: '2023-03-15', loanStatus: 'Active' },
      { loanId: 107, customerName: 'Sarah Wilson', loanType: 'Mortgage Loan', lastPayment: '2023-01-25', paymentDue: '2023-02-25', loanStatus: 'Risk' },
      { loanId: 108, customerName: 'Michael Lee', loanType: 'Personal Loan', lastPayment: '2023-01-10', paymentDue: '2023-02-10', loanStatus: 'Inactive' },
    ];

    this.dataSource = new MatTableDataSource(loans);
    this.dataSource.paginator = this.paginator;
  }

}
