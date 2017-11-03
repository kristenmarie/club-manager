import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getUserById(userId) {
    return this.database.object('users/' + userId);
  }

  updateUser(localUpdatedUser){
    let userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({name: localUpdatedUser.name,
                                bio: localUpdatedUser.bio,
                                favoriteHike: localUpdatedUser.favoriteHike,
                                miles: localUpdatedUser.miles});
  }

  deleteUser(localUserToDelete){
    let userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

}
