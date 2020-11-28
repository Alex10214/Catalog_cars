import { Component } from '@angular/core';
import {AuthorizationService} from './autorization-directory/shared/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalogCars';

  constructor(
    public auth: AuthorizationService,
    private router: Router
    ) {
  }

  logout(event: Event): void {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
