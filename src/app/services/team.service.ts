import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, mergeMap, toArray, tap } from 'rxjs/operators';

import { ApiContract } from 'src/interfaces/contracts/api.contract';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from 'src/interfaces/models/team';
import { LookupAllTeams } from 'src/interfaces/api-responses/lookup-all-teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements ApiContract {
  endPoint: string;
  scope = 'lookup_all_teams.php';
  teams: Team[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.endPoint = `${environment.apiUrl}/${this.scope}`;
  }

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
