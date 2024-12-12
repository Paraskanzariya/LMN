import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('this.form.valid: ', this.form.valid);
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe(
        () => {
          console.log("Navigating");
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log("Not working!");
          console.error('Login failed:', error);
          this.errorMessage = error;
        }
      );
    }
  }

}
