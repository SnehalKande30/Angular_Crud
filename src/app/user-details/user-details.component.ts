import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  isNewUser: boolean;
  newUser: any = {};

  constructor(
    private _router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  
  saveUser(user: User) {
    this.userService.addUser(user);
    this._router.navigate(['user']);
  }

  cancelNewUser() {
    this.newUser = {};
    this._router.navigate(['user']);
  }
}
