import { Component } from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

/**
 * Bootstrap component, create the global context of the app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /**
   * Component injections
   *
   * @param leagueService Service to manage all Leagues
   */
  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService.getLeagues();
  }
}
