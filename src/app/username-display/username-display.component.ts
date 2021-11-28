import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-display',
  templateUrl: './username-display.component.html',
  styleUrls: ['./username-display.component.css']
})
export class UsernameDisplayComponent implements OnInit {


  @Input() users: any = {};

  onSelect(users) {
    this.router.navigate(['/repos', users.repos_url]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
