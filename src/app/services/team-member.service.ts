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

import { TeamMember } from 'src/interfaces/models/team-member';

import { LookupAllPlayers } from 'src/interfaces/api-responses/lookup-all-players';

import { environment } from 'src/environments/environment';

/**
 * Handle the teams
 */
@Injectable({
  providedIn: 'root'
})
export class TeamMemberService implements ApiContract {
  /**
   * Endpoint api url
   */
  endPoint: string;
  /**
   * Scope of service
   */
  scope = 'lookup_all_players.php';

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
   * Get team members from the api and rebuild to an array of TeamMember object
   *
   * @param id Team identifier
   */
  getTeamMembers(id: number): Observable<TeamMember[]> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient
      .get<LookupAllPlayers>(this.endPoint, {params})
      .pipe(
        mergeMap(result => result.player || []),
        map(result => {
          return {
            id: parseInt(result.idPlayer, 0),
            name: result.strPlayer,
            price: result.strSigning,
            position: result.strPosition,
            picture: result.strCutout,
            birthDate: new Date(result.dateBorn)
          };
        }),
        toArray()
      )
    ;
  }
}
