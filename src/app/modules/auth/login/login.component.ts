import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      // Handle form errors
      return;
    }

    // You can now use the username and password for authentication.
    // For a real application, make an HTTP request to your server for authentication.
    // Example: this.authService.login(username, password);
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}
