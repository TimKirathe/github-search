import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

 users: any = {};

  getUsername(value: any) {
    //console.log(typeof value.username);
    this.githubService.fetchUsername(value.username).subscribe((data) => {
      console.log(typeof data)
      this.users = data;
      console.log(this.users)
    })
  }
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
