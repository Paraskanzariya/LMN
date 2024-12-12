import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordForm!: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onForgotPasswordSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      console.log('Forgot data:', email);
      // this.authService.forgotPassword(email).subscribe(
      //   (response) => {
      //     console.log('Response from forgot password API:', response);
      //     // Handle response or navigate to login page
      //     this.router.navigate(['login']);
      //   },
      //   (error) => {
      //     console.error('Error:', error);
      //     // Handle error here
      //   }
      // );
    }
  }

}