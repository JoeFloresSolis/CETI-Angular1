import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  public friends:any=[
    {
      name: 'Charles',
      age: 26,
    },
    {
      name: 'Joe',
      age: 24,
    },
    {
      name: 'Johan',
      age: 27,
    },
    {
      name: 'Diego',
      age: 21,
    },
    {
      name: 'Juan',
      age: 22,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
