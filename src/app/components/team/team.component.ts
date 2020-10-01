import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

import { Team } from 'src/interfaces/models/team';

/**
 * Component for displaying one team
 */
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  /** Team input to passing object to component */
  @Input() team: Team;

  /**
   * Component injections
   *
   * @param router Router service of Angular
   */
  constructor(
    private router: Router,
  ) { }

  /**
   * Navigate to the informtion of team page
   *
   * @param teamId team identifier
   */
  loadTeamInformations(teamId) {
    this.router.navigate(['team', teamId]);
    window.scroll(0, 0);
  }
}
