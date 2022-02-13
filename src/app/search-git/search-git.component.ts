import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../user';
import { Repositories } from "../repositories";
import { HttpClient } from "@angular/common/http";
import { Interrepo } from '../interface/repointerface';
import { Interuser } from '../interface/userinterface';

@Component({
  selector: 'app-search-git',
  templateUrl: './search-git.component.html',
  styleUrls: ['./search-git.component.css']
})
export class SearchGitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
