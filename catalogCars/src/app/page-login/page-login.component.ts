import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthorizationService} from '../autorization-directory/shared/authorization.service';
import {User} from '../autorization-directory/shared/interfaces';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  constructor(
    public auth: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hide = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required , Validators.minLength(7)]),
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.auth.login(user).subscribe(() => {
      this.loginForm.reset();
      this.router.navigate(['/catalog']);
    });
  }

}
