import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from './interface/repointerface';
import { Interuser } from './interface/userinterface';
import { environment } from "./../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RepoGitService {
  repo: any;
  repoArr: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}
  getRepoDetails(user: string) {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<Interrepo[]>(
          `https://api.github.com/users/${user}/repos?access_token:${environment.personal_AccessToken}`
        )
        .toPromise()
        .then(
          (response) => {
            response.forEach((response) => {
              this.repo = new Repositories(
                response.name,
                response.html_url,
                new Date(response.created_at),
                response.clone_url,
                response.forks_count,
                response.homepage,
                response.description,
                response.stargazers_count
              );
              if (response.name !== "") {
                this.repoArr.push(this.repo);
              }
            });

  constructor() { }
            resolve(response);
          },
          (error) => {
            if ((error.status = 404)) {
              this.router.navigate(["/err"]);
            }
            reject(error);
          }
        );
    });
    return promise;
  }
}
