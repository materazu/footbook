import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { TeamMemberService } from '../services/team-member.service';

import { TeamMember } from 'src/interfaces/models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersResolver implements Resolve<TeamMember[]> {
  constructor(
    private teamMemberService: TeamMemberService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TeamMember[]> {
    const teamId = +route.paramMap.get('teamId');

    return this.teamMemberService.getTeamMembers(teamId);
  }
}
