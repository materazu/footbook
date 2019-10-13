import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { TeamMember } from 'src/interfaces/models/team-member';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent {
  teamMembers: TeamMember[];

  constructor(private route: ActivatedRoute) {
    this.teamMembers = this.route.snapshot.data.teamMembers;
  }
}
