import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  map,
  mergeMap,
  toArray,
} from 'rxjs/operators';

import { ApiContract } from 'src/interfaces/contracts/api.contract';

import { Team } from 'src/interfaces/models/team';

import { LookupAllTeams } from 'src/interfaces/api-responses/lookup-all-teams';

import { environment } from 'src/environments/environment';

/**
 * Handle the teams
 */
@Injectable({
  providedIn: 'root'
})
export class TeamService implements ApiContract {
  /**
   * Endpoint api url
   */
  endPoint: string;
  /**
   * Scope of service
   */
  scope = 'lookup_all_teams.php';
  /**
   * Teams array
   */
  teams: Team[];

  /**
   * Service injections
   *
   * @param httpClient Http client from Angular
   */
  constructor(
    private httpClient: HttpClient
  ) {
    this.endPoint = `${environment.apiUrl}/${this.scope}`;
  }

  /**
   * Get teams from the api and rebuild to an array of Team object
   *
   * @param id League identifier
   */
  getTeams(id: number): Observable<Team[]> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient
      .get<LookupAllTeams>(this.endPoint, {params})
      .pipe(
        mergeMap(result => result.teams || []),
        map(result => {
          return {
            id: parseInt(result.idTeam, 0),
            name: result.strTeam,
            badge: result.strTeamBadge,
          };
        }),
        toArray()
      )
    ;
  }
}
