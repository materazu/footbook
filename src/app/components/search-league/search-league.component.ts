import {
  Component,
  OnInit,
} from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

import { League } from 'src/interfaces/models/league';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss']
})
export class SearchLeagueComponent implements OnInit {
  leagues: League[] = [];
  sticky: boolean;

  /**
   * @param leagueService Service to manage all Leagues
   */
  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService
      .leaguesReadyEvent
      .subscribe((leagues: League[]) => {
        this.leagues = leagues;
      })
    ;
  }

  /**
   * Prepare the component
   */
  ngOnInit() {
    this.addObserverForSearchInput();
  }

  /**
   * Set the league on service
   *
   * @param league League object selected by user
   */
  leagueSelected(league: League) {
    this.leagueService.selectLeague(league);
  }

  /**
   * Check if subtitle is out of reach
   * Set the sticky status to search input
   */
  addObserverForSearchInput() {
    const elementToObserve: HTMLElement = document.querySelector('.subtitle');

    if (elementToObserve) {
      const observer = new IntersectionObserver(entries => {
        this.sticky = !entries[0].isIntersecting;
      });

      observer.observe(elementToObserve);
    }
  }
}
