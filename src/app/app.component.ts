import { Component } from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /**
   * Bootstrap component, create the global context of the app
   *
   * @param leagueService Service to manage all Leagues
   */
  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService.getLeagues();
  }
}
