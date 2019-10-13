import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { HomeComponent } from './home.component';
import { TeamsComponent } from 'src/app/components/teams/teams.component';
import { TeamComponent } from 'src/app/components/team/team.component';
import { SearchLeagueComponent } from 'src/app/components/search-league/search-league.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        TeamsComponent,
        TeamComponent,
        SearchLeagueComponent,
      ],
      imports: [
        AutocompleteLibModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
