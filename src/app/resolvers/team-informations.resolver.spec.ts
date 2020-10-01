import {
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TeamInformationsResolver } from './team-informations.resolver';

import { TeamInformationsService } from '../services/team-informations.service';

describe('TeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamInformationsResolver]
    });
  });

  it('should be initialized',
    inject([TeamInformationsResolver],
      (teamInformationsResolver: TeamInformationsResolver) => {
        expect(teamInformationsResolver).toBeTruthy();
      })
    )
  ;

  it('expects service to fetch data with the good url and method',
    inject([TeamInformationsResolver, TeamInformationsService],
      (teamInformationsResolver: TeamInformationsResolver, teamInformationsService: TeamInformationsService) => {
        const spy = spyOn(teamInformationsService, 'getTeamInformations');
        const router = new ActivatedRouteSnapshot();
        router.params = {teamId: 1111};

        teamInformationsResolver.resolve(router);

        expect(spy).toHaveBeenCalled();
      })
    )
  ;
});
