import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editedUser: any = {};
  id: Number;

  constructor(
    private _router: Router,
    private actRoute: ActivatedRoute,
    private userService: UserService
  ) { 
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.editedUser = this.userService.getUsersFromData().find(p => p.id == this.id);
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editedUser = {};
    this._router.navigate(['user']);
  }

  cancelEdits() {
    this.editedUser = {};
    this._router.navigate(['user']);
  }
}
