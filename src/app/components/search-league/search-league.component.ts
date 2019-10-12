import { Component, OnInit } from '@angular/core';

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

  constructor(
    private leagueService: LeagueService,
  ) {
    this.leagueService.leaguesReadyEvent.subscribe((leagues: League[]) => {
      this.leagues = leagues;
    });
  }

  ngOnInit() {
    this.addObserverForSearchInput();
  }

  leagueSelected(league: League) {
    this.leagueService.selectLeague(league);
  }

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
