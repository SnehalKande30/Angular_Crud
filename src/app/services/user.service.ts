import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,
      name: 'Employee 1',
      designation: 'Developer',
      salary: 25000
    },
    {
      id: 2,
      name: 'Employee 2',
      designation: 'Senior Developer',
      salary: 30000
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    if(this.upersons.length > 0) {
      let getLastUser = this.upersons[this.upersons.length - 1];
      user.id = getLastUser.id + 1;
      this.upersons.push(user);
    } else {
      user.id = 1;
      this.upersons.push(user);
    }
  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
