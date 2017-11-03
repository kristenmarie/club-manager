import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(name: string, bio: string, favoriteHike: string) {
  let newUser: User = new User(name, bio, favoriteHike);
  this.userService.addUser(newUser);
}

}
