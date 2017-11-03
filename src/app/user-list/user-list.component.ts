import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  goToProfilePage(clickedUser) {
    this.router.navigate(['users', clickedUser.$key]);
  };

  submitForm(name: string, bio: string, favoriteHike: string) {
    let newUser: User = new User(name, bio, favoriteHike);
    this.userService.addUser(newUser);
  }
}
