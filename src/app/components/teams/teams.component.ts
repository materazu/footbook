import { Component } from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

import { League } from 'src/interfaces/models/league';
import { Team } from 'src/interfaces/models/team';

/**
 * Component for iterating teams
 */
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  /** Teams array */
  teams: Team[] = null;

  /**
   * Component injections
   * Refresh teams at startup from TeamService
   * Get all teams when a league is selected by user
   *
   * @param leagueService Service to manage all Leagues
   * @param teamService Service to manage all Teams
   */
  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
  ) {
    if (this.teamService.teams) {
      this.teams = this.teamService.teams;
    }

    this.leagueService
      .leagueSelectedEvent
      .subscribe((league: League) => {
        this.getAllTeamsForLeague(league.id);
      })
    ;
  }

  /**
   * Get all teams for a league
   *
   * @param $event league object selected by user
   */
  getAllTeamsForLeague(leagueId: number) {
    this.teamService
      .getTeams(leagueId)
      .subscribe(teams => {
        this.teams = teams;
        this.teamService.teams = teams;
      })
    ;
  }
}
