import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamInformations } from 'src/interfaces/models/team-informations';

/**
 * Team members page available on /team/:teamId
 */
@Component({
  selector: 'app-team-informations-page',
  templateUrl: './team-informations.component.html',
  styleUrls: ['./team-informations.component.scss']
})
export class TeamInformationsComponent {
  /**
   * Members of the team array
   */
  teamInformations: TeamInformations;

  /**
   * Component injections
   * Get team informations from the snapshot through the resolver
   *
   * @param route Snapshot routing service of Angular
   */
  constructor(private route: ActivatedRoute) {
    this.teamInformations = this.route.snapshot.data.teamInformations;
    console.log(this.teamInformations);
  }
}
