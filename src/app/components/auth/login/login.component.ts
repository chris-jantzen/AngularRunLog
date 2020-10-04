import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Token } from '../../../models/token';
import { Store } from '@ngxs/store';
import { AddToken } from '../../../actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  loading = false;
  success = false;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private auth: AuthService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
    this.subscription = this.auth.getToken(email, password)
      .subscribe(
        (token: Token) => {
          this.store.dispatch(new AddToken(token));
          this.success = true;
          console.log('success');
          // this.router.navigate(['/']); // Uncomment when router guard is setup to define what / means based on auth / isAdmin
        },
        (err) => {
          this.loading = false;
          // Some kind of error message in the form.
          console.error(err.error.message);
        });
  }

  ngOnDestroy(): void {
    if  (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
