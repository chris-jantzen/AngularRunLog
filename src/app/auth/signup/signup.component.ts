import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

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

}
