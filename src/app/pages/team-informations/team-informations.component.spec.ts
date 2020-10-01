import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TeamInformationsComponent as TeamPage } from './team-informations.component';
import { TeamInformationsComponent } from './../../components/team-informations/team-informations.component';

describe('TeamMembersComponent', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamPage,
        TeamInformationsComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
