import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: User[];
  filterTerm: string;

  constructor(
    private _router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  removeUser(user: User) {
    if(confirm('Are you sure, you want to delete?')){
      this.userService.deleteUser(user);
    }
    else {
      alert('Delete operation was canceled by the user');
    }
  }
}
