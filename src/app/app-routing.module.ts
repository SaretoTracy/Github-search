import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGitComponent } from './search-git/search-git.component';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [ 
  {
    path:"Home", component: SearchGitComponent
  },
  {
    path:"repo", component: RepoComponent,
  },
  //  { path:'**', component:NotfoundComponent},
  { path: '', redirectTo:"/Home", pathMatch:"full"},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
