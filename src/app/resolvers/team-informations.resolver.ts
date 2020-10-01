import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

import { Observable } from 'rxjs';

import { TeamInformationsService } from './../services/team-informations.service';

import { TeamInformations } from 'src/interfaces/models/team-informations';

/**
 * Resolver who find all information about a team and give it through routing
 */
@Injectable({
  providedIn: 'root'
})
export class TeamInformationsResolver implements Resolve<TeamInformations> {
  /**
   * Component injections
   *
   * @param teamInformationsService service to get team informations
   */
  constructor(
    private teamInformationsService: TeamInformationsService
  ) {}

  /**
   * Get the team identifier, call the service to retrieve team informations
   *
   * @param route actual routing
   *
   * @returns Observable of team informations
   */
  resolve(route: ActivatedRouteSnapshot): Observable<TeamInformations> {
    const teamId = +route.paramMap.get('teamId');

    return this.teamInformationsService.getTeamInformations(teamId);
  }
}
