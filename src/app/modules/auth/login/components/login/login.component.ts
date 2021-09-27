import { Component, OnInit } from '@angular/core';
import { LoginCommand } from '../../commands/login-command';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../../current-user/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  command = new LoginCommand();
  errors: any;
  busy = false;

  constructor(
    private loginService: LoginService,
    private currentUserService: CurrentUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUserService.logout();
  }

  login(): void {
    this.busy = true;

    this.loginService.auth(this.command).subscribe((prettyToken) => {
      this.currentUserService.login(prettyToken);
      this.router.navigate(['/cadastros/confrontos']);
    }, result => {
      this.errors = result.error.errors;
      this.busy = false;
    });
  }

}
