import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

import { Observable } from 'rxjs';

import { TeamMemberService } from '../services/team-member.service';

import { TeamMember } from 'src/interfaces/models/team-member';

/**
 * Resolver who find all team members and give it through routing
 *
 * @deprecated due to Patreon, require a key to be used
 */
@Injectable({
  providedIn: 'root'
})
export class TeamMembersResolver implements Resolve<TeamMember[]> {
  /**
   * Component injections
   *
   * @param teamMemberService service to manage all teamMembers
   */
  constructor(
    private teamMemberService: TeamMemberService
  ) {}

  /**
   * Get the team identifier, call the service to retrieve team members
   *
   * @param route actual routing
   *
   * @returns Observable of team members
   */
  resolve(route: ActivatedRouteSnapshot): Observable<TeamMember[]> {
    const teamId = +route.paramMap.get('teamId');

    return this.teamMemberService.getTeamMembers(teamId);
  }
}
