import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timer } from 'rxjs'; // TEMP

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  // Form State After Submission
  loading = false;
  success = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    });

    /* this.myForm.valueChanges.subscribe(
      e => {
        console.log(this.email);
        // this.email = e['email'];
        // this.password = e['password'];
      },
      err => console.error(err)
    ); */
  }

  get email() {
    // can use this to get the status to see if it's valid, etc. to update styles or get the value.
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  async onSubmit() {
    this.loading = true; // TODO: Some sort of loading animation. Three dots bouncing or something

    const { email, password } = this.myForm.value;

    try {
      /* if after validation, it is successful, save the token somewhere (auth state probably?) and 
      use the router to redirect to /home or /admin home if the user is an admin */
      // await this.authservice.createAccount(email, password).subscribe(); // import the angular http library
      console.log('sending...');
      timer(2000).subscribe(() => {
        console.log(email, password);
        this.success = true;
        console.log('successful');
      });
    } catch (err) {
      console.error(err);
    }
  }

}
