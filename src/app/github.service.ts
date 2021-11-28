import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user: any = {};
  username: String = ''
  repo: String = '';
  avatar: String = '';

  constructor(private http: HttpClient) { }

  fetchUser(username: string) {

    const url = "https://api.github.com/users"

    let promise = new Promise((resolve, reject) => {
      this.http.get(url + "/" + username).toPromise().then(response => {
        this.user = response;
        resolve(response);
      },
      error => {
        alert("There has been an error")
        reject()
      })
    })

    return promise
    // return this.http.get<any>(url + "/" + username)
  }

}
