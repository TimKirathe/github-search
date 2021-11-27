import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

 users: User[] = [];

  getUsername() {
    this.githubService.fetchUsername().subscribe((data) => {
      console.log(data)
      this.users = data;
    })
  }
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
