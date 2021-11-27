import { Component, OnInit } from '@angular/core';
import { GithubService} from '../github.service';

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})
export class RepoDataComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
  }

}
