import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { TeamComponent } from '../team/team.component';
import { TeamsComponent } from './teams.component';

import { LeagueService } from 'src/app/services/league.service';
import { TeamService } from 'src/app/services/team.service';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
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
        spyOn(teamService, 'getTeams').and.returnValue(of([{id: 1111, name: 'test', badge: 'test'}]));

        leagueService.selectLeague({id: 4401, name: 'test'});

        setTimeout(_ => {
          expect(component.teams.length).toBe(1);
        }, 1000);
      })
    )
  ;
});
