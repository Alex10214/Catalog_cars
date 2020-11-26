import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.hide = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required , Validators.minLength(7)]),
    });
  }

  onLogin(): void {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(user);
    /*this.router.navigate('');*/
  }

}
