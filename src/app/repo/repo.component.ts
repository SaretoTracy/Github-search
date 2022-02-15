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
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  userProfile!: User;
  rep: any[] = [];
  constructor(
    private gitService: GitSerchService,
    private gitRepoService: RepoGitService
  ) {}

  ngOnInit(): void {
    this.userProfile = this.gitService.userProfile;
    this.rep = this.gitRepoService.repoArr;
  }
}