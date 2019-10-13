import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchLeagueComponent } from './components/search-league/search-league.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchLeagueComponent,
    TeamsComponent,
    TeamComponent,
    TeamMembersComponent,
    TeamMemberComponent,
  ],
  imports: [
    AppRoutingModule,
    AutocompleteLibModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
