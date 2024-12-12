import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource  } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlanckComponent } from './blanck/blanck.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIcon } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FullComponent } from './full/full.component';
import { LoansComponent } from './loans/loans.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';
import { AddNewInvoiceComponent } from './add-new-invoice/add-new-invoice.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageLoaderComponent } from '../shared/modal/page-loader/page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    FooterComponent,
    DashboardComponent,
    CustomersComponent,
    PaymentsComponent,
    InvoicesComponent,
    LoanPlansComponent,
    ReportsComponent,
    SettingsComponent,
    DashboardComponent,
    BlanckComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    FullComponent,
    LoansComponent, 
    AddCustomersComponent, AdminComponent, AdminLoginComponent, ForgotPasswordComponent, ResetPasswordComponent, UserManagementComponent, PdfGeneratorComponent, AddNewInvoiceComponent, AddPaymentComponent, AdminDashboardComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    MatTableModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    PageLoaderComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
