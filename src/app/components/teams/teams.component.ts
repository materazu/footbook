import { Component } from '@angular/core';

import { Team } from 'src/interfaces/models/team';
import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';
import { League } from 'src/interfaces/models/league';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: Team[] = [];

  /**
   * @param leagueService Service to manage all Leagues
   * @param teamService Service to manage all Teams
   */
  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
  ) {
    this.leagueService.leagueSelectedEvent.subscribe((league: League) => {
      this.getAllTeamsForLeague(league.id);
    });
  }

  /**
   * Get all teams for a league
   *
   * @param $event league object selected by user
   */
  getAllTeamsForLeague(leagueId: number) {
    this.teamService.getTeams(leagueId).subscribe(teams => {
      this.teams = teams;
    });
  }
}
