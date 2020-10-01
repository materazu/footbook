import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TeamInformationsComponent } from './team-informations.component';

import { TeamInformations } from 'src/interfaces/models/team-informations';

@Component({
  selector: 'app-host-component',
  template: '<app-team-informations [teamInformations]="teamInformations"></app-team-informations>'
})
class TestHostComponent {
  teamInformations: TeamInformations = {
    badge: 'https://www.thesportsdb.com/images/media/team/badge/qpxvwy1473505505.png',
    banner: 'https://www.thesportsdb.com/images/media/team/banner/upwrpx1420758932.jpg',
    description: 'Athletic Club Ajaccio (commonly referred to as AC Ajaccio or simply Ajaccio)',
    facebook: 'www.facebook.com/ACAofficiel',
    id: 133702,
    instagram: 'instagram.com/acaiacciu',
    league: 'French Ligue 2',
    name: 'Ajaccio',
    twitter: 'twitter.com/ACAOfficiel',
    website: 'www.ac-ajaccio.com'
  };

  setTeamInformations(teamInformations: TeamInformations) {
    this.teamInformations = teamInformations;
  }
}

describe('TeamInformationsComponent', () => {
  let component: TeamInformationsComponent;
  let fixture: ComponentFixture<TeamInformationsComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamInformationsComponent,
        TestHostComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(TeamInformationsComponent);
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

  it('should show team informations by input', () => {
    const compiled = testHostFixture.debugElement.nativeElement;

    expect(compiled.querySelector('.team-name').innerText).toEqual('Ajaccio');
    expect(compiled.querySelector('.description').innerText).toEqual('Athletic Club Ajaccio (commonly referred to as AC Ajaccio or simply Ajaccio)');
    expect(compiled.querySelector('.league-name').innerText).toEqual('League: French Ligue 2');
  });

  it('should show different team name, at change of the input', () => {
    testHostComponent.setTeamInformations(
      {
        badge: 'https://www.thesportsdb.com/images/media/team/badge/qwvtvt1473504800.png',
        banner: 'https://www.thesportsdb.com/images/media/team/banner/wwuxuq1420595615.jpg',
        description: `Olympique Gymnaste Club Nice Côte d'Azur (commonly referred to as OGC Nice or simply Nice)`,
        facebook: 'www.facebook.com/ogcnice',
        id: 133712,
        instagram: '',
        league: 'French Ligue 1',
        name: 'Nice',
        twitter: 'twitter.com/ogcnice',
        website: 'www.ogcnice.com',
      }
    );
    testHostFixture.detectChanges();
    const compiled = testHostFixture.debugElement.nativeElement;

    expect(compiled.querySelector('.team-name').innerText).toEqual('Nice');
  });

  it('should build links', () => {
    fixture.whenStable().then(() => {
      const compiled = testHostFixture.debugElement.nativeElement;
      expect(compiled.querySelector('a').getAttribute('href')).toEqual('http://www.ac-ajaccio.com');
    });
  });
});
