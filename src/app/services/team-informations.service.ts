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

import { TeamInformations } from 'src/interfaces/models/team-informations';

import { LookupTeam } from 'src/interfaces/api-responses/lookup-team';

import { environment } from 'src/environments/environment';

/**
 * Handle the teams
 */
@Injectable({
  providedIn: 'root'
})
export class TeamInformationsService implements ApiContract {
  /**
   * Endpoint api url
   */
  endPoint: string;
  /**
   * Scope of service
   */
  scope = 'lookupteam.php';

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
  getTeamInformations(id: number): Observable<TeamInformations> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.httpClient
      .get<LookupTeam>(this.endPoint, { params })
      .pipe(
        map(result => result.teams[0]),
        map(result => {
          return {
            id: +result.idTeam,
            name: result.strTeam,
            badge: result.strTeamBadge,
            banner: result.strTeamBanner,
            description: result.strDescriptionEN,
            website: result.strWebsite,
            facebook: result.strFacebook,
            twitter: result.strTwitter,
            instagram: result.strInstagram,
            league: result.strLeague,
          };
        })
      )
    ;
  }
}
