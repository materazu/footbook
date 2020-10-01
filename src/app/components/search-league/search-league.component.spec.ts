import {
  waitForAsync,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { SearchLeagueComponent } from './search-league.component';

import { LeagueService } from 'src/app/services/league.service';

describe('SearchLeagueComponent', () => {
  let component: SearchLeagueComponent;
  let fixture: ComponentFixture<SearchLeagueComponent>;

  const fakeLeague = {id: 1111, name: 'test'};

  beforeEach(waitForAsync(() => {
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
        component.ngOnInit();

        leagueService.leaguesReadyEvent.emit([fakeLeague]);

        expect(component.leagues.length).toBe(1);
      })
    )
  ;

  it('should load leagues if exists in service',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        leagueService.leagues = [fakeLeague];
        component.ngOnInit();

        expect(component.leagues.length).toBe(1);
      }
    )
  );

  it('should set initial value for input if league exists in service',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        leagueService.selectedLeague = fakeLeague;
        component.ngOnInit();

        expect(component.initialValue).toEqual(fakeLeague);
      }
    )
  );

  it('should attach the observer on init', () => {
    const spy = spyOn(component, 'addObserverForSearchInput');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should set the league on service at selection',
    inject([LeagueService],
      (leagueService: LeagueService) => {
        const spy = spyOn(leagueService, 'selectLeague');
        component.leagueSelected(fakeLeague);

        expect(spy).toHaveBeenCalled();
      }
    )
  );
});
