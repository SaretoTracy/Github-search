import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../user';
import { Repositories } from "../repositories";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from '../interface/repointerface';
import { Interuser } from '../interface/userinterface';
import { GitSerchService } from '../git-serch.service';
import { RepoGitService } from '../repo-git.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  search!:string;
  constructor(
    private gitService: GitSerchService,
    private gitRepo: RepoGitService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
     console.log(this.search)
  
      this.gitRepo.repoArr = [];

      this.gitService.getSearchResults(this.search);
      this.gitRepo.getRepoDetails(this.search);
      this.router.navigate(["repo"]);
    
  }
 

}
