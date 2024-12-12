import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { BlanckComponent } from './blanck/blanck.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FullComponent } from './full/full.component';
import { LoansComponent } from './loans/loans.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddNewInvoiceComponent } from './add-new-invoice/add-new-invoice.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuradService } from './auth-gurad.service';
import { NotAuthService } from './not-auth.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'loan-plans', component: LoanPlansComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'add-customers', component: AddCustomersComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'add-new-invoice', component: AddNewInvoiceComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: '**', component: BlanckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
