import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrl: './loan-plans.component.css'
})
export class LoanPlansComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['planId', 'loanType', 'interestRate', 'term', 'maximumAmount', 'description',
  ];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private router: Router) {
    // Example loan plan data
    const loanPlans = [
      { planId: 101, loanType: 'Personal Loan', interestRate: '8%', term: '5 years', maximumAmount: '$50,000', description: 'Flexible loan for personal expenses.' },
      { planId: 102, loanType: 'Home Loan', interestRate: '4%', term: '30 years', maximumAmount: '$500,000', description: 'Loan for purchasing or refinancing a home.' },
      { planId: 103, loanType: 'Auto Loan', interestRate: '6%', term: '5 years', maximumAmount: '$30,000', description: 'Loan for purchasing a car.' },
      { planId: 104, loanType: 'Business Loan', interestRate: '7%', term: '10 years', maximumAmount: '$100,000', description: 'Loan for starting or expanding a business.' },
    ];

    this.dataSource = new MatTableDataSource(loanPlans);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addLoanPlan(): void {
    this.router.navigate(['add-loan-plan']);
  }

}
