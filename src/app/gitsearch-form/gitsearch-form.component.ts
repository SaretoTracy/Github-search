import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../user';
import { Repositories } from "../repositories";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from '../interface/repointerface';
import { Interuser } from '../interface/userinterface';
import { GitSerchService } from '../git-serch.service';
import { RepoGitService } from '../repo-git.service';


@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {

  constructor(
    private gitService: GitSerchService,
    private gitRepo: RepoGitService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(val: any) {
    console.log(val)
    console.log(val.search)
    if (val.search != "") {
    
      this.gitRepo.repoArr = [];

      this.gitService.getSearchResults(val.search);
      this.gitRepo.getRepoDetails(val.search);
      this.router.navigate(["/repos"]);
    }
  }
 

}
