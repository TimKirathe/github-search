import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  repo: String = '';
  constructor(private http: HttpClient) { }

  fetchUser(username: string): Observable<any> {

    const url = "https://api.github.com/users"

    return this.http.get<any>(url + "/" + username)
  }

}
