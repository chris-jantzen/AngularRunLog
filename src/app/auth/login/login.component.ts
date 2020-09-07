import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timer } from 'rxjs'; // TEMP

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.loading = true;

    const { email, password } = this.loginForm.value;

    try {
      console.log('sending...');
      timer(2000).subscribe(() => {
        console.log(email, password);
        this.success = true;
        this.loading = false;
        console.log('successful');
      });
    } catch (err) {
      console.error(err); // Error component render or something
    }
  }

}
