import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SearchLeagueComponent } from './search-league.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

describe('SearchLeagueComponent', () => {
  let component: SearchLeagueComponent;
  let fixture: ComponentFixture<SearchLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AutocompleteLibModule,
        HttpClientTestingModule,
      ],
      declarations: [
        SearchLeagueComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with sticky false', () => {
    expect(component.sticky).toBeFalsy();
  });

  it('should get the leagues at startup',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        spyOn(leagueService, 'getLeagues').and.callFake(() => {
          leagueService.leaguesReadyEvent.emit([{id: 1111, name: 'test'}]);
        });

        setTimeout(_ => {
          expect(component.leagues.length).toBe(1);
        }, 1000);
      })
    )
  ;

  it('should attach the observer on init', () => {
    const spy = spyOn(component, 'addObserverForSearchInput');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should set the league on service at selection',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        const spy = spyOn(leagueService, 'selectLeague');
        component.leagueSelected({id: 1111, name: 'test'});

        expect(spy).toHaveBeenCalled();
      }
    )
  );
});
