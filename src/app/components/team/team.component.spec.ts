import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TeamComponent } from './team.component';

import { Team } from 'src/interfaces/models/team';

@Component({
  selector: 'app-host-component',
  template: '<app-team [team]="team"></app-team>'
})
class TestHostComponent {
  private team: Team = {id: 1111, name: 'team1', badge: ''};

  setTeam(team: Team) {
    this.team = team;
  }
}

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamComponent,
        TestHostComponent,
      ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(testHostComponent).toBeTruthy();
  });

  it('should show team name by input', () => {
    const compiled = testHostFixture.debugElement.nativeElement;

    expect(compiled.querySelector('.team-name').innerText).toEqual('team1');
  });

  it('should show different team name, at change of the input', () => {
    testHostComponent.setTeam({id: 2222, name: 'team2', badge: ''});
    testHostFixture.detectChanges();
    const compiled = testHostFixture.debugElement.nativeElement;

    expect(compiled.querySelector('.team-name').innerText).toEqual('team2');
  });

  it('should redirect and scroll at team selection',
    inject([Router],
      (router: Router) => {
        const routerSpy = spyOn(router, 'navigate');
        const windowSpy = spyOn(window, 'scroll');

        component.loadTeamMembers({id: 4401, name: 'test'});
        expect(routerSpy).toHaveBeenCalled();
        expect(windowSpy).toHaveBeenCalled();
      })
    )
  ;
});
