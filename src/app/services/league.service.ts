import {
  EventEmitter,
  Injectable,
} from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';

import { ApiContract } from 'src/interfaces/contracts/api.contract';

import { League } from 'src/interfaces/models/league';

import { SearchAllLeagues } from 'src/interfaces/api-responses/search-all-leagues';

import { environment } from 'src/environments/environment';

/**
 * Handle the leagues
 */
@Injectable({
  providedIn: 'root'
})
export class LeagueService implements ApiContract {
  leaguesReadyEvent = new EventEmitter();
  leagueSelectedEvent = new EventEmitter();

  endPoint: string;
  leagues: League[] = [];
  selectedLeague: League;
  scope = 'search_all_leagues.php';

  /**
   * @param httpClient Http client from Angular
   */
  constructor(
    private httpClient: HttpClient,
  ) {
    this.endPoint = `${environment.apiUrl}/${this.scope}`;
  }

  /**
   * Get leagues from the api and rebuild/clean the collection
   */
  getLeagues() {
    let params = new HttpParams();
    /* if we need to scope to a country*/
    // params = params.append('c', environment.country);
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

        this.leaguesReadyEvent.emit(this.leagues);
      })
    ;
  }

  /**
   * Select a league and dispatch with an event
   *
   * @param league selected league to manage
   */
  selectLeague(league: League) {
    this.selectedLeague = league;
    this.leagueSelectedEvent.emit(league);
  }
}
