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
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchGitComponent,
    RepoComponent,
    NotfoundComponent,
    NavComponent,
    GitsearchFormComponent,
    HighlightDirective
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
