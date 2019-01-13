import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-few-users',
  templateUrl: './few-users.component.html',
  styleUrls: ['./few-users.component.scss']
})
export class FewUsersComponent implements OnInit {
  users = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit() {
  }

}
