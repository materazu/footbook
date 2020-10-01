import {
  Component,
  OnInit,
} from '@angular/core';

import { LeagueService } from 'src/app/services/league.service';

import { League } from 'src/interfaces/models/league';

/**
 * Search input with autocomplete to select a league
 */
@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss']
})
export class SearchLeagueComponent implements OnInit {
  /** Leagues array */
  leagues: League[];

  /** Sticky status for the input */
  sticky: boolean;

  /** Initial input value, selected at back action */
  initialValue;

  /** Element used for sticky */
  elementToObserve: HTMLElement;

  /**
   * Component injections
   *
   * @param leagueService Service to manage all Leagues
   */
  constructor(
    private leagueService: LeagueService,
  ) {}

  /**
   * Prepare the component
   */
  ngOnInit() {
    this.leagues = this.leagueService.leagues;

    this.leagueService
      .leaguesReadyEvent
      .subscribe((leagues: League[]) => {
        this.leagues = leagues;
      })
    ;

    if (this.leagueService.selectedLeague) {
      this.initialValue = this.leagueService.selectedLeague;
    }

    this.elementToObserve = document.querySelector('.subtitle');

    this.addObserverForSearchInput();
  }

  /**
   * Set the league on service
   *
   * @param league League object selected by user
   */
  leagueSelected(league: League) {
    this.leagueService.selectLeague(league);
    window.scroll(0, 0);
  }

  /**
   * Check if subtitle is out of reach
   * Set the sticky status to search input
   */
  addObserverForSearchInput() {
    if (this.elementToObserve) {
      const observer = new IntersectionObserver(entries => {
        this.sticky = !entries[0].isIntersecting;
      });

      observer.observe(this.elementToObserve);
    }
  }
}
