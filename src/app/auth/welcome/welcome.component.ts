import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(/* private auth service instance */) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log('sign up');
  }

  logIn() {
    console.log('log in');
  }

}
