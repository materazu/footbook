import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { Component } from '@angular/core';
import { Team } from 'src/interfaces/models/team';

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
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('.team-name').innerText).toEqual('team1');
  });

  it('should show different team name, at change of the input', () => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostComponent.setTeam({id: 2222, name: 'team2', badge: ''});
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('.team-name').innerText).toEqual('team2');
  });

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
});
