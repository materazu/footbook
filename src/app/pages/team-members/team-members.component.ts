import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamMember } from 'src/interfaces/models/team-member';

/**
 * Team members page available on /team/:teamId
 */
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent {
  /**
   * Members of the team array
   */
  teamMembers: TeamMember[];

  /**
   * Component injections
   * Get team members from the snapshot through the resolver
   *
   * @param route Snapshot routing service of Angular
   */
  constructor(private route: ActivatedRoute) {
    this.teamMembers = this.route.snapshot.data.teamMembers;
  }
}
