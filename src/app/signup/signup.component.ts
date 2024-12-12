import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  Form!: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  login() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.Form.valid) {
      const signUpData = this.Form.value;
      this.authService.signUp(signUpData).subscribe(
        response => {
          console.log('Signup successful:', response);
          // Optionally, you can navigate the user to another page after successful signup
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Signup error:', error);
          // Handle signup error
        }
      );
    }
  }
}
