import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGitComponent } from './search-git/search-git.component';
import { RepoComponent } from './repo/repo.component';
const routes: Routes = [ 
  {
    path:"Home", component: SearchGitComponent
  },
  {
    path:"repo", component: RepoComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
