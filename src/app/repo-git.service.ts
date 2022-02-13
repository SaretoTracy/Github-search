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
 