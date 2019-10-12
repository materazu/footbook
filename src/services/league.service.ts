import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';

import { ApiContract } from 'src/interfaces/contracts/api.contract';

import { League } from 'src/interfaces/models/league';

import { SearchAllLeagues } from 'src/interfaces/api-responses/search-all-leagues';

import { environment } from 'src/environments/environment';

/**
 * Get leagues and provide a way to find them
 */
@Injectable({providedIn: 'root'})
export class LeagueService implements ApiContract {
  endPoint: string;
  scope = 'search_all_leagues.php';
  leagues: League[];

  /**
   * @param httpClient Http client from Angular
   */
  constructor(
    private httpClient: HttpClient,
  ) {
    this.endPoint = `${environment.apiUrl}/${this.scope}`;
  }

  /**
   * Get leagues from the api and rebuild/clear the collection
   */
  getLeagues() {
    let params = new HttpParams();
    params = params.append('c', environment.country);
    params = params.append('s', environment.sportScope);

    this.httpClient
      .get<SearchAllLeagues>(this.endPoint, {params})
      .subscribe(results => {
        const leagues = results.countrys;

        this.leagues = leagues.map(league => {
          return {
            id: parseInt(league.idLeague, 0),
            name: league.strLeague
          };
        });
      })
    ;
  }
}
