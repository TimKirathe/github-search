import { Component, OnInit } from '@angular/core';
import { GithubService} from '../github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})
export class RepoDataComponent implements OnInit {

  public selectedUsername;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username')
    this.selectedUsername = username
  }

}
