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
    this.githubService.fetchUser(value.username)
    this.users = this.githubService.user

    // .subscribe((data) => {
    //   console.log(data)
    //   this.users = data;
    //   console.log(this.users)
    // }, (err) => {
    //   alert("An error occured")
    // })
  }
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
