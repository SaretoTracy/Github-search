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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userProfile!: User;
  constructor(
    private gitService: GitSerchService
  ) { }

  ngOnInit(): void {
    this.userProfile = this.gitService.userProfile;
  }

}
