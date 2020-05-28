import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user: User = new User;


  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
   this.authService.validateLogin(this.user);

  }

  
}
