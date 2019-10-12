import { Component } from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

import { League } from 'src/interfaces/models/league';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss']
})
export class SearchLeagueComponent {
  leagues: League[] = [];

  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService.leaguesReadyEvent.subscribe((leagues: League[]) => {
      this.leagues = leagues;
    });
  }

  leagueSelected(league: League) {
    this.leagueService.selectLeague(league);
  }
}
