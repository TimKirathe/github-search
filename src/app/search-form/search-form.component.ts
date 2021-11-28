import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

 users: any[] = [];
 username: User;


  getUsername(value: any) {
    this.username = new User(value.username)
    this.githubService.fetchUser(this.username.username)

    setTimeout(this.assignUser, 5000)

    // this.githubService.fetchUser(value.username)

    // .subscribe((data) => {
    //   console.log(data)
    //   this.users = data;
    //   console.log(this.users)
    // }, (err) => {
    //   alert("An error occured")
    // })
  }

 assignUser() {
   this.users = this.githubService.user
   console.log(this.users)

   for (var i=0; i<this.users.length; i++) {
     if (this.username.username === this.users[i].login) {
       console.log(this.users[i])
     }
   }
 }

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
  }

}
