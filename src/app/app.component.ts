import { Component } from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Bootstrap component, create the global context of the app
   *
   * @param leagueService Service to manage all Legues
   */
  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService.getLeagues();
  }
}
