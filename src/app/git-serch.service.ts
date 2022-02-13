import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { User } from './user';
import { Repositories } from './repositories';         
import { HttpClient } from "@angular/common/http";
import { Interrepo } from './interface/repointerface';
import { Interuser } from './interface/userinterface';
import { environment } from "./../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GitSerchService {
  userProfile: User;
  constructor(private http: HttpClient, private router: Router) {
    this.userProfile = new User("", "", "", "", 0, 0, 0, "", "", 0, "");
  }
  getSearchResults(user: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Interuser>(`https://api.github.com/users/${user}`)
        .toPromise()
        .then(
          (response:any) =>{ 
            this.userProfile.userName = response.login;
            this.userProfile.name = response.name;
            this.userProfile.bio = response.bio;
            this.userProfile.followers = response.followers;
            this.userProfile.following = response.following;
            this.userProfile.location = response.location;
            this.userProfile.socialMedia = response.twitter_username;
            this.userProfile.repositories = response.public_repos;
            this.userProfile.avatarUrl = response.avatar_url;
            this.userProfile.repo_url = response.repos_url;
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

