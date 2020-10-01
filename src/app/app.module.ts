import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchLeagueComponent } from './components/search-league/search-league.component';
import { TeamComponent } from './components/team/team.component';
import { TeamInformationsComponent } from './components/team-informations/team-informations.component';
import { TeamsComponent } from './components/teams/teams.component';

import { HomeComponent } from './pages/home/home.component';
import { TeamInformationsComponent as TeamPage } from './pages/team-informations/team-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchLeagueComponent,
    TeamsComponent,
    TeamComponent,
    TeamPage,
    TeamInformationsComponent,
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
