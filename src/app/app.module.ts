import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchGitComponent } from './search-git/search-git.component';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchGitComponent,
    RepoComponent,
    NotfoundComponent,
    NavComponent,
    UserComponent,
    GitsearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
