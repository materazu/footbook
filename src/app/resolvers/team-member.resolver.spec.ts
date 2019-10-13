import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TeamMembersResolver } from './team-member.resolver';

import { TeamMemberService } from '../services/team-member.service';

describe('TeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamMembersResolver]
    });
  });

  it('should be initialized',
    inject([TeamMembersResolver],
      (teamMembersResolver: TeamMembersResolver) => {
        expect(teamMembersResolver).toBeTruthy();
      })
    )
  ;

  it('expects service to fetch data with the good url and method',
    inject([TeamMembersResolver, TeamMemberService],
      (teamMembersResolver: TeamMembersResolver, teamMemberService: TeamMemberService) => {
        const spy = spyOn(teamMemberService, 'getTeamMembers');
        const router = new ActivatedRouteSnapshot();
        router.params = {teamId: 1111};

        teamMembersResolver.resolve(router);

        expect(spy).toHaveBeenCalled();
      })
    )
  ;
});
