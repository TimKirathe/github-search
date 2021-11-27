import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-username-display',
  templateUrl: './username-display.component.html',
  styleUrls: ['./username-display.component.css']
})
export class UsernameDisplayComponent implements OnInit {

  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
