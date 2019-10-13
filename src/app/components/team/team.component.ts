import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from 'src/interfaces/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @Input() team: Team;

  constructor(
    private router: Router,
  ) { }

  /**
   * Navigate to the members of team page
   *
   * @param teamId team identifier
   */
  loadTeamMembers(teamId) {
    this.router.navigate(['team', teamId]);
    window.scroll(0, 0);
  }
}
