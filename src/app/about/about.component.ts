import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fullImagePath: string;
  fullImagePath2: string;
  constructor() {
    this.fullImagePath = 'assets/images/hikers.jpg';
    this.fullImagePath2 = 'assets/images/teneriffesummit.jpg';
 }

  ngOnInit() {
  }

}
