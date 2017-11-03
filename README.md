# Club Manager

#### An application for tracking members of the Timber Tigers Hiking Club, 11.03.2017


#### By Kristen Marie Kulha

## Description

This simple web application allows users to keep track of members of the Timber Tigers Hiking club. Users can view a list of current members and click on members to go to their profile page, which includes more information about that member. Administrators can add new members, edit existing members, and remove members that are no longer involve with the club.

##User Stories

* User can visit page to see a list fo club members.
* User can click members name to visit their profile page, which includes more details about the member.
* User can visit an about page, which explains more about the club.
* Administrators can add new users to the club.
* Administrators can edit existing members profiles.
* Administrators can remove a member from database.

## Setup/Installation Requirements
* [ClickHere](https://club-manag.firebaseapp.com) OR
* Clone this repository
* In terminal, navigate to this projects root directory (club-directory)
* Ensure you have [Node.js](https://nodejs.org/en/), [Gulp](https://gulpjs.com), and [TypeScript](https://www.typescriptlang.org) installed
* In terminal (while still in root directory), enter the following commands:
  * ``` $ npm install ```
  * ``` $ bower install ```
* Visit [Firebase](https://firebase.google.com)
* Log in with Google credentials.
* Click get started button.
* Click Add Project button.
* In project name field enter ```club-manager```
* Click create project button.
* In terminal, in root directory, enter ```touch src/app/api-keys.ts```
* Open project with text editor of choice (I use [Atom](https://atom.io))
* Back to the firebase page, click "Add firebase to your web app". A pop-up modal should appear on your screen.
* In your newly created api-keys.ts file add the following from the modal:
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

* On the left hand side of the Firebase page, click on database.
* Click Get Started underneath the Realtime Database on the center of the screen.
* Click Rules on the blue navbar located on the top of the screen.
* Change both ```auth != null``` inside the quotes to ```true```.
* Click the white Publish button that appeared in the navbar.
* Click Data button in navbar.
* Click on triple ... button on right side of gray box in the middle of the screen.
* Select import JSON.
* Select browse and navigate to project folder. Select the sample-users.json file and click blue import button.
* Back in the terminal (you should still be in the root directory of the project folder) run the following:  ``` $ ng serve ```
* Navigate to ```localhost:4200``` in web browser of choice


## 🐛Known Bugs🐛

There are no known bugs at this time.

## Future functionality

* Add a message board area, where club members may chat with each other.
* Include an area called "hikes" where users can post planned hikes.
* Implement AngularFire/Firebase user authentication.

## 📧Support and contact details📧

Feel free to contact me at kristen.m.kulha@gmail.com

## Technologies Used

_JavaScript, HTML, CSS, Node, Angular, Firebase, Clarity_

### License

This software is licensed under the MIT license.
Copyright (c) 2017 **_Kristen Marie Kulha_**
