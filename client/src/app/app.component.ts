import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // properties
  title = 'SkiNet';

  // constructor
  constructor() {}

  // lifestyle hooks
  ngOnInit(): void {}
}
