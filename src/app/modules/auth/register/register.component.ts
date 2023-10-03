import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      // Handle form errors
      return;
    }

    // You can now use the registration data for user registration.
    // For a real application, make an HTTP request to your server to create a new user.
    // Example: this.authService.register(username, email, password);
  }

  initForm() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
