import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from './interface/repointerface';
import { Interuser } from './interface/userinterface';
import { environment } from "./../environments/environment";

import { User } from './user';
import { Repositories } from './repositories';

@Injectable({
  providedIn: 'root'
})
export class GitSerchService {
  Interuser: User;

  constructor(private http: HttpClient, private router: Router) {
    this.Interuser = new User("", "", "", "", 0, 0, 0, "", "", 0, "");
  }
}
getSearchResults(user: string) {
  let promise = new Promise((resolve, reject) => {
    this.http
      .get<Interuser>(
        `https://api.github.com/users/${user}?access_toke:${environment.personal_AccessToken}`
      )
      .toPromise()
      .then(
        (response) => {
          this.Interuser.userName = response.login;
          this.Interuser.name = response.name;
          this.Interuser.bio = response.bio;
          this.Interuser.followers = response.followers;
          this.Interuser.following = response.following;
          this.Interuser.location = response.location;
          this.Interuser.socialMedia = response.twitter_username;
          this.Interuser.repositories = response.public_repos;
          this.Interuser.avatarUrl = response.avatar_url;
          this.Interuser.repo_url = response.repos_url;

constructor() { }
resolve(response);
},

(error) => {
  if (error.status) {
    this.router.navigate(["/err"]);
  }
  reject(error);
}
);
});
return promise;
}
}

