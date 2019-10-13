import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { TeamComponent } from '../team/team.component';
import { TeamsComponent } from './teams.component';

import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  const fakeTeams = [{id: 1111, name: 'test', badge: 'test'}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        TeamsComponent,
        TeamComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the teams at selection',
    inject([TeamService, LeagueService],
      (teamService: TeamService, leagueService: LeagueService) => {
        spyOn(teamService, 'getTeams').and.returnValue(of(fakeTeams));

        leagueService.selectLeague(fakeTeams[0]);
        expect(component.teams.length).toBe(1);
      })
    )
  ;

  it('should load teams if exists on service',
    inject([TeamService],
      (teamService: TeamService) => {
        teamService.teams = fakeTeams;

        fixture = TestBed.createComponent(TeamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.teams.length).toBe(1);
      })
    )
  ;
});
